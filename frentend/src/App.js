
import Authenticate from "./components/new/authenticate";
import Chatbox from "./components/chatbox";
import Inbox from "./components/inbox";
import SetProfile from "./components/new/setProfile"
import {
  BrowserRouter,
    // createBrowserRouter,
    // RouterProvider,
    Routes,
    Route,
    Navigate
  } from "react-router-dom";
 
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/logout" element={<><p>logout</p></>}></Route>
        <Route path="/" element={localStorage.getItem("user")?(<Navigate to="/chatbox"/>):(<Navigate to="/authenticate"/>)}></Route>
        <Route path="/authenticate" element={<Authenticate></Authenticate>}></Route>
        <Route path="/chatbox" element={<><div  className="container"><Inbox/><Chatbox/></div></>}></Route>
        <Route path="/setprofile" element={<><SetProfile/></>}></Route>

        <Route path="*" element={<><p>page not found</p></>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
