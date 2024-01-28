import  axios  from "axios";
import { url } from '../../Common/Constant';
import { useLocation, useHistory,Link } from 'react-router-dom';
import { useState,useEffect } from 'react';



function UpdateElection (election){
    const location= useLocation();
    election=location.state.election
    const[electionId,setElectionId]=useState(0)
    const[electionName,setElectionName]=useState("")
    const[state,setState]=useState("")
    const[year,setYear]=useState(0)
    const[electionDate,setElectionDate]=useState("")
    const[resultDate,setresultDate]=useState("")
    const history =useHistory()
  
    useEffect(() => {
        setElectionId(election.electionId)
        setElectionName(election.electionName)
        setState(election.state)
        setYear(election.year)
        setElectionDate(election.electionDate)
        setresultDate(election.resultDate)
      }, []);
   const updateElection = () => {
    const data = {
        electionId: electionId,
        electionName:electionName,
        year:year,
        state: state,
        electionDate:electionDate,
        resultDate: resultDate,
       
      };
      console.log(data)
      axios
      .put(url + "election/update/" ,data)
      .then((response) => {
        const result = response.data;
        if (result.status == "success") {
          history.push("/home/View-elections");
        }
      });
      
     
   };
    
    
    return (
      <div>
          <div>
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col">
            <div class="card card-registration my-4">
              <div class="row g-0">
                <div class="col-xl-6 d-none d-xl-block">
                  <img
                    src="/Images/thingsToRemember.png"
                    alt="Sample photo"
                    class="img-fluid"
                    style={{
                      borderTopLeftRadius: ".25rem",
                      borderBottomLeftRadius: ".25rem",
                    }}
                  />
                </div>
                <div class="col-xl-6">
                  <div class="card-body p-md-5 text-black">
                    <h3 class="mb-5 text-uppercase">Update Election</h3>
                    <div class="row">
                      <div class="col-md-12 mb-4">
                        <div class="form-outline">
                          <label class="form-label" for="form3Example1m">
                           Election Name
                          </label>
                          <input
                            type="text"
                            id="form3Example1m"
                            class="form-control form-control-lg"
                            value={electionId}
                          />
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-12 mb-4">
                        <div class="form-outline">
                          <label class="form-label" for="form3Example1m">
                           Election Name
                          </label>
                          <input
                            type="text"
                            id="form3Example1m"
                            class="form-control form-control-lg"
                            value={electionName}
                            onChange={(e) => {
                              setElectionName(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-12 mb-4">
                        <div class="form-outline">
                          <label class="form-label" for="form3Example1m1">
                            State
                          </label>
                          <input
                            type="text"
                            id="form3Example1m1"
                            class="form-control form-control-lg"
                            value={state}
                            onChange={(e) => {
                              setState(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12 mb-4">
                        <div class="form-outline">
                          <label class="form-label" for="form3Example1n1">
                          Election  Year
                          </label>
                          <input
                            type="text"
                            id="form3Example1n1"
                            class="form-control form-control-lg"
                            value={year}
                            onChange={(e) => {
                              setYear(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12 mb-4">
                        <div class="form-outline">
                          <label class="form-label" for="form3Example1n1">
                           Election Date
                          </label>
                          <input
                            type="text"
                            id="form3Example1n1"
                            class="form-control form-control-lg"
                            value={electionDate}
                            onChange={(e) => {
                              setElectionDate(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    <div class="form-outline mb-4">
                      <label class="form-label" for="form3Example9">
                        result Date
                      </label>
                      <input
                        type="text"
                        id="form3Example9"
                        class="form-control form-control-lg"
                        value={resultDate}
                        onChange={(e) => {
                          setresultDate(e.target.value);
                        }}
                      />
                    </div>

                    

                    

                    <div class="d-flex justify-content-end pt-3">
                      <Link to="/home/View-elections">
                        <button
                          type="button"
                          class="btn btn-danger btn-lg ms-2"
                        >
                          Back
                        </button>
                      </Link>
                      <button
                        type="button"
                        class="btn btn-warning btn-lg ms-2"
                        onClick={updateElection}
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
      </div>
    );
    };



export default  UpdateElection;