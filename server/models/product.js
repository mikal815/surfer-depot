const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const aggregatePaginate = require('mongoose-aggregate-paginate-v2');

const productSchema = mongoose.Schema({
    model: {
        required: [true, 'You need a board model'],
        type: String,
        unique: 1,
        maxlength: 250
    },
    brand: {
        type: Schema.Types.ObjectId,
        ref: 'Brand',
        required: true
    },
    description: {
        required: [true, 'Ypu need a description'],
        type: String,
        maxlength: 10000
    },
    price: {
        required: true,
        type: Number,
        maxlength: 255
    },
    available: {
        required: [true, 'How many of this model we own'],
        type: Number,
        maxlength: 5000,
        default: 0
    },
    itemSold: {
        required: true,
        type: Number,
        default: 0
    },
    shipping: {
        type: Boolean,
        required: [true, 'Specify if this product has free shipping'],
        default: false
    },
    images: {
        type: Array,
        default: []
    },
    date: {
        type: Date,
        default: Date.now
    }
});

productSchema.plugin(aggregatePaginate);

const Product = mongoose.model('Product', productSchema);
module.exports = {
    Product
}

// {
//     "model":"FRK",
//     "brand":"60d67e6678f5db3f181a0e81",
//     "description":"Shaper Dan Mann says: I saw it all in my head immediately; from the bottom contour to the tail template. The way the volume would distribute through the width, the whole shape… It might actually be the most intuitive design I’ve ever done, probably because I’ve spent so many years both watching Kelly surf, and shaping boards.",
//     "price":820,
//     "available":4,
//     "itemsSold":5,
//     "shipping":true
// },
// {
//     "model":"Gamma",
//     "brand":"60d67e6678f5db3f181a0e81",
//     "description":"The Gamma is Kelly Slater's utility short board! Though Kelly has worked with several great shapers this past year on an array of different shapes, it was his excitement with the speed and quick direction changes provided by this personal design that held his intrigue. His interest in CAD board design, modifying variables, and testing and retesting has lead to the development of an incredible all around short board. With a single concave bottom and slight vee behind the back fin, this board is extremely fast and drivey. The vee out the back makes for quick rail to rail transitions. Within the hi performance short board range this would be considered a medium rocker with a med to even a slightly pinched rail. The distinct hip on the Gamma gives it a tighter turning radius allowing it to be ridden in a shorter wider set of dims as well as the common performance short board dims. This board excels in a broad range of waves and conditions.",
//     "price":785,
//     "available":6,
//     "itemsSold":7,
//     "shipping":true
// },
// {
//     "model":"Sci-Fi",
//     "brand":"60d67e6678f5db3f181a0e81",
//     "description":"The Sci-Fi is a mash up of classic curves and modern rocker served with a Futuristic twist of fluid dynamic principles likely found in the design archives of Bruce Wayne. Expect seemingly unnatural acceleration, instantaneous response and an all around level performance that can only be described as Electric. The Sci-Fi is a high performance all-rounder with impressive range (1-8ft ) with usability for intermediate to advanced surfers. 5-fin Option.",
//     "price":820,
//     "available":5,
//     "itemsSold":4,
//     "shipping":true
// },
// {
//     "model":"Seaside",
//     "brand":"60d67e6678f5db3f181a0e81",
//     "description":"The Firewire Seaside Helium Surfboard is a revolutionized design from the Go Fish and offers more control with a less skatey feel. Still super fun nonetheless and meant to be ridden as a hi-performance surfboard in a range of conditions, this fish is known for catching small waves and paddles well thanks to the width up front. The Firewire Seaside is meant to be ridden as a quad.",
//     "price":850,
//     "available":7,
//     "itemsSold":8,
//     "shipping":true
// },
// {
//     "model":"Holy Grail",
//     "brand":"60e09461a0512b856e19ecf4",
//     "description":"The Holy Grail is suited to surfers who can comfortably pop up on every wave, travel down the line and are working on progressing their turns. This is not a beginner model. Anything from beach breaks, reef to point breaks. The Holy Grail will work at any location. It loves to be surfed in the pocket.",
//     "price":775,
//     "available":3,
//     "itemsSold":2,
//     "shipping":true
// },
// {
//     "model":"Hypto Krypto",
//     "brand":"60e09461a0512b856e19ecf4",
//     "description":"The Hypto Krypto is a balance of tradition and modern performance. Suited to the elite level surfer to the everyday surfer, it is often referred to as the ‘one board quiver’ for its versatility across all types of surf conditions – from small 1-3 ft beach breaks, to barrels of up to 8ft.",
//     "price":775,
//     "available":2,
//     "itemsSold":1,
//     "shipping":true
// },
// {
//     "model":"Monsta",
//     "brand":"60e0978ca0512b856e19ecf5",
//     "description":"Single concave under front foot runs into a double concave through the fins to give you extra lift yet maintain control in powerful surf, while a clean outline flows into a slight hip that allows for responsive direction changes. Overall, the Monsta prompts intuitive & fast surfing.",
//     "price":825,
//     "available":2,
//     "itemsSold":5,
//     "shipping":true
// },
// {
//     "model":"Hydra",
//     "brand":"60d693ec83ac394ad8c93ae8",
//     "description":"The Lost Hydra is designed for the very worse to average conditions. From barely rideable up to shoulder high, the Lost Hydra will keep you in the water while everyone else is bummed. All aspects of the board were designed to increase fun and performance in average to below average conditions. Overall, the board is a small wave machine that will bring a smile to your face no matter the conditions of the day.",
//     "price":845,
//     "available":4,
//     "itemsSold":4,
//     "shipping":true
// },
// {
//     "model":"Rad Ripper",
//     "brand":"60d693ec83ac394ad8c93ae8",
//     "description":"The Rad Ripper is a compliment to the Retro Ripper and is the latest within …Lost’s “Post Modern Retro” collection. When compared to the Retro Ripper… the entry rocker has been relaxed to allow for faster paddling and earlier entry into the wave. The tail has been switched to a wide a squash that provides glide and lift over mushy waves and easily connects sections. Performance is not lost with a hefty tail rocker and aggressive double concave which gives the board a responsive lively-ness to it.",
//     "price":725,
//     "available":5,
//     "itemsSold":5,
//     "shipping":true
// },
// {
//     "model":"Rocket",
//     "brand":"60d693ec83ac394ad8c93ae8",
//     "description":"The REAL board that started a Revolution! Originally shaped as a 5’3″ for Shane’s young son Noah by former …Lost shaper and pro surfer Noah Budroe. The board features a wide forward outline with round forgiving rails, flat deck and a wide “rocket” tail. The rocker is extremely low in the entry, for instant speed, with an exaggerated kick in the tail for tight arcs out of turns. An average wave all-rounder that can be effectively ridden 4″ to 6″ shorter, 1/8″ thinner, and just slightly wider than your normal short board without sacrificing any carve or drive.",
//     "price":830,
//     "available":2,
//     "itemsSold":2,
//     "shipping":true
// },
// {
//     "model":"Swordfish",
//     "brand":"60d693ec83ac394ad8c93ae8",
//     "description":"The Swordfish can be ridden in subpar to excellent conditions. This model favors waves ranging from waist high to a foot overhead. That is where the characteristics of this board really shine. The right surfer can also take this board in steep surf and reap the benefits of the Swordfish’s sheer speed.",
//     "price":700,
//     "available":2,
//     "itemsSold":2,
//     "shipping":true
// },
// {
//     "model":"Astro",
//     "brand":"60d6930883ac394ad8c93ae5",
//     "description":"The Astro is short, fast, and drivey. It has a extra-wide tail outline, combined with modern rocker and concave bottom that help bring out speed and performance, making it a super fun board. Not too boaty, just floaty and fast, this board works great in all kinds of waves, picks up speed easily, and turns with a smooth flow.",
//     "price":765,
//     "available":4,
//     "itemsSold":3,
//     "shipping":true
// },
// {
//     "model":"Ghost",
//     "brand":"60d6930883ac394ad8c93ae5",
//     "description":"Originally designed for performance in hollower, more powerful types of waves, the Ghost has proven to be great for reef breaks, dumpy beachies, and also excels in point waves.",
//     "price":750,
//     "available":4,
//     "itemsSold":3,
//     "shipping":true
// },
// {
//     "model":"Gremlin",
//     "brand":"60d6930883ac394ad8c93ae5",
//     "description":"The Gremlin was made to get you excited about surfing on the days that are less-than-epic, and also to give you a taste of FunFormance that will get you fired up in any kind of surf.",
//     "price":810,
//     "available":3,
//     "itemsSold":3,
//     "shipping":true
// },
// {
//     "model":"Padillac",
//     "brand":"60d6930883ac394ad8c93ae5",
//     "description":"Like the name implies, this board is built to paddle fast and easy, with extra thickness and a fuller outline than most standard guns so you can catch and ride bigger waves with confidence and ease.",
//     "price":895,
//     "available":1,
//     "itemsSold":2,
//     "shipping":true
// }