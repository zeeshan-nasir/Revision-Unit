const app = require("./index");
const connect = require("./config/db");

app.listen(4000, async () => {
    try {
        await connect();
        console.log("Listening on port 4000");
    } catch (err) {
        console.log(err);
    }
});
