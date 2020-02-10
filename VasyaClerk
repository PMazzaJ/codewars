
/**
 * 
  Challenge Url: https://www.codewars.com/kata/555615a77ebc7c2c8a0000b8/train/javascript
  
  The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. 
  Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.
  Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.
    
  Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue?
  Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that moment. Otherwise return NO.
    
  Examples:
  tickets([25, 25, 50])  => YES 
  tickets([25, 100])  => NO. Vasya will not have enough money to give change to 100 dollars
  tickets([25, 25, 50, 50, 100])  => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50) 
 *
 */

    function tickets(peopleInLine) {

        let temTroco = "";
        let notasNaCarteira = {25: 0, 50: 0, 100: 0};

        peopleInLine.every((notaRecebida, index) => {

            let posicaoDaPessoaNaFila = index + 1;

            console.log('--------> ' + posicaoDaPessoaNaFila + 'ª Pessoa da fila');
            console.log('notaRecebida: ' + notaRecebida);

            switch (notaRecebida) {
                case 25:
                    notasNaCarteira[25] += 1;
                    break;
                case 50:
                    notasNaCarteira[50] += 1;
                    break;
                case 100:
                    notasNaCarteira[100] += 1;
                    break;
            }

            console.log(' ------ CARTEIRA ------');
            console.log('notas de 25: ' + notasNaCarteira[25]);
            console.log('notas de 50: ' + notasNaCarteira[50]);
            console.log('notas de 100 ' + notasNaCarteira[100]);
            console.log(' ----- VERIFICANDO TROCO -----');

            if (notaRecebida === 25) {
                temTroco = "YES";
                console.log('tem troco para ' + notaRecebida + '?');
                console.log('Não precisa troco para 25, tudo Ok!' );
            } else if (notaRecebida === 50) {
                console.log('tem troco para ' + notaRecebida + '?');

                if (notasNaCarteira[25] >= 1) {
                    console.log('Sim..');
                    console.log('Tinha na carteira ' + notasNaCarteira[25] + ' notas de 25' );
                    notasNaCarteira[25] -= 1;
                    temTroco = "YES";
                    console.log('Restaram ' + notasNaCarteira[25] + ' notas de 25' );
                } else {
                    temTroco = "NO";
                }

            } else if (notaRecebida === 100) {
                console.log('tem troco para ' + notaRecebida + '?');

                if ((notasNaCarteira[50] >= 1) && (notasNaCarteira[25] >= 1)) {
                    console.log('Sim..');
                    notasNaCarteira[50] -= 1;
                    notasNaCarteira[25] -= 1;
                    temTroco = "YES";
                } else if (notasNaCarteira[25] >= 3) {
                    console.log('Sim..');
                    notasNaCarteira[25] -= 3;
                    temTroco = "YES";
                } else {
                    console.log('Não..');
                    temTroco = "NO";
                }
            }

            console.log(' ------ RESTARAM NA CARTEIRA ------');
            console.log('notas de 25: ' + notasNaCarteira[25]);
            console.log('notas de 50: ' + notasNaCarteira[50]);
            console.log('notas de 100 ' + notasNaCarteira[100]);

            if (temTroco === "NO") {
                console.log('estou sem troco :(');
                return false;
            } else {
                return true;
            }
        });

        return temTroco;
    }
