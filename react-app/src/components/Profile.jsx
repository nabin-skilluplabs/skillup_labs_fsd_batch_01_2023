/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
function Profile({person}){

    return(
        <>
        
          <img className={person.rounded ? "rounded-full" : ""} src="https://i.imgur.com/MK3eW3As.jpg" alt="" />

          <h3>{person.emoji && (<span>emoji</span>)} {person.lastName} </h3>
         
        </>
    
      
        

        
    )
}
export default Profile;