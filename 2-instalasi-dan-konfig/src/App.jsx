/* eslint-disable react/prop-types */
import { useState } from "react";
import Header from "./components/Header";

function MyApp() {
  return <h1>Hello, world!</h1>;
}

function CobaComponent() {
  return <h2>Hello H2, </h2>;
}

function CobaComponent2() {
  return <p>ini P</p>;
}

function App() {
  const students = ["Tingki Wingki", "Dipsi", "Lala", "PO"];
  const [like, setLike] = useState(0);

  function handleClick() {
    setLike(like + 1);
  }

  function handleDisClick() {
    setLike(like - 1);
  }

  return (
    <>
      <div>
        <MyApp />
        <CobaComponent />
        <CobaComponent2 />
        <Header />
        <Header nama="Ini adalah param nama" />
      </div>

      <ul>
        {students.map((student) => (
          <li key={student}>{student}</li>
        ))}
      </ul>

      <button onClick={handleClick}> Like ({like})</button>
      <button onClick={handleDisClick}> Dislike ({like})</button>
    </>
  );
}

export default App;
