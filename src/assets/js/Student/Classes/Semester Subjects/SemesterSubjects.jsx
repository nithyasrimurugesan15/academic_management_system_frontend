
import React, { useEffect, useState } from "react";
import "./SemesterSubjects.css";
import Dots from "../../../components/Dots/Dots";
import { useParams } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import axios from "axios";
import LoadingFetchData from "../../../components/loading-fetch-data/LoadingFetchData";

function SemesterSubjects() {
  const { id } = useParams(); // 🔥 subject id

  const [exams, setExams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [Search, setSearch] = useState("");
  const [show, setShow] = useState("grid");

  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios
        .get(`${API_URL}/API/Exams/subject/${id}`)
      .then((res) => {
        setExams(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  return (
    <>
      {loading ? (
        <LoadingFetchData />
      ) : (
        <div className="SemesterSubjects" id="Subjects">
          <Dots OtherStyle="top" />
          <Dots OtherStyle="bottom" />

          <div className="container">

            {/* 🔍 SEARCH */}
            <div className="header">
              <div className="input-absulote">
                <input
                  type="text"
                  className="width-full"
                  placeholder="Search Exam"
                  value={Search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              <i
                className={
                  show === "grid"
                    ? "fa-solid fa-border-all style active"
                    : "fa-solid fa-border-all style"
                }
                onClick={() => setShow("grid")}
              />

              <i
                className={
                  show === "list"
                    ? "fa-solid fa-grip-lines style active"
                    : "fa-solid fa-grip-lines style"
                }
                onClick={() => setShow("list")}
              />
            </div>

            {/* 🎯 EXAMS */}
            {exams.length > 0 ? (
              <div className={`SemesterSubjectsContainer ${show}`}>
                {exams
                  .filter((exam) =>
                    exam.title.toLowerCase().includes(Search.toLowerCase())
                  )
                  .map((exam) => (
                    <div className="card" key={exam._id}>
                      <div className="info">
                        <Player
                          autoplay
                          loop
                          src={require("../../../../img/Players/SubjectBook.json")}
                          className="PLayer"
                        />

                        <p>{exam.title}</p>
                        <small>{exam.date}</small>
                        <small>Marks: {exam.total_marks}</small>
                      </div>
                    </div>
                  ))}
              </div>
            ) : (
              <div className="NoSemesterInserted">
                <Player
                  autoplay
                  loop
                  src={require("../../../../img/Players/NoSemester.json")}
                  className="Player"
                />
                <h5>No Exams Available</h5>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default SemesterSubjects;