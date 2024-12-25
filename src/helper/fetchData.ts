export async function fetchPosts(page: number = 1) {
  const limit = 9;
  const baseURL = "https://jsonplaceholder.typicode.com/posts";
  const start = (page - 1) * limit;
  const end = start + limit;

  try {
    const response = await fetch(`${baseURL}`);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch posts: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    let totalPages = data.length / limit;
    if (data.length % limit !== 0) {
      totalPages = totalPages + 1;
    }
    // Simulate pagination by slicing the data (since JSONPlaceholder doesn't support real pagination)
    const paginatedData = data.slice(start, end);
    return {
      posts: paginatedData,
      total: totalPages,
    };
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
