import Card from "./components/Card"
import React, {useState, useEffect} from "react";
import axios from "axios";
import './App.css';


const url = 'https://randomuser.me/api/';

function App() {

  const [loading, setLoading] = useState(true);
const [user, setUser] = useState([]);


const users = async () => {
  try {
    const { data} = await axios.get(url);
    setUser(data.results[0]);
    setLoading(false)
  }catch (error) {
    alert(error);
  }
};

useEffect(() => {
  users();
}, []);

if(loading){
  return <h2>Loading.. </h2>
}
  return (
    <>

    <div className="App">
      <Card user={user}/>
    </div>
      <button className="button" onClick={() => users()}>Random User</button>
    </>
  );
}

export default App;
