import "./_Content.scss";
import Card from "./Card/Card";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const apiURL = "http://localhost:8000/product";
function Content() {
  const [data, setData] = useState([]);
  useEffect(() => { 
    fetch(apiURL) 
      .then((res) => res.json()) 
      .then((result) => setData(result)) 
      .catch((error) => {console.log(error); }); }, []);
  return (
    <div className="content min-vh-100 pt-3">
      <div className="container-fluid d-flex flex-column align-items-center">
        <div className="title d-flex">
          <hr className="doubleline"></hr>
          <div className="title-block d-flex flex-column align-items-center">
            <h3 className="title-group">Area 515</h3>
            <div className="title-group">Happy Mind Happy Life</div>
          </div>
          <hr className="doubleline"></hr>
        </div>
        <div className="row">
          {data.slice(0, 8).map((item, index) => (
            <div className="col-xxl-3 py-3 card-hover" key={item.id}>
              <Card 
                data={item}
              />
            </div>
          ))}
        </div>
        <Link to={"/shop"} className="btn-showall">
          Xem tất cả
        </Link>
      </div>
    </div>
  );
}

export default Content;
