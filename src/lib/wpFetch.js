export async function wpFetch(query, variables = {}, options = {}) {
  const endpoint = process.env.WP_GRAPHQL_ENDPOINT;

  if (!endpoint) {
    throw new Error("WP_GRAPHQL_ENDPOINT is not configured");
  }

  const { revalidate = 300, timeout = 10000, cache = "force-cache" } = options;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ query, variables }),
      cache,
      next: { revalidate },
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(`WPGraphQL request failed with status ${response.status}`);
    }

    const payload = await response.json();

    if (payload.errors) {
      throw new Error(payload.errors[0]?.message || "WPGraphQL error");
    }

    return payload.data;
  } catch (error) {
    if (error?.name === "AbortError") {
      throw new Error(`WPGraphQL request timed out after ${timeout}ms`);
    }

    throw error;
  } finally {
    clearTimeout(timeoutId);
  }
}
