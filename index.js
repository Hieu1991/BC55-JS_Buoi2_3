/**
 
 */
// bài 1
var btnTinh = document.getElementById("btnTinh");
btnTinh.onclick = function () {
  var ngay = document.getElementById("ngay").value;
  var luong = document.getElementById("luong").value;

  var total = ngay * luong;

  var tagSpan =
    "👉" +
    "<span>" +
    "Lương của " +
    ngay +
    " ngày làm là: " +
    total +
    "</span>";

  var tienluong = document.getElementById("tienluong");
  tienluong.innerHTML = tagSpan;
};

// bài 2
var numberTong = document.getElementById("numberTong");
numberTong.onclick = function () {
  var number1 = document.getElementById("number1").value;
  var number2 = document.getElementById("number2").value;
  var number3 = document.getElementById("number3").value;
  var number4 = document.getElementById("number4").value;
  var number5 = document.getElementById("number5").value;

  number1 = Number(number1);
  number2 = Number(number2);
  number3 = Number(number3);
  number4 = Number(number4);
  number5 = Number(number5);

  var total = (number1 + number2 + number3 + number4 + number5) / 5;

  var tagSpan = "👉" + total;
  var trungBinh = document.getElementById("trungBinh");
  trungBinh.innerHTML = tagSpan;
};

// bài 3

var btnTien = document.getElementById("btnTien");
btnTien.onclick = function () {
  var tien = document.getElementById("tien").value;
  var giaDo = 23500;

  var total = tien * giaDo;

  var tagSpan = "👉" + total.toLocaleString() + " VNĐ";

  var tongTien = document.getElementById("tongTien");
  tongTien.innerHTML = tagSpan;
};

// bài 4

var btnKetQua = document.getElementById("btnKetQua");
btnKetQua.onclick = function () {
  var dai = document.getElementById("dai").value;
  var rong = document.getElementById("rong").value;

  dai = Number(dai);
  rong = Number(rong);

  var dienTich = dai * rong;
  var chuVi = (dai + rong) * 2;

  var tagspan =
    "👉" +
    "<span>" +
    "Diện tích: " +
    dienTich +
    "; Chu vi: " +
    chuVi +
    "</span>";

  var ketQua = document.getElementById("ketQua");
  ketQua.innerHTML = tagspan;
};

// Bài 5

var tong = document.getElementById("tong");
tong.onclick = function () {
  var hangChuc = document.getElementById("hangChuc").value;

  const hangChuc1 = Math.floor(hangChuc / 10);
  const hangDonVi = hangChuc % 10;
  tong = hangChuc1 + hangDonVi;

  tagSpan = "👉" + tong;

  var tongHaiSo = document.getElementById("tongHaiSo");
  tongHaiSo.innerHTML = tagSpan;
};
