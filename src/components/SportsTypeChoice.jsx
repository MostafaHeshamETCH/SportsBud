import React, { PureComponent } from "react";
import NavBarOneBtn from "./NavBarOneBtn";

function SportsTypeChoice() {
const state =[
      {id: 1, title: 'TENNIS', nocourts:'10' ,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYpGs6WHzwI-PDxpL9VRsDEb0YWcq8mSPnI9C2rpAPovNiDz04tyVkh5WzFq4IMpqhCN4&usqp=CAU'},
      {id: 2, title: 'FOOTBALL', nocourts:'24' ,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYpGs6WHzwI-PDxpL9VRsDEb0YWcq8mSPnI9C2rpAPovNiDz04tyVkh5WzFq4IMpqhCN4&usqp=CAU'},
      {id: 3, title: 'PADDLE', nocourts:'24' ,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYpGs6WHzwI-PDxpL9VRsDEb0YWcq8mSPnI9C2rpAPovNiDz04tyVkh5WzFq4IMpqhCN4&usqp=CAU'},
      {id: 4, title: 'SQUASH', nocourts:'24' ,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYpGs6WHzwI-PDxpL9VRsDEb0YWcq8mSPnI9C2rpAPovNiDz04tyVkh5WzFq4IMpqhCN4&usqp=CAU'},
      {id: 5, title: 'VOLLEY', nocourts:'24' ,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYpGs6WHzwI-PDxpL9VRsDEb0YWcq8mSPnI9C2rpAPovNiDz04tyVkh5WzFq4IMpqhCN4&usqp=CAU'},
      {id: 6, title: 'HANDBALL', nocourts:'24' ,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYpGs6WHzwI-PDxpL9VRsDEb0YWcq8mSPnI9C2rpAPovNiDz04tyVkh5WzFq4IMpqhCN4&usqp=CAU'},
    ]
  return(
  <div className="main">
     <div>
        <NavBarOneBtn btnTxt="BOOKINGS" />
      </div>
  <h2 className="choose-title">Please choose a type</h2>
    <div className="wrapper">
      {state.map((record)=>{
        const {title,nocourts,img}=record
        return(
          <div className="flex-box">
          <Card record={record}/>
          </div>
        )
      })}
    </div>
  </div>
  );
}

function Card(props){
const {img,title,nocourts}=props.record
const handleClick=(e)=>{

console.log("hi")
e.preventDefault()
}
  return(
  <div className="card" onClick={handleClick}>
        <img className="imgg" src={img}/>
        <div className="title"><h2 className="card__title">{title}</h2></div>
        <div className="courts"><h2 className="card__courtno">{nocourts}</h2></div>
      </div>
 
  )}

export default SportsTypeChoice;
