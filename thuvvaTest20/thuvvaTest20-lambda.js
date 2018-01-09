let AWS = require('aws-sdk');
const sqs = new AWS.SQS();
exports.handler = function (event, context, callback) {
    sqs.receiveMessage({
        QueueUrl: 'https://sqseu-central-1.amazonaws.com//thuvva-test',
        AttributeNames: ['All'],
        MaxNumberOfMessages: '10',
        VisibilityTimeout: '30',
        WaitTimeSeconds: '0'
    }, function (error, data) {
        if (err) {
            console.log("Receive Error", err);
        } else if (data.Messages) {
            data.Messages.forEach(message => {
                // your logic to access each message through out the loop. Each message is available under variable message 
                // within this block
            })
        } else {
            console.log("No messages found in the queue");
        }
    });


}