import { useState, useEffect} from 'react';
import './App.css';
const App = () => {
  const [user, setUser] = useState([]);
useEffect(() => {
  let ignore =false;
  const load = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      console.log(res, "Response Fetched")
      if(res.ok) {
        const data = await res.json();
        console.log(data, "data")
        if (!ignore) setUser(data)
      } else {
        throw new Error(`Status ${res.status}`);
      }
    }catch(error) {
      if (!ignore) console.error("Failed to load users:", error);
    }
  }
  load();
  return () => {
    ignore = true;
  }
}, [])
  return (
    <main className="container">
      <h1>Users Details</h1>
      <section className="user-container" aria-label="User list">
        {user.map((element) => (
          <article className="user-card" key={element.id}>
            <h2>{element.name}</h2>
<p><strong>Email:</strong> {element.email}</p>
<p><strong>Username:</strong> {element.username}</p>
<p><strong>Phone:</strong> {element.phone}</p>
<p><strong>Website:</strong> {element.website}</p>
<p><strong>Company:</strong> {element.company.name}</p>
<p><strong>Address:</strong> {element.address.street}, {element.address.suite}, {element.address.city}, {element.address.zipcode}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
export default App;