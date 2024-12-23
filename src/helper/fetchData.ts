export async function fetchPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
export async function fetchPostsByID(id: number) {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/" + id
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function fetchPostsByUserId(id: number) {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?userId=" + id
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
