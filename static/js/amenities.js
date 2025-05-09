let amenitiesShownPerPage = 4;
var sortedAmenities = [];

const cosmicKitchenAmenity = {
    title: 'Cosmic Kitchen',
    slug: '../404',
    img_src: 'https://i2-prod.plymouthherald.co.uk/incoming/article5687981.ece/ALTERNATES/s615b/1_EBP_DCM_220721COSMICKITCHEN__001JPG.jpg',
    img_alt: 'Inside Cosmic Kitchen.',
    distances: {'bonfire-night': 550, 'british-fireworks-championships': 550}, // 550m from The Hoe, Plymouth (Bonfire Night)
    price: 4, // Arbitrary price ranking
    travelTimes: {'bonfire-night': 9, 'british-fireworks-championships': 9}, // 9 minutes from The Hoe, Plymouth (Bonfire Night)
    events: ['bonfire-night', 'british-fireworks-championships'],
};

// Fictional on-site face painting pop up shop.
const facePaintingAmenity = {
    title: 'Face Painting',
    slug: '../404',
    img_src: 'https://i.pinimg.com/originals/9f/0b/f9/9f0bf9829d017fe5efca1cbc41960477.jpg',
    img_alt: 'A woman\'s face painted with a flowery pattern.',
    distances: {'bonfire-night': 100, 'lions-club-of-tavistock-fireworks-display': 50}, // 100m from The Hoe, Plymouth (Bonfire Night)
    price: 2,
    travelTimes: {'bonfire-night': 1, 'lions-club-of-tavistock-fireworks-display': 1}, // 1 minute from The Hoe, Plymouth (Bonfire Night)
    events: ['bonfire-night'],
};

const fishNTripsAmenity = {
    title: 'Fish n Trips',
    slug: '../404',
    img_src: 'static/images/gone-fishing.jpg',
    img_alt: 'A rustic sign hanging from a door with \'gone fishing\' on it.',
    distances: {'bonfire-night': 650, 'british-fireworks-championships': 650}, // 650m from The Hoe, Plymouth (Bonfire Night)
    price: 8,
    travelTimes: {'bonfire-night': 10, 'british-fireworks-championships': 10}, // 10 minutes from The Hoe, Plymouth (Bonfire Night)
    events: ['bonfire-night', 'british-fireworks-championships'],
};

const joeGinAmenity = {
    title: 'Plymouth Gin',
    slug: '../404',
    img_src: 'https://m.media-amazon.com/images/S/aplus-media-library-service-media/4055cbe4-04f1-460c-b838-59f23236911f.__CR0,0,1500,1500_PT0_SX300_V1___.jpg',
    img_alt: 'A bottle of plymouth gin alongside 2 wine glasses full of gin, lemon and ice.',
    distances: {'bonfire-night': 500, 'british-fireworks-championships': 500}, // 500m from The Hoe, Plymouth (Bonfire Night)
    price: 10,
    travelTimes: {'bonfire-night': 9, 'british-fireworks-championships': 9}, // 9 minutes from The Hoe, Plymouth (Bonfire Night)
    events: ['bonfire-night', 'british-fireworks-championships'],
};

const riseAndGrindPlymouthAmenity = {
    title: 'Rise and Grind Plymouth',
    slug: '../404',
    img_src: 'https://i2-prod.plymouthherald.co.uk/incoming/article7131490.ece/ALTERNATES/s1200/0_AE_DCM_26_05_2022_risegrind_03jpeg.jpg',
    img_alt: 'The double door grand entrance to the rise and grind coffee shop.',
    distances: {'bonfire-night': 550, 'british-fireworks-championships': 550}, // 550m from The Hoe, Plymouth (Bonfire Night)
    price: 7,
    travelTimes: {'bonfire-night': 8, 'british-fireworks-championships': 8}, // 8 minutes from The Hoe, Plymouth (Bonfire Night)
    events: ['bonfire-night', 'british-fireworks-championships'],
};

const waypointBarAndBistroAmenity = {
    title: 'Waypoint Bar and Bistro',
    slug: 'waypoint-bar-and-bistro',
    img_src: 'https://img.restaurantguru.com/w550/h367/r8d0-Waypoint-Bar-and-Bistro-interior.jpg',
    img_alt: 'A view through glass painted with the waypoint compass logo into the dining area.',
    distances: {'bonfire-night': 1500, 'british-fireworks-championships': 1500}, // 1.5km from The Hoe, Plymouth (Bonfire Night)
    price: 5,
    travelTimes: {'bonfire-night': 21, 'british-fireworks-championships': 21}, // 21 minutes from The Hoe, Plymouth (Bonfire Night)
    events: ['bonfire-night', 'british-fireworks-championships'],
};

// https://restaurantguru.com/Proper-Pizza-Tavistock

const properPizzaAmenity = {
    title: 'Proper Pizza',
    slug: 'proper-pizza',
    img_src: 'https://img.restaurantguru.com/r27b-pizza-Proper-Pizza-Tavistock-2022-10.jpg',
    img_alt: 'A meat feast pizza with pepperoni, ham and sausage, reviewed by Restaurant Guru.',
    distances: {'lions-club-of-tavistock-fireworks-display': 1500},
    price: 5,
    travelTimes: {'lions-club-of-tavistock-fireworks-display': 20},
    events: ['lions-club-of-tavistock-fireworks-display'],
};

// https://www.tripadvisor.com/Restaurant_Review-g190767-d1086372-Reviews-Cafe_Liaison-Tavistock_Dartmoor_National_Park_Devon_England.html

const cafeLiaison = {
    title: 'Cafe Liaison',
    slug: 'cafe-liaison',
    img_src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/f2/f1/93/from-the-outside.jpg',
    img_alt: 'Cafe Liaison from the outside.',
    distances: {'lions-club-of-tavistock-fireworks-display': 2100},
    price: 4,
    travelTimes: {'lions-club-of-tavistock-fireworks-display': 29},
    events: ['lions-club-of-tavistock-fireworks-display'],
};

const amenities = [
    cosmicKitchenAmenity, facePaintingAmenity, fishNTripsAmenity, joeGinAmenity,
    riseAndGrindPlymouthAmenity, waypointBarAndBistroAmenity, properPizzaAmenity, cafeLiaison
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
    // Load the stored amenity layout. 
    let amenityView = localStorage.getItem("amenityLayout");
    if (amenityView == null) amenityView = "grid";
    changeAmenityView(amenityView);

    // Set event handlers to manage changes to the amenity layout.
    let amenityGridBtn = document.getElementById("amenityGridBtn");
    let amenityListBtn = document.getElementById("amenityListBtn");

    amenityGridBtn.onclick = () => changeAmenityView("grid");
    amenityListBtn.onclick = () => changeAmenityView("list");

    // Handle sorting of the amenities.
    const amenitySort = document.getElementById("amenity-sort-order");
    const viewMore = document.getElementById("view-more");

    const params = new URLSearchParams(document.location.search);
    const queries = params.has('q') ? params.getAll('q'): [];
    const sort = params.has('sort') ? params.get('sort'): 'closest';

    amenitySort.value = sort;
    amenitySort.onchange = () => document.forms.namedItem("search").submit();

    console.log(queries);

    // Determine which sort function to use based on the sort parameter.
    let sortFn;
    switch (sort) {
        case 'closest':
            sortFn = (a, b) => mean_difference_to_events(queries, a.distances) - mean_difference_to_events(queries, b.distances);
            break;
        case 'cheapest':
            sortFn = (a, b) => a.price - b.price;
            break;
        case 'fastest':
            sortFn = (a, b) => mean_difference_to_events(queries, a.travelTimes) - mean_difference_to_events(queries, b.travelTimes);
            break;
        default:
            sortFn = (a, b) => mean_difference_to_events(queries, a.distances) - mean_difference_to_events(queries, b.distances);
            break;
    }

    // By default include all amenities.
    if (queries.length != 0){
        sortedAmenities = amenities.filter((amenity) => queries.every((query) => amenity.events.includes(query)));
    } else {
        sortedAmenities = amenities.slice();
    }
    sortedAmenities.sort(sortFn);

    // 'View More' button logic.
    if (sortedAmenities.length > amenitiesShownPerPage){
        viewMore.classList.remove('d-none');
    }

    viewMore.onclick = () => {
        showAmenities(amenitiesShownPerPage, amenitiesShownPerPage+4);
        amenitiesShownPerPage += 4;

        if (sortedAmenities.length <= amenitiesShownPerPage){
            viewMore.classList.add('d-none');
        }
    }

    showAmenities(0, amenitiesShownPerPage);
});

// Returns the mean travel time/distance/any other quantity from the amenity to the queried events.
const mean_difference_to_events = (queries, distances) => {
    let queriedEvents = queries.length == 0 ? Object.keys(distances): queries;

    return mean(queriedEvents.map((event) => distances[event]).filter((event) => event));
}

const mean = (array) => {
    return array.reduce((acc, x) => acc + x) / array.length;
}

let changeAmenityView = (to) => {
    let from = to === "grid" ? "list": "grid";

    localStorage.setItem("amenityLayout", to);

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