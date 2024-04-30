import Header from "./components/Header";

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
            title: "Sock Management",
            path: "/stock"
        },
        {
            title: "Describing The UI",
            path: "/describing-the-ui"
        },
        {
            title: "Enrollment Form",
            path: "/enrollment-form"
        }
    ];
    return(
        <div className="text-center">
            <div className="flex justify-center my-4"><img src="/images/vite.svg" alt="" /></div>
            <Header appName="React Apps" />
            {
                apps.map((app, index) => (
                    <a className="text-amber-500 block py-2" key={index} href={app.path}>{app.title}</a> 
                ))
            }
        </div>
    );
}