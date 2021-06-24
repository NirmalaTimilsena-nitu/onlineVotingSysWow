import "./App.css";
import Header from "./MyComponents/Header";
import { Body } from "./MyComponents/Body";
import { Footer } from "./MyComponents/Footer";
function App() {
  return (
    <>
      <Header title ="Online Voting System"  searchBar={false} />
      <Body />
      <Footer />
    </>
  );
}
export default App;
