import { Link, useParams } from "react-router-dom";
import "../../../styles/profiledetails.scss";
import { IMAGES } from "../../../assets/images";
import Profileheader from "../../component/Profileheader";
import { useGetRideById } from "../../../lib/query";
import ProfileTable from "../../component/ProfileTable";
import Loader from "../../component/Loader";

const ProfileDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError, error } = useGetRideById(id);

  console.log('The fetched data:', data);
  if (isLoading) return <Loader />;
  if (isError) {
    return <div>Error: {error instanceof Error ? error.message : 'Failed to load data'}</div>;
  }

  // Render the profile data
  return (
    <div className="profile-container">
      <Link to={'/home'} className="link">
      <div className="back">
        <img src={IMAGES.arrow_back} alt="Back" />
        <p>Back to Users</p>
      </div>
      </Link>

      <div className="profile_user_details">
      <h1>Users Details</h1>

      <div className="profile_buttons">
         <button className="blacklist">Blacklist User</button>
         <button className="activate">Activate User</button>
      </div>
      </div>
      

      <Profileheader data={data}/>
       <ProfileTable data={data}/>
    </div>
  );
};

export default ProfileDetails;
