/* eslint-disable react/prop-types */
function NewsShows({ newsItem }) {
  return (
    <div className="max-w-screen-md">
      <img className="" src={newsItem.banner} alt={newsItem.title} />
      <h4>{newsItem.category}</h4>
      <h2>{newsItem.title}</h2>
      <h3>{newsItem.authorName}</h3>
      <p>{newsItem.addedDate}</p>
    </div>
  );
}

export default NewsShows;
