import "./styles.css";
import API from "./test.js";
import { Routes, Route, useNavigate } from "react-router-dom";
import Create from "./Create";
import Update from "./update";
import { useEffect, useState } from "react";
import Add from "./Todo";
import Exam from "./Exam";

// export default function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }

const App = () => {
  return (
    <>
      <Exam />
    </>
  );
};

export default App;

// const App = () => {
//   const [Empdata, setEmpdata] = useState([]);
//   const navigate = useNavigate();
//   useEffect(() => {
//     const { data } = require("./data");
//     setEmpdata(data);
//   }, []);
//   const User = (data) => {
//     Empdata.push(data);
//     setEmpdata(Empdata);
//   };
//   return (
//     <div className="APP">
//       <Routes>
//         <Route exact path="/" element={<API Empdata={Empdata} />} />
//         <Route
//           exact
//           path="/create"
//           element={<Create User={User} Empdata={Empdata} />}
//         />
//         {/* <Route
//           exact
//           path="/update"
//           element={<Create User={User} Empdata={Empdata} />}
//         /> */}
//       </Routes>
//     </div>
//   );
// };

// export default App;
