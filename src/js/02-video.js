import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeEl = document.querySelector('iframe');
const player = new Player(iframeEl);

player.on('timeupdate', throttle(saveCurrentTime, 1000));
function saveCurrentTime (event) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(event.seconds));
};

const currentVideoTime = JSON.parse(localStorage.getItem('videoplayer-current-time'));
player.setCurrentTime(currentVideoTime).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            console.log(error.name);
            console.log(error.message);
            break;
        default:
            break;
    }
});

