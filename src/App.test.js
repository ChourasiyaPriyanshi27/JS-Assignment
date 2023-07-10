// import { render, screen } from '@testing-library/react';
// import App from './App';
import sum from "./sum"

describe("sum",() => {
    it("Object check" , () => {
        let data = sum()
        expect(data).toEqual({name:'code'})
    })
})