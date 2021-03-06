import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import {isAuthenticated, signout} from "../auth";
import { Link } from "react-router-dom";
import { getPurchaseHistory } from "./apiUser";
 

const Dashboard = () => {
    const [history, setHistory] = useState([]);

    const { user: { _id, name, email} } = isAuthenticated();
    const token = isAuthenticated().token;

    const init = (userId, token) => {
        getPurchaseHistory(userId, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setHistory(data);
            }
        });
    };

    useEffect(() => {
        init(_id, token);
    }, []);

    const userInfo = () => {
        return (
            <div className="container">
            <div className="card mb-5">
                <h6 className="card-header">User Information</h6>
                <ul className="list-group">
                    <li className="list-group-item"> <b >Username: </b> {name}</li>
                    <li className="list-group-item"><b >Email: </b> {email}</li>
                    <li className="list-group-item"><b>Cart: </b> <Link to="/cart">My Cart</Link></li>
                    <li className="list-group-item"><b>Logout: </b>
                        {isAuthenticated() && (

                            <Link onClick={() => signout(() => { })}>
                                Logout


                            </Link>

                        )}
                    </li>


                </ul>
            </div>
            </div>
        );
    }

    

    return (
        <Layout>
            <div className="container">
            <div className="row">
                {userInfo()}
            </div>
               

            </div>
        </Layout>
    );
};

export default Dashboard;
