document.addEventListener("DOMContentLoaded", () => {
    
    function beregnForhold(a, b){
        return a / b;
    };
    
    let resultat = beregnForhold(4, 3);
    console.log(resultat);

    //================EkstraOpgave==============//

    function beregnForhold2(a, b){
        if(b == 0)
        {
            console.log(null);
        }
        else
        {
            return a / b;
        }
    };

    let resultat2 = beregnForhold2(4, 3);
    console.log(resultat2);
});