
const fetch = require("node-fetch");


let getCounterValue = ()=>{


fetch(
    "https://api.countapi.xyz/update/vikram/vkd/?amount=1"
)
    .then((response) => response.json())
    .then((data) => console.log(data.value))
    .catch((err) => console.log(err));


}

module.exports = getCounterValue