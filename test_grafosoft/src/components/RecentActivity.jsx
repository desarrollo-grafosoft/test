import "react";
import "../styles/recentActivity.css"

const RecentActivity = () => {
  const activities = [
    {
      user: "Victoria Evans",
      action: "ha comentado en",
      item: "La Ciudadela",
      date: "May 7",
    },
    {
      user: "Ethan Williams",
      action: "ha comenzado a seguirte",
      date: "May 5",
    },
    {
      user: "Nathan Fox",
      action: "le ha gustado",
      item: "Inolvidable",
      date: "May 1",
    },
    {
      user: "Megan Walsh",
      action: "ha comenzado a seguirte",
      date: "April 29",
    }
  ];

  return (
    <div className="recentActivity">
      <div className="contentR">
        <h3>Reciente</h3>
        <button>Ver Todo</button>
      </div>
      
      {activities.map((act, index) => (
        <div key={index} className="ContentP">
          <p>
          <strong>{act.user}</strong> {act.action} <em>{act.item}</em>
        </p>
        <p className="date">-{" "}{act.date}</p>
        </div>
      ))}
    </div>
  );
};

export default RecentActivity;
