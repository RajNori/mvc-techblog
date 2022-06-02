const { Post } = require('../models');

const postdata = [{
        "postTitle": "The Verge",
        "postContent": "he Verge is an ambitious multimedia effort founded nine years ago to examine how technology will change life in the future for a massive mainstream audience.",
        "userId": 1
    },
    {
        "postTitle": "Wired",
        "postContent": "Wired.com focuses on how emerging technologies affect culture, the economy, and politics.The website provides an in-depth coverage of current and future trends in technology.",
        "userId": 2
    },
    {
        "postTitle": "CNET",
        "postContent": "CNET tracks all the latest consumer technology breakthroughs and shows you what's new, what matters and how technology can enrich your life.",
        "userId": 3
    }
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;