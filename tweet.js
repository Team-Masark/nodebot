var Twitter = require('twitter')

var client = new Twitter({
	consumer_key: 'ROMG2EYTR3ysrZxMDlzz35riF',
	consumer_secret: 'Blau4wgGQ06hM2oVvnCACMyLbMS73V5F9Bs44YchZvAvFc1ixq',
	access_token_key: '1530705451-jqAavRnuLXQ50vmbFeCe6TZyPTD1gALw7x7QD4N',
	access_token_secret: '8zJFNhoYyq9AfDTiDgh50omx3XzK6L25oJBet2ZrKtGqb'
})


// Load your image
var data = require('fs').readFileSync('./temp-img.jpg')

// Make post request on media endpoint. Pass file data as media parameter
client.post('media/upload', {
	media: data
}, function(error, media, response) {

	if (!error) {

		// If successful, a media object will be returned.
		console.log(media)

		// Lets tweet it
		var status = {
			status: 'I am a tweet',
			media_ids: media.media_id_string // Pass the media id string
		}

		client.post('statuses/update', status, function(error, tweet, response) {
			if (!error) {
				console.log(tweet)
			}
		})

	}
})
