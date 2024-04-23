function NewsItem({ newsItem }) {
  return (
    <div className="flex px-10">
      <div className="flex mx-28 my-6 gap-8 flex-wrap">
      <div>
        <img className="w-64" src={newsItem.banner} />
      </div>
      <div className="flex flex-col basis-1/3">
        <div className="flex flex-col">
          <div>
            <h3>{newsItem.title}</h3>
          </div>
          <div>
            <h2>{newsItem.category}</h2>
          </div>
        </div>
        <div className="flex justify-between gap-9">
          <div className="flex gap-3">
            <img className="w-5" src={newsItem.authorProfile} />
            <h4>{newsItem.authorName}</h4>
          </div>
          <div>
            <h5>{newsItem.addedDate}</h5>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default NewsItem;
