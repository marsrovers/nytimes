var search=$("#search").val("");
var number=$("#number").val("");
var start=$("#start").val("");
var stop=$("#end").val("");

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "95ef6bc807cb4ba0a3d5eae3891a7cf2", 
  	'q': search,
  	'fq': number,
  	'begin_date': start,
  	'end_date': stop
});


$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});