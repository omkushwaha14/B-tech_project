import React from "react";
import Layout from "../core/Layout";
import { isAuthenticated, signout } from "../auth";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const {
    user: { name, email, role },
  } = isAuthenticated();

  const adminLinks = () => {
    return (
      <div className="container">
        <h6 className="card-header" style={{textAlign:'center'}}>Manage products</h6>
        <ul className="list-group">
          <li className="list-group-item">
            <Link className="nav-link" to="/admin/orders">
              View Orders
            </Link>
          </li>

          <li className="list-group-item">
            <Link className="nav-link" to="/create/product">
              Create Product
            </Link>
          </li>

          <li className="list-group-item">
            <Link className="nav-link" to="/admin/products">
              Update Products
            </Link>
          </li>
          <li className="list-group-item">
            <Link className="nav-link" to="/create/category">
              Create Category
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  const adminInfo = () => {
    return (
      <div className="container">
        <h3 className="card-header" style={{textAlign:'center'}}>Admin Dashboard</h3>
        <ul className="list-group">
          <li className="list-group-item">
            <b>Name: </b>
            {name}
          </li>
          <li className="list-group-item">
            <b>Email: </b>
            {email}
          </li>
          <li className="list-group-item">
            <b>Logout: </b>
            {isAuthenticated() && (
              <Link onClick={() => signout(() => {})}>Logout</Link>
            )}
          </li>
        </ul>
      </div>
    );
  };

  return (
    <Layout>
      <div>
        <div>{adminInfo()}</div>
        <hr/>
        <div>{adminLinks()}</div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
