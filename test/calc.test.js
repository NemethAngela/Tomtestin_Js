describe('Számítás tesztelése', () => {
    it('Normál1: t: 80, m: 1.8: i: 24.69', () => {      //normál bemenet egy, ide írom, milyen bemwnti értéknél mit kell kapnom
        let actual = calcBodyIndex(80, 1.8);
        let expected = 24.69;   //elvárt eredmény
        expect(actual).toBeCloseTo(expected, 0.9);   //closeTo közelítés, eltérés
    });

    it('Normál2: t: 100, m: 1.72: i: 33.80', () => {      
        let actual = calcBodyIndex(100, 1.72);
        let expected = 33.80;   //elvárt eredmény
        expect(actual).toBeCloseTo(expected, 0.9);   
    });

    it('Szélsőérték1: t: 1, m: 1.72: i: 0.33', () => {      
        let actual = calcBodyIndex(100, 1.72);
        let expected = 0.33;   //elvárt eredmény
        expect(actual).toBeCloseTo(expected, 0.9);   //closeTo közelítés, eltérés
    });
});