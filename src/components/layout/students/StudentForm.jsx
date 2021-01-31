import React, { useEffect, useState } from "react";
import { useFirestore } from "react-redux-firebase";
import { useHistory, useParams } from "react-router-dom";
import Input from "../Input";

const StudentForm = () => {
  let history = useHistory();
  const firestore = useFirestore();
  const { id } = useParams();
  const docRef = id ? firestore.collection("Students").doc(id) : null
  const [student, setStudent] = useState({
    name: "",
    email: "",
    phone: "",
    standard: "",
    address1: "",
    address2: "",
  });

  const onInputChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const EditStudent = async () => {
    try {
      
      const result = await docRef.get();
      if (result.exists) {
        setStudent(result.data());
      } else {
        alert("No Such Student .. !");
      }
    } catch (error) {
      alert("error.message");
    }
  };
  useEffect(() => {
    if(id){
      EditStudent();
    }
  }, [id]);
  const submitForm = async (e) => {
    e.preventDefault();
    if (id) {
      await docRef.update({...student, upDatedAt: firestore.FieldValue.serverTimestamp()})
    } else {
      firestore.collection("Students").add({
        ...student,
        createdAt: firestore.FieldValue.serverTimestamp(),
      });
    }
    history.push("/");
  };
  return (
    <>
      <div className="container">
        <div className="py-4">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <div className="card card-body shadow">
                <form onSubmit={submitForm}>
                  <div className="form-row form-group mb-4">
                    <div className="col-md-6">
                      <Input
                        type="text"
                        placeholder="Enter Student Name"
                        name="name"
                        value={student.name}
                        onChange={onInputChange}
                        className="form-control"
                      />
                    </div>
                    <div className="col-md-6">
                      <Input
                        placeholder="Enter Student E-mail"
                        name="email"
                        value={student.email}
                        onChange={onInputChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="form-row form-group mb-4">
                    <div className="col-md-6">
                      <Input
                        type="text"
                        placeholder="Enter Student Phone"
                        name="phone"
                        value={student.phone}
                        onChange={onInputChange}
                        className="form-control"
                      />
                    </div>
                    <div className="col-md-6">
                      <Input
                        type="text"
                        placeholder="Enter Student Class"
                        value={student.standard}
                        onChange={onInputChange}
                        className="form-control"
                        name="standard"
                      />
                    </div>
                  </div>
                  <div className="form-row form-group">
                    <div className="col-md-6">
                      <Input
                        type="text"
                        placeholder="Enter Student Address Line 1"
                        value={student.address1}
                        onChange={onInputChange}
                        className="form-control"
                        name="address1"
                      />
                    </div>
                    <div className="col-md-6">
                      <Input
                        type="text"
                        placeholder="Enter Student Address Line 2"
                        value={student.address2}
                        onChange={onInputChange}
                        className="form-control"
                        name="address2"
                      />
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary">
                    {id ? "Update Student" : "Add Student"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentForm;
