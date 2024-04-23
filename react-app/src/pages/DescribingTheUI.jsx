/* eslint-disable no-unused-vars */
import Profile from "../components/Profile"

function  DescribingTheUI(){
    const person1 = {
        firstName: "Madam",
        lastName: "Qury",
        email: "madam@gmail.com",
        emoji: "😃",
        rounded:false
    }
    const person2 = {
        firstName: "Madam",
        lastName: "Qury",
        email: "madam@gmail.com",
        rounded: true
    }
    const person3 = {
        firstName: "Alex",
        lastName: "Lee",
        email: ""
    }


    return(
        <div>
            <h2>Describing the UI</h2>
         <Profile person = {person1} />,
         <Profile person = {person2} />,
        
        
        </div>
      
    )
}
export default DescribingTheUI