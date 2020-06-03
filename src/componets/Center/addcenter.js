import React, { Component } from "react";
import "../CSS/donor.css";
import axios from "axios";
// import Dropdown from "react-bootstrap/Dropdown";

export default class addcenter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: [],
      Centername: "",
      CenterManagername: "",
      ccontact:"",
      address: "",
      candidatename: "",
      candidateadhar: "",
      age: "",
      category: "",
      gender: "",
      contact: "",
      experience: "",
      salaryday: "",
     
     file: null,
    };
    this.onChange = this.onChange.bind(this);
    this.handleDropdownChange = this.handleDropdownChange.bind(this);
  }
  componentDidMount() {
    this.props.getCategory();
  }
  // Input on change
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  // Dropdown change
  handleDropdownChange(e) {
    this.setState({ category: e.target.value });
  }
  // fileupload
  onChangeHandler = (e) => {
    this.setState({
      file: e.target.files[0],
    });
  };
  onSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", this.state.file, this.state.file.name);

    console.log(data);
    const token = sessionStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    };
    try {
      const res = await axios.post(
        `http://localhost:5000/api/v1/center/photo`,
        data,
        config
      );
      console.log(res.data.data);

      const centers = {
        Centername: this.state.Centername,
        CenterManagername: this.state.CenterManagername,
        ccontact:this.state.ccontact,
        address: this.state. address,
        candidatename: this.state. candidatename,
        candidateadhar: this.state.candidateadhar,
        age: this.state.age,
        category:this.state.category,
        gender: this.state.gender,
        contact:this.state.contact,
        experience: this.state.experience,
        salaryday: this.state.salaryday,
        photo: res.data.data
      };
      const body = JSON.stringify(centers);
      console.log(body);
      // const token = sessionStorage.getItem("token");
      const config1 = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };
      const result = await axios.post(
        `http://localhost:5000/api/v1/center`,
        body,
        config1
      );
      console.log(result.data.data);
      alert(`candiate Addred ${result.data.data.Centername}`);
    } catch (err) {
      // console.log("Can't load the items");
    }
  };
  render() {
    return (
      <div className="container itmtop">
          {console.log(this.state)}
        <div className="">
          {/* <div className="jumbotron col-md-6 col-sm-5 " id="login-first"></div> */}
          <div className="" id="login-second">
            <div class="page-wrapper p-t-50 p-b-50">
              <div class="wrapper wrapper--w900 ">
                <div class="card cardH card-6 ">
                  <div class="card-heading m-4">
                    <h2 class="title text-dark">Add Job</h2>
                  </div>
                  <div class="card-body">
                    <form onSubmit={this.onSubmit}
                      encType="multipart/form-data"
                    >
                      <div class="form-row frow">
                        <div class="name">Center name:</div>
                        <div class="value">
                        <input
                            className="input--style-6"
                            type="text"
                            name="Centername"
                            value={this.state.Centername}
                            onChange={this.onChange}
                          />
                        </div>
                      </div>
                      
                      <div class="form-row frow">
                        <div class="name">Center Manager name:</div>
                        <div class="value">
                        <input
                            className="input--style-6"
                            type="text"
                            name="CenterManagername"
                            value={this.state.CenterManagername}
                            onChange={this.onChange}
                          
                          />
                        </div>
                      </div>
                      <div class="form-row frow">
                        <div class="name">Center Contact:</div>
                        <div class="value">
                        <input
                            className="input--style-6"
                            type="text"
                            name="ccontact"
                            value={this.state.ccontact}
                            onChange={this.onChange}
                          
                          />
                        </div>
                      </div>
                        
                      
                      <div class="form-row frow">
                        <div class="name">Center Location</div>
                        <div class="value">
                        <input
                            className="input--style-6"
                            type="text"
                            name="address"
                            placeholder=""
                            value={this.state.address}
                            onChange={this.onChange}
                          />
                        </div>
                      </div>
                      
                      <div class="form-row frow">
                      <div class="name">Candidate Name</div>
                        <div class="value">
                         
                        <input
                            className="input--style-6"
                            type="text"
                            name="candidatename"
                            placeholder=""
                            value={this.state.candidatename}
                            onChange={this.onChange}
                          />
                          </div>
                        </div>
                        

                      <div class="form-row frow">
                        <div class="name">Candidate adhaar</div>
                        <div class="value">
                          
                        <input
                            className="input--style-6"
                            type="text"
                            name="candidateadhar"
                            placeholder=""
                            value={this.state.candidateadhar}
                            onChange={this.onChange}
                          />
                          </div>
                        </div>
                        <div class="form-row frow">
                        <div class="name">Candidate age:</div>
                        <div class="value">
                        <input
                            className="input--style-6"
                            type="text"
                            name="age"
                            placeholder=""
                            value={this.state.age}
                            onChange={this.onChange}
                          />
                        </div>
                      </div>
                      <div className="form-row frow">
                        <div className="name">Select  CandidateCategory:</div>
                        <select
                          id="dropdown "
                          className="btn bg-success"
                          onChange={this.handleDropdownChange}
                        >
                          <option value="no cat">None</option>
                          {this.props.category.map((category) => (
                            <option key={category._id} value={category._id}>
                              {category.catname}
                            </option>
                          ))}
                          </select>
                        
                        </div>
                        {/* <Dropdown>
                          <Dropdown.Toggle
                            variant="success"
                            id="dropdown-basic"
                          >
                            Category
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            {this.props.category.map((category) => (
                              <Dropdown.Item key={category._id}>
                                {category.catname}
                              </Dropdown.Item>
                            ))} */}

                            {/* <Dropdown.Item href="#/action-2">
                              Another action
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                              Something else
                            </Dropdown.Item> */}
                          {/* </Dropdown.Menu>
                        </Dropdown>
                      </div> */}
                    
                       <div class="form-row frow">
                        <div class="name">Candidate Gender</div>
                        <div class="value">
                          <div class="input-group">
                          <input
                              className="input--style-6"
                              type="text"
                              name="gender"
                              placeholder=""
                              value={this.state.gender}
                              onChange={this.onChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-row frow">
                        <div class="name"> Contact</div>
                        <div class="value">
                          <div class="input-group">
                          <input
                              className="input--style-6"
                              type="text"
                              name="contact"
                              placeholder=""
                              value={this.state.contact}
                              onChange={this.onChange}
                            />
                          </div>
                        </div>
                      </div>


                      <div class="form-row frow">
                        <div class="name">Candidate Experience</div>
                        <div class="value">
                          <div class="input-group">
                          <input
                              className="input--style-6"
                              type="text"
                              name="experience"
                              placeholder=""
                              value={this.state.experience}
                              onChange={this.onChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-row frow">
                        <div class="name">Candidate Salary/Day</div>
                        <div class="value">
                          <div class="input-group">
                          <input
                              className="input--style-6"
                              type="text"
                              name="salaryday"
                              placeholder=""
                              value={this.state.salaryday}
                              onChange={this.onChange}
                            />
                          </div>
                        </div>
                      </div>
                       
                      {/* <div class="form-row frow">
                        <div class="name">Contact</div>
                        <div class="value">
                          <div class="input-group">
                          <input
                              className="input--style-6"
                              type="text"
                              name="contact"
                              placeholder=""
                              value={this.state.contact}
                              onChange={this.onChange}
                            />
                          </div>
                        </div>
                      </div> */}
                       <div class="form-row frow">
                        <div class="name">Upload Image:</div>
                        <div class="value">
                          <div class="input-group js-input-file">
                          <input
                              className="input-file"
                              type="file"
                              name="file"
                              id="file"
                              onChange={this.onChangeHandler}
                            />
                            <label class="label--file" for="file">
                              Choose file
                            </label> 
                            {/* <span class="input-file__info">No file chosen</span> */}
                          </div>
                          <div class="label--desc">
                            Upload your Document/Id proff or any other relevant
                            file. Max file size 50 MB
                          </div>
                        </div>
                      </div> 
                    
                  
                    
                   
                  
                  <div class="card-footer">
                    <button class="btn btn--radius-2 btn-gray" type="submit">
                      ADD
                    </button>
                  </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
