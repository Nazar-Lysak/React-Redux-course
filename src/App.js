import { Header } from "./content/Header.jsx";
import{ Profile } from "./content/Profile.jsx";
import SideBar from "./content/SideBar.jsx";
import "./App.css";

const App = () => {
  return (
    <div className="main-wrapper">
      <Header />
      <SideBar />
      <Profile />
    </div>
  );
};

export default App;
