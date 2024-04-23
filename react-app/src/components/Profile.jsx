function Profile({person}) {
    return (
        <>
            <img className={person.rounded ? "rounded-full" : ""} src="https://i.imgur.com/MK3eW3As.jpg" alt="" />
            <h3>{ person.emoji && (<span>Emoji {person.emoji}</span>) } {person.firstName} {person.lastName}</h3>
            <p>
                {
                    person.email ? 
                    (
                        <a href={`mailto:${person.email}`}>{person.email}</a>
                    ) :
                    (<span>No email!</span>)
                }
                </p>

        </>
    );
}

export default Profile;