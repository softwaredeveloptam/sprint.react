TO DO:

1. grid of photos, given as an array base64 strings given as a prop

2)make sure they are decently sized and dont take up the scree

3)the array of string should be delivered as a prop by the PARENT APP component

4. each image should be clickable, executing a function that'll send the clicked images index back up to the app component (what?)

Then:
-its render of the AllPhotos component contains a callback that wills et the selectedPhoto property of its state to equal the base64 string of the selected photo from the grid

-AT THE SAME TIME it should switch the rendering of the App component so that it shows the SinglePhoto component instead of allphotos

// currentview -toggles btw one and all photos
// photos - allphotos don't update we done
// selected photos - change w setcurrent view
// func that grabs all objs and manipulates to get data
// sets photos as array of data strings(img string)
// useEffect to call that array, [] fires once
// setsinglephoto and setview - jeff's toggle
// heck jeff heckkkkkkkk
