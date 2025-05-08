let amenitiesShownPerPage = 4;
var sortedAmenities = [];

const cosmicKitchenAmenity = {
    title: 'Cosmic Kitchen',
    slug: '../404',
    img_src: 'https://i2-prod.plymouthherald.co.uk/incoming/article5687981.ece/ALTERNATES/s615b/1_EBP_DCM_220721COSMICKITCHEN__001JPG.jpg',
    img_alt: 'Inside Cosmic Kitchen.',
    distance: 550, // 550m from The Hoe, Plymouth
    price: 4, // Arbitrary price ranking
    travelTime: 9, // 9 minutes
};

// Fictional on-site face painting pop up shop.
const facePaintingAmenity = {
    title: 'Face Painting',
    slug: '../404',
    img_src: 'https://i.pinimg.com/originals/9f/0b/f9/9f0bf9829d017fe5efca1cbc41960477.jpg',
    img_alt: 'A woman\'s face painted with a flowery pattern.',
    distance: 100, // 100m
    price: 2,
    travelTime: 1, // 1 minute
};

const fishNTripsAmenity = {
    title: 'Fish n Trips',
    slug: '../404',
    img_src: 'static/images/gone-fishing.jpg',
    img_alt: 'A rustic sign hanging from a door with \'gone fishing\' on it.',
    distance: 650, // 650m from The Hoe, Plymouth
    price: 8,
    travelTime: 10, // 10 minutes
};

const joeGinAmenity = {
    title: 'Plymouth Gin',
    slug: '../404',
    img_src: 'https://m.media-amazon.com/images/S/aplus-media-library-service-media/4055cbe4-04f1-460c-b838-59f23236911f.__CR0,0,1500,1500_PT0_SX300_V1___.jpg',
    img_alt: 'A bottle of plymouth gin alongside 2 wine glasses full of gin, lemon and ice.',
    distance: 500, // 500m from The Hoe, Plymouth 
    price: 10,
    travelTime: 9, // 9 minutes
};

const riseAndGrindPlymouthAmenity = {
    title: 'Rise and Grind Plymouth',
    slug: '../404',
    img_src: 'https://i2-prod.plymouthherald.co.uk/incoming/article7131490.ece/ALTERNATES/s1200/0_AE_DCM_26_05_2022_risegrind_03jpeg.jpg',
    img_alt: 'The double door grand entrance to the rise and grind coffee shop.',
    distance: 550, // 550m from The Hoe, Plymouth
    price: 7,
    travelTime: 8, // 8 minutes
};

const waypointBarAndBistroAmenity = {
    title: 'Waypoint Bar and Bistro',
    slug: 'waypoint-bar-and-bistro',
    img_src: 'https://img.restaurantguru.com/w550/h367/r8d0-Waypoint-Bar-and-Bistro-interior.jpg',
    img_alt: 'A view through glass painted with the waypoint compass logo into the dining area.',
    distance: 1500, // 1.5km from The Hoe, Plymouth
    price: 5,
    travelTime: 21, // 21 minutes
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

    amenityGridBtn.onclick = () => changeAmenityView("grid");
    amenityListBtn.onclick = () => changeAmenityView("list");

    const amenitySort = document.getElementById("amenity-sort-order");
    const amenitySearch = document.getElementById("amenity-search");
    const viewMore = document.getElementById("view-more");

    const params = new URLSearchParams(document.location.search);
    const query = params.has('q') ? params.get('q'): '';
    const sort = params.has('sort') ? params.get('sort'): 'closest';

    amenitySearch.value = query;
    amenitySort.value = sort;

    // Determine which sort function to use based on the sort parameter.
    let sortFn;
    switch (sort) {
        case 'closest':
            sortFn = (a, b) => a.distance - b.distance;
            break;
        case 'cheapest':
            sortFn = (a, b) => a.price - b.price;
            break;
        case 'fastest':
            sortFn = (a, b) => a.travelTime - b.travelTime;
            break;
        default:
            sortFn = (a, b) => a.distance - b.distance;
            break;
    }

    // filter((amenity) => amenity.title.toLocaleLowerCase().match(query.toLocaleLowerCase()));
    sortedAmenities = amenities.slice();
    sortedAmenities.sort(sortFn);

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