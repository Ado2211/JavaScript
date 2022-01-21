let niz = [3, 25, 15, 21, 23, 1];

    console.log(niz);

    /*function kriterijum(element) {            1
        return element < 22;
        
        /* if(element < 22) {                   2
            return true;
        } else {
            return false;
        
    }
    let niz2 = niz.filter(kriterijum);*/

    /*let niz2 = niz.filter (function(e) {       
        return e < 22;                          3
    })*/

    let niz2 = niz.filter(e => e < 22);


    console.log(niz2);

    let niz3 = [
        { a: 100, b: 10 },
        { a: 50,  b: 35 },
        { a: 40,  b: 120},
        { a: 140, b:  7 },
    ];
    
    /*let niz4 = niz3.filter( k => {          
        return k.a * k.b < 1500;
    });*/

    let niz4 = niz3.filter(
        k => k.a * k.b < 1500
    );

    console.log(niz4)