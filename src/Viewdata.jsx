import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Viewdata = () => {
  const navigate = useNavigate();
  const [users, setusers] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = () => {
    axios.get("https://geton.yarainfotech.com/get-data.php").then((data) => {
      setusers(data.data);
    });
  };

  const handledelete = (e) => {
    var id = e.target.getAttribute("data");
    var a = new FormData();
    a.set("id", id);
    axios
      .post("https://geton.yarainfotech.com/delete-data.php", a)
      .then(function (data) {
        console.log(data);
        if ((data.data.status = "true")) {
          fetchdata();
        }
      });
  };

  const handleupdate = (e) => {
    var id = e.target.getAttribute("data");
    navigate("/update/" + id);
  };

  const handlelogout=()=>{
      localStorage.clear();
      navigate('/')
  }

  return (
    <>
    <h1>you are Login mr {localStorage.getItem("name") } </h1>
      <table border={1} cellPadding={7}>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Password</th>
          <th>Action</th>
          <th>Action</th>
        </tr>
        {users.map((e) => {
          return (
            <>
              <tr>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.password}</td>
                <td>
                  <button onClick={handleupdate} data={e.id}>
                    Edit
                  </button>
                </td>
                <td>
                  <button onClick={handledelete} data={e.id}>
                    Delete
                  </button>
                </td>
              </tr>
            </>
          );
        })}
      </table>
      <Link to="/insertdata/"> Add Data</Link>
      <button onClick={handlelogout}>LogOut</button>
    </>
  );
};

export default Viewdata;
