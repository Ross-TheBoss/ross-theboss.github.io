document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(document.location.search);
    const queries = params.has('q') ? params.getAll('q'): [];

    console.log(queries);

    if (queries.length != 0){
        Array.from(document.querySelectorAll(`[data-event]`)).filter((livestream) => !queries.includes(livestream.dataset.event))
        .forEach((element) => {
            element.classList.add("d-none");
        });
    
        Array.from(document.querySelectorAll(`.shelf`)).filter((shelf) => 
            document.querySelectorAll(`[data-event][data-year='${shelf.dataset.year}']:not(.d-none)`).length == 0)
            .forEach((shelf) => {
                shelf.classList.add("d-none");
            })
    }
});