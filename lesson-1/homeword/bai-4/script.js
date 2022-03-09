let P = prompt("Nhập số tiền gốc ban đầu");
let r = prompt("Nhập lãi suất hàng năm");
let n = prompt("Nhập số lần ghép lãi 1 năm");
let t = prompt("Nhập số năm gửi ngân hàng");

function compoundInterest(P, r, n, t) {
  return P * (1 + r / n) ** (n * t);
}

console.log("Số tiền nhận được là", compoundInterest(P, r, n, t));
