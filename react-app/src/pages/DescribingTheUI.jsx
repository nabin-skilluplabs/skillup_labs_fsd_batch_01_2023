import Profile from "../components/Profile";

function DescribingTheUI() {
  const person1 = {
      firstName: "Madam",
      lastName: "Qury",
      email: "madam.query@gmail.com",
      emoji: "😃",
      rounded: false
  };
  const person2 = {
    firstName: "Alex",
    lastName: "Lee",
    email: "",
    rounded: true
}
    return (
        <>
            <h2>Describing the UI</h2>
            <Profile person={person1} />
            <Profile  person={person2}/>
        </>
    );
}

export default DescribingTheUI;