$.validator.addMethod("cuentabanco", function(value, element) {

    var banco = value.substring(0, 4);
    var sucursal = value.substring(4, 8);
    var dc = value.substring(8, 10);
    var cuenta = value.substring(10, 20);
    var CCC = banco + sucursal + dc + cuenta;
    var i;
    if (!/^[0-9]{20}$/.test(CCC)) {
        return false;
    } else {
        var valores = new Array(1, 2, 4, 8, 5, 10, 9, 7, 3, 6);
        var control = 0;
        for (i = 0; i <= 9; i++)
            control += parseInt(cuenta.charAt(i)) * valores[i];
        control = 11 - (control % 11);
        if (control == 11) control = 0;
        else if (control == 10) control = 1;
        if (control != parseInt(dc.charAt(1))) {
            return false;
        }
        control = 0;
        var zbs = "00" + banco + sucursal;
        for (i = 0; i <= 9; i++)
            control += parseInt(zbs.charAt(i)) * valores[i];
        control = 11 - (control % 11);
        if (control == 11) control = 0;
        else if (control == 10) control = 1;
        if (control != parseInt(dc.charAt(0))) {
            return false;
        }
        return true;
    }




}, "Por favor introduce un número de cuenta correcto");
