  let numeroMaximoPosible = 50;
  let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
    let numeroUsuario = 0;
    let intentos = 1;
    //let palabrasVeces = "vez";
    let maximosIntentos = 10;

    while (numeroUsuario != numeroSecreto) {
        numeroUsuario = parseInt(prompt(`Me indicas un numero entre el 1 al ${numeroMaximoPosible} por favor:`));

    console.log(typeof(numeroUsuario));

    //Este codigo sirve para la comparacion//
    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste, el numero: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert("El numero secreto es menor");
        } else {
            alert ('El numero es mayor');
        }
        //el contador se incremento//
        //intentos = intentos + 1;
        intentos++;
        //palabrasVeces = "veces"; 
        if (intentos > maximosIntentos) {
            alert(`llegaste al numero maximo de ${maximosIntentos} intentos`);
            break;
        }
    }
    }