import "../sass/styles.scss";
import "bootstrap";
import moment from "moment";

console.log("Hello world !!")

console.log(moment().format("MMMM Do YYYY"));
console.log(moment("20111031", "YYYYMMDD").fromNow()); // 8 years ago
console.log(moment().subtract(10, "days").calendar()); // 05/27/2019

console.log("TEST", process.env.DB_HOST);