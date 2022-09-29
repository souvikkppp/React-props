import React from "react";
import ReactDOM from "react-dom";

function Card(props){//our custom attributes
  return (
    <div>
      <h2>{props.name}</h2> ///our custom attributes name
    <img
      src={props.src} ///our custom attributes src
      alt="avatar_img"
    />
    <p>{props.tel}</p> ///our custom attributes tel
    <p>{props.web}</p> ///our custom attributes web
    </div>
  )
}

ReactDOM.render(
  <div>
   <h1>My Contacts</h1> ///our custom attributes
   <Card name="Beyonce" web="b@beyonce.com" tel="+123 456 789" src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"/>
   <Card name="Jack Bauer" web="jack@nowhere.com" tel="+987 654 321" src="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"/>
   <Card name="Chuck Norris" web="gmail@chucknorris.com" tel="+918 372 574" src="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png" />
  </div>,
  document.getElementById("root")
);
