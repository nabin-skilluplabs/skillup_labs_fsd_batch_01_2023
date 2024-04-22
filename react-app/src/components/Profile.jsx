function Profile({ person }) {
  return (
    <>
      <div>
        <img className={person.rounded ? "rounded-full" : ""} src="https://i.imgur.com/MK3eW3As.jpg" alt="beautiful image" />
      </div>
      <h3>
        {person.emoji && <span>Emoji {person.emoji}</span>}
        {person.firstName} {person.lastName}
      </h3>
      <p>
        {person.email ? (
          <a href={`mailto:${person.email}`}>{person.email}</a>
        ) : (
          <span>No Email</span>
        )}
      </p>
    </>
  );
}

export default Profile;
