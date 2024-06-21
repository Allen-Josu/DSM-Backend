const express = require("express");
const students_controller = require("../controller/students_controller");
const training_controller = require("../controller/training_controller");
const fees_controller = require("../controller/fees_controller");

const router = express.Router();

router.post("/students", students_controller.new_students);
router.get("/students", students_controller.get_one_student);

router.post("/training", training_controller.new_training);

router.post("/fees", fees_controller.new_fees);



module.exports = router;
