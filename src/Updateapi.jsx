import axios from "axios";
import React, { useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Updateapi =()=>{

        
    const txtname = useRef();
    const txtemail= useRef();
    const txtpassword= useRef();
    const navigate = useNavigate();
    var {id}=useParams();

    useEffect(()=>{
        const a= new FormData()

        a.set('id',id)
        axios.post("https://geton.yarainfotech.com/single-data.php",a).then(function(show){
              
               txtname.current.value =show.data.name;
               txtemail.current.value =show.data.email;
               txtpassword.current.value =show.data.password;

        })
    },[])

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
            a.set('id',id)

            axios.post("https://geton.yarainfotech.com/edit-data.php",a).then((data)=>{
             if(data.data.status=="true"){

                navigate('/',id);
             }
            })
    }

    return(
     <>
     
     <form method="post" action={submithandle} >
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
            <input type="submit" value={"submit"} />
        </tr>
      </table>
     </form>
     </>   
    )

}
export default Updateapi;