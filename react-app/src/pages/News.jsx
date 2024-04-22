import NewsItem from "../components/NewsItem";

function News() {
  const newsArr = [
    {
      banner: "https://www.freecodecamp.org/news/content/images/size/w600/2024/04/Andrew-Brown-freeCodeCamp-podcast.jpeg",
      title: "#PODCAST",
      authorName: "QUINCY LARSON",
      authorProfile: "https://www.freecodecamp.org/news/content/images/size/w30/2021/03/Quincy-Larson-photo.jpg",
      addedDate: "3 DAYS AGO",
      category: "CTO Andrew Brown Passed Dozens of Cloud Certification Exams [freeCodeCamp Podcast Episode #120]"

  },

  {
    banner: "https://www.freecodecamp.org/news/content/images/size/w600/2024/04/websockets.png",
    title: "#WEBSOCKET",
    authorName: "BEAU CARNES",
    authorProfile: "https://www.freecodecamp.org/news/content/images/size/w30/2021/05/beau-carnes-gravatar.jpeg",
    addedDate: "2 DAYS AGO",
    category: "Learn WebSockets with Socket.IO"
  },

  {
    banner: "https://www.freecodecamp.org/news/content/images/size/w600/2024/04/rinck-content-studio-jF-8LUJMrdk-unsplash.jpg",
    title: "#MACOS",
    authorName: "MD. FAHIM BIN AMIN",
    authorProfile: "https://www.freecodecamp.org/news/content/images/size/w30/2024/02/Md.-Fahim-Bin-Amin.jpg",
    addedDate: "2 DAYS AGO",
    category: "Quincy's 5 freeCodeCamp Resources Worth Your Time Email, You Need to Re-subscribe Real Quick"
  },

  {
    banner: "https://www.freecodecamp.org/news/content/images/size/w600/2024/04/iewek-gnos-hhUx08PuYpc-unsplash.jpg",
    title: "#NEXT.JS",
    authorName: "ANDREW BAISDEN",
    authorProfile: "https://www.freecodecamp.org/news/content/images/size/w30/2024/03/profile_picture_2023_Q2_V2.png",
    addedDate: "5 DAYS AGO",
    category: "How to Deploy a Next.js App Using Fly.io and Tigris"
  },

  {
    banner: "https://www.freecodecamp.org/news/content/images/size/w600/2024/04/Article-Cover.png",
    title: "#REACT",
    authorName: "JAJA IBIFUBARA DAVID",
    authorProfile: "https://www.freecodecamp.org/news/content/images/size/w30/2023/03/lttsvi.jpg",
    addedDate: "2 DAYS AGO",
    category: "How to Build a Dynamic Dropdown Component in React, React Compound Component Pattern Explained"
  }
]

  
  return (
    <div>
      {
       newsArr.map((newsItem, index) => (<NewsItem key={index} newsItem={newsItem} />))
      }
    </div>
  )
}

export default News;

