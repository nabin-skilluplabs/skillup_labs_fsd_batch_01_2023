/* eslint-disable react/prop-types */
function Profile({ person }) {
  return (
    <>
      <img
        className={person.rounded ? "rounded-full" : ""}
        src="https://i.imgur.com/QIrZWGIs.jpg"
        alt="Alan L. Hart"
      />

      <h3>
        {person.firstName} {person.lastName}
      </h3>
      <p>
        <a href={`mailto:${person.email}`}>{person.email}</a>
      </p>
    </>
  );
}

export default Profile;
