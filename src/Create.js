import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = ({ User, Empdata }) => {
  const navigate = useNavigate();
  const [EmpName, setEmpName] = useState("");
  const [EmpRole, setEmpRole] = useState("");
  const [EmpDOJ, setEmpDOJ] = useState("");
  const [message, setMessage] = useState("");

  const onLogin = () => {
    if (EmpName && EmpRole && EmpDOJ) {
      const data = {
        employeeName: EmpName,
        empId: Empdata.length + 1,
        empRole: EmpRole,
        doj: EmpDOJ
      };
      User(data);
      navigate("/");
    } else {
      setMessage("Please enter the details");
    }

    return (
      <>
        <center>
          EmployeeName :
          <input
            type="text"
            value={EmpName}
            placeholder="EmpName"
            onChange={(e) => setEmpName(e.target.value)}
          />{" "}
          <br></br>
          EmpRole :
          <input
            type="text"
            value={EmpRole}
            placeholder="EmpRole"
            onChange={(e) => setEmpRole(e.target.value)}
          />
          <br></br>
          EmpDOJ :
          <input
            type="text"
            value={EmpDOJ}
            placeholder="DOJ"
            onChange={(e) => setEmpDOJ(e.target.value)}
          />
          <br></br>
          <div>
            <button type="submit" onClick={() => onLogin()}>
              Submit
            </button>
          </div>
          {message && <span style={{ color: "red" }}>{message} </span>}
        </center>
      </>
    );
  };
};
export default Create;
