document.addEventListener('DOMContentLoaded', function() {
  let calendarEl = document.getElementById('calendar');
  let calendar = new FullCalendar.Calendar(calendarEl, {
    firstDay: 1,
    themeSystem: 'bootstrap5',
    editable: true,
    selectable: true,
    businessHours: true,
    dayMaxEvents: true,
    events: [
    {
    title: 'Bonfire Night',
    start: '2025-11-05',
    url: '/events/bonfire-night-2025'
    },
    ], eventClick: function(info) {
    info.jsEvent.preventDefault();
    if (info.event.url) {
      window.open(info.event.url);
    }
    }
  });
  calendar.render();
});