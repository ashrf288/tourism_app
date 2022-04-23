

destinations = [
    {
        city: "Eiffel Tower, Paris",
        img: "https://www.planetware.com/wpimages/2021/10/world-tourist-attractions-eiffel-tower-flowers-spring.jpg",
        desc: "The symbol of Paris and one of the most photographed structures in the world, a visit to the Eiffel Tower is a must for all travelers. Few landmarks inspire such a passion for travel as this single iron structure.",
        link:"https://en.wikipedia.org/wiki/Eiffel_Tower"

    },
    {
        city: "The Colosseum, Rome",
        img: "https://www.planetware.com/wpimages/2020/08/top-attractions-in-the-world-italy-rome-colosseum.jpg",
        desc: "The most famous and largest structure still standing from the Roman Empire, the Colosseum is also the biggest attraction of modern-day Rome. It's been a bucket-list destination of travelers for generations. And it does not disappoint.",
        link: "https://en.wikipedia.org/wiki/Colosseum"

    },
    {
        city: "Statue of Liberty, New York City",
        img: "https://www.planetware.com/wpimages/2020/08/top-attractions-in-the-world-new-york-statue-of-liberty.jpg",
        desc: "Of all the attractions in New York City, this is one every tourist must see. The best thing to do at the Statue of Liberty is to take a ride up to her crown and soak up the view over the city. Access to the statue is via ferry, also a highlight of a visit.",
        link: "https://en.wikipedia.org/wiki/Statue_of_Liberty"

    },
    {
        city: "Machu Picchu, Peru",
        img: "https://www.planetware.com/wpimages/2020/08/top-attractions-in-the-world-peru-machu-picchu-overview.jpg",
        desc: "Much of the attraction comes from its location, high in the jungle-clad mountains of Peru. Set on a high plateau with soaring green mountains, the setting is surreal. The sheer tenacity of the original builders to create this amazing place in what would have been impenetrable jungle, is, in itself, impressive.",
        link: "https://en.wikipedia.org/wiki/Machu_Picchu"

    },
    {
        city: "The Taj Mahal, India",
        img: "https://www.planetware.com/wpimages/2020/08/top-attractions-in-the-world-india-taj-mahal.jpg",
        desc: "The Taj Mahal is the one sight in India that all travelers need to see. The country is filled with incredible cities and fabulous places to visit, but the 17th-century Taj Mahal is the one place that says you've been to India.",
        link: "https://en.wikipedia.org/wiki/Taj_Mahal"

    },
]


document.querySelector(".destinations_cards").innerHTML = `
${destinations.map(dest => {

    return (
        `<div class="card  dest_card">
  <img class="card-img-top" src=${ dest.img } alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${ dest.city}</h5>
    <p class="card-text">${dest.desc}</p>
    <a href="${ dest.link }" class="btn btn-primary">more details</a>
  </div>
</div>`
    )


})}

`