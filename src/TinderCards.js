import React from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {

    
    const [peoples, setPeoples] = React.useState([
     {
        name: "elon musk",
        url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.britannica.com%2Fbiography%2FElon-Musk&psig=AOvVaw0zj28BKxYRhCVN3kI8XKdS&ust=1705677537576000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCODSipKe54MDFQAAAAAdAAAAABAD",
     },
     {
        name: "jeff bezos",
        url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.britannica.com%2Fbiography%2FElon-Musk&psig=AOvVaw0zj28BKxYRhCVN3kI8XKdS&ust=1705677537576000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCODSipKe54MDFQAAAAAdAAAAABAD",
    },
    ]);
           
    const swiped=(direction,nameToDelete)=>{
        console.log("removing:"+nameToDelete);
    };

    const outOfFrame=(name)=>{
        console.log(name+"left the screen");
    };
        
    return (
    <div className="TinderCards">
        <div className="tindercards_cardcontainer">
        {peoples.map((person)=> (
           <TinderCard
           className="swipe"
           key={person.name}
           preventSwipe={["up","down"]}
           onSwipe={(dir)=>swiped(dir,person.name)}
           onCardLeftScreen={()=>outOfFrame(person.name)}>   

            <div
               style={{backgroundImage: `url(${person.url})`}}
               className="card"
               >
                <h3>{person.name}</h3>
               </div>
           </TinderCard>
      ))}
         </div>
    </div>
  )
}

export default TinderCards