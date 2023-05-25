const Reservation = () => {
  const reservationData = [
    {
      id: 1,
      buyerName: "John Doe",
      agent: "Agent 1",
      status: "Approved",
      expirationDate: "2023-06-01",
    },
    {
      id: 2,
      buyerName: "Jane Smith",
      agent: "Agent 2",
      status: "Expired",
      expirationDate: "2023-05-15",
    },
    {
      id: 3,
      buyerName: "Mike Johnson",
      agent: "Agent 1",
      status: "Approved",
      expirationDate: "2023-06-05",
    },
    {
      id: 4,
      buyerName: "Sarah Wilson",
      agent: "Agent 3",
      status: "Approved",
      expirationDate: "2023-06-10",
    },
    {
      id: 5,
      buyerName: "Emily Brown",
      agent: "Agent 2",
      status: "Expired",
      expirationDate: "2023-05-20",
    },
  ];

  return (
    <div className="table-container">
      <h2>Reservation List</h2>
      <table className="reservation-table">
        <thead>
          <tr>
            <th>Reservation ID</th>
            <th>Buyer's Name</th>
            <th>Agent</th>
            <th>Status</th>
            <th>Expiration Date</th>
          </tr>
        </thead>
        <tbody>
          {reservationData.map((reservation) => (
            <tr key={reservation.id}>
              <td>{reservation.id}</td>
              <td>{reservation.buyerName}</td>
              <td>{reservation.agent}</td>
              <td>
                {reservation.status === "Approved" ? (
                  <span className="status-badge approved">Approved</span>
                ) : (
                  <span className="status-badge expired">Expired</span>
                )}
              </td>
              <td>{reservation.expirationDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Reservation;
