const express = require('express');
const router = express.Router();

const { User, Spot, SpotImage, Review, ReviewImage, Booking, sequelize } = require('../../db/models');
const { handleValidationErrors } = require('../../utils/validation');
const { requireAuth } = require('../../utils/auth');
const { Op } = require('sequelize');

// #09 | #10: CREATE AN IMAGE FOR A SPOT
router.post('/:spotId/images', requireAuth, async (req, res) => {
    const { url } = req.body;
    const spot = await Spot.findByPk(req.params.spotId);

    if (!spot) {
        res.status(404);
        res.json({
            message: "Spot couldn't be found",
            statusCode: 404
        });
    };

    const spotImage = await SpotImage.create({
        spotId: req.params.spotId,
        url: url,
        preview: true
    });

    return res.json({
        id: spotImage.id,
        url: spotImage.url,
        preview: spotImage.preview
    });
});

// #08: CREATE A SPOT
router.post('/', requireAuth, async (req, res) => {
    const user = req.user;
    const { address, city, state, country, lat, lng, name, description, price } = req.body;

    try {
        const newSpot = await Spot.create({
            ownerId: user.id,
            address,
            city,
            state,
            country,
            lat,
            lng,
            name,
            description,
            price
        });

        return res.status(201).json(newSpot);
    }

    catch {
        res.status(400);
        res.json({
            message: 'Validation Error',
            statusCode: 400,
            errors: {
                'address': 'Street address is required',
                'city': 'City is required',
                'state': 'State is required',
                'country': 'Country is required',
                'lat': 'Latitude is not valid',
                'lng': 'Longitude is not valid',
                'name': 'Name must be less than 50 characters',
                'description': 'Description is required',
                'price': 'Price per day is required'
              }
        });
    };
});

// // #12: GET DETAILS OF A SPOT BY ID
// router.get('/:spotId', requireAuth, async (req, res) => {

// })

// #11: GET ALL SPOTS OWNED BY THE CURRENT USER
router.get('/current', requireAuth, async (req, res) => {
    let ownerId = req.user.id;

    console.log('Before Finding all Spots');

    const spots = await Spot.findAll({
        // raw:     true,
        // include: { model: SpotImage, where: { preview: true } },
        where:   { ownerId : ownerId }
    });

    console.log('AFTER Finding all Spots');


    const result = [];
    for (let spot of spots) {
        spot = spot.toJSON();

        const ratings = await Review.findAll({
            where: { spotId: spot.id },
            attributes: [[ sequelize.fn('AVG', sequelize.col('stars')), 'avgRating' ]]
        });

        const imageURL = await SpotImage.findOne({
            where: {
                spotId: spot.id,
                preview: true
            },
            attributes: ['url']
        });

        spot.avgRating = Number(ratings[0].toJSON().avgRating);

        console.log(`IMAGE URL: ${imageURL}`);

        if (imageURL) {
            spot.previewImage = imageURL.url;
        } else {
            spot.previewImage = null;
        }


        result.push(spot);
    };

    res.json({ Spots: result });
});

// #06: GET ALL SPOTS | WORKS!
// Look into the avgRating syntax, not giving the math avg rn
// createdAt and updatedAt syntax is returning different format from api docs
router.get('/', async (req, res) => {
    let { page, size } = req.query;
    page =
         page === undefined ? 1  : page < 0 ? 1 : page > 10 ? 10 : parseInt(page);

    size =
         size === undefined ? 20 : size < 0 ? 1 : size > 20 ? 20 : parseInt(size);

    let pagination = {};
    if (page >= 1 && size >= 1) {
        pagination.limit = size;
        pagination.offset = size * (page - 1);
    }

    const spots = await Spot.findAll( { ...pagination } );

    let result = [];
    for (let spot of spots) {
        spot = spot.toJSON();

        const ratings = await Review.findAll({
            where: { spotId: spot.id },
            attributes: [[ sequelize.fn('AVG', sequelize.col('stars')), 'avgRating' ]]
        });

        const imageURL = await SpotImage.findOne({
            where: {
                spotId: spot.id,
                preview: true
            },
            attributes: ['url']
        });
        spot.avgRating = Number(ratings[0].toJSON().avgRating);

        if (imageURL) {
            spot.previewImage = imageURL.url;
        } else {
            spot.previewImage = null;
        }

        result.push(spot);
        // spot.previewImage = imageURL.url;
    };

    res.json({ Spots: result });
    // res.status(200).json({ Spots: result, page, size });
});

module.exports = router;
