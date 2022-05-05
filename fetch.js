const fs       = require('fs');
const fyers    = require('extra-fyers');
const {sleep}  = require('extra-sleep');
const download = require('download');


async function logos() {
  var nsecm = await fyers.loadSymbolMaster(null, 'NSE', 'CM');
  var bsecm = await fyers.loadSymbolMaster(null, 'BSE', 'CM');
  var isins = new Map();
  for (var x of nsecm)
    isins.set(x.isin, x);
  for (var x of bsecm)
    isins.set(x.isin, x);
  for (var [isin, x] of isins) {
    if (fs.existsSync(`data/${isin}.log`)) continue;
    if (fs.existsSync(`data/${isin}.png`)) continue;
    console.log(`Fetching ${isin} (${x.symbol}; ${x.description}) ...`);
    try {
      await download(`https://assets-netstorage.groww.in/stock-assets/logos/${isin}.png`, 'data');
      console.log(`Fetched ${isin}. Waiting 10s ...`);
    }
    catch (e) {
      fs.writeFileSync(`data/${isin}.log`, `${e.message}\n${x.symbol}; ${x.description}\n`);
      console.log(`Fetch ${isin} failed! Waiting 10s ...`);
    }
    await sleep(10000);
  }
}
logos();
