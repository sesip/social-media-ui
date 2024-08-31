import { Header } from "../components/header";
import { MainFeed } from "../components/mainFeed";
import { Sidebar } from "../components/sidebar";

export const HomePage = () => {
  return (
    <div>
      <div className="min-h-screen flex flex-1">
        <Sidebar></Sidebar>
        <MainFeed></MainFeed>
      </div>
    </div>
  );
};
