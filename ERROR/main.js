$(document).ready(function() {
    $('.small_player').speakker({
        file: 'https://drive.google.com/uc?id=0B9wnwIPYemQtQ2pjMWtnWFZ6UFE&authuser=0&export=download',
        poster: 'data/cover.png',
        title: 'Song #1',
        theme: 'light'
    });
    $().speakker({
	file: './playlist.json',
	playlist: true,
	theme: 'dark'
    });
});
