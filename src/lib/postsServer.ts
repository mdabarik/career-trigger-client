export async function getPostsServer() {
  const res = await fetch("http://localhost:3001/api/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
}

export async function getPostByIdServer(postId: string) {
  const res = await fetch(`http://localhost:3001/api/posts/id/${postId}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch post");
  }

  return res.json();
}
