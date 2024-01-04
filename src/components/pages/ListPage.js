
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useUserContext } from './UserContext';
import './List.css'

function ListUser() {
  const { userArray, deleteUser, cloneUser } = useUserContext();
  const [searchTerm, setSearchTerm] = useState('');

  const handleDelete = (index) => {
    deleteUser(index);
  };

  const handleClone = (index) => {
    cloneUser(index);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredUserArray = userArray.filter((item) => {
    return (
      item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.firstName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div>
      <h1>ListUser Page</h1>
      <input
        type="text"
        className='search-input'
        placeholder="Search by Email or FirstName"
        value={searchTerm}
        onChange={handleSearch}
      />

      <table border="1">
        <tbody>
          <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Email</th>
            <th>Password</th>
            <th>Edit</th>
            <th>Delete</th>
            <th>Clone</th>
          </tr>
          {filteredUserArray.map((item, index) => (
            <tr key={index}>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.email}</td>
              <td>{item.password}</td>
              <td>
                <Link className='edit-btn' to={`/edit/${index}`}>Edit</Link>
              </td>
              <td>
                <button className="delet-btn" onClick={() => handleDelete(index)}>Delete</button>
              </td>
              <td>
                <button  className = "clone-btn" onClick={() => handleClone(index)}>Clone</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListUser;



