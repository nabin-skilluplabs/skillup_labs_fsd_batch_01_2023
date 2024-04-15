import Header from "./components/Header";

export default function App() {
  const apps = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Counter",
      path: "/counter",
    },
  ];
  return (
    <div className="text-center">
      <Header appName="React Apps" />
      {apps.map((app, index) => (
        <a className="text-amber-600 block py-2" key={index} href={app.path}>
          {app.title}
        </a>
      ))}
    </div>
  );
}
