import getData from "./app.js";

const userInfo = getData(+1);

userInfo.then( d => console.log(d))


