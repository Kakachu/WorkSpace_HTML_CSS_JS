    function calcularMedia(){
        var media = 0;
        var total = 0;
        var qtd = arguments.length;

        for(var i = 0; i < arguments.length; i++){
            total += arguments[i];
        }


        return((total / qtd).toFixed(2));
    }