import News from "../pages/News"

function NewsItem({newsItem}) {
  return (
    <div>
      <img src={newsItem.banner}  />
      <span>{newsItem.title}</span>
      <h2>{newsItem.category}</h2>
      <img src={newsItem. authorProfile}  />
      <span>{newsItem.addedDate}</span>
      <h4>{newsItem.authorName}</h4>

    </div>
  )
}

export default NewsItem

