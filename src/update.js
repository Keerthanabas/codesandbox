import React , {useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom';
import axios from "axios"; 

const Update = () =>{
    const navigate = useNavigate();
    const [employeeName, setempName] = useState("");
    const [empRole , setempRole] = useState("");
    const [doj, setdoj] = useState("");
    useEffect(()=>{
        axios
        .get('data' )
        .then ((res) =>{
            setempName(res,"data")
            //navigate('/')

        })
        .catch ((err) =>{
            console.log(err, "error");
        });

    },[])

    return (
        
<div>
<center>
Employee Name :
<input type ="text"  onChange = {(e) => setempName(e.target.value)}/> <br></br>
Employee Role :
<input type ="text"  onChange = {(e) => setempRole(e.target.value)}/> <br></br>
Date of Joining : 
<input type ="text"  onChange = {(e) => setdoj(e.target.value)}/>

<div>
<button onClick={() => {navigate("/")}}>Submit</button>
</div>
</center>

</div>

)

}
export default Update