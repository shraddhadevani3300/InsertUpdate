import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";


const Insertdata =()=>{

        
    const txtname = useRef();
    const txtemail= useRef();
    const txtpassword= useRef();
   const navigate= useNavigate();

    const submithandle=(e)=>{
            // e.preventDefault();

            console.log(txtname.current.value);
            const name=(txtname.current.value)
            const email=(txtemail.current.value);
            const password=(txtpassword.current.value);

            const a= new FormData();

            a.set("name", name);
            a.set("email", email);
            a.set("password", password);

            axios.post("https://geton.yarainfotech.com/insert-data.php",a).then((data)=>{
            if(data.data.status=="true"){
              navigate("view")  
            }
            })
    }

    return(
     <>
     
     <form action={submithandle} >
      <table border={1} cellPadding={7}>
        <tr>
            <th>Name</th>
            <td><input type="text" ref={txtname} /></td>
        </tr>
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
            <input type="submit" value={"Submit"} />
        </tr>
      </table>
     </form>
     </>   
    )

}
export default Insertdata;