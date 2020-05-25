const express = require('express');
const profileRouter = new express.Router();
const Profile = require('../models/profile');

// Add new profile
profileRouter.post('/profiles', async (req, res) => {
    const profile = new Profile({ ...req.body });
    try {
        await profile.save();
        return res.status(201).send({ profile });
    } catch (error) {
        return res.status(400).send(error);
    }
});

// Get all profiles
profileRouter.get('/profiles', async (req, res) => {
    try {
        // get all objects from db
        const allProfiles = await Profile.find({});
        return res.send(allProfiles);
    } catch (error) {
        return res.status(500).send(e);
    }
});

// Get single profile
profileRouter.get('/profiles/:id', async (req, res) => {
    const profileId = req.params.id;

    try {
        // get object from db
        const profile = await Profile.findOne({ _id: profileId });

        if (!profile) {
            // in profile not found - return 404
            return res.status(404).send();
        }
        return res.send(profile);
    } catch (error) {
        return res.status(500).send();
    }
});

// Update profile
profileRouter.patch('/profiles/:id', async (req, res) => {
    const profileId = req.params.id;

    try {
        const profile = await Profile.findOne({ _id: profileId });

        // in profile not found - return 404
        if (!profile) {
            return res.status(404).send();
        }

        // get all updated fields
        const updates = Object.keys(req.body);

        // run over all the fields to update and override the value
        updates.forEach((update) => {
            profile[update] = req.body[update];
        });
        // save the profile
        await profile.save();

        return res.send(profile);
    } catch (error) {
        return res.status(500).send();
    }
});

// Delete a profile
profileRouter.delete('/profiles/:id', async (req, res) => {
    try {
        const profile = await Profile.findOneAndDelete({ _id: req.params.id });

        if (!profile) {
            // in profile not found - return 404
            return res.status(404).send();
        }
        return res.send(profile);
    } catch (error) {
        return res.status(500).send(error);
    }
});

module.exports = profileRouter;
