export const getAllPosts = async () => {
  const response = await fetch("http://localhost:7777/posts", {
    method: "GET",
  });

  const data = await response.json()

  return data;
}