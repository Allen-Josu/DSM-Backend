require("dotenv").config();

const express = require("express");

const DSM_Server = express();

const cors = require("cors");

const router = require("./router/router.js");

require("./database/database");

DSM_Server.use(express.json());
/* DSM_Server.use(
    cors({
        orgin: "http://localhost:5173",
    })
); */
 DSM_Server.use(cors());
DSM_Server.use(router);

const port = 4000 || process.env;

DSM_Server.listen(port, () => {
    console.log(`Server running at port ${port}`);
});
