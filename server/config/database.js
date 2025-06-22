const mongoose = require("mongoose");
require("dotenv").config();

const { MONGODB_URL } = process.env;

exports.connect = () => {
	mongoose
		.connect("mongodb+srv://mohdadeeb409:LsHSjDUwGzaVGLfJ@cluster0.b8jjypu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
			useNewUrlparser: true,
			useUnifiedTopology: true,
		})
		.then(console.log(`DB Connection Success`))
		.catch((err) => {
			console.log(`DB Connection Failed`);
			console.log(err);
			process.exit(1);
		});
};
