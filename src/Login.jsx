import axios from "axios";
import { useRef } from "react";
import { Navigate, useNavigate } from "react-router-dom";


const Login=()=>{
             const navigate=  useNavigate();
            const txtemail=useRef();
            const txtpassword=useRef();

    const submithandle=(e)=>{
            const email=txtemail.current.value;
            const password=txtpassword.current.value;

            const a=new FormData();
            a.set("email",email);
            a.set("password",password);

            axios.post("https://geton.yarainfotech.com/login-data.php",a).then(function(data){
                if(data.data.status=="true"){
                    localStorage.setItem("name",data.data.userdata.name)
                    localStorage.setItem("email",data.data.userdata.email)
                    localStorage.setItem("auth", "true")
                    navigate("/view");
                }
                else{
                    alert('wrong');
                }
            })

    }

    return(
        <>
        <form action={submithandle} >
      <table border={1} cellPadding={7}>
        <tr>
            <th>Email</th>
            <td><input type="text" ref={txtemail} /></td>
        </tr>
        <tr>
            <th>password</th>
            <td><input type="text" ref={txtpassword} /></td>
        </tr>
        <tr>
            <td></td>
            <input type="submit" value={"Login"} />
        </tr>
      </table>
     </form>
        </>
    )
    
}

export default Login;