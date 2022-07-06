import AppPage from "./views/Loading";
// import "bootstrap/dist/css/bootstrap.css";
import "./styles/main.css";
import { BrowserRouter as Switch, Routes, Route } from "react-router-dom";
import Loading from "./views/Loading";
import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";
import Links from "./views/Links";
import Assets from "./views/Assets";
import Deposit from "./views/Deposit";
import Detail from "./views/Detail";
import Liquidity from "./views/Liquidity";
import Market from "./views/Market";
import Setting from "./views/Setting";

function App() {
  return (
    <>
      <Switch>
        <Routes>
          <Route exact path="/" element={<Links />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/assets" element={<Assets />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/liquidity" element={<Liquidity />} />
          <Route path="/market" element={<Market />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Switch>
    </>
  );
}

export default App;
