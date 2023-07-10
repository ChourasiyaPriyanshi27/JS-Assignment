// const sum = require('./Sum');
import sum from "./sum"

describe("sum",() => {
    it("Object check" , () => {
        let data = sum()
        expect(data).toEqual({name:'code'})
    })
})