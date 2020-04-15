var idleState = bodymovin.loadAnimation({
    container: document.getElementById('idle-state'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: 'idle-state/data.json'

});

var schrikkenhtml = bodymovin.loadAnimation({
    container: document.getElementById('schrikkenhtml'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: 'schrikken/data.json'

});

var slapenhtml = bodymovin.loadAnimation({
    container: document.getElementById('slapenhtml'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: 'slapen/data.json'

});

var wassenhtml = bodymovin.loadAnimation({
    container: document.getElementById('wassenhtml'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: 'wassen/data.json'

});

var schrikken = bodymovin.loadAnimation({
    container: document.getElementById('knop1'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'schrikken-icoon/data.json'

});

var slapen = bodymovin.loadAnimation({
    container: document.getElementById('knop2'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'slapen-icoon/data.json'

});


var wassen = bodymovin.loadAnimation({
    container: document.getElementById('knop3'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'wassen-icoon/data.json'

});

