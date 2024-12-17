import { useLocation } from "react-router-dom";

const PersonsDetails = () => {
  const location = useLocation();
  const { userData } = location.state || {};

  if (!userData) {
    return (
      <div className="text-center text-red-600 mt-20">
        <h2>No user data found!</h2>
      </div>
    );
  }

  const { personalDetails, EmergencyPersonDetails } = userData.donorDetails;

  return (
    <div className="flex justify-center items-center min-h-screen  ">
      <div className="w-full max-w-4xl p-6  shadow-lg rounded-lg bg-green-50">
        {/* Header */}
        <h1 className="text-3xl font-extrabold text-center text-green-700 mb-8">
          Donor Information
        </h1>

        {/* Donor Personal Details */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Personal Details
          </h2>
          <div className="grid grid-cols-2 gap-4 text-gray-700">
            <p>
              <strong>Name:</strong> {personalDetails.name}
            </p>
            <p>
              <strong>Age:</strong> {personalDetails.age}
            </p>
            <p>
              <strong>Gender:</strong> {personalDetails.gender}
            </p>
            <p>
              <strong>Blood Group:</strong> {personalDetails.bloodGroup}
            </p>
            <p>
              <strong>Aadhar:</strong> {personalDetails.aadhar}
            </p>
            <p>
              <strong>Address:</strong> {personalDetails.address}, {personalDetails.state}
            </p>
            <p>
              <strong>Email:</strong> {personalDetails.email}
            </p>
            <p>
              <strong>Phone:</strong> {personalDetails.phone}
            </p>
          </div>
        </div>

        {/* Separator */}
        <hr className="border-t-2 border-green-400 mb-6" />

        {/* Emergency Contact Details */}
        <div>
          <h2 className="text-2xl font-semibold text-red-600 mb-4">
            Emergency Contact
          </h2>
          <div className="grid grid-cols-2 gap-4 text-gray-700">
            <p>
              <strong>Name:</strong> {EmergencyPersonDetails.Ename}
            </p>
            <p>
              <strong>Relationship:</strong> {EmergencyPersonDetails.Erelationship}
            </p>
            <p>
              <strong>Address:</strong> {EmergencyPersonDetails.Eaddress}
            </p>
            <p>
              <strong>Email:</strong> {EmergencyPersonDetails.Eemail}
            </p>
            <p>
              <strong>Phone:</strong> {EmergencyPersonDetails.Ephone}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonsDetails;

