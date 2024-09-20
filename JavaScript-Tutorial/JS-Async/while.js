function fastEvent() {
    console.log('Event Runs');
}

function delayedEvent() {
    let delayTime = 5000 + new Date().getTime();
    while(new Date().getTime() < delayTime) {
        //console.log('waiting');
    }
    console.log('Delayed Event Runs');
}

delayedEvent();
fastEvent();