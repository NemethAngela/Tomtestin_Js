describe('Name of the group', () => {
    it ('Szám', () => {         //ez jó a tesznél 
        let actual = checkInput(3);
        expect(actual).toBe(true);   //elvárt
    });

    it ('Szám2', () => {         //ez már false a tesznél 
        let actual = checkInput('aa');
        expect(actual).toBe(false);   
    });

    it ('0 input', () => {         
        let actual = checkInput(0);
        expect(actual).toBe(false);   
    });

    it ('-5 input', () => {         
        let actual = checkInput(-5);
        expect(actual).toBe(false);   
    });

});