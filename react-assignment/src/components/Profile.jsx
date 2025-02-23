import React from 'react';

const Profile = ({ name, email }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold">Profile</h2>
      <p className="mt-2"><strong>Name:</strong> {name}</p>
      <p className="mt-2"><strong>Email:</strong> {email}</p>
    </div>
  );
};

export default Profile;