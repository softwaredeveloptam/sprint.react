import React from "react";
import _ from "lodash";
import { listObjects, getSingleObject, saveObject } from "../utils/index";

export default function AllPhotos(props) {
  const photoOutput = props.src.map(photo => {
    return (
      <img src={`data:image/jpg;base64, ${photo}`} className="allPhotos" />
    );
  });

  return (
    <>
      <div className="allPhotos">{photoOutput}</div>
    </>
  );
}

/*
  async function list() {
    let photoKey = [];
    const photos = await listObjects();
    const data = await getSingleObject(photos[0].Key);

    const getArr = data => {
      photoKey.push(data);
      return photoKey[0];
    };

    const arr = await getArr(data);
    return `data:image/jpg;base64,${arr}`;
  }

  list();
*/
