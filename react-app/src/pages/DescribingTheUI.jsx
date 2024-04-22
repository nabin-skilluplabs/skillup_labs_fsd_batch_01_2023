import Profile from "../components/Profile";

function DescribingTheUI() {
    const person1 = {
        firstName: "Madam",
        lastName: "Query",
        email: "madamquery@gmail.com",
        emoji: "😃",
        rounded: "true"
    };

    const person2 = {
        firstName: "Alex",
        lastName: "Lee",
        email: "",
        rounded: "false"
    };


  return (
    <>
        <h2>Describing The UI</h2>
        <Profile person={person1}/>
        <Profile person={person2}/>
        <Profile person={person1}/>
    </>
  )
}

export default DescribingTheUI;
