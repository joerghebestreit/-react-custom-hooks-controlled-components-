import "./App.css";
import {useState} from'react'

function App() {
  // Add states and eventHandlers here

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [check, setCheck] = useState(false);
  
  function handleSubmit(event) {
    event.preventDefault();
    console.log("submitted");
    console.log(event.target.firstName.value);
    console.log(event.target.lastName.value);
    console.log(event.target.age.value);
    console.log(event.target.email.value);
    console.log(event.target.newsletter.checked);
  }

function handleNameChange(event){
  setName(event.target.value);
  console.log(event.target.value);
}


function handleSurnameChange(event){
  setSurname(event.target.value);
  console.log(event.target.value);
}

function handleAgeChange(event){
  setAge(event.target.value);
  console.log(event.target.value);
}

function handleEmailChange(event){
  setEmail(event.target.value);
  console.log(event.target.value);
}

function handleCheckboxChange(event){
  setCheck(event.target.checked);
  console.log(event.target.checked);
}



  return (
    <div className="App">
      <h1>More USERS!</h1>
      <h2>Enter user credentials below:</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">Name:</label>
        <input type="text" name="firstName" onChange={handleNameChange}/>
        <label htmlFor="lastName">Surname:</label>
        <input type="text" name="lastName" onChange={handleSurnameChange}/>
        <label htmlFor="age">Age:</label>
        <input type="number" name="age" onChange={handleAgeChange}/>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" onChange={handleEmailChange}/>
        <div className="newsletter">
          <input type="checkbox" name="newsletter" onChange={handleCheckboxChange}/>
          <label htmlFor="newsletter">
            Yes, I would like many more emails!
          </label>
          <button className="submitButton" type="submit">submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
