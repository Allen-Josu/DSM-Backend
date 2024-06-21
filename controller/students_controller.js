const students_model = require("../model/students_model");

exports.new_students = async (request, response) => {
    const {
        sid,
        username,
        age,
        fathers_name,
        mothers_name,
        dob,
        gender,
        email,
        mobile,
        address,
        course_selected,
        total_class,
        fees_paid,
    } = request.body;

    try {
        const new_students = new students_model({
            sid,
            username,
            age,
            fathers_name,
            mothers_name,
            dob,
            gender,
            email,
            mobile,
            address,
            course_selected,
            total_class,
            fees_paid,
        });
        const save_students = await new_students.save();
        response.status(201).json(save_students);
    } catch (error) {
        response.status(501).json(`An error has been occured ${error}`);
    }
};

exports.get_one_student = async (request, response) => {
    const { sid } = request.body;
    if (!sid) {
        response.status(400).json("No Sid found");
        console.log("NO SID Found");
    } else {
        try {
            console.log(request.body);
            const student = await students_model.findOne({ sid });
            response.status(200).json(student);
        } catch (error) {
            response.status(500).json(error);
        }
    }
};
