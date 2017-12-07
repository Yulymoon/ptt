var request = require('request');
var cheerio = require('cheerio');

request('https://www.ptt.cc/bbs/PC_Shopping/index.html', function (error, response, body) {
  // console.log('body:', body);

  loadHTML(body)
})

function loadHTML(html) {
  const $ = cheerio.load(html)
  console.log($('.r-ent .title').filter('.公告').text())
}
