/*
// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: 'M7lc1UVf-VE',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
        done = true;
    }
}
function stopVideo() {
    player.stopVideo();
}
*/
/*
var query = gapi.client.youtube.search.list({
    fields: 'items(id)',
    q: this.searchRequest,
    order: 'relevance',
    maxResults: 1,
    videoEmbeddable: true,
    part: 'snippet',
    type: 'video',
});

var that = this;
query.execute(function (answer) {
    $(that.className).each(function () {
        $(this).html(
            '<iframe width="100%" class="w100 video" height="437" ' +
            'src="//www.youtube.com/embed/' +
            answer.items[0].id.videoId +
            '" frameborder="0" allowfullscreen>' +
            '</iframe>'
        );
    });
*/
