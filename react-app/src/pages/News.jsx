import NewsItem from "../components/NewsItem";

function News () {
    const newsArr = [
        {
            banner: "https://www.freecodecamp.org/news/content/images/size/w300/2024/04/Andrew-Brown-freeCodeCamp-podcast.jpeg",
            title: "CTO Andrew Brown Passed Dozens of Cloud Certification Exams [freeCodeCamp Podcast Episode #120]",
            author_name: "QUINCY LARSON",
            author_profile: "https://www.freecodecamp.org/news/content/images/size/w30/2021/03/Quincy-Larson-photo.jpg",
            added_date: "3 DAYS AGO",
            category: "#PODCAST"
        }
    ];
    return(
        <>
        {
            newsArr.map((newsItem, index) => (<NewsItem key={index} newsItem={newsItem} />))
        }
        </>
    );
}

export default News;