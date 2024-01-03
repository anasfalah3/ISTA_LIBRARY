import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Browse from "./components/Browse";
import Profile from "./components/Profile";
import Details from "./components/Details";
import MyBooksDetails from "./components/MyBooksDetails";
import CreateBook from "./components/CreateBook";
import UpdateBook from "./components/update/updateBook";
import UpdateUser from "./components/update/updateUser";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Browse" element={<Browse />}></Route>
          <Route path="/Profile" element={<Profile />}></Route>
          <Route path="/Details/:isbn" element={<Details />}></Route>
          <Route path="/MyBooksDetails/:idBook" element={<MyBooksDetails />}></Route>
          <Route path="/CreateBook" element={<CreateBook />}></Route>
          <Route path="/Update_Book/:idBook" element={<UpdateBook />}></Route>
          <Route path="/Update_User/:id" element={<UpdateUser />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
