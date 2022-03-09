let a = prompt("Nhập cạnh a: ");
let b = prompt("Nhập cạnh b: ");
let c = prompt("Nhập cạnh c: ");

function findArea(a, b, c) {
  let p = (Number(a) + Number(b) + Number(c)) / 2;
  return Math.sqrt(p * (p - a) * (p - b) * (p - c));
}

console.log("Diện tích hình tam giác là:", findArea(a, b, c));
