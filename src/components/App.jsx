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
  // if it's singlePhotos then setCurrentView to allPhotos
  // if it's allphotos, then setCurrentView to singlePhotos
  const [currentView, setCurrentView] = useState(AllPhotos);

  function UpdatedState() {
    // can use setCurrentView to just have a 1 way movement
    return <>{currentView}</>;
  }

  // let photoState = AllPhotos;

  let photoBoolean = true;

  const photoStateHandler = () => {
    console.log("HIIIIIIIII");
    console.log(currentView);

    if (photoBoolean === true) {
      console.log("currentView is equal to SinglePhoto");
      setCurrentView(SinglePhoto);
      photoBoolean = false;
    } else {
      console.log("currentView is equal to AllPhotos");
      setCurrentView(AllPhotos);
      photoBoolean = true;
    }
  };

  // currentview -toggles btw one and all photos
  // photos - allphotos don't update we done
  // selected photos - change w setcurrent view
  // func that grabs all objs and manipulates to get data
  // sets photos as array of data strings(img string)
  // useEffect to call that array, [] fires once
  // setsinglephoto and setview - jeff's toggle
  // heck jeff heckkkkkkkk

  return (
    <div className="app">
      {/* don't change, working! */}
      {/*ok */}
      <Navbar changeState={photoStateHandler} />
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
