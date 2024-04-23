import NewsShows from "../components/NewsShow";

function News() {
  const newsList = [
    {
      banner:
        "https://www.freecodecamp.org/news/content/images/size/w2000/2024/04/Andrew-Brown-freeCodeCamp-podcast.jpeg",
      title:
        "CTO Andrew Brown Passed Dozens of Cloud Certification Exams [freeCodeCamp Podcast Episode #120]",
      authorName: "Quincy Larson",
      adddedDate: "APRIL 19, 2024",
      category: "PODCAST",
    },
    {
      banner:
        "https://www.freecodecamp.org/news/content/images/size/w600/2024/04/websockets.png",
      title: "Learn WebSockets with Socket.IO",
      authorName: "Quincy Larson",
      adddedDate: "APRIL 19, 2024",
      category: "WEBSOCKET",
    },
    {
      banner:
        "https://www.freecodecamp.org/news/content/images/size/w600/2024/04/rinck-content-studio-jF-8LUJMrdk-unsplash.jpg",
      title: "How to Set a Different Location to Save All Screenshots on macOS",
      authorName: "MD. FAHIM BIN AMIN",
      adddedDate: "APRIL 17, 2024",
      category: "MACOS",
    },
    {
      banner:
        "https://www.freecodecamp.org/news/content/images/size/w600/2024/04/Article-Cover.png",
      title:
        "How to Build a Dynamic Dropdown Component in React – React Compound Component Pattern Explained",
      authorName: "JAJA IBIFUBARA DAVID",
      adddedDate: "APRIL 17, 2024",
      category: "REACT",
    },
    {
      banner:
        "https://www.freecodecamp.org/news/content/images/size/w600/2024/04/fly-tigris-banner.png",
      title: "How to Deploy a Next.js App Using Fly.io and Tigris",
      authorName: "ANDREW BAISDEN",
      adddedDate: "APRIL 17, 2024",
      category: "NEXT.JS",
    },
  ];

  return (
    <>
      {newsList.map((newsItem, index) => (
        <NewsShows key={index} newsItem={newsItem} />
      ))}
    </>
  );
}

export default News;

// For each news create a news item which will have
// banner
// title
// author_name
// author_profile
// added_date
// category
