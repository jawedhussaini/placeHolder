export async function getSraechedTitle(query: string) {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    const newData = data.filter((arr: any) => arr.title.includes(query));

    return newData;
  } catch (error) {
    throw error;
  }
}
