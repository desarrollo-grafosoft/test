import "react";

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
  ];

  return (
    <div className="recent-activity">
      <h3>Reciente</h3>
      {activities.map((act, index) => (
        <p key={index}>
          <strong>{act.user}</strong> {act.action} <em>{act.item}</em> -{" "}
          {act.date}
        </p>
      ))}
    </div>
  );
};

export default RecentActivity;
