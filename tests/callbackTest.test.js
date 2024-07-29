const fetchData = require('../code/callback');


// a subtle change here is that async is () => {} but in callback it is done => {}
test('Testing call back function', done => {
    function callback(data){
        try {
            expect(data).toBe('Data Received');
            done();
        } catch (error) {
            done(error);
        }
    }
    fetchData(callback);
})