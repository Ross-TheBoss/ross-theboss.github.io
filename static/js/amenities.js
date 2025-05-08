let amenitiesShownPerPage = 4;
var sortedAmenities = [];

const cosmicKitchenAmenity = {
    title: 'Cosmic Kitchen',
    slug: '../404',
    img_src: 'https://i2-prod.plymouthherald.co.uk/incoming/article5687981.ece/ALTERNATES/s615b/1_EBP_DCM_220721COSMICKITCHEN__001JPG.jpg',
    img_alt: 'Inside Cosmic Kitchen.'
};

const facePaintingAmenity = {
    title: 'Face Painting',
    slug: '../404',
    img_src: 'https://i.pinimg.com/originals/9f/0b/f9/9f0bf9829d017fe5efca1cbc41960477.jpg',
    img_alt: 'A woman\'s face painted with a flowery pattern.'
};

const fishNTripsAmenity = {
    title: 'Fish n Trips',
    slug: '../404',
    img_src: 'static/images/gone-fishing.jpg',
    img_alt: 'A rustic sign hanging from a door with \'gone fishing\' on it.'
};

const joeGinAmenity = {
    title: 'Plymouth Gin',
    slug: '../404',
    img_src: 'https://m.media-amazon.com/images/S/aplus-media-library-service-media/4055cbe4-04f1-460c-b838-59f23236911f.__CR0,0,1500,1500_PT0_SX300_V1___.jpg',
    img_alt: 'A bottle of plymouth gin alongside 2 wine glasses full of gin, lemon and ice.'
};

const riseAndGrindPlymouthAmenity = {
    title: 'Rise and Grind Plymouth',
    slug: '../404',
    img_src: 'https://i2-prod.plymouthherald.co.uk/incoming/article7131490.ece/ALTERNATES/s1200/0_AE_DCM_26_05_2022_risegrind_03jpeg.jpg',
    img_alt: 'The double door grand entrance to the rise and grind coffee shop.'
};

const waypointBarAndBistroAmenity = {
    title: 'Waypoint Bar and Bistro',
    slug: 'waypoint-bar-and-bistro',
    img_src: 'https://img.restaurantguru.com/w550/h367/r8d0-Waypoint-Bar-and-Bistro-interior.jpg',
    img_alt: 'A view through glass painted with the waypoint compass logo into the dining area.'
};

const amenities = [
    cosmicKitchenAmenity, facePaintingAmenity, fishNTripsAmenity, 
    joeGinAmenity, riseAndGrindPlymouthAmenity, waypointBarAndBistroAmenity
];

const getAmenity = ({title, slug, img_src, img_alt}) => `
<div class="flex-shrink-0 amenity-card border border-2 border-primary clickable-amenity-card">
    <div class="ratio ratio-4x3">
        <img class="object-fit-cover" src="${img_src}" alt="${img_alt}" width="100%" height="100%"></img>
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