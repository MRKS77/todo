import axios from "axios";

export const api = {
  apiUrl: "http://localhost:5000/api/todos",
  addNote(note) {
    return axios.post(this.apiUrl, note);
  },
  getNotes() {
    return axios.get(this.apiUrl);
  },
  updateNote(id, note) {
    return axios.post(this.apiUrl + "/" + id, note);
  },
  deleteNote(id) {
    return axios.delete(this.apiUrl + "/" + id);
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
