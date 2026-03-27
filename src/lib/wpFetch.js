export async function wpFetch(query, variables = {}, label = "WP_FETCH") {
  const start = Date.now();

  const r = await fetch(process.env.WP_GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 300 },
  });

  const jsonStart = Date.now();
  const j = await r.json();
  const end = Date.now();

  console.log(label, {
    msTotal: end - start,
    msUntilResponse: jsonStart - start,
    msJsonParse: end - jsonStart,
    variables,
  });

  if (j.errors) throw new Error(j.errors[0]?.message || "WPGraphQL error");
  return j.data;
}
