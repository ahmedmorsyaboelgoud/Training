const todays = 1000 * 60 * 60 * 24;

function dateDiffInDays(a, b) {
  var date1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  var date2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  return Math.floor((date2 - date1) / todays);

}

var d1 = new Date("2017-01-01"),
    d2 = new Date("2017-07-25");
    console.log(`Differnce by days = ${dateDiffInDays(d1,d2)}`)