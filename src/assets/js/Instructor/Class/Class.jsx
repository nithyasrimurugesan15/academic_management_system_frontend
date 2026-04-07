
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Class.css";
import { Player } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router-dom";
import Mountain from "./../../components/Mountain Template/Mountain";
import LoadingFetchData from "../../components/loading-fetch-data/LoadingFetchData";
import { useDispatch, useSelector } from "react-redux";
import { GetAllInstructorSubjects } from "../../../Toolkit/Slices/SemestersSlice";
import Select from "react-select";

function Class() {
  const dispatch = useDispatch();

  const { loading, Subjects } = useSelector((state) => state.Semester);

  const [CreateField, setCreateField] = useState(false);

  const [Data, setData] = useState({
    name: "",
    credit_hours: "",
    day: "",
    time: "",
  });

  const Days = [
    { label: "Sunday", value: "Sunday" },
    { label: "Monday", value: "Monday" },
    { label: "Tuesday", value: "Tuesday" },
    { label: "Wednesday", value: "Wednesday" },
    { label: "Thursday", value: "Thursday" },
    { label: "Friday", value: "Friday" },
    { label: "Saturday", value: "Saturday" },
  ];

  const timeOptions = [
    { label: "9-11", value: "9-11" },
    { label: "11-1", value: "11-1" },
    { label: "1-3", value: "1-3" },
    { label: "3-5", value: "3-5" },
  ];

  useEffect(() => {
    dispatch(GetAllInstructorSubjects());
  }, [dispatch]);

  // ✅ ADD SUBJECT FUNCTION
  const handleAdd = async () => {
    // 🔒 validation
    if (!Data.name || !Data.credit_hours || !Data.day || !Data.time) {
      alert("Please fill all fields ❌");
      return;
    }
    const API_URL = process.env.REACT_APP_API_URL;

    try {
      await axios.post(`${API_URL}/API/Subjects/add`, {
        name: Data.name,
        credit_hours: Data.credit_hours,
        time: Data.time,
        day: Data.day,
        instructor_id: "507f1f77bcf86cd799439011", // TODO: replace with logged user
      });

      alert("Subject Added ✅");

      // 🔥 refresh subjects
      await dispatch(GetAllInstructorSubjects());

      // 🔄 reset form
      setData({
        name: "",
        credit_hours: "",
        day: "",
        time: "",
      });

      setCreateField(false);
    } catch (err) {
      console.error(err);
      alert("Error adding subject ❌");
    }
  };

  return (
    <>
      <div className="classRoom">
        <Mountain>
          <div className="data">
            <h1>Class Room</h1>

            <div className="card">
              <i
                className="fa-solid fa-plus"
                onClick={() => setCreateField(!CreateField)}
              />
              <input type="text" placeholder="Create a New Class" disabled />
            </div>
          </div>
        </Mountain>

        {/* ================= FORM ================= */}
        <div className="subjects">
          {loading ? (
            <LoadingFetchData />
          ) : CreateField ? (
            <div className="add-new-Class">
              <div className="container">

                {/* TIME */}
                <div className="card-input">
                  <Select
                    options={timeOptions}
                    menuPlacement="auto"
                    onChange={(e) => setData({ ...Data, time: e.value })}
                  />
                </div>

                {/* SUBJECT NAME */}
                <div className="card-input">
                  <input
                    type="search"
                    value={Data.name}
                    onChange={(e) =>
                      setData({ ...Data, name: e.target.value })
                    }
                    placeholder=" "
                  />
                  <label>Subject Name</label>
                </div>

                {/* CREDIT HOURS */}
                <div className="card-input">
                  <input
                    type="number"
                    value={Data.credit_hours}
                    onChange={(e) =>
                      setData({
                        ...Data,
                        credit_hours: e.target.value,
                      })
                    }
                    placeholder=" "
                  />
                  <label>Credit Hours</label>
                </div>

                {/* DAY */}
                <div className="card-input">
                  <Select
                    options={Days}
                    menuPlacement="auto"
                    onChange={(e) => setData({ ...Data, day: e.value })}
                  />
                </div>

                {/* ADD BUTTON */}
                <div className="card-input">
                  <button onClick={handleAdd}>Add</button>
                </div>
              </div>
            </div>
          ) : (
            <div className="container" data-aos="fade-in">
              {Subjects.map((Subject) => (
                <Link
                  className="card"
                  to={`/subjects/${Subject._id}/${Subject.name}?`}
                  key={Subject._id}
                >
                  <h1>{Subject.name}</h1>
                  <Player
                    autoplay
                    loop
                    src={require("../../../img/Players/Books.json")}
                    style={{ width: "150px", height: "150px" }}
                  />
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Class;
