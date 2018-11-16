
var count = 0;
this.setInterval(() => {
    count++;
}, 1000);

console.log(count);


onmessage = function(e) {
    console.log('Message received from main script');
    console.log('count', count);

    /// var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
    // console.log('Posting message back to main script');
    // postMessage(workerResult);
}
  