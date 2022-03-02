import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { getProducts } from "./apiCore";
import Card from "./Card";

import first from "./images/first.jpg";
import second from "./images/second.jpg";
import third from "./images/third.jpg";
import fourth from "./images/fourth.jpg";
import fifth from "./images/fifth.jpg";
import sixth from "./images/sixth.jpg";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";

const Home = () => {
  const [productsBySell, setProductsBySell] = useState([]);
  const [setError] = useState(false);

  const loadProductsBySell = () => {
    getProducts("sold").then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProductsBySell(data);
      }
    });
  };

  useEffect(() => {
    loadProductsBySell();
  }, []);

  const showLoading = () => (
    <div className="d-flex justify-content-center">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );

  return (
    <Layout>
      <div className="container">
        <div
          className="offers my-2"
          style={{ border: "1px solid #008ECC", borderRadius: "10px" }}
        >
          <div
            className="card-header"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h6 className="mb-0">Offers</h6>
            <div>
              <Link to="/shop">
                <small>View more</small>
              </Link>
            </div>
          </div>
          <div className="card-content mb-3">
            <Carousel>
              <Carousel.Item>
                <img
                  style={{ height: "200px", width: "350px" }}
                  src={first}
                  alt="First slide"
                />
                <img
                  style={{ height: "200px", width: "350px" }}
                  src={second}
                  alt="First slide"
                />
                <img
                  style={{ height: "200px", width: "350px" }}
                  src={third}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
              <img
                  style={{ height: "200px", width: "350px" }}
                  src={fourth}
                  alt="First slide"
                />
                 <img
                  style={{ height: "200px", width: "350px" }}
                  src={fifth}
                  alt="First slide"
                />
                 <img
                  style={{ height: "200px", width: "350px" }}
                  src={sixth}
                  alt="First slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>

      <div className=" container offers">
        <div
          className="card-header"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            border: "3px solid #008ECC",
            borderRadius: "13px",
          }}
        >
          <h6 className="mb-0">Products</h6>
          <div>
            <Link to="/shop">
              <small>View more</small>
            </Link>
          </div>
        </div>
        <div className=" my-2 ">
          {!productsBySell.length ? (
            showLoading()
          ) : (
            <div className="row row-cols-2">
              {productsBySell.map((product, i) => (
                <div key={i} className="col col-lg-2">
                  <Card product={product} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
