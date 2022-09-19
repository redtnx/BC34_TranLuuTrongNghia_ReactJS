import "./App.css";
import BaiTapLayOut from "./component/demo_layout/BaiTapLayOut";
import DemoComponent from "./component/demobuoimot/DemoComponent";
import DemoState from "./component/demo_state/DemoState";
import CarBasic from "./component/bt_carbasic/CarBasic";
import Movie from "./component/bt_movie/Movie";
import DemoProps from "./component/demo_props/DemoProps";
import ChildProps from "./component/demo_props/ChildProps";
import TrangChuSP from "./component/bt_phone/TrangChuSP";

function App() {
  return (
    <div className="App">
      {/* <DemoComponent /> */}
      {/* <BaiTapLayOut /> */}

      {/* {<DemoState />} */}

      {/* {<CarBasic />} */}
      {/* {<Movie />} */}
      {/* <DemoProps /> */}
      <TrangChuSP />
    </div>
  );
}

export default App;
