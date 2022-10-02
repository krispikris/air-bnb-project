const express = require('express');
const router = express.Router();

const { User, Spot, SpotImage, Review, ReviewImage, Booking } = require('../../db/models');
const { requireAuth } = require('../../utils/auth');
const sequelize = require('sequelize');
const { Op } = require('sequelize');

// #06: GET ALL SPOTS
router.get('/', async (req, res) => {
    let { page, size } = req.query;

    page =
         page === undefined ? 1 : page < 0 ? 1 : page > 10 ? 10 :

    page = parseInt(page);
    size = parseInt(size);


})
