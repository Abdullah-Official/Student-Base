import React from 'react'
import { useSelector } from 'react-redux';
import { useFirestore, useFirestoreConnect } from "react-redux-firebase";
import { NavLink } from 'react-router-dom';
import Avatar from '../Avatar';
import Loading from '../Loading';

const Students = () => {
  const firestore = useFirestore();
  const students = useSelector((state)=>state.firestore.ordered.Students)
  console.log(students)
  useFirestoreConnect([
    {
      collection: "Students",
      orderBy: ["createdAt","desc"]
    },
  ]);
  if(!students){
    return <Loading/>
  }

  const deleteStudent = async (id) =>{
    try {
      await firestore.collection("Students").doc(id).delete()
    } catch (error) {
      alert(error.message)
    }
  }
    return (
      <>
        <div className="container">
          <div className="py-4">
            <div className="row">
              {students.map((student) => (
                <div className="col-lg-3 col-md-6 mb-4" key={student.id}>
                  <div className="card shadow text-center py-4">
                    <Avatar url={`https://i.pravatar.cc/150?img=${student.id}`} />
                    <div className="card-body">
                      <h5 className="card-title mb-0">{student.name}</h5>
                      <p className="text-muted small">{student.email}</p>
                      <NavLink
                        to={`/student/${student.id}`}
                        className="btn btn-primary btn-profile"
                      >
                        View Profile
                      </NavLink>
                      <button className="btn btn-edit" onClick={() => deleteStudent(student.id)}>
                        <span className="material-icons">delete_outline</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
}

export default Students
