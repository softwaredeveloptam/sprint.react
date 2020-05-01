import React from "react";
import _ from "lodash";
import "../styles/upload.css";
import { saveObject } from "../utils/index";

export default function Upload() {
  return (
    <div className="file-upload">
      <button className="button">WAR. WAR IS HELL.</button>
    </div>
  );
}

/*

  <input
          ref={file}
          type="file"
          className={"input"}
          accept="image/gif, image/jpeg, image/png"
          onChange={event => {
            saveObject(event.target.files[0]);
          }}
        ></input>

  send a file to saveObject();
  it returns a promise
  noun: string

    1.
    material consisting of threads of cotton, hemp, or other material twisted together to form a thin length.
  do I need to resolve this promise?
  
  how do i send a file to saveObject()? ?? 
  
  1st - hit the upload button
  2nd - someEvent ???? 
  3rd - 
  
*/
