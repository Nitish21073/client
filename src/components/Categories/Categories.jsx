import React from "react";
import "./categories.scss";
import {Link} from 'react-router-dom'

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
          />
          <button>
            <Link className="link" to = "/products/1">Sale</Link>
          </button>
        </div>
        <div className="row">  
        <img
            src="https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
            alt=""
          />
          <button>
            <Link className="link" to = "/products/1">Sale</Link>
          </button></div>
      </div>
      <div className="col">
        <div className="row"> 
         <img
            src="https://images.unsplash.com/photo-1525286102393-8bf945cd0649?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80"
            alt=""
          />
          <button>
            <Link className="link" to = "/products/1">Sale</Link>
          </button></div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
                  <img
            src="https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
            alt=""
          />
          <button>
            <Link className="link" to = "/products/1">Sale</Link>
          </button></div>
          </div>
          <div className="col">
            <div className="row"> 
             <img
            src="https://images.unsplash.com/photo-1613743990305-736d763f3d70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt=""
          />
          <button>
            <Link className="link" to = "/products/1">Sale</Link>
          </button></div>
          </div>
        </div>
        <div className="row">
        <img
            src="https://images.unsplash.com/photo-1620574387735-3624d75b2dbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
            alt=""
          />
          <button>
            <Link className="link" to = "/products/1">Sale</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
