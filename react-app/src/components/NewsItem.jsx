function NewsItem({newsItem}) {
    return (<div>
        <img src={newsItem.banner} alt={newsItem.title} />
        <h4>{newsItem.category}</h4>
        <h2>{newsItem.title}</h2>
        <img src={newsItem.author_profile} alt={newsItem.author_name} />
        <h3>{newsItem.author_name}</h3>
        <span>{newsItem.added_date}</span>
    </div>)
}

export default NewsItem;