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
      url: 'events/bonfire-night-2025'
      },
      {
        title: 'British Fireworks Championships',
        start: '2025-08-13',
        url: '404'
      },
      {
        title: 'Lions Club of Tavistock Fireworks Display',
        start: '2025-11-01',
        url: '404'
      },
      {
        title: 'Bonfire and Fireworks Night at Port Eliot House & Gardens',
        start: '2025-11-02',
        url: '404'
      },
      {
        title: 'Big Bonfire Night and Firework Display At Dartington Hall',
        start: '2025-11-02',
        url: '404'
      },
    ], 
    eventColor: '#fd6914',
    eventClick: function(info) {
    info.jsEvent.preventDefault();
    if (info.event.url) {
      window.open(info.event.url);
    }
    }
  });
  calendar.render();
});