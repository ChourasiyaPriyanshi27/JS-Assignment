const fetchData = require('./fetchData')

test('Testing callback function' , done => {
    function callback(data){
        try{
            expect(data).toBe("Hello")
            done()
        }
        catch(error){
            done(error)
        }
    }
    fetchData(callback);
})