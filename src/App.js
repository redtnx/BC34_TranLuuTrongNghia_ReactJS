import "./App.css";
import BaiTapLayOut from "./component/demo_layout/BaiTapLayOut";
import DemoComponent from "./component/demobuoimot/DemoComponent";
import DemoState from "./component/demo_state/DemoState";
import CarBasic from "./component/bt_carbasic/CarBasic";
import Movie from "./component/bt_movie/Movie";

function App() {
  return (
    <div className="App">
      {/* <DemoComponent /> */}
      {/* <BaiTapLayOut /> */}

      {/* {<DemoState />} */}

      {/* {<CarBasic />} */}
      {<Movie />}
    </div>
  );
}

export default App;
