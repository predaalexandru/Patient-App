import React, {useState, useEffect} from 'react'
import axios from 'axios'

/**
* @author
* @function Home
**/

const Home = () => {
  const [patients, setPatient] = useState([]);

  useEffect(() => {
    loadPatient();
  }, []);

  const loadPatient = async () => {
    const result = await axios.get("http://localhost:3003/patient");
    setPatient(result.data);
  }

  return(
    <div className="container">
        <div className="py-4">
            <h1>Home Page</h1>

            <table className="table border shadow">
  <thead className="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nume</th>
      <th scope="col">Prenume</th>
      <th scope="col">Localitate</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {
      patients.map((patient, index) => (
        <tr key={patient.id}>
          <th scope="row">{index + 1}</th>
          <td>{patient.name}</td>
          <td>{patient.username}</td>
          <td>{patient.email}</td>
        </tr>
      ))
    }
  </tbody>
</table>
        </div>
    </div>
   )

 }

export default Home