router.get('/current', requireAuth, async (req, res) => {
    const ownerId = req.user.id

    const spots = await Spot.findAll({
        raw: true,
        where: {
            ownerId: ownerId
        },

    });

    let avgRating;
    for (let i = 0; i < spots.length; i++) {
        const reviewCount = await Review.count({ where: { spotId: spots[i].id } })
        const sumOfStars = await Review.sum('stars', {
            where: { spotId: spots[i].id }
        });

        if (!sumOfStars) {
            avgRating = 0;
        } else {
            avgRating = (sumOfStars / reviewCount).toFixed(1);
        }

        spots[i].avgRating = avgRating;

        const spotImage = await SpotImage.findOne({
            where: { spotId: spots[i].id },
            attributes: ['id', 'url', 'preview']
        });

        if (spotImage) spots[i].previewImage = spotImage.url;
        else spots[i].previewImage = 'No Image Available :('

    }

    return res.json({ Spots: spots })
});
// router.get('/current', requireAuth, async (req, res) => {
//     let ownerId = req.user.id;
//     const spots = await Spot.findAll({ where:   { ownerId : ownerId }});

//     let avgRating;
//     for (let spot of spots) {
//         spot = spot.toJSON();

//         const ratings = await Review.findAll({
//             where: { spotId: spot.id },
//             attributes: [[ sequelize.fn('AVG', sequelize.col('stars')), 'avgRating' ]]
//         });

//         const imageURL = await SpotImage.findOne({
//             where: {
//                 spotId: spot.id,
//                 preview: true
//             },
//             attributes: ['url']
//         });

//         spot.avgRating = Number(ratings[0].toJSON().avgRating);

//         // console.log(`IMAGE URL: ${imageURL}`);

//         if (imageURL) {
//             spot.previewImage = imageURL.url;
//         } else {
//             spot.previewImage = null;
//         }


//         result.push(spot);
//     };
//     // raw:     true,
//     // include: { model: SpotImage, where: { preview: true } },

//     return res.json({ Spots: result });
// });
