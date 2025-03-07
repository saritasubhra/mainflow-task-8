import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

function TaskCalender({ tasks }) {
  const events = tasks.map((task) => ({
    id: task._id,
    title: task.title,
    start: task.dueDate,
    allDay: true,
    extendedProps: { priority: task.priority },
  }));

  const handleEventClick = (info) => {
    console.log("task completed", info.event.id);
  };
  return (
    <div style={{ width: "100%", marginTop: "20px" }}>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
        eventClick={handleEventClick}
        editable={true}
        selectable={true}
      />
    </div>
  );
}

export default TaskCalender;
