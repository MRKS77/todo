export const api = {
  apiUrl: "http://localhost:5000/api/todos",
  async addNote(note) {
    return await (await fetch(this.apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
    })).json();
  },
  async getNotes() {
    return await (await fetch(this.apiUrl)).json();
  },
  async updateNote(id, note) {
    return await (await fetch(this.apiUrl + "/" + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
    })).json();
  },
  async deleteNote(id) {
    return await (await fetch(this.apiUrl + "/" + id, {
      method: 'DELETE',})).json();
  },
};

// export const postNotes = async () => {
//   const response = await fetch('/', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       title: 'fdfdfdfdfd'
//     })
//   });

//   if (!response.ok) {
//     throw new Error(`Address error ${apiUrl}. Status: ${response.status}`);
//   }
//   return await response.json();
// };

// export const getNotes = async () => {
//   const response = await fetch('/', {
//     method: 'GET'
//   });

//   if (!response.ok) {
//     throw new Error(`Address error ${apiUrl}. Status: ${response.status}`);
//   }
//   return await response.json();
// };
