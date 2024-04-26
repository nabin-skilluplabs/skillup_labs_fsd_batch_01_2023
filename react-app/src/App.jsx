import Header from "./components/Header"

export default function App() {
    const apps = [
        {
            title: "Home",
            path: "/"
        },

        {
            title: "Counter",
            path: "/counter"
        },

        {
            title: "Stock Management",
            path: "/stock"
        },

        {
            title: "News",
            path: "/news"
        },

        {
            title: "Enrollment Form",
            path: "/enrollment-form"
        },

        {
            title: "To Do List",
            path: "/to-do-app"
        }

    ];
    return(
        <div className="text-center">
            <Header appName="React App" />
            {
                apps.map((app, index) => (
                    <a className="text-amber-500 block py-3" key={index} href={app.path}>{app.title}</a>
                ))
            }
        </div>
    )
}