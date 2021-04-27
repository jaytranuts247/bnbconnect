const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/authMiddleware");
const joiValidator = require("../middlewares/joiValidator");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");

const Schemas = require("../middlewares/Schemas");
const User = require("../model/User");
const jwtSecret = config.get("jwtSecret");

// @router   POST api/auth
// @desc     get logged in user
// @access   Public
router.get("/", authMiddleware, (req, res) => {
	try {
		const user = User.findById(req.user._id).select("-password");
		res.json(user);
	} catch (err) {
		console.log(err);
		res.status(500).send("Server Error");
	}
});

// @router   POST api/auth
// @desc     authorise user and get token
// @access   Public
router.post(
	"/",
	[joiValidator(Schemas.userLogin, "body"), authMiddleware],
	async (req, res) => {
		const { email, password } = req.body;
		try {
			let user = await User.findOne({ email });
			if (!user) return res.status(400).json({ msg: "Invalid Credentials" });

			const isMatch = await bcrypt.compare(password, user.password);

			if (!isMatch) return res.status(400).json({ msg: "Invalid Credentials" });

			const payload = {
				user: {
					_id: user._id,
				},
			};

			jwt.sign(
				payload,
				jwtSecret,
				{
					expiresIn: 360000,
				},
				(err, token) => {
					if (err) throw err;
					console.log(token);
					res.json({ token });
				}
			);
		} catch (err) {
			console.error(err.message);
			res.status(500).send("Server Error");
		}
	}
);

module.exports = router;
