function NotificationCard({ item }) {
  return (
    <div className="card">
      <h3>{item.Type}</h3>
      <p>{item.Message}</p>
      <button onClick={() => alert('Viewing details...')}>View</button>
    </div>
  );
}

export default NotificationCard;