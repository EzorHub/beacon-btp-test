//var queryurl = "https://log.smart-factory.kr/apisvc/sendLogData.json";
var queryurl = "https://log.smart-factory.kr/apisvc/sendLogData.json";
var username = "_ODATA";
var password = "B*****!";
//var token = irpa_core.base64.encode(username + ":" + password);

var data = JSON.stringify({
  sample: "0",
  crtfcKey: "$5$API$VKeNSDF2",
  logDt: "2022-10-04 11:00:08.832",
  useSe: "접속",
  sysUser: "이땡떙",
  conectIp: "정보없음",
  dataUsgqty: "0"
});
var data2 = {
  crtfcKey: "$5$API$VKeNSDF4pQehE4jzwsAv54Sx0Myc80AbAsQpEg8pCD2",
  logDt: "2022-10-06 11:00:08.832",
  useSe: "접속",
  sysUser: "이땡땡",
  conectIp: "정보없음",
  dataUsgqty: "0"
};

var payloadString = Object.entries(data2)
  .map((e) => e.join("="))
  .join("&");
console.log("쿼리스트링:", payloadString);

var settings = {
  resolveBodyOnly: true,
  method: "POST",
  url: queryurl,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    Accept: "*/*"
  },
  body: data
};

var url;
var searchParams;

fetch(url, {
  method: "POST",
  body: searchParams
});

var xhttp = new XMLHttpRequest();
xhttp.open("POST", queryurl, true);
//xhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xhttp.setRequestHeader(
  "Content-type",
  "application/x-www-form-urlencoded;charset=UTF-8;",
  "Accept",
  "*/*",
  "extended",
  true
);
//xhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded;charset=UTF-8;","extended", true);
console.log(data2);
xhttp.send(payloadString);

xhttp.onreadystatechange = function () {
  if (this.readyState !== 4) return;
  if (this.status === 200) {
    console.log("200 호출 성공");
    console.log("res header", this.getAllResponseHeaders());
    //console.log('res 뭐지', this.getResponseHeader('Date'))
    //console.log('res 뭐지', this.getResponseHeader('Server'))

    var _result = JSON.parse(this.responseText);
    console.log(_result.result.recptnRslt);
  }
};
