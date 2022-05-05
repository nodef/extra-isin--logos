const os   = require('os');
const fs   = require('fs');
const path = require('path');


function writeFile(pth, txt) {
  txt = txt.replace(/\r?\n/g, os.EOL);
  fs.writeFileSync(pth, txt);
}

function writeCsv(pth, rows) {
  var keys = Object.keys(rows[0]);
  var txt  = keys.join()+'\n';
  for (var r of rows)
    txt += keys.map(k => r[k]).join()+'\n';
  writeFile(pth, txt);
}


function statusCsv() {
  var rows = [], dir = 'data';
  for (var f of fs.readdirSync(dir)) {
    var ext = path.extname(f);
    var nam = path.basename(f, ext);
    rows.push({code: nam, available: ext!=='.log'});
  }
  return rows;
}

function main() {
  var rows = statusCsv();
  writeCsv('status.csv', rows);
}
main();
