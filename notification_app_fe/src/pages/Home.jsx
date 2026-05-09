import { useEffect, useState } from "react";
import { fetchNotifications } from "../api/notifications";
import NotificationCard from "../components/NotificationCard";
import FilterBar from "../components/FilterBar";

const predefinedMessages = {
  All: "Here are all your latest campus updates in one place.",
  Alert: "URGENT: Please review these important alerts carefully.",
  Event: "Join us! Check out what's happening around the campus.",
  Announcement: "General announcements and information for your attention.",
  Warning: "WARNING: Stay cautious and read these critical notices."
};

const mockMessages = [
  { ID: 1, Type: "Alert", Message: "Campus-wide fire drill scheduled for tomorrow at 10:00 AM.", Timestamp: new Date().toLocaleString() },
  { ID: 2, Type: "Event", Message: "Annual Tech Fest is happening this weekend! Register now.", Timestamp: new Date(Date.now() - 86400000).toLocaleString() },
  { ID: 3, Type: "Announcement", Message: "Library hours have been extended until midnight during finals week.", Timestamp: new Date(Date.now() - 172800000).toLocaleString() },
  { ID: 4, Type: "Warning", Message: "Main parking lot will be closed for maintenance starting Monday.", Timestamp: new Date(Date.now() - 3600000).toLocaleString() }
];

function Home() {
  const [notifications, setNotifications] = useState(mockMessages);
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    fetchNotifications().then(data => {
      if (data && data.length > 0) {
        setNotifications(data);
      }
    });
  }, []);

  let filteredNotifications = notifications;

  if (activeFilter !== 'All') {
    filteredNotifications = filteredNotifications.filter(item => item.Type === activeFilter);
  }

  return (
    <div className="container">
      <h1>Notifications Dashboard</h1>

      <FilterBar 
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />

      <div className="predefined-msg">
        {predefinedMessages[activeFilter]}
      </div>

      {notifications.length === 0 ? (
        <p>Loading notifications...</p>
      ) : filteredNotifications.length === 0 ? (
        <p>No notifications found for this category.</p>
      ) : (
        <div>
          {filteredNotifications.map((item, index) => (
            <NotificationCard key={index} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;