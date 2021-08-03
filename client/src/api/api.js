const apiUrl = "http://localhost:5000/api/todos";

const test = "https://jsonplaceholder.typicode.com/todos/1";

export const getNotes = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Address error ${url}. Status: ${response.status}`);
  }
  return await response.json();
};

getNotes(test).then(data => console.log(data));
