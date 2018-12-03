(function () {
    'use strict';
    $("#calc").click(function () {
        var year = $("input[name='year']:checked").val();
        console.log(year);
        var property = $("input[name='property']:checked").val();
        console.log(property);
        var priceS = $("#price").val();
        console.log(priceS);
        var priviousPriceS = $("#privious_price").val();
        console.log(priviousPriceS);
        var feeRadioS = $("#fee_radio").val();
        console.log(feeRadioS);
        // calculate
        var price = parseFloat(priceS), priviousPrice = parseFloat(priviousPriceS), feeRadio = parseFloat(feeRadioS);
        var onlineprice = 0, loan = 0, tax1 = 0, tax2 = 0, tax3 = 0, fee = 0, totalprice = 0, payprice = 0;
       
        if(year == '1' && property == '1'){
            onlineprice = priviousPrice;
            if(onlineprice > price*0.9){
                onlineprice = price*0.9;
            }
            loan = onlineprice * 0.4;
            tax1 = 0;
            tax2 = onlineprice * 0.03;
            tax3 = onlineprice * 0.056;
            fee = price * feeRadio / 100;           
        }

        if(year == '2' && property == '1'){
            onlineprice = priviousPrice;
            if(onlineprice > price*0.9){
                onlineprice = price*0.9;
            }
            loan = onlineprice * 0.4;
            tax1 = 0;
            tax2 = onlineprice * 0.03;
            tax3 = 0;
            fee = price * feeRadio / 100;           
        }

        if(year == '3' && property == '1'){
            onlineprice = price * 0.9;
            loan = onlineprice * 0.4;
            tax1 = 0;
            tax2 = onlineprice * 0.03;
            tax3 = 0;
            fee = price * feeRadio / 100;           
        }

        if(year == '1' && property == '2'){
            onlineprice = price * 0.9;
            loan = onlineprice * 0.4;
            tax1 = onlineprice * 0.01;
            tax2 = onlineprice * 0.03;
            tax3 = onlineprice * 0.056;
            fee = price * feeRadio / 100;           
        }

        if(year == '2' && property == '2'){
            onlineprice = price * 0.9;
            loan = onlineprice * 0.4;
            tax1 = onlineprice * 0.01;
            tax2 = onlineprice * 0.03;
            tax3 = 0;
            fee = price * feeRadio / 100;           
        }

        if(year == '3' && property == '2'){
            onlineprice = price * 0.9;
            loan = onlineprice * 0.4;
            tax1 = 0;
            tax2 = onlineprice * 0.03;
            tax3 = 0;
            fee = price * feeRadio / 100;           
        }

        totalprice = price + tax1 + tax2 + tax3 + fee;
        payprice = totalprice - loan;
       
        $("#onlineprice").val(onlineprice);
        $("#loan").val(loan);
        $("#tax1").val(tax1);
        $("#tax2").val(tax2);
        $("#tax3").val(tax3);
        $("#fee").val(fee);
        $("#totalprice").val(totalprice);
        $("#payprice").val(payprice);
    });

})();