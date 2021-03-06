import React from 'react'
import {Link} from "react-router-dom";
import {isAuthenticated} from "../auth";

const small={
    backgroundColor:"#F6F5F2" ,
    color:"white",
}
const s={
    marginLeft:'20px'
}
const i={
    fontSize:'17px',
    color:'red',
    marginRight:'10px',
}

const Footer = () => {
    return (
        <footer className="text-center pb-4" style={small}>
            <div className="container">
                <ul className="list-styled list-inline text-center py-3 ">
                    <li className="list-inline-item">
                        <Link to="/contactus"> <small className="mb-1" style={s}> Contact us</small></Link>
                    </li>
                    <li className="list-inline-item">
                        <Link to="/terms&condition"> <small className="mb-1" style={s}>Terms of use & return policy</small></Link>
                    </li>
                    <li className="list-inline-item">
                        <Link to="/aboutus"> <small className="mb-0" style={s}>About us</small></Link>
                    </li>
                </ul>
    

                <div className='mb-3'>
                    <a className="mb-0 text-dark" ><i className="fa fa-map-marker" style={i}> </i>
                        <small style={{color:'red'}}>Address:</small> <small>Rohini sec-16,Delhi, india</small> </a>
                    <br/>
                    <i className="fa fa-phone" style={i}></i>
                    <small style={{color:'red'}}> Phone: </small>
                    <small className='text-dark'> </small> <a href="tel:9845560461">
                    <small>9631997075</small> </a> {' , '}
  
                </div>
                {!isAuthenticated() && (
                    <Link
                        to="/signin" >
                        <div style={{textAlign:'center'}}>
                            <i style={{fontSize:'15px',color:'black'}} className='fas'>&#xf007;</i><br/><span style={{color:"black"}} className='nav-links'>
                Login</span>
                        </div>
                    </Link>
                )}
            </div>
            <small className="text-center text-dark">Copyright ?? shoponline 2022. B.tech-II project by om, chitranjan, ayush
            </small>
        </footer>
    )
}

export default Footer