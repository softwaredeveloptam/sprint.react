import React from "react";
import _ from "lodash";
import { listObjects, getSingleObject } from "../utils/index";

export default function AllPhotos() {
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

  return (
    <>
      <div className="allPhotos">
        <h1>greens</h1>
      </div>
    </>
  );
}
