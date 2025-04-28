describe('Testing some DOM elements',()=>{
    
    beforeEach(()=>{
        document.body.innerHTML = `
        <div class="container">
            <h1>Faisal</h1>

            <button>Change</button>
        
        </div>

        `;

        const btn = document.querySelector("button");
        const heading = document.querySelector(".container h1")


        btn.addEventListener('click', ()=>{
        heading.textContent = "Faisal is tall";
        })

    });

    afterEach(()=>{
        document.body.innerHTML = "";
    });

    

    test('container exists', ()=>{

     const container = document.querySelector(".container");
     const heading = document.querySelector(".container h1")
      
        expect(container).not.toBeNull();
        expect(heading).not.toBeNull();
        expect(heading.textContent).toBe("Faisal");

    });

    test('test button click event', ()=>{
        const btn = document.querySelector('button');
        

        const heading = document.querySelector(".container h1")

        btn.click();
        expect(heading.textContent).toBe("Faisal is tall");
    })
})