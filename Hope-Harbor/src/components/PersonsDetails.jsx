import { useLocation } from "react-router-dom"; 


const PersonsDetails=()=>{

  const location = useLocation();
  const { userData } = location.state || {};

  

  return (
    <>
    <div className=" flex justify-center items-center flex-col  p-4 my-16 mx-48 border-2 border-green-700 rounded bg-green-50 text-green-700">
              <h2 className="text-xl font-bold">Registered User Details:</h2>
              <p>
                <strong>Name:</strong> {userData.donorDetails.personalDetails.name}
              </p>
              <p>
                <strong>Aadhar:</strong> {userData.donorDetails.personalDetails.aadhar}
              </p>
              <p>
                <strong>Blood Group:</strong> {userData.donorDetails.personalDetails.bloodGroup}
              </p>
              <p>
                <strong>Age:</strong> {userData.donorDetails.personalDetails.age}
              </p>
              <p>
                <strong>Emergency Contact:</strong>{" "}
                {userData.donorDetails.
EmergencyPersonDetails.Ename} ({userData.donorDetails.
  EmergencyPersonDetails.Ephone})
              </p>
            </div>
    </>
  )
}

export default PersonsDetails;