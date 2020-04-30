import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";
import "../styles/styles.css";
import Navbar from "./Navbar";
import AllPhotos from "./AllPhotos";
import SinglePhoto from "./SinglePhoto";
import { listObjects, getSingleObject, saveObject } from "../utils/index";

// const [currentView, setCurrentView] = useState("AllPhotos");
// const [photos, setPhotos] = useState("");
// const [selectedPhoto, setSelectedPhoto] = useState();

// function Testing({image}){
//   return (
//     <img src={image}/>
//   );
// }

// if currentview is allphotos, then insert allphotos component
// if singlephoto or anything else then just show singlephoto component mayhaps

export default function App() {
  // if it's singlePhotos then setCurrentView to allPhotos
  // if it's allphotos, then setCurrentView to singlePhotos
  const [currentView, setCurrentView] = useState("AllPhotos");
  const [photos, setPhotos] = useState([]);

  function UpdatedState() {
    // can use setCurrentView to just have a 1 way movement
    return <>{currentView}</>;
  }

  // let photoState = AllPhotos;

  let photoBoolean = true;

  const photoStateHandler = () => {
    // console.log("HIIIIIIIII");
    // console.log(currentView);

    if (photoBoolean === true) {
      // console.log("currentView is equal to SinglePhoto");
      setCurrentView(AllPhotos);
      photoBoolean = false;
    } else {
      // console.log("currentView is equal to AllPhotos");
      setCurrentView(SinglePhoto);
      photoBoolean = true;
    }
  };

  async function photoFetcher() {
    const allPhotoObjects = await listObjects();

    const photoKeys = await Promise.all(allPhotoObjects.map(e => e.Key));
    const baseStringsArray = await Promise.all(
      photoKeys.map(photo => getSingleObject(photo))
    );
    setPhotos(baseStringsArray);
    return baseStringsArray;
  }
  useEffect(() => {
    photoFetcher();
  }, []);

  // currentview -toggles btw one and all photos
  // photos - allphotos don't update we done
  // selected photos - change w setcurrent view
  // func that grabs all objs and manipulates to get data
  // sets photos as array of data strings(img string)
  // useEffect to call that array, [] fires once
  // setsinglephoto and setview - jeff's toggle
  // heck jeff heckkkkkkkk

  // if (currentView === "AllPhotos"){
  return (
    <div className="app">
      {/* don't change, working! */}
      {/*ok */}
      <Navbar changeState={photoStateHandler} />
      <AllPhotos
        src={photos}
        // onclick={someFunction}
      />
    </div>
  );

  /*

   const names = ['James', 'Paul', 'John', 'George', 'Ringo'];

    function App() {
      return (
        <div>
          {names.map(name => (
            <li>
              {name}
            </li>
          ))}
        </div>
      );
    }

    const useImage = ({ src }) => {
      const [loaded, setLoaded] = useState(false);
  
      useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => setLoaded(true);
      }, [src]);
  
      return {
        loaded,
      };
    };

  import { useState, useEffect} from "react";

  const useImage = ({ src }) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
      const img = new Image();
      img.src = src;
      img.onload = () => setLoaded(true);
    }, [src]);

    return {
      loaded,
    };
  };

  // export default useImage


    })
  }

  */

  /*
  onclick run function that changes the variable ??

  */

  // }
  // return (
  //   <div className="app">
  //     {/* don't change, working! */}
  //     {/*ok */}
  //     <Navbar changeState={photoStateHandler} />
  //     <UpdatedState />
  //   </div>
  // );
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
