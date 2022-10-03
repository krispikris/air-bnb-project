const express = require('express');
const router = express.Router();

const { SpotImage } = require('../../db/models');
const { requireAuth } = require('../../utils/auth');

//
router.delete('/:imageId', requireAuth, async (req, res) => {
    const imageToDelete = await SpotImage.findByPk(req.params.imageId, {
        where: { userId: req.user.id }
    });

    if (!imageToDelete) {
        res
        .status(404)
        .json({
            message: "Spot Image couldn't be found",
            statusCode: 404
          });
    };

    await imageToDelete.destroy();
    res.json({
        message: 'Successfully deleted',
        statusCode: 200
      });
});

module.exports = router;
