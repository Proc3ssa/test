const {capitalise, truncate} = require('../src/capitalize');

describe("Capitalize words", () =>{

    // test("Return capitalized", ()=>{
    //     expect(capitalise("faisal")).toBe("Faisal");
    // })

    test("Return empty if empty", ()=>{
        expect(capitalise("")).toBe("");
    })
})

describe("Truncate the word", () =>{

    test("Truncate if the word is more", ()=>{
        expect(truncate("Faisal halid", 6)).toBe("Faisal...");
    })

    test("Return the word if the specified lenght is more", ()=>{
        expect(truncate("Faisal", 7)).toBe("Faisal");
    })
})