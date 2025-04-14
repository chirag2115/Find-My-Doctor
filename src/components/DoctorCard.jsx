export default function DoctorCard({ doctor }) {
    return (
      <div className="bg-white shadow-md p-4 rounded-lg border">
        <h3 className="text-xl font-bold text-blue-600">{doctor.name}</h3>
        <p><strong>Specialty:</strong> {doctor.specialty}</p>
        <p><strong>Phone:</strong> {doctor.phone}</p>
        <p><strong>Email:</strong> {doctor.email}</p>
        <p><strong>Address:</strong> {doctor.address}</p>
        <p><strong>City:</strong> {doctor.city}</p>
      </div>
    );
  }
  