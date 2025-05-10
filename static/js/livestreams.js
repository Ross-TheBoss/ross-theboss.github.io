document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(document.location.search);
    const queries = params.has('q') ? params.getAll('q'): [];

    // Filter the livestreams by event - only show livestreams relating to any of the specified events. 
    if (queries.length != 0){
        // Hide videos that aren't relevant for the specified events.
        Array.from(document.querySelectorAll(`[data-event]`)).filter((livestream) => !queries.includes(livestream.dataset.event))
        .forEach((element) => {
            element.classList.add("d-none");
        });

        // Remove a year shelf entirely if there are no videos for it.
        Array.from(document.querySelectorAll(`.shelf`)).filter((shelf) => 
            document.querySelectorAll(`[data-event][data-year='${shelf.dataset.year}']:not(.d-none)`).length == 0)
            .forEach((shelf) => {
                shelf.classList.add("d-none");
            })
    }
});