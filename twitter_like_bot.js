const Twitter = require('twitter');
const client = new Twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
});

const stream = client.stream('statuses/filter', {track:'#IlikeBots, #keyword2'});

stream.on('data', (event) => {
  client.post('favorites/create', {id:event.id_str}, (error, response) => {
    if(error) throw error;
    console.log('Tweet ID: '+response.id_str+' Liked! - "'+response.text+'"')
  });

});

stream.on('error', (error) => {
  throw error;
});
