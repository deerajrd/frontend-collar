import React, { Component, Fragment } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import "../CSS/donor.css";
// import ShowItems from "./showItems";
// import QuickModel from "./QuickModel";
class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // cat: "",
      center: "",
      category: "",
    };
    // this.onClickHandler = this.onClickHandler.bind(this);
  }

  componentDidMount = () => {
    this.props.getCategory();
    this.props.getcenter();
  };


  render() {
    return (
      <Fragment>
        

    
<section class="counts section-bg mt-5">
        <div className=" container-fluid mt-5" id="product">
          <h2> List Of Category</h2>

          <div className="row">
          {this.props.category.map((cat) => (
                <div
                  className="col-lg-3 col-md-3 col-sm-3   animated fadeInUp wow animated"
                  key={cat._id}
                >
                  <div className="product-top">
                    <Link
                      to={{
                        pathname: "/Company/center",
                        state: {
                          cat: cat._id,
                        },
                      }}
                    >
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTXZwrUMYIv6ravsOPFmJMi96SZ1SNyEcacQJ8IhwZKBl_xzd1E&usqp=CAU"
                        className="img1"
                        alt=""
                      />

                  
                    </Link>
                  </div>
                  <div className="product-bottom text-center">
                    <h3>{cat.catname}</h3>
                  </div>
                </div>
              ))}
            
            </div>
            <div
              className="modal show product-view"
              id="quickModel"
              role="dialog"
            >
              <div className="modal-dialog">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">
                    &times;
                  </button>
                </div>
                <div className="modal-dialog product-big-img">
                  <img
                    src="https://recipes.timesofindia.com/recipes/homemade-chocolate/photo/54407737.cms"
                    className=" mt-2"
                    alt=""
                  />
                </div>
              </div>

           </div>
        </div>
        </section>

      </Fragment>
    );
  }
}

export default Category;
