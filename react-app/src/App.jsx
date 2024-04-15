import Header from "./components/Header";

export default function App() {
    const apps = [
        {
            title: "Counter",
            path: "/counter"
        }
    ]
return(
    <div>
    <Header appName="React Apps" />
    {
        apps.map()
    }
    </div>
);
}