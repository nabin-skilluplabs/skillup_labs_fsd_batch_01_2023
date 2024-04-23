import Profile from "../components/Profile";

function DescribingTheUI() {
  const person1 = {
    firstName: "Madam",
    lastName: "Qury",
    email: "madam.qury@gmail.com",
    rounded: false,
  };
  const person2 = {
    firstName: "Madam",
    lastName: "Qury",
    email: "madam.qury@gmail.com",
    rounded: true,
  };

  return (
    <div>
      <h1>Describing the UI</h1>
      <Profile person={person1} />
      <Profile person={person2} />
    </div>
  );
}

export default DescribingTheUI;
