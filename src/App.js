import "./App.css";
import Contacts from './contacts.json'
import { useState } from 'react';


function App() {
  /* let contacts =Contacts.slice(0, 5) */
  const [contacts, setContacts] = useState(Contacts.slice(0, 5));

  const addRandomContacts = () => {
    const randomContact = Math.floor(Math.random() * Contacts.length);
    const newContact = Contacts[randomContact];
    setContacts([newContact, ...contacts]);
  }
  const sortByName = () => {
    const contactsNameFilter = [...contacts].sort((a, b) => a.name.localeCompare(b.name));
    setContacts(contactsNameFilter)
  }

  const sortByPopularity = () => {
    const contactsPopularityCopy = [...contacts].sort((a, b) => b.popularity - a.popularity);
    setContacts(contactsPopularityCopy)
  }

  const deleteItem = (id) => {

    setContacts(contacts.filter(contact => contact.id !== id))
  }

  return (
    <div className="App">
      <button onClick={addRandomContacts}>Add Random Actor</button>
      <button onClick={sortByName}>Sort by name</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
          <th>Actions</th>
        </tr>

        {contacts.map(({ pictureUrl, name, popularity, id, wonOscar, wonEmmy }, index) => (
          <tr key={`contact-${index}`}>
            <td><img src={pictureUrl} alt="picture" /></td>
            <td>{name}</td>
            <td>{popularity}</td>
            {wonOscar ? <td>🏆</td> : <td></td>}
            {wonEmmy ? <td>🏆</td> : <td></td>}
            <td><button onClick={() => deleteItem(id)}>Delete</button></td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
