import React, { useState } from "react";
// import ReactDOM from "react-dom";
import "../styles/styles.css";
import Navbar from "./Navbar";
import AllPhotos from "./AllPhotos";
import SinglePhoto from "./SinglePhoto";

// const [currentView, setCurrentView] = useState("AllPhotos");
// const [photos, setPhotos] = useState("");
// const [selectedPhoto, setSelectedPhoto] = useState();

// function Testing({image}){
//   return (
//     <img src={image}/>
//   );
// }

//if currentview is allphotos, then insert allphotos component
//if singlephoto or anything else then just show singlephoto component mayhaps

export default function App() {
  let photoState = AllPhotos;

  const photoStateHandler = () => {
    if (photoState === AllPhotos) {
      photoState = SinglePhoto;
    } else {
      photoState = AllPhotos;
    }
  };

  function UpdatedState() {
    const [currentView, setCurrentView] = useState(photoState);
    return <>{currentView}</>;
  }

  return (
    <div className="app">
      <Navbar onClick="yourclickhandlerhere" />
      <UpdatedState />
    </div>
  );
}

/* <Testing image="https://pbs.twimg.com/profile_images/666431768661065728/Pp8deuJS_400x400.jpg"/> */
/*

  function Greetings(props) {
    const [name, setName] = useState("nao");

    function updateName(name) {
      setName(name);
    }

    return (
      <h1> Hello, {name}!{/h1}
      <NameInput updateName = {updateName} />
    )
  }

  function NameInput({ updateName }) {
    return (
      <input
        onChange={e => {
          updateName(e.target.value);
        }}
        type="text"
      ></input>
    );
  }

*/
// ReactDOM.render(<App />, document.body);
