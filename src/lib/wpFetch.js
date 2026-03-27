export async function wpFetch(query, variables = {}, label = "WP_FETCH") {
  console.time(label);

  const r = await fetch(process.env.WP_GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 300 },
  });

  const j = await r.json();

  console.timeEnd(label);
  console.log(label, variables);

  if (j.errors) throw new Error(j.errors[0]?.message || "WPGraphQL error");

  return j.data;
}
