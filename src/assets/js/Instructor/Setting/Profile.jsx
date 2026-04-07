import React from "react";
import LoadingFetchData from "../../components/loading-fetch-data/LoadingFetchData";
import { useSelector } from "react-redux";

function Profile(props) {
  const { loading, user } = useSelector((state) => state.User);

  return (
    <React.Fragment>
      <div className="InstructorProfile" data-aos="fade-right">
        {loading ? (
          <LoadingFetchData />
        ) : (
          <div className="container">
            <div className="box">
              <h5>All Details</h5>
              <p>Tha is your general Deatils</p>
            </div>
            <div className="box">
              <h5>Name</h5>
              <input type="text" readOnly value={user.name} />
            </div>
            <div className="box">
              <h5>National ID </h5>
              <input type="text" readOnly value={user.national_ID} />
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}
export default Profile;
