const fees_controller = require("../model/fees_model");

exports.fees_controller = async (request, response) => {
    const { sid, fees_purpose, fees_paid, bill_no } = request.body;

    try {
        const new_fees = new fees_model({
            sid,
            fees_purpose,
            fees_paid,
            bill_no,
        });
        const save_fees = await new_fees.save();
        response.status(201).json(save_fees);
    } catch (error) {
        console.log(error);
        response.status(501).json("An error has been occured");
    }
};
