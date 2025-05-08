let amenitiesShownPerPage = 4;
var sortedAmenities = [];

const cosmicKitchenAmenity = {
    title: 'Cosmic Kitchen',
    image: 'https://i2-prod.plymouthherald.co.uk/incoming/article5687981.ece/ALTERNATES/s615b/1_EBP_DCM_220721COSMICKITCHEN__001JPG.jpg',
    slug: '../404'
};

const facePaintingAmenity = {
    title: 'Face Painting',
    image: 'https://i.pinimg.com/originals/9f/0b/f9/9f0bf9829d017fe5efca1cbc41960477.jpg',
    slug: '../404'
};

const fishNTripsAmenity = {
    title: 'Fish n Trips',
    image: 'static/images/gone-fishing.jpg',
    slug: '../404'
};

const joeGinAmenity = {
    title: 'Plymouth Gin',
    image: 'https://m.media-amazon.com/images/S/aplus-media-library-service-media/4055cbe4-04f1-460c-b838-59f23236911f.__CR0,0,1500,1500_PT0_SX300_V1___.jpg',
    slug: '../404'
};

const riseAndGrindPlymouthAmenity = {
    title: 'Rise and Grind Plymouth',
    image: 'https://i2-prod.plymouthherald.co.uk/incoming/article7131490.ece/ALTERNATES/s1200/0_AE_DCM_26_05_2022_risegrind_03jpeg.jpg',
    slug: '../404'
};

const waypointBarAndBistroAmenity = {
    title: 'Waypoint Bar and Bistro',
    image: 'https://img.restaurantguru.com/w550/h367/r8d0-Waypoint-Bar-and-Bistro-interior.jpg',
    slug: 'waypoint-bar-and-bistro'
};

const amenities = [
    cosmicKitchenAmenity, facePaintingAmenity, fishNTripsAmenity, 
    joeGinAmenity, riseAndGrindPlymouthAmenity, waypointBarAndBistroAmenity
];

const getAmenity = ({title, image, slug}) => `
<div class="flex-shrink-0 amenity-card border border-2 border-primary clickable-amenity-card">
    <div class="ratio ratio-4x3">
        <img class="bd-placeholder-img card-img-top object-fit-cover" src="${image}" width="100%" height="100%"></img>
    </div>

    <div class="z-1 pe-none fw-bold d-flex amenity-card-overlay">
        <h2 class="ms-2 me-2 mt-2 mb-auto">${title}</h2>
    </div>

    <div class="z-2 position-absolute d-flex pe-none bottom-0 end-0">
        <a class="btn btn-primary me-2 mb-2 pe-auto" href="amenities/${slug}">More Details</a>
    </div>

    <a class="z-1 position-absolute w-100 h-100 start-0 top-0 pe-auto" href="amenities/${slug}"></a>
</div>
`;

document.addEventListener("DOMContentLoaded", () => {
    let amenityGridBtn = document.getElementById("amenityGridBtn");
    let amenityListBtn = document.getElementById("amenityListBtn");

    const viewMore = document.getElementById("view-more");

    amenityGridBtn.onclick = () => changeAmenityView("grid");
    amenityListBtn.onclick = () => changeAmenityView("list");

    sortedAmenities = amenities.slice();

    if (sortedAmenities.length <= amenitiesShownPerPage){
        viewMore.style.display = 'none';
    }

    viewMore.onclick = () => {
        showAmenities(amenitiesShownPerPage, amenitiesShownPerPage+5);
        amenitiesShownPerPage += 4;

        if (sortedAmenities.length <= amenitiesShownPerPage){
            viewMore.style.display = 'none';
        }
    }

    showAmenities(0, amenitiesShownPerPage);
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

let showAmenities = (start, stop) => {
    const amenityCards = document.getElementById("amenityCards");

    sortedAmenities.slice(start, stop).forEach((amenity) => {
        amenityCards.insertAdjacentHTML('beforeend', getAmenity(amenity));
    });
}