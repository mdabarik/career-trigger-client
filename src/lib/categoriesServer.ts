export async function getCategoriesServer() {
  const res = await fetch("http://localhost:3001/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
}
