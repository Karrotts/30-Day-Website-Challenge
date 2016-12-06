var A = "A";
var B = "B";
var C = "C";
var D = "D";
var E = "E";

function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "20px serif";
    ctx.fillText(A, 0, 150);
    ctx.fillText(B, 150, 275);
    ctx.fillText(C, 200, 125);
    ctx.fillText(D, 55, 65);
    ctx.fillText(E, 225, 240);
    ctx.beginPath();
    ctx.moveTo(50,0);
    ctx.lineTo(50,250);
    ctx.lineTo(300,250);
    ctx.lineTo(50,0);
    ctx.stroke();
  }
}

function calc(){
  A = element("A").value;
  B = element("B").value;
  C = element("C").value;
  D = element("D").value;
  E = element("E").value;

  if (A === "x") {
    if (B != "" & C != "") {A = calcPythagorean(null,B,C)}
    if (E != "" & B != "") {A = calcTan(B,null,E)}
    if (D != "" & B != "") {A = calcTan(null,B,E)}
    if (C != "" & D != "") {A = calcCos(null,C,D)}
    if (C != "" & E != "") {A = calcSin(null,C,E)}
  }
  if (B === "x") {
    if (A != null & C != null) {B = calcPythagorean(A,null,C)}
    if (A != "" & D != "") {B = calcTan(null,A,D)}
    if (E != "" & A != "") {B = calcTan(A,null,E)}
    if (C != "" & D != "") {B = calcSin(null,C,D)}
    if (C != "" & E != "") {B = calcCos(null,C,E)}
  }
  if (C === "x") {
    if (A != null & B != null) {C = calcPythagorean(A,B,null)}
    if (D != "" & B != "") {C = calcSin(B,null,D)}
    if (E != "" & A != "") {C = calcSin(A,null,E)}
    if (D != "" & A != "") {C = calcCos(A,null,D)}
    if (E != "" & B != "") {C = calcCos(B,null,E)}
  }
  if (D === "x") {
    if (A != "" & B != "") {D = calcTan(B,A,null)}
    if (A != "" & C != "") {D = calcCos(A,C,null)}
    if (B != "" & C != "") {D = calcSin(B,C,null)}
  }
  if (E === "x") {
    if (A != "" & B != "") {E = calcTan(A,B,null)}
    if (A != "" & C != "") {E = calcSin(A,C,null)}
    if (B != "" & C != "") {E = calcCos(B,C,null)}
  }
  draw();
}

function calcSin(opp, hypo, angle) {
  if (opp != null & angle != null) {return (opp/Math.sin(angle/180*Math.PI)).toFixed(2)}
  if (hypo != null & angle != null) {return (hypo*Math.sin(angle/180*Math.PI)).toFixed(2)}
  if (opp != null & hypo != null) {return (Math.asin(opp/hypo)*(180/Math.PI)).toFixed(2)}
}

function calcTan(opp, adjac, angle) {
  if (opp != null & angle != null) {return (opp/Math.tan(angle/180*Math.PI)).toFixed(2)}
  if (adjac != null & angle != null) {return (adjac*Math.tan(angle/180*Math.PI)).toFixed(2)}
  if (opp != null & adjac != null) {return (Math.atan(opp/adjac)*(180/Math.PI)).toFixed(2)}
}

function calcCos(adjac, hypo, angle) {
  if (adjac != null & angle != null) {return (adjac/Math.cos(angle/180*Math.PI)).toFixed(2)}
  if (hypo != null & angle != null) {return (hypo*Math.cos(angle/180*Math.PI)).toFixed(2)}
  if (adjac != null & hypo != null) {return (Math.acos(adjac/hypo)*(180/Math.PI)).toFixed(2)}
}

function calcPythagorean(a,b,c) {
  if(a != null & b != null){return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)).toFixed(2)}
  if(a != null & c != null){return Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2)).toFixed(2)}
  if(b != null & c != null){return Math.sqrt(Math.pow(c, 2) - Math.pow(b, 2)).toFixed(2)}
}

function element(id) {
    return document.getElementById(id);
}
