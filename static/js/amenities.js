document.addEventListener("DOMContentLoaded", () => {
    let amenityGridBtn = document.getElementById("amenityGridBtn");
    let amenityListBtn = document.getElementById("amenityListBtn");

    amenityGridBtn.onclick = () => changeAmenityView("grid");
    amenityListBtn.onclick = () => changeAmenityView("list");

});

let changeAmenityView = (to) => {
    let from = to === "grid" ? "list": "grid";
    document.getElementById('amenityCards').classList.replace('amenity-card-' + from, 'amenity-card-' + to);

    document.getElementById('amenityGridBtn').classList.remove('active');
    document.getElementById('amenityListBtn').classList.remove('active');

    if (to === "grid"){
        document.getElementById('amenityGridBtn').classList.add('active');
    } else {
        document.getElementById('amenityListBtn').classList.add('active');
    }
}