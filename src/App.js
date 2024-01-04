// App.js
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { UserProvider } from './components/pages/UserContext';
import LoginUser from './components/pages/LoginPage';
import CreateUser from './components/pages/CreatePage';
import EditUser from './components/pages/EditPage';
import ListUser from './components/pages/ListPage';
import DeleteUser from './components/pages/DeleteUser';
import CloneUser from './components/pages/CloneUser';

// PrivateRoute component to guard private routes
const PrivateRoute = ({ element, ...props }) => {
  const isLoggedIn = localStorage.getItem('IsLoggedIn') === 'true';
  return isLoggedIn ? (
    React.cloneElement(element, props)
  ) : (
    <Navigate to="/" replace state={{ from: props.location }} />
  );
};

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<LoginUser />} />
          <Route
            path="/create"
            element={<PrivateRoute element={<CreateUser />} />}
          />
          <Route
            path="/edit/:index"
            element={<PrivateRoute element={<EditUser />} />}
          />
          <Route
            path="/list"
            element={<PrivateRoute element={<ListUser />} />}
          />
          <Route
            path="/delete/:index"
            element={<PrivateRoute element={<DeleteUser />} />}
          />
          <Route
            path="/clone/:index"
            element={<PrivateRoute element={<CloneUser />} />}
          />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;

