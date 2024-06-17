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

// exports.get_one_students = async (request, response) => {
//     const { sid } = request.body;
//     console.log(sid);
//     try {
//         console.log(request.body);
//         const student = await students_model.findOne({sid});
//         response.status(200).json(student);
//     } catch (error) {
//         response.status(500).json(error);
//     }
// };

exports.get_one_students = async (request, response) => {
    const { sid } = request.body;
    console.log(request.body);

    // Basic input validation
    if (!sid) {
        console.log("sid not found");
        return response
            .status(400)
            .json({ error: "Student ID (sid) is required" });
            
    }

    try {
        console.log("Fetching student with sid:", sid);
        const student = await students_model.findOne({ sid });

        if (!student) {
            console.log("Student not found");
            return response.status(404).json({ error: "Student not found" });
            
        }

        return response.status(200).json(student);
    } catch (error) {
        console.error("Error fetching student:", error);
        return response.status(500).json({ error: "Internal server error" });
    }
};
