export const buildQuery = (params?: Record<string, any>): string => {
  if (!params) return "";

  const queryParts: string[] = [];

  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== null) {
      queryParts.push(
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
      );
    }
  }

  return queryParts.length > 0 ? "?" + queryParts.join("&") : "";
};
