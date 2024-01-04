import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useUserContext } from './UserContext';

function DeleteUser() {
  const navigate = useNavigate();
  const { index } = useParams();
  const { deleteUser } = useUserContext();

  const handleDelete = () => {
    deleteUser(parseInt(index, 10));
    navigate('/list');
  };

  return (
    <div>
      <h1>Delete User</h1>
      <p>Are you sure you want to delete this user?</p>
      <button onClick={handleDelete}>Confirm Delete</button>
      <Link to="/list">Cancel</Link>
    </div>
  );
}

export default DeleteUser;
