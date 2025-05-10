let amenitiesShownPerPage = 3;
var sortedAmenities = [];

const bonfireNightEvent = {
    title: 'Bonfire Night',
    date: new Date(2025, 10, 5),
    time: '6pm - 8pm',
    description: `On Sunday 5 November, Plymouth Hoe will be lit up with a spectacular Bonfire and Fireworks display, with thanks to sponsors Plymouth Waterfront Partnership.

    Make your way to the stunning backdrop of Smeaton's Tower lighthouse, where the bonfire awaits. You will also spot Guy Fawkes sitting on top of the bonfire, created by the amazing team at Plymouth Play Scrapstore! Bask in the heat from the grand lighting of the bonfire from 7.30pm. 

    At 8pm, the sky will burst into a dazzling display of fireworks. Watch in awe as rockets, fountains, and firecrackers paint the Plymouth sky from the Royal Citadel.`,
    slug: 'bonfire-night-2025',
    img_src: 'https://eu-assets.simpleview-europe.com/plymouth2016/imageresizer/?image=%2Fdmsimgs%2Fbonfirenight_627251747.jpg&action=ProductDetailNew',
    img_alt: 'Fireworks exploding near the iconic Smeaton Tower Lighthouse'
};

const britishFireworksChampionshipEvent = {
    title: 'British Fireworks Championships',
    date: new Date(2025, 7, 13),
    time: '6:30pm - 7:30pm',
    description: `The British Firework Championships on Wednesday 13 and Thursday 14 August 2025, is a must-see event, showcasing the incredible talent and artistry of six top pyrotechnic companies as the evening turns dark.

    This year, we see the return of the 'Champion of Champions' where six previous winners will be invited back to compete to be crowned top.

    These experts will compete for the coveted championship title, presenting ten-minute displays that will leave you impressed. Beyond the fireworks, immerse yourself in the lively atmosphere of Plymouth Hoe while enjoying the stunning displays above Plymouth Sound.`,
    slug: '../404', // Page not implemented
    img_src: 'https://www.britishfireworks.co.uk/images/stock/2024/plymouth-fireworks-august-2024.jpg',
    img_alt: 'A grand fireworks finale exploding over Plymouth harbour'
};

// https://www.plymouthherald.co.uk/whats-on/whats-on-news/six-epic-bonfire-night-events-9620553

// https://www.visit-tavistock.co.uk/event-details/fireworks-display-by-tavistock-lions-club-3
const tavistockLionsClubFireworksEvent = {
    title: 'Lions Club of Tavistock Fireworks Display',
    date: new Date(2025, 10, 1),
    time: '7pm - 9pm',
    description: `The Lions Club of Tavistock firework display starts at 7pm at Tavistock Football Club. Gates open at 6.15pm so come early and enjoy the Lions' barbecue.`,
    slug: '../404', // Page not implemented
    img_src: 'https://static.wixstatic.com/media/fffdcd_ba6d4965a0cb42bb964a42cbb8015eda~mv2.jpg/v1/fill/w_979,h_552,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/fffdcd_ba6d4965a0cb42bb964a42cbb8015eda~mv2.jpg',
    img_alt: 'Fireworks Display by Tavistock Lions Club'
};

// https://www.eventbrite.co.uk/e/port-eliot-bonfire-fireworks-night-tickets-939538022517
const PortEliotHouseFireworksEvent = {
    title: 'Port Eliot Bonfire and Fireworks Night',
    date: new Date(2025, 10, 2),
    time: '4pm - 10pm',
    description: `Huge Bonfire. Amazing Fireworks. Great Catering. Bouncy Castle. Bars and Music.`,
    slug: '../404', // Page not implemented
    img_src: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F857295959%2F2172068567453%2F1%2Foriginal.20240923-191110?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C360%2C2160%2C1080&s=b175952c1b460582faaf557d5eb17fed',
    img_alt: 'Grand Fireworks Display at Port Eliot House',
};

// https://www.chooseyourevent.co.uk/event/287278/big-bonfire-night-and-firework-display-at-dartington-hall
const bigBonfireNightAndFireworkDisplayEvent = {
    title: 'Dartington Hall Big Bonfire Night',
    date: new Date(2025, 10, 2),
    time: '5pm - 9pm',
    description: `
    Join us for a big bonfire night here on the Dartington Estate this November!

    We’ll have live music, fire sculptures, a spectacular firework display by Firefly plus a BBQ, street food and hot and spicy drinks.

    The Mayor of Totnes will be lighting the fire at 5:30pm with fireworks from 7:30pm.

    FireFly Light and Magic is a local company which has also worked nationally and internationally, providing sculpture and installations as well as designing and delivering spectacular displays for clients as diverse as Paul McCartney, the Levellers and the Duke of Devonshire!
    `,
    slug: '../404', // Page not implemented
    img_src : 'https://images.cye-group.com/assets/270795/big.webp',
    img_alt: 'A Big Bonfire at Dartington Hall'

}

// List of event objects
const events = [
    bonfireNightEvent, 
    britishFireworksChampionshipEvent, 
    tavistockLionsClubFireworksEvent, 
    PortEliotHouseFireworksEvent,
    bigBonfireNightAndFireworkDisplayEvent
];

// Return the HTML used to encapsulate a fireworks event. 
const getFireworkEvent = ({title, description, date, time, slug, img_src, img_alt}) => 
    `
<a class="clickable-firework-event" href="events/${slug}">
    <div class="firework-event card my-2" 
        style="width: 100%;"
        data-title="${title}"
        data-description="${description}"
        data-date="${date}"
        data-time="${time}"
        data-slug="${slug}"
        data-img-src="${img_src}"
        data-img-alt="${img_alt}">
        <div class="row g-0 h-100">
            <div class="col-12 col-md overflow-hidden order-1 order-md-0" style="max-height: 16em; height: 16em;">
                <div class="card-body d-flex flex-column justify-content-between h-100">
                    <div class="overflow-hidden mb-3">
                        <h3 class="card-title">${title}</h3>
                        <div class="card-subtitle mb-2 text-muted d-flex flex-wrap w-50">
                            <div class="flex-fill flex-shrink-0">
                                <i class="bi bi-calendar-event"></i>
                                <span class="mx-2">${date.toLocaleDateString(undefined, {year: "numeric", month: "long", day: "numeric"})}</span>
                            </div>
                            <div class="flex-fill flex-shrink-0">
                                <i class="bi bi-clock"></i>
                                <span class="mx-2">${time}</span>
                            </div>
                        </div>
                        <div class="h-100">
                            <p class="card-text">${description}</p>
                        </div>
                    </div>

                    <div class="ms-auto me-0" style="width: fit-content;">
                        <button class="btn btn-primary d-block">More Details</button>
                    </div>
                </div>
            </div>

            <div class="firework-event-image overflow-hidden position-relative order-0 order-md-1">
                <img class="h-100 position-absolute start-50 top-50 translate-middle" role="img" aria-label="${img_alt}" alt="${img_alt}" 
                    src="${img_src}" />
            </div>
        </div>
    </div>
</a>
`;

document.addEventListener("DOMContentLoaded", () => {
    const eventSort = document.getElementById("event-sort-order");
    const eventSearch = document.getElementById("event-search");
    const viewMore = document.getElementById("view-more");

    const params = new URLSearchParams(document.location.search);
    const query = params.has('q') ? params.get('q'): '';
    const sort = params.has('sort') ? params.get('sort'): 'latest';

    eventSearch.value = query;
    eventSort.value = sort;
    eventSort.onchange = () => document.forms.namedItem("search").submit();

    // Determine which sort function to use based on the sort parameter.
    let sortFn;
    switch (sort) {
        case 'earliest':
            sortFn = (a, b) => a.date - b.date;
            break;
        case 'latest':
            sortFn = (a, b) => b.date - a.date;
            break;
        case 'a-z':
            sortFn = (a, b) => a.title.localeCompare(b.title);
            break;
        case 'z-a':
            sortFn = (a, b) => b.title.localeCompare(a.title);
            break;
        default:
            sortFn = (a, b) => a.date - b.date;
            break;
    }

    sortedAmenities = events.filter((event) => event.title.toLocaleLowerCase().match(query.toLocaleLowerCase()));
    sortedAmenities.sort(sortFn);

    if (sortedAmenities.length > amenitiesShownPerPage){
        viewMore.classList.remove('d-none');
    }

    viewMore.onclick = () => {
        showEvents(amenitiesShownPerPage, amenitiesShownPerPage+5);
        amenitiesShownPerPage += 5;

        if (sortedAmenities.length <= amenitiesShownPerPage){
            viewMore.classList.add('d-none');
        }
    }

    showEvents(0, amenitiesShownPerPage);
});

let showEvents = (start, stop) => {
    const eventList = document.getElementById("event-list");

    sortedAmenities.slice(start, stop).forEach((event) => {
        eventList.insertAdjacentHTML('beforeend', getFireworkEvent(event));
    });
}