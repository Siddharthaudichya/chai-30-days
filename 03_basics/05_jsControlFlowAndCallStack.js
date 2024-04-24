// Watch this video: https://www.youtube.com/watch?v=ByhtOgF6uYM

const url = 'https://www.youtube.com/watch?v=ByhtOgF6uYM';
let start = (process.platform == 'darwin'? 'open': process.platform == 'win32'? 'start': 'xdg-open');
require('child_process').exec(start + ' ' + url);