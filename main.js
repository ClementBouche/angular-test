console.log('Asynch script loaded');


class Test {

    constructor(name) {
        this._name = name;
    }

    hello = function() {
        console.log(this.name);
    }

    helloWithDelayArrow = function() {
        setTimeout(() => {
            this.hello();
        }, 3000);
    }

    helloWithDelay = function() {
        setTimeout(function() {
            this.hello();
        }, 2000).bind(this);
    }

    helloWithDelayError = function() {
        setTimeout(function() {
            this.hello();
        }, 1000);
    }

}

let michel = new Test();
michel.hello();
michel.helloWithDelayArrow();
michel.helloWithDelay();
michel.helloWithDelayError();


if (window.Worker) {

    console.log('window.Worker ready');
    var myWorker = new Worker('worker.js');

    myWorker.postMessage({
        'message': 'coucou',
        'status': 'ok'
    });

    console.log('fin coucou');

    myWorker.postMessage({
        'message': 'coucou',
        'status': 'ok'
    });

    var a = {
        hello : function() {
            console.log('coucou');
        }
    }
    a.hello = function() {
        console.log('================== hello ==================');
    }

    a.hello();

    setTimeout(() => {
        myWorker.postMessage({
            'message': 'dans 1000ms',
            'status': 'ok'
        });
    }, 1000);
}


