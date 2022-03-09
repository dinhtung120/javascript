let myName = "Tung";

console.log("My name is", myName);

let tung = {
  name: "Tùng",
  age: 28,
  job: "Developer",
  favourites: ["Game", "Movie", "Music"],

  phone: {
    screensize: 6,
    color: "White",
    battery: 5000,
  },
  eat() {
    console.log("Tôi đang ăn");
  },
  teach() {
    console.log("Tôi đang chém gió");
  },
};

function display(obj, key) {
  if (typeof obj[key] == "function") {
    obj[key]();
  } else {
    console.log(obj[key]);
  }
}
