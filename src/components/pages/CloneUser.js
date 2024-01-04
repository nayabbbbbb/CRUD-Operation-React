import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useUserContext } from './UserContext';

function CloneUser() {
  const navigate = useNavigate();
  const { index } = useParams();
  const { cloneUser } = useUserContext();

  const handleClone = () => {
    cloneUser(parseInt(index, 10));
    navigate('/list');
  };

  return (
    <div>
      <h1>Clone User</h1>
      <p>Are you sure you want to clone this user?</p>
      <button onClick={handleClone}>Confirm Clone</button>
      <Link to="/list">Cancel</Link>
    </div>
  );
}

export default CloneUser;
