import React from "react";
import { Link } from "react-router-dom";
import "./UserItem.css";

const UserItem = (props) => {
  return (
    <li className="li-component mt-3">
      <div className="card card-component">
        <div className="row">
          <div className="col-md-4">
            <img
              src={props.image}
              alt={props.name}
              className="img-fluid rounded-start"
            />
          </div>

          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{props.name}</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur
              </p>
              <Link to={`/${props.id}/blogs`} className="btn btn-primary">
                {"Has posted "}
                {props.blogCount} {props.blogCount === 1 ? " blog" : " blogs"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default UserItem;
