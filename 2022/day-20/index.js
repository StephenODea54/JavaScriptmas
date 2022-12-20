import podcasts from "./data.js";

const getFreePodcasts = (data) => {
    const freePodcasts = data.filter(el => !el.paid);
    const result = freePodcasts.map(el => (
        {
            title: el.title,
            rating: el.rating,
            paid: el.paid
        }
    ));
    
    return result
}

console.log(getFreePodcasts(podcasts))
