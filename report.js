const newman = require('newman');
newman.run({
    collection: require('./Dmoney User.postman_collection.json'), //pointing to local JSON file.
    // environment: require('./collection/customer_api_env.json'), // pointingto local env file
    iterationCount: 1,
    reporters: 'htmlextra',
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the filewill be written to `newman/` in the current working directory.
        }
    }

}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});
