const training_model = require("../model/training_model");

exports.new_training = async (request, response) => {
    const { training_ID, trainer, vehicle, date, students } = request.body;

    try {
        const new_training = new training_model({
            training_ID,
            trainer,
            vehicle,
            date,
            students,
        });
        const save_training = await new_training.save();

        response.status(201).json(save_training);
    } catch (error) {
        response.status(501).json(`An error has occured ${error}`);
    }
};
