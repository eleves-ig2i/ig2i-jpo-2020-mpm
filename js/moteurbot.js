var noeud = "croix";
var O =0, D=0;
var posBot;
var partieLancee;
function tour() {
    const croix = document.getElementById('tourcroix');
    const cercle = document.getElementById('tourcercle');

    if (noeud === 'croix') {
        croix.style.display='block';
        cercle.style.display='none';
    }
    else {
        cercle.style.display='block';
        croix.style.display='none';
    }
}

setTimeout(tour, 500);
setInterval(tour, 100);

function grands() {
    const total = document.getElementById('tout');

    for(var i = 0; i < 9; i++){
        total.innerHTML += "<div id='g" + i + "'><img src='ressources/noir.jpg' class='noir' id='noir"+i+"'><img src='ressources/cross.png' class='croix' id='croix"+i+"'><img src='ressources/circle.jpg' class='croix' id='cercle"+i+"'> </div>";
    }
}

function petits() {
    const idG0 = document.getElementById('g0');
    const idG1 = document.getElementById('g1');
    const idG2 = document.getElementById('g2');
    const idG3 = document.getElementById('g3');
    const idG4 = document.getElementById('g4');
    const idG5 = document.getElementById('g5');
    const idG6 = document.getElementById('g6');
    const idG7 = document.getElementById('g7');
    const idG8 = document.getElementById('g8');
    var i;

    for(i = 0; i < 9; i++){
        idG0.innerHTML += "<div class='p"+i+"' id='p0" + i + "' onclick='joue(croix0" + i + ", cercle0" + i + ", 0,"+i+")'><img src='ressources/cross.png' class='pcroix' id='croix0"+i+"'><img src='ressources/circle.jpg' class='pcroix' id='cercle0"+i+"'></div>";
        idG1.innerHTML += "<div class='p"+i+"' id='p1" + i + "' onclick='joue(croix1" + i + ", cercle1" + i + ", 1,"+i+")'><img src='ressources/cross.png' class='pcroix' id='croix1"+i+"'><img src='ressources/circle.jpg' class='pcroix' id='cercle1"+i+"'></div>";
        idG2.innerHTML += "<div class='p"+i+"' id='p2" + i + "' onclick='joue(croix2" + i + ", cercle2" + i + ", 2,"+i+")'><img src='ressources/cross.png' class='pcroix' id='croix2"+i+"'><img src='ressources/circle.jpg' class='pcroix' id='cercle2"+i+"'></div>";
        idG3.innerHTML += "<div class='p"+i+"' id='p3" + i + "' onclick='joue(croix3" + i + ", cercle3" + i + ", 3,"+i+")'><img src='ressources/cross.png' class='pcroix' id='croix3"+i+"'><img src='ressources/circle.jpg' class='pcroix' id='cercle3"+i+"'></div>";
        idG4.innerHTML += "<div class='p"+i+"' id='p4" + i + "' onclick='joue(croix4" + i + ", cercle4" + i + ", 4,"+i+")'><img src='ressources/cross.png' class='pcroix' id='croix4"+i+"'><img src='ressources/circle.jpg' class='pcroix' id='cercle4"+i+"'></div>";
        idG5.innerHTML += "<div class='p"+i+"' id='p5" + i + "' onclick='joue(croix5" + i + ", cercle5" + i + ", 5,"+i+")'><img src='ressources/cross.png' class='pcroix' id='croix5"+i+"'><img src='ressources/circle.jpg' class='pcroix' id='cercle5"+i+"'></div>";
        idG6.innerHTML += "<div class='p"+i+"' id='p6" + i + "' onclick='joue(croix6" + i + ", cercle6" + i + ", 6,"+i+")'><img src='ressources/cross.png' class='pcroix' id='croix6"+i+"'><img src='ressources/circle.jpg' class='pcroix' id='cercle6"+i+"'></div>";
        idG7.innerHTML += "<div class='p"+i+"' id='p7" + i + "' onclick='joue(croix7" + i + ", cercle7" + i + ", 7,"+i+")'><img src='ressources/cross.png' class='pcroix' id='croix7"+i+"'><img src='ressources/circle.jpg' class='pcroix' id='cercle7"+i+"'></div>";
        idG8.innerHTML += "<div class='p"+i+"' id='p8" + i + "' onclick='joue(croix8" + i + ", cercle8" + i + ", 8,"+i+")'><img src='ressources/cross.png' class='pcroix' id='croix8"+i+"'><img src='ressources/circle.jpg' class='pcroix' id='cercle8"+i+"'></div>";
    }

}

function creation() {
    grands();
    petits();

}

setTimeout(bot, 500);
//setInterval(bot, 1000);



function bot() {
    if (noeud === 'cercle') {
        var p0 = document.getElementById('cercle' + posBot + '0');
        var p1 = document.getElementById('cercle' + posBot + '1');
        var p2 = document.getElementById('cercle' + posBot + '2');
        var p3 = document.getElementById('cercle' + posBot + '3');
        var p4 = document.getElementById('cercle' + posBot + '4');
        var p5 = document.getElementById('cercle' + posBot + '5');
        var p6 = document.getElementById('cercle' + posBot + '6');
        var p7 = document.getElementById('cercle' + posBot + '7');
        var p8 = document.getElementById('cercle' + posBot + '8');

        var croix0 = document.getElementById('croix' + posBot + '0');
        var croix1 = document.getElementById('croix' + posBot + '1');
        var croix2 = document.getElementById('croix' + posBot + '2');
        var croix3 = document.getElementById('croix' + posBot + '3');
        var croix4 = document.getElementById('croix' + posBot + '4');
        var croix5 = document.getElementById('croix' + posBot + '5');
        var croix6 = document.getElementById('croix' + posBot + '6');
        var croix7 = document.getElementById('croix' + posBot + '7');
        var croix8 = document.getElementById('croix' + posBot + '8');

        var posD;

        var noiro;
        var noird;// = document.getElementById('noir'+);

        const noir0 = document.getElementById('noir0');
        const noir1 = document.getElementById('noir1');
        const noir2 = document.getElementById('noir2');
        const noir3 = document.getElementById('noir3');
        const noir4 = document.getElementById('noir4');
        const noir5 = document.getElementById('noir5');
        const noir6 = document.getElementById('noir6');
        const noir7 = document.getElementById('noir7');
        const noir8 = document.getElementById('noir8');
        var noirChange;

        if(noir0.style.display==='none' && noir1.style.display==='none' && noir2.style.display==='none' && noir3.style.display==='none' && noir4.style.display==='none' && noir5.style.display==='none' && noir6.style.display==='none' && noir7.style.display==='none' && noir8.style.display==='none') {
            noir0.style.display='block';
            noir1.style.display='block';
            noir2.style.display='block';
            noir3.style.display='block';
            noir4.style.display='block';
            noir5.style.display='block';
            noir6.style.display='block';
            noir7.style.display='block';
            noir8.style.display='block';

        }


        var gCroixBot = document.getElementById('croix'+posBot);
        var gCercleBot = document.getElementById('cercle'+posBot);

        var nb, caseRand, i;

        //IL CHERCHE A GAGNER UNE CASE

        //premiere ligne
        if (p0.style.display === 'block' && p1.style.display === 'block' && croix2.style.display !== 'block' && gCroixBot.style.display!=='block' && gCercleBot.style.display!=='block') {
            p2.style.display = 'block';
            noeud = 'croix';
            victoireCase();

            posD = '2';

            noiro = document.getElementById('noir' + posBot);
            noird = document.getElementById('noir' + posD);

            noiro.style.display = 'block';
            noird.style.display = 'none';

            gCroixBot = document.getElementById('croix' + posD);
            gCercleBot = document.getElementById('cercle' + posD);

            if (gCercleBot.style.display === 'block' || gCroixBot.style.display === 'block') {
                for (i = 0; i < 9; i++) {
                    noirChange = document.getElementById('noir' + i);
                    noirChange.style.display = 'none';
                }
            }
        }
        else if (p0.style.display === 'block' && p2.style.display === 'block' && croix1.style.display !== 'block' && gCroixBot.style.display!=='block' && gCercleBot.style.display!=='block') {
            p1.style.display = 'block';
            noeud = 'croix';
            victoireCase();

            posD = '1';

            noiro = document.getElementById('noir' + posBot);
            noird = document.getElementById('noir' + posD);

            noiro.style.display = 'block';
            noird.style.display = 'none';

            gCroixBot = document.getElementById('croix' + posD);
            gCercleBot = document.getElementById('cercle' + posD);

            if (gCercleBot.style.display === 'block' || gCroixBot.style.display === 'block') {
                for (i = 0; i < 9; i++) {
                    noirChange = document.getElementById('noir' + i);
                    noirChange.style.display = 'none';
                }
            }
        }
        else if (p1.style.display === 'block' && p2.style.display === 'block' && croix0.style.display !== 'block' && gCroixBot.style.display!=='block' && gCercleBot.style.display!=='block') {
            p0.style.display = 'block';
            noeud = 'croix';
            victoireCase();

            posD = '0';

            noiro = document.getElementById('noir' + posBot);
            noird = document.getElementById('noir' + posD);

            noiro.style.display = 'block';
            noird.style.display = 'none';

            gCroixBot = document.getElementById('croix' + posD);
            gCercleBot = document.getElementById('cercle' + posD);

            if (gCercleBot.style.display === 'block' || gCroixBot.style.display === 'block') {
                for (i = 0; i < 9; i++) {
                    noirChange = document.getElementById('noir' + i);
                    noirChange.style.display = 'none';
                }
            }
        }

        //deuxieme ligne
        else if (p3.style.display === 'block' && p4.style.display === 'block' && croix5.style.display !== 'block' && gCroixBot.style.display!=='block' && gCercleBot.style.display!=='block') {
            p5.style.display = 'block';
            noeud = 'croix';
            victoireCase();

            posD = '5';

            noiro = document.getElementById('noir' + posBot);
            noird = document.getElementById('noir' + posD);

            noiro.style.display = 'block';
            noird.style.display = 'none';

            gCroixBot = document.getElementById('croix' + posD);
            gCercleBot = document.getElementById('cercle' + posD);

            if (gCercleBot.style.display === 'block' || gCroixBot.style.display === 'block') {
                for (i = 0; i < 9; i++) {
                    noirChange = document.getElementById('noir' + i);
                    noirChange.style.display = 'none';
                }
            }
        }
        else if (p3.style.display === 'block' && p5.style.display === 'block' && croix4.style.display !== 'block' && gCroixBot.style.display!=='block' && gCercleBot.style.display!=='block') {
            p4.style.display = 'block';
            noeud = 'croix';
            victoireCase();

            posD = '4';

            noiro = document.getElementById('noir' + posBot);
            noird = document.getElementById('noir' + posD);

            noiro.style.display = 'block';
            noird.style.display = 'none';

            gCroixBot = document.getElementById('croix' + posD);
            gCercleBot = document.getElementById('cercle' + posD);

            if (gCercleBot.style.display === 'block' || gCroixBot.style.display === 'block') {
                for (i = 0; i < 9; i++) {
                    noirChange = document.getElementById('noir' + i);
                    noirChange.style.display = 'none';
                }
            }
        }
        else if (p4.style.display === 'block' && p5.style.display === 'block' && croix3.style.display !== 'block' && gCroixBot.style.display!=='block' && gCercleBot.style.display!=='block') {
            p3.style.display = 'block';
            noeud = 'croix';
            victoireCase();

            posD = '3';

            noiro = document.getElementById('noir' + posBot);
            noird = document.getElementById('noir' + posD);

            noiro.style.display = 'block';
            noird.style.display = 'none';

            gCroixBot = document.getElementById('croix' + posD);
            gCercleBot = document.getElementById('cercle' + posD);

            if (gCercleBot.style.display === 'block' || gCroixBot.style.display === 'block') {
                for (i = 0; i < 9; i++) {
                    noirChange = document.getElementById('noir' + i);
                    noirChange.style.display = 'none';
                }
            }
        }

        //troisieme ligne
        else if (p6.style.display === 'block' && p7.style.display === 'block' && croix8.style.display !== 'block' && gCroixBot.style.display!=='block' && gCercleBot.style.display!=='block') {
            p8.style.display = 'block';
            noeud = 'croix';
            victoireCase();

            posD = '8';

            noiro = document.getElementById('noir' + posBot);
            noird = document.getElementById('noir' + posD);

            noiro.style.display = 'block';
            noird.style.display = 'none';

            gCroixBot = document.getElementById('croix' + posD);
            gCercleBot = document.getElementById('cercle' + posD);

            if (gCercleBot.style.display === 'block' || gCroixBot.style.display === 'block') {
                for (i = 0; i < 9; i++) {
                    noirChange = document.getElementById('noir' + i);
                    noirChange.style.display = 'none';
                }
            }
        }
        else if (p6.style.display === 'block' && p8.style.display === 'block' && croix7.style.display !== 'block' && gCroixBot.style.display!=='block' && gCercleBot.style.display!=='block') {
            p7.style.display = 'block';
            noeud = 'croix';
            victoireCase();

            posD = '7';

            noiro = document.getElementById('noir' + posBot);
            noird = document.getElementById('noir' + posD);

            noiro.style.display = 'block';
            noird.style.display = 'none';

            gCroixBot = document.getElementById('croix' + posD);
            gCercleBot = document.getElementById('cercle' + posD);

            if (gCercleBot.style.display === 'block' || gCroixBot.style.display === 'block') {
                for (i = 0; i < 9; i++) {
                    noirChange = document.getElementById('noir' + i);
                    noirChange.style.display = 'none';
                }
            }
        }
        else if (p7.style.display === 'block' && p8.style.display === 'block' && croix6.style.display !== 'block' && gCroixBot.style.display!=='block' && gCercleBot.style.display!=='block') {
            p6.style.display = 'block';
            noeud = 'croix';
            victoireCase();

            posD = '6';

            noiro = document.getElementById('noir' + posBot);
            noird = document.getElementById('noir' + posD);

            noiro.style.display = 'block';
            noird.style.display = 'none';

            gCroixBot = document.getElementById('croix' + posD);
            gCercleBot = document.getElementById('cercle' + posD);

            if (gCercleBot.style.display === 'block' || gCroixBot.style.display === 'block') {
                for (i = 0; i < 9; i++) {
                    noirChange = document.getElementById('noir' + i);
                    noirChange.style.display = 'none';
                }
            }
        }

        //premiere colonne
        else if (p0.style.display === 'block' && p3.style.display === 'block' && croix6.style.display !== 'block' && gCroixBot.style.display!=='block' && gCercleBot.style.display!=='block') {
            p6.style.display = 'block';
            noeud = 'croix';
            victoireCase();

            posD = '6';

            noiro = document.getElementById('noir' + posBot);
            noird = document.getElementById('noir' + posD);

            noiro.style.display = 'block';
            noird.style.display = 'none';

            gCroixBot = document.getElementById('croix' + posD);
            gCercleBot = document.getElementById('cercle' + posD);

            if (gCercleBot.style.display === 'block' || gCroixBot.style.display === 'block') {
                for (i = 0; i < 9; i++) {
                    noirChange = document.getElementById('noir' + i);
                    noirChange.style.display = 'none';
                }
            }
        }
        else if (p0.style.display === 'block' && p6.style.display === 'block' && croix3.style.display !== 'block' && gCroixBot.style.display!=='block' && gCercleBot.style.display!=='block') {
            p3.style.display = 'block';
            noeud = 'croix';
            victoireCase();

            posD = '3';

            noiro = document.getElementById('noir' + posBot);
            noird = document.getElementById('noir' + posD);

            noiro.style.display = 'block';
            noird.style.display = 'none';

            gCroixBot = document.getElementById('croix' + posD);
            gCercleBot = document.getElementById('cercle' + posD);

            if (gCercleBot.style.display === 'block' || gCroixBot.style.display === 'block') {
                for (i = 0; i < 9; i++) {
                    noirChange = document.getElementById('noir' + i);
                    noirChange.style.display = 'none';
                }
            }
        }
        else if (p3.style.display === 'block' && p6.style.display === 'block' && croix0.style.display !== 'block' && gCroixBot.style.display!=='block' && gCercleBot.style.display!=='block') {
            p0.style.display = 'block';
            noeud = 'croix';
            victoireCase();

            posD = '0';

            noiro = document.getElementById('noir' + posBot);
            noird = document.getElementById('noir' + posD);

            noiro.style.display = 'block';
            noird.style.display = 'none';

            gCroixBot = document.getElementById('croix' + posD);
            gCercleBot = document.getElementById('cercle' + posD);

            if (gCercleBot.style.display === 'block' || gCroixBot.style.display === 'block') {
                for (i = 0; i < 9; i++) {
                    noirChange = document.getElementById('noir' + i);
                    noirChange.style.display = 'none';
                }
            }
        }

        //deuxieme colonne
        else if (p1.style.display === 'block' && p4.style.display === 'block' && croix7.style.display !== 'block' && gCroixBot.style.display!=='block' && gCercleBot.style.display!=='block') {
            p7.style.display = 'block';
            noeud = 'croix';
            victoireCase();

            posD = '7';

            noiro = document.getElementById('noir' + posBot);
            noird = document.getElementById('noir' + posD);

            noiro.style.display = 'block';
            noird.style.display = 'none';

            gCroixBot = document.getElementById('croix' + posD);
            gCercleBot = document.getElementById('cercle' + posD);

            if (gCercleBot.style.display === 'block' || gCroixBot.style.display === 'block') {
                for (i = 0; i < 9; i++) {
                    noirChange = document.getElementById('noir' + i);
                    noirChange.style.display = 'none';
                }
            }
        }
        else if (p1.style.display === 'block' && p7.style.display === 'block' && croix4.style.display !== 'block' && gCroixBot.style.display!=='block' && gCercleBot.style.display!=='block') {
            p4.style.display = 'block';
            noeud = 'croix';
            victoireCase();

            posD = '4';

            noiro = document.getElementById('noir' + posBot);
            noird = document.getElementById('noir' + posD);

            noiro.style.display = 'block';
            noird.style.display = 'none';

            gCroixBot = document.getElementById('croix' + posD);
            gCercleBot = document.getElementById('cercle' + posD);

            if (gCercleBot.style.display === 'block' || gCroixBot.style.display === 'block') {
                for (i = 0; i < 9; i++) {
                    noirChange = document.getElementById('noir' + i);
                    noirChange.style.display = 'none';
                }
            }
        }
        else if (p4.style.display === 'block' && p7.style.display === 'block' && croix1.style.display !== 'block' && gCroixBot.style.display!=='block' && gCercleBot.style.display!=='block') {
            p1.style.display = 'block';
            noeud = 'croix';
            victoireCase();

            posD = '1';

            noiro = document.getElementById('noir' + posBot);
            noird = document.getElementById('noir' + posD);

            noiro.style.display = 'block';
            noird.style.display = 'none';

            gCroixBot = document.getElementById('croix' + posD);
            gCercleBot = document.getElementById('cercle' + posD);

            if (gCercleBot.style.display === 'block' || gCroixBot.style.display === 'block') {
                for (i = 0; i < 9; i++) {
                    noirChange = document.getElementById('noir' + i);
                    noirChange.style.display = 'none';
                }
            }
        }

        //troisieme colonne
        else if (p2.style.display === 'block' && p5.style.display === 'block' && croix8.style.display !== 'block' && gCroixBot.style.display!=='block' && gCercleBot.style.display!=='block') {
            p8.style.display = 'block';
            noeud = 'croix';
            victoireCase();

            posD = '8';

            noiro = document.getElementById('noir' + posBot);
            noird = document.getElementById('noir' + posD);

            noiro.style.display = 'block';
            noird.style.display = 'none';

            gCroixBot = document.getElementById('croix' + posD);
            gCercleBot = document.getElementById('cercle' + posD);

            if (gCercleBot.style.display === 'block' || gCroixBot.style.display === 'block') {
                for (i = 0; i < 9; i++) {
                    noirChange = document.getElementById('noir' + i);
                    noirChange.style.display = 'none';
                }
            }
        }
        else if (p2.style.display === 'block' && p8.style.display === 'block' && croix5.style.display !== 'block' && gCroixBot.style.display!=='block' && gCercleBot.style.display!=='block') {
            p5.style.display = 'block';
            noeud = 'croix';
            victoireCase();

            posD = '5';

            noiro = document.getElementById('noir' + posBot);
            noird = document.getElementById('noir' + posD);

            noiro.style.display = 'block';
            noird.style.display = 'none';

            gCroixBot = document.getElementById('croix' + posD);
            gCercleBot = document.getElementById('cercle' + posD);

            if (gCercleBot.style.display === 'block' || gCroixBot.style.display === 'block') {
                for (i = 0; i < 9; i++) {
                    noirChange = document.getElementById('noir' + i);
                    noirChange.style.display = 'none';
                }
            }
        }
        else if (p5.style.display === 'block' && p8.style.display === 'block' && croix2.style.display !== 'block' && gCroixBot.style.display!=='block' && gCercleBot.style.display!=='block') {
            p2.style.display = 'block';
            noeud = 'croix';
            victoireCase();

            posD = '2';

            noiro = document.getElementById('noir' + posBot);
            noird = document.getElementById('noir' + posD);

            noiro.style.display = 'block';
            noird.style.display = 'none';

            gCroixBot = document.getElementById('croix' + posD);
            gCercleBot = document.getElementById('cercle' + posD);

            if (gCercleBot.style.display === 'block' || gCroixBot.style.display === 'block') {
                for (i = 0; i < 9; i++) {
                    noirChange = document.getElementById('noir' + i);
                    noirChange.style.display = 'none';
                }
            }
        }

        //premiere diagonale
        else if (p0.style.display === 'block' && p4.style.display === 'block' && croix8.style.display !== 'block' && gCroixBot.style.display!=='block' && gCercleBot.style.display!=='block') {
            p8.style.display = 'block';
            noeud = 'croix';
            victoireCase();

            posD = '8';

            noiro = document.getElementById('noir' + posBot);
            noird = document.getElementById('noir' + posD);

            noiro.style.display = 'block';
            noird.style.display = 'none';

            gCroixBot = document.getElementById('croix' + posD);
            gCercleBot = document.getElementById('cercle' + posD);

            if (gCercleBot.style.display === 'block' || gCroixBot.style.display === 'block') {
                for (i = 0; i < 9; i++) {
                    noirChange = document.getElementById('noir' + i);
                    noirChange.style.display = 'none';
                }
            }

        }
        else if (p0.style.display === 'block' && p8.style.display === 'block' && croix4.style.display !== 'block' && gCroixBot.style.display!=='block' && gCercleBot.style.display!=='block') {
            p4.style.display = 'block';
            noeud = 'croix';
            victoireCase();

            posD = '4';

            noiro = document.getElementById('noir' + posBot);
            noird = document.getElementById('noir' + posD);

            noiro.style.display = 'block';
            noird.style.display = 'none';

            gCroixBot = document.getElementById('croix' + posD);
            gCercleBot = document.getElementById('cercle' + posD);

            if (gCercleBot.style.display === 'block' || gCroixBot.style.display === 'block') {
                for (i = 0; i < 9; i++) {
                    noirChange = document.getElementById('noir' + i);
                    noirChange.style.display = 'none';
                }
            }
        }
        else if (p4.style.display === 'block' && p8.style.display === 'block' && croix0.style.display !== 'block' && gCroixBot.style.display!=='block' && gCercleBot.style.display!=='block') {
            p0.style.display = 'block';
            noeud = 'croix';
            victoireCase();

            posD = '0';

            noiro = document.getElementById('noir' + posBot);
            noird = document.getElementById('noir' + posD);

            noiro.style.display = 'block';
            noird.style.display = 'none';

            gCroixBot = document.getElementById('croix' + posD);
            gCercleBot = document.getElementById('cercle' + posD);

            if (gCercleBot.style.display === 'block' || gCroixBot.style.display === 'block') {
                for (i = 0; i < 9; i++) {
                    noirChange = document.getElementById('noir' + i);
                    noirChange.style.display = 'none';
                }
            }
        }

        //deuxieme diagonale
        else if (p2.style.display === 'block' && p4.style.display === 'block' && croix6.style.display !== 'block' && gCroixBot.style.display!=='block' && gCercleBot.style.display!=='block') {
            p6.style.display = 'block';
            noeud = 'croix';
            victoireCase();

            posD = '6';

            noiro = document.getElementById('noir' + posBot);
            noird = document.getElementById('noir' + posD);

            noiro.style.display = 'block';
            noird.style.display = 'none';

            gCroixBot = document.getElementById('croix' + posD);
            gCercleBot = document.getElementById('cercle' + posD);

            if (gCercleBot.style.display === 'block' || gCroixBot.style.display === 'block') {
                for (i = 0; i < 9; i++) {
                    noirChange = document.getElementById('noir' + i);
                    noirChange.style.display = 'none';
                }
            }
        }
        else if (p2.style.display === 'block' && p6.style.display === 'block' && croix4.style.display !== 'block' && gCroixBot.style.display!=='block' && gCercleBot.style.display!=='block') {
            p4.style.display = 'block';
            noeud = 'croix';
            victoireCase();

            posD = '4';

            noiro = document.getElementById('noir' + posBot);
            noird = document.getElementById('noir' + posD);

            noiro.style.display = 'block';
            noird.style.display = 'none';

            gCroixBot = document.getElementById('croix' + posD);
            gCercleBot = document.getElementById('cercle' + posD);

            if (gCercleBot.style.display === 'block' || gCroixBot.style.display === 'block') {
                for (i = 0; i < 9; i++) {
                    noirChange = document.getElementById('noir' + i);
                    noirChange.style.display = 'none';
                }
            }
        }
        else if (p4.style.display === 'block' && p6.style.display === 'block' && croix2.style.display !== 'block' && gCroixBot.style.display!=='block' && gCercleBot.style.display!=='block') {
            p2.style.display = 'block';
            noeud = 'croix';
            victoireCase();

            posD = '2';

            noiro = document.getElementById('noir' + posBot);
            noird = document.getElementById('noir' + posD);

            noiro.style.display = 'block';
            noird.style.display = 'none';

            gCroixBot = document.getElementById('croix' + posD);
            gCercleBot = document.getElementById('cercle' + posD);

            if (gCercleBot.style.display === 'block' || gCroixBot.style.display === 'block') {
                for (i = 0; i < 9; i++) {
                    noirChange = document.getElementById('noir' + i);
                    noirChange.style.display = 'none';
                }
            }
        }


        //IL CHERCHE A EMPECHER LE JOUEUR DE GAGNER

        //premiere ligne
        else if (croix0.style.display === 'block' && croix1.style.display === 'block' && p2.style.display !== 'block' && gCroixBot.style.display!=='block' && gCercleBot.style.display!=='block') {
            p2.style.display = 'block';
            noeud = 'croix';
            victoireCase();

            posD = '2';

            noiro = document.getElementById('noir' + posBot);
            noird = document.getElementById('noir' + posD);

            noiro.style.display = 'block';
            noird.style.display = 'none';

            gCroixBot = document.getElementById('croix' + posD);
            gCercleBot = document.getElementById('cercle' + posD);

            if (gCercleBot.style.display === 'block' || gCroixBot.style.display === 'block') {
                for (i = 0; i < 9; i++) {
                    noirChange = document.getElementById('noir' + i);
                    noirChange.style.display = 'none';
                }
            }
        }
        else if (croix0.style.display === 'block' && croix2.style.display === 'block' && p1.style.display !== 'block' && gCroixBot.style.display!=='block' && gCercleBot.style.display!=='block') {
            p1.style.display = 'block';
            noeud = 'croix';
            victoireCase();

            posD = '1';

            noiro = document.getElementById('noir' + posBot);
            noird = document.getElementById('noir' + posD);

            noiro.style.display = 'block';
            noird.style.display = 'none';

            gCroixBot = document.getElementById('croix' + posD);
            gCercleBot = document.getElementById('cercle' + posD);

            if (gCercleBot.style.display === 'block' || gCroixBot.style.display === 'block') {
                for (i = 0; i < 9; i++) {
                    noirChange = document.getElementById('noir' + i);
                    noirChange.style.display = 'none';
                }
            }
        }
        else if (croix1.style.display === 'block' && croix2.style.display === 'block' && p0.style.display !== 'block' && gCroixBot.style.display!=='block' && gCercleBot.style.display!=='block') {
            p0.style.display = 'block';
            noeud = 'croix';
            victoireCase();

            posD = '0';

            noiro = document.getElementById('noir' + posBot);
            noird = document.getElementById('noir' + posD);

            noiro.style.display = 'block';
            noird.style.display = 'none';

            gCroixBot = document.getElementById('croix' + posD);
            gCercleBot = document.getElementById('cercle' + posD);

            if (gCercleBot.style.display === 'block' || gCroixBot.style.display === 'block') {
                for (i = 0; i < 9; i++) {
                    noirChange = document.getElementById('noir' + i);
                    noirChange.style.display = 'none';
                }
            }
        }

        //deuxieme ligne
        else if (croix3.style.display === 'block' && croix4.style.display === 'block' && p5.style.display !== 'block' && gCroixBot.style.display!=='block' && gCercleBot.style.display!=='block') {
            p5.style.display = 'block';
            noeud = 'croix';
            victoireCase();

            posD = '5';

            noiro = document.getElementById('noir' + posBot);
            noird = document.getElementById('noir' + posD);

            noiro.style.display = 'block';
            noird.style.display = 'none';

            gCroixBot = document.getElementById('croix' + posD);
            gCercleBot = document.getElementById('cercle' + posD);

            if (gCercleBot.style.display === 'block' || gCroixBot.style.display === 'block') {
                for (i = 0; i < 9; i++) {
                    noirChange = document.getElementById('noir' + i);
                    noirChange.style.display = 'none';
                }
            }
        }
        else if (croix3.style.display === 'block' && croix5.style.display === 'block' && p4.style.display !== 'block' && gCroixBot.style.display!=='block' && gCercleBot.style.display!=='block') {
            p4.style.display = 'block';
            noeud = 'croix';
            victoireCase();

            posD = '4';

            noiro = document.getElementById('noir' + posBot);
            noird = document.getElementById('noir' + posD);

            noiro.style.display = 'block';
            noird.style.display = 'none';

            gCroixBot = document.getElementById('croix' + posD);
            gCercleBot = document.getElementById('cercle' + posD);

            if (gCercleBot.style.display === 'block' || gCroixBot.style.display === 'block') {
                for (i = 0; i < 9; i++) {
                    noirChange = document.getElementById('noir' + i);
                    noirChange.style.display = 'none';
                }
            }
        }
        else if (croix4.style.display === 'block' && croix5.style.display === 'block' && p3.style.display !== 'block' && gCroixBot.style.display!=='block' && gCercleBot.style.display!=='block') {
            p3.style.display = 'block';
            noeud = 'croix';
            victoireCase();

            posD = '3';

            noiro = document.getElementById('noir' + posBot);
            noird = document.getElementById('noir' + posD);

            noiro.style.display = 'block';
            noird.style.display = 'none';

            gCroixBot = document.getElementById('croix' + posD);
            gCercleBot = document.getElementById('cercle' + posD);

            if (gCercleBot.style.display === 'block' || gCroixBot.style.display === 'block') {
                for (i = 0; i < 9; i++) {
                    noirChange = document.getElementById('noir' + i);
                    noirChange.style.display = 'none';
                }
            }
        }

        //troisieme ligne
        else if (croix6.style.display === 'block' && croix7.style.display === 'block' && p8.style.display !== 'block' && gCroixBot.style.display!=='block' && gCercleBot.style.display!=='block') {
            p8.style.display = 'block';
            noeud = 'croix';
            victoireCase();

            posD = '8';

            noiro = document.getElementById('noir' + posBot);
            noird = document.getElementById('noir' + posD);

            noiro.style.display = 'block';
            noird.style.display = 'none';

            gCroixBot = document.getElementById('croix' + posD);
            gCercleBot = document.getElementById('cercle' + posD);

            if (gCercleBot.style.display === 'block' || gCroixBot.style.display === 'block') {
                for (i = 0; i < 9; i++) {
                    noirChange = document.getElementById('noir' + i);
                    noirChange.style.display = 'none';
                }
            }
        }
        else if (croix6.style.display === 'block' && croix8.style.display === 'block' && p7.style.display !== 'block' && gCroixBot.style.display!=='block' && gCercleBot.style.display!=='block') {
            p7.style.display = 'block';
            noeud = 'croix';
            victoireCase();

            posD = '7';

            noiro = document.getElementById('noir' + posBot);
            noird = document.getElementById('noir' + posD);

            noiro.style.display = 'block';
            noird.style.display = 'none';

            gCroixBot = document.getElementById('croix' + posD);
            gCercleBot = document.getElementById('cercle' + posD);

            if (gCercleBot.style.display === 'block' || gCroixBot.style.display === 'block') {
                for (i = 0; i < 9; i++) {
                    noirChange = document.getElementById('noir' + i);
                    noirChange.style.display = 'none';
                }
            }
        }
        else if (croix7.style.display === 'block' && croix8.style.display === 'block' && p6.style.display !== 'block' && gCroixBot.style.display!=='block' && gCercleBot.style.display!=='block') {
            p6.style.display = 'block';
            noeud = 'croix';
            victoireCase();

            posD = '6';

            noiro = document.getElementById('noir' + posBot);
            noird = document.getElementById('noir' + posD);

            noiro.style.display = 'block';
            noird.style.display = 'none';

            gCroixBot = document.getElementById('croix' + posD);
            gCercleBot = document.getElementById('cercle' + posD);

            if (gCercleBot.style.display === 'block' || gCroixBot.style.display === 'block') {
                for (i = 0; i < 9; i++) {
                    noirChange = document.getElementById('noir' + i);
                    noirChange.style.display = 'none';
                }
            }
        }

        //premiere colonne
        else if (croix0.style.display === 'block' && croix3.style.display === 'block' && p6.style.display !== 'block' && gCroixBot.style.display!=='block' && gCercleBot.style.display!=='block') {
            p6.style.display = 'block';
            noeud = 'croix';
            victoireCase();

            posD = '6';

            noiro = document.getElementById('noir' + posBot);
            noird = document.getElementById('noir' + posD);

            noiro.style.display = 'block';
            noird.style.display = 'none';

            gCroixBot = document.getElementById('croix' + posD);
            gCercleBot = document.getElementById('cercle' + posD);

            if (gCercleBot.style.display === 'block' || gCroixBot.style.display === 'block') {
                for (i = 0; i < 9; i++) {
                    noirChange = document.getElementById('noir' + i);
                    noirChange.style.display = 'none';
                }
            }
        }
        else if (croix0.style.display === 'block' && croix6.style.display === 'block' && p3.style.display !== 'block' && gCroixBot.style.display!=='block' && gCercleBot.style.display!=='block') {
            p3.style.display = 'block';
            noeud = 'croix';
            victoireCase();

            posD = '3';

            noiro = document.getElementById('noir' + posBot);
            noird = document.getElementById('noir' + posD);

            noiro.style.display = 'block';
            noird.style.display = 'none';

            gCroixBot = document.getElementById('croix' + posD);
            gCercleBot = document.getElementById('cercle' + posD);

            if (gCercleBot.style.display === 'block' || gCroixBot.style.display === 'block') {
                for (i = 0; i < 9; i++) {
                    noirChange = document.getElementById('noir' + i);
                    noirChange.style.display = 'none';
                }
            }
        }
        else if (croix3.style.display === 'block' && croix6.style.display === 'block' && p0.style.display !== 'block' && gCroixBot.style.display!=='block' && gCercleBot.style.display!=='block') {
            p0.style.display = 'block';
            noeud = 'croix';
            victoireCase();

            posD = '0';

            noiro = document.getElementById('noir' + posBot);
            noird = document.getElementById('noir' + posD);

            noiro.style.display = 'block';
            noird.style.display = 'none';

            gCroixBot = document.getElementById('croix' + posD);
            gCercleBot = document.getElementById('cercle' + posD);

            if (gCercleBot.style.display === 'block' || gCroixBot.style.display === 'block') {
                for (i = 0; i < 9; i++) {
                    noirChange = document.getElementById('noir' + i);
                    noirChange.style.display = 'none';
                }
            }
        }

        //deuxieme colonne
        else if (croix1.style.display === 'block' && croix4.style.display === 'block' && p7.style.display !== 'block' && gCroixBot.style.display!=='block' && gCercleBot.style.display!=='block') {
            p7.style.display = 'block';
            noeud = 'croix';
            victoireCase();

            posD = '7';

            noiro = document.getElementById('noir' + posBot);
            noird = document.getElementById('noir' + posD);

            noiro.style.display = 'block';
            noird.style.display = 'none';

            gCroixBot = document.getElementById('croix' + posD);
            gCercleBot = document.getElementById('cercle' + posD);

            if (gCercleBot.style.display === 'block' || gCroixBot.style.display === 'block') {
                for (i = 0; i < 9; i++) {
                    noirChange = document.getElementById('noir' + i);
                    noirChange.style.display = 'none';
                }
            }
        }
        else if (croix1.style.display === 'block' && croix7.style.display === 'block' && p4.style.display !== 'block' && gCroixBot.style.display!=='block' && gCercleBot.style.display!=='block') {
            p4.style.display = 'block';
            noeud = 'croix';
            victoireCase();

            posD = '4';

            noiro = document.getElementById('noir' + posBot);
            noird = document.getElementById('noir' + posD);

            noiro.style.display = 'block';
            noird.style.display = 'none';

            gCroixBot = document.getElementById('croix' + posD);
            gCercleBot = document.getElementById('cercle' + posD);

            if (gCercleBot.style.display === 'block' || gCroixBot.style.display === 'block') {
                for (i = 0; i < 9; i++) {
                    noirChange = document.getElementById('noir' + i);
                    noirChange.style.display = 'none';
                }
            }
        }
        else if (croix4.style.display === 'block' && croix7.style.display === 'block' && p1.style.display !== 'block' && gCroixBot.style.display!=='block' && gCercleBot.style.display!=='block') {
            p1.style.display = 'block';
            noeud = 'croix';
            victoireCase();

            posD = '1';

            noiro = document.getElementById('noir' + posBot);
            noird = document.getElementById('noir' + posD);

            noiro.style.display = 'block';
            noird.style.display = 'none';

            gCroixBot = document.getElementById('croix' + posD);
            gCercleBot = document.getElementById('cercle' + posD);

            if (gCercleBot.style.display === 'block' || gCroixBot.style.display === 'block') {
                for (i = 0; i < 9; i++) {
                    noirChange = document.getElementById('noir' + i);
                    noirChange.style.display = 'none';
                }
            }
        }

        //troisieme colonne
        else if (croix2.style.display === 'block' && croix5.style.display === 'block' && p8.style.display !== 'block' && gCroixBot.style.display!=='block' && gCercleBot.style.display!=='block') {
            p8.style.display = 'block';
            noeud = 'croix';
            victoireCase();

            posD = '8';

            noiro = document.getElementById('noir' + posBot);
            noird = document.getElementById('noir' + posD);

            noiro.style.display = 'block';
            noird.style.display = 'none';

            gCroixBot = document.getElementById('croix' + posD);
            gCercleBot = document.getElementById('cercle' + posD);

            if (gCercleBot.style.display === 'block' || gCroixBot.style.display === 'block') {
                for (i = 0; i < 9; i++) {
                    noirChange = document.getElementById('noir' + i);
                    noirChange.style.display = 'none';
                }
            }
        }
        else if (croix2.style.display === 'block' && croix8.style.display === 'block' && p5.style.display !== 'block' && gCroixBot.style.display!=='block' && gCercleBot.style.display!=='block') {
            p5.style.display = 'block';
            noeud = 'croix';
            victoireCase();

            posD = '5';

            noiro = document.getElementById('noir' + posBot);
            noird = document.getElementById('noir' + posD);

            noiro.style.display = 'block';
            noird.style.display = 'none';

            gCroixBot = document.getElementById('croix' + posD);
            gCercleBot = document.getElementById('cercle' + posD);

            if (gCercleBot.style.display === 'block' || gCroixBot.style.display === 'block') {
                for (i = 0; i < 9; i++) {
                    noirChange = document.getElementById('noir' + i);
                    noirChange.style.display = 'none';
                }
            }
        }
        else if (croix5.style.display === 'block' && croix8.style.display === 'block' && p2.style.display !== 'block' && gCroixBot.style.display!=='block' && gCercleBot.style.display!=='block') {
            p2.style.display = 'block';
            noeud = 'croix';
            victoireCase();

            posD = '2';

            noiro = document.getElementById('noir' + posBot);
            noird = document.getElementById('noir' + posD);

            noiro.style.display = 'block';
            noird.style.display = 'none';

            gCroixBot = document.getElementById('croix' + posD);
            gCercleBot = document.getElementById('cercle' + posD);

            if (gCercleBot.style.display === 'block' || gCroixBot.style.display === 'block') {
                for (i = 0; i < 9; i++) {
                    noirChange = document.getElementById('noir' + i);
                    noirChange.style.display = 'none';
                }
            }
        }

        //premiere diagonale
        else if (croix0.style.display === 'block' && croix4.style.display === 'block' && p8.style.display !== 'block' && gCroixBot.style.display!=='block' && gCercleBot.style.display!=='block') {
            p8.style.display = 'block';
            noeud = 'croix';
            victoireCase();

            posD = '8';

            noiro = document.getElementById('noir' + posBot);
            noird = document.getElementById('noir' + posD);

            noiro.style.display = 'block';
            noird.style.display = 'none';

            gCroixBot = document.getElementById('croix' + posD);
            gCercleBot = document.getElementById('cercle' + posD);

            if (gCercleBot.style.display === 'block' || gCroixBot.style.display === 'block') {
                for (i = 0; i < 9; i++) {
                    noirChange = document.getElementById('noir' + i);
                    noirChange.style.display = 'none';
                }
            }

        }
        else if (croix0.style.display === 'block' && croix8.style.display === 'block' && p4.style.display !== 'block' && gCroixBot.style.display!=='block' && gCercleBot.style.display!=='block') {
            p4.style.display = 'block';
            noeud = 'croix';
            victoireCase();

            posD = '4';

            noiro = document.getElementById('noir' + posBot);
            noird = document.getElementById('noir' + posD);

            noiro.style.display = 'block';
            noird.style.display = 'none';

            gCroixBot = document.getElementById('croix' + posD);
            gCercleBot = document.getElementById('cercle' + posD);

            if (gCercleBot.style.display === 'block' || gCroixBot.style.display === 'block') {
                for (i = 0; i < 9; i++) {
                    noirChange = document.getElementById('noir' + i);
                    noirChange.style.display = 'none';
                }
            }
        }
        else if (croix4.style.display === 'block' && croix8.style.display === 'block' && p0.style.display !== 'block' && gCroixBot.style.display!=='block' && gCercleBot.style.display!=='block') {
            p0.style.display = 'block';
            noeud = 'croix';
            victoireCase();

            posD = '0';

            noiro = document.getElementById('noir' + posBot);
            noird = document.getElementById('noir' + posD);

            noiro.style.display = 'block';
            noird.style.display = 'none';

            gCroixBot = document.getElementById('croix' + posD);
            gCercleBot = document.getElementById('cercle' + posD);

            if (gCercleBot.style.display === 'block' || gCroixBot.style.display === 'block') {
                for (i = 0; i < 9; i++) {
                    noirChange = document.getElementById('noir' + i);
                    noirChange.style.display = 'none';
                }
            }
        }

        //deuxieme diagonale
        else if (croix2.style.display === 'block' && croix4.style.display === 'block' && p6.style.display !== 'block' && gCroixBot.style.display!=='block' && gCercleBot.style.display!=='block') {
            p6.style.display = 'block';
            noeud = 'croix';
            victoireCase();

            posD = '6';

            noiro = document.getElementById('noir' + posBot);
            noird = document.getElementById('noir' + posD);

            noiro.style.display = 'block';
            noird.style.display = 'none';

            gCroixBot = document.getElementById('croix' + posD);
            gCercleBot = document.getElementById('cercle' + posD);

            if (gCercleBot.style.display === 'block' || gCroixBot.style.display === 'block') {
                for (i = 0; i < 9; i++) {
                    noirChange = document.getElementById('noir' + i);
                    noirChange.style.display = 'none';
                }
            }
        }
        else if (croix2.style.display === 'block' && croix6.style.display === 'block' && p4.style.display !== 'block' && gCroixBot.style.display!=='block' && gCercleBot.style.display!=='block') {
            p4.style.display = 'block';
            noeud = 'croix';
            victoireCase();

            posD = '4';

            noiro = document.getElementById('noir' + posBot);
            noird = document.getElementById('noir' + posD);

            noiro.style.display = 'block';
            noird.style.display = 'none';

            gCroixBot = document.getElementById('croix' + posD);
            gCercleBot = document.getElementById('cercle' + posD);

            if (gCercleBot.style.display === 'block' || gCroixBot.style.display === 'block') {
                for (i = 0; i < 9; i++) {
                    noirChange = document.getElementById('noir' + i);
                    noirChange.style.display = 'none';
                }
            }
        }
        else if (croix4.style.display === 'block' && croix6.style.display === 'block' && p2.style.display !== 'block' && gCroixBot.style.display!=='block' && gCercleBot.style.display!=='block') {
            p2.style.display = 'block';
            noeud = 'croix';
            victoireCase();

            posD = '2';

            noiro = document.getElementById('noir' + posBot);
            noird = document.getElementById('noir' + posD);

            noiro.style.display = 'block';
            noird.style.display = 'none';

            gCroixBot = document.getElementById('croix' + posD);
            gCercleBot = document.getElementById('cercle' + posD);

            if (gCercleBot.style.display === 'block' || gCroixBot.style.display === 'block') {
                for (i = 0; i < 9; i++) {
                    noirChange = document.getElementById('noir' + i);
                    noirChange.style.display = 'none';
                }
            }
        }

        //SI IL PEUT NI GAGNER NI EMPECHER LE JOUEUR DE GAGNER, ON FAIT UN COUP RANDOM

        else {

            var retenue, caseDestCroix, caseDestCercle;
            var checkCase;

            gCroixBot = document.getElementById('croix' + posBot);
            gCercleBot = document.getElementById('cercle' + posBot);

            //AVANT TOUT ON REGARDE SI ON JOUE PAS SUR UNE CASE DEJA GAGNEE
            if (gCroixBot.style.display === 'block' || gCercleBot.style.display === 'block') {
                console.log('JE SUIS A LA LIGNE 710');
                do {
                    retenue = Math.round(Math.random() * 8);
                    console.log('retenue = ' + retenue);
                    gCroixBot = document.getElementById('croix' + retenue);
                    gCercleBot = document.getElementById('cercle' + retenue);
                    console.log('CERCLE '+retenue);
                    console.log('CROIX '+retenue);

                }while(gCroixBot.style.display === 'block' || gCercleBot.style.display === 'block');
                //ON CHERCHE UNE CASE QUI N4A PAS ENCORE ETE GAGNEE

                nb = Math.round(Math.random() * 8);
                caseRand = document.getElementById('cercle'+retenue+nb);
                checkCase = document.getElementById('croix'+retenue+nb);

                //alert('JE JOUE DANS LA GRANDE CASE '+ retenue1 +' ET DANS LA PETITE CASE '+nb1);

                //ON VERIFIE SI LA PETITE CASE N'EST PAS DEJA PRISE
                if(caseRand.style.display!=='block' && checkCase.style.display!=='block'){
                    // alert('JE JOUE DANS LA GRANDE CASE '+ retenue1 +' ET DANS LA PETITE CASE '+nb1);
                    caseRand.style.display='block';
                    victoireCase();

                    noeud='croix';

                    noiro = document.getElementById('noir' + retenue);
                    noird = document.getElementById('noir' + nb);
                    caseDestCroix = document.getElementById('croix'+nb);
                    caseDestCercle = document.getElementById('cercle' + nb);

                    if(caseDestCercle.style.display==='block' || caseDestCroix.style.display==='block'){
                        for (i = 0; i < 9; i++) {
                            noirChange = document.getElementById('noir' + i);
                            noirChange.style.display = 'none';
                        }
                    } else {
                        noiro.style.display = 'block';
                        noird.style.display = 'none';
                    }
                } else {


                    //SINON ON EN CHERCHE UNE AUTRE ET ON L'AFFICHE
                    if(caseRand.style.display==='block' || checkCase.style.display==='block') {

                        do {
                            nb = Math.round(Math.random() * 8);
                            caseRand = document.getElementById('cercle' + retenue + nb);
                            checkCase = document.getElementById('croix' + retenue + nb);
                        }while (caseRand.style.display === 'block' || checkCase.style.display === 'block');
                    }
                    caseRand.style.display='block';
                    victoireCase();

                    noeud='croix';

                    noiro = document.getElementById('noir' + retenue);
                    noird = document.getElementById('noir' + nb);
                    caseDestCroix = document.getElementById('croix'+nb);
                    caseDestCercle = document.getElementById('cercle' + nb);

                    if(caseDestCercle.style.display==='block' || caseDestCroix.style.display==='block'){
                        for (i = 0; i < 9; i++) {
                            noirChange = document.getElementById('noir' + i);
                            noirChange.style.display = 'none';
                        }
                    } else {
                        noiro.style.display = 'block';
                        noird.style.display = 'none';
                    }
                }

                //SI ON A PAS ETE REDIRIGE DANS UNE GRANDE CASE DEJA GAGNE, ON PEUT JOUER LA OU ON EST
            } else {
                nb = Math.round(Math.random() * 8);
                caseRand = document.getElementById('cercle'+posBot+nb);
                checkCase = document.getElementById('croix'+posBot+nb);

                //ON VERIFIE QUE LA PETITE CASE N'A PAS DEJA ETE JOUEE
                if(caseRand.style.display!=='block' && checkCase.style.display!=='block'){
                    caseRand.style.display='block';
                    victoireCase();


                    noeud='croix';
                    console.log('LIGNE 773');
                    noiro = document.getElementById('noir' + posBot);
                    noird = document.getElementById('noir' + nb);
                    caseDestCroix = document.getElementById('croix'+nb);
                    caseDestCercle = document.getElementById('cercle' + nb);

                    if(caseDestCercle.style.display==='block' || caseDestCroix.style.display==='block'){
                        for (i = 0; i < 9; i++) {
                            noirChange = document.getElementById('noir' + i);
                            noirChange.style.display = 'none';
                        }
                    } else {
                        noiro.style.display = 'block';
                        noird.style.display = 'none';
                    }
                } else {
                    //SINON ON CHERCHE UNE CASE JOUABLE
                    do {
                        nb = Math.round(Math.random() * 8);
                        caseRand = document.getElementById('cercle' + posBot + nb);
                        checkCase = document.getElementById('croix' + posBot + nb);
                        console.log('LIGNE 793')
                    }while (caseRand.style.display === 'block' || checkCase.style.display === 'block');

                    caseRand.style.display='block';
                    victoireCase();
                    noeud='croix';

                    noiro = document.getElementById('noir' + posBot);
                    noird = document.getElementById('noir' + nb);
                    caseDestCroix = document.getElementById('croix'+nb);
                    caseDestCercle = document.getElementById('cercle' + nb);

                    if(caseDestCercle.style.display==='block' || caseDestCroix.style.display==='block'){
                        for (i = 0; i < 9; i++) {
                            noirChange = document.getElementById('noir' + i);
                            noirChange.style.display = 'none';
                        }
                    } else {
                        noiro.style.display = 'block';
                        noird.style.display = 'none';
                    }
                }
            }
        }
    }
    victoireTotale();
}


function joue(img1, img2, O, D){

    var noiro = document.getElementById('noir'+O);
    var noird = document.getElementById('noir'+D);


    posBot = D;

    const noir0 = document.getElementById('noir0');
    const noir1 = document.getElementById('noir1');
    const noir2 = document.getElementById('noir2');
    const noir3 = document.getElementById('noir3');
    const noir4 = document.getElementById('noir4');
    const noir5 = document.getElementById('noir5');
    const noir6 = document.getElementById('noir6');
    const noir7 = document.getElementById('noir7');
    const noir8 = document.getElementById('noir8');



    if(noir0.style.display==='none' && noir1.style.display==='none' && noir2.style.display==='none' && noir3.style.display==='none' && noir4.style.display==='none' && noir5.style.display==='none' && noir6.style.display==='none' && noir7.style.display==='none' && noir8.style.display==='none') {
        noir0.style.display='block';
        noir1.style.display='block';
        noir2.style.display='block';
        noir3.style.display='block';
        noir4.style.display='block';
        noir5.style.display='block';
        noir6.style.display='block';
        noir7.style.display='block';
        noir8.style.display='block';
        noird.style.display='none';
    }


    const croix0 = document.getElementById('croix'+ D +'0');
    const croix1 = document.getElementById('croix'+ D +'1');
    const croix2 = document.getElementById('croix'+ D +'2');
    const croix3 = document.getElementById('croix'+ D +'3');
    const croix4 = document.getElementById('croix'+ D +'4');
    const croix5 = document.getElementById('croix'+ D +'5');
    const croix6 = document.getElementById('croix'+ D +'6');
    const croix7 = document.getElementById('croix'+ D +'7');
    const croix8 = document.getElementById('croix'+ D +'8');

    const cercle0 = document.getElementById('cercle'+ D +'0');
    const cercle1 = document.getElementById('cercle'+ D +'1');
    const cercle2 = document.getElementById('cercle'+ D +'2');
    const cercle3 = document.getElementById('cercle'+ D +'3');
    const cercle4 = document.getElementById('cercle'+ D +'4');
    const cercle5 = document.getElementById('cercle'+ D +'5');
    const cercle6 = document.getElementById('cercle'+ D +'6');
    const cercle7 = document.getElementById('cercle'+ D +'7');
    const cercle8 = document.getElementById('cercle'+ D +'8');

    if((croix0.style.display === 'block' || cercle0.style.display === 'block') && (croix1.style.display === 'block' || cercle1.style.display === 'block') && (croix2.style.display === 'block' || cercle2.style.display === 'block') && (croix3.style.display === 'block' || cercle3.style.display === 'block') && (croix4.style.display === 'block' || cercle4.style.display === 'block') && (croix5.style.display === 'block' || cercle5.style.display === 'block') && (croix6.style.display === 'block' || cercle6.style.display === 'block') && (croix7.style.display === 'block' || cercle7.style.display === 'block') && (croix8.style.display === 'block' || cercle8.style.display === 'block')){
        noir0.style.display='none';
        noir1.style.display='none';
        noir2.style.display='none';
        noir3.style.display='none';
        noir4.style.display='none';
        noir5.style.display='none';
        noir6.style.display='none';
        noir7.style.display='none';
        noir8.style.display='none';
    }

    var checkCr = document.getElementById('croix'+D);
    var checkCe = document.getElementById('cercle'+D);


    if(noeud==='croix' && (img1.style.display!=='block' && img2.style.display!=='block')){
        img1.style.display = 'block';
        noeud='cercle';
        noiro.style.display = 'block';
        noird.style.display = 'none';

    }


    if(checkCr.style.display==='block' || checkCe.style.display==='block'){
        noir0.style.display='none';
        noir1.style.display='none';
        noir2.style.display='none';
        noir3.style.display='none';
        noir4.style.display='none';
        noir5.style.display='none';
        noir6.style.display='none';
        noir7.style.display='none';
        noir8.style.display='none';
    }

    victoireCase();
    checkRelou();


    victoireTotale();

    setTimeout(bot,500);



}

function checkRelou() {
    const noir0 = document.getElementById('noir0');
    const noir1 = document.getElementById('noir1');
    const noir2 = document.getElementById('noir2');
    const noir3 = document.getElementById('noir3');
    const noir4 = document.getElementById('noir4');
    const noir5 = document.getElementById('noir5');
    const noir6 = document.getElementById('noir6');
    const noir7 = document.getElementById('noir7');
    const noir8 = document.getElementById('noir8');
    var checkCr = document.getElementById('croix'+D);
    var checkCe = document.getElementById('cercle'+D);
    if(D===O && (checkCr.style.display==='block' || checkCe.style.display==='block')){
        noir0.style.display='none';
        noir1.style.display='none';
        noir2.style.display='none';
        noir3.style.display='none';
        noir4.style.display='none';
        noir5.style.display='none';
        noir6.style.display='none';
        noir7.style.display='none';
        noir8.style.display='none';
    }
}


function victoireCase() {

    var i;

    const croix00 = document.getElementById('croix00');
    const croix01 = document.getElementById('croix01');
    const croix02 = document.getElementById('croix02');
    const croix03 = document.getElementById('croix03');
    const croix04 = document.getElementById('croix04');
    const croix05 = document.getElementById('croix05');
    const croix06 = document.getElementById('croix06');
    const croix07 = document.getElementById('croix07');
    const croix08 = document.getElementById('croix08');
    const croix0 = document.getElementById('croix0');
    if((croix00.style.display==='block' && croix01.style.display==='block' && croix02.style.display==='block') || (croix00.style.display==='block' && croix03.style.display==='block' && croix06.style.display==='block') || (croix00.style.display==='block' && croix04.style.display==='block' && croix08.style.display==='block') || (croix01.style.display==='block' && croix04.style.display==='block' && croix07.style.display==='block') || (croix02.style.display==='block' && croix05.style.display==='block' && croix08.style.display==='block') || (croix02.style.display==='block' && croix04.style.display==='block' && croix06.style.display==='block') || (croix03.style.display==='block' && croix04.style.display==='block' && croix05.style.display==='block') || (croix06.style.display==='block' && croix07.style.display==='block' && croix08.style.display==='block')){
        croix0.style.display = 'block';

    }
    var p0;
    if(croix0.style.display==='block') {
        for (i = 0; i < 9; i++) {
            p0 = document.getElementById('p0' + i);
            p0.style.display = 'none';
        }
    }
    const croix10 = document.getElementById('croix10');
    const croix11 = document.getElementById('croix11');
    const croix12 = document.getElementById('croix12');
    const croix13 = document.getElementById('croix13');
    const croix14 = document.getElementById('croix14');
    const croix15 = document.getElementById('croix15');
    const croix16 = document.getElementById('croix16');
    const croix17 = document.getElementById('croix17');
    const croix18 = document.getElementById('croix18');
    const croix1 = document.getElementById('croix1');
    if((croix10.style.display==='block' && croix11.style.display==='block' && croix12.style.display==='block') || (croix10.style.display==='block' && croix13.style.display==='block' && croix16.style.display==='block') || (croix10.style.display==='block' && croix14.style.display==='block' && croix18.style.display==='block') || (croix11.style.display==='block' && croix14.style.display==='block' && croix17.style.display==='block') || (croix12.style.display==='block' && croix15.style.display==='block' && croix18.style.display==='block') || (croix12.style.display==='block' && croix14.style.display==='block' && croix16.style.display==='block') || (croix13.style.display==='block' && croix14.style.display==='block' && croix15.style.display==='block') || (croix16.style.display==='block' && croix17.style.display==='block' && croix18.style.display==='block')){
        croix1.style.display = 'block';

    }
    var p1;
    if(croix1.style.display==='block') {
        for (i = 0; i < 9; i++) {
            p1 = document.getElementById('p1' + i);
            p1.style.display = 'none';
        }
    }
    const croix20 = document.getElementById('croix20');
    const croix21 = document.getElementById('croix21');
    const croix22 = document.getElementById('croix22');
    const croix23 = document.getElementById('croix23');
    const croix24 = document.getElementById('croix24');
    const croix25 = document.getElementById('croix25');
    const croix26 = document.getElementById('croix26');
    const croix27 = document.getElementById('croix27');
    const croix28 = document.getElementById('croix28');
    const croix2 = document.getElementById('croix2');
    if((croix20.style.display==='block' && croix21.style.display==='block' && croix22.style.display==='block') || (croix20.style.display==='block' && croix23.style.display==='block' && croix26.style.display==='block') || (croix20.style.display==='block' && croix24.style.display==='block' && croix28.style.display==='block') || (croix21.style.display==='block' && croix24.style.display==='block' && croix27.style.display==='block') || (croix22.style.display==='block' && croix25.style.display==='block' && croix28.style.display==='block') || (croix22.style.display==='block' && croix24.style.display==='block' && croix26.style.display==='block') || (croix23.style.display==='block' && croix24.style.display==='block' && croix25.style.display==='block') || (croix26.style.display==='block' && croix27.style.display==='block' && croix28.style.display==='block')){
        croix2.style.display = 'block';

    }
    var p2;
    if(croix2.style.display==='block') {
        for (i = 0; i < 9; i++) {
            p2 = document.getElementById('p2' + i);
            p2.style.display = 'none';
        }
    }
    const croix30 = document.getElementById('croix30');
    const croix31 = document.getElementById('croix31');
    const croix32 = document.getElementById('croix32');
    const croix33 = document.getElementById('croix33');
    const croix34 = document.getElementById('croix34');
    const croix35 = document.getElementById('croix35');
    const croix36 = document.getElementById('croix36');
    const croix37 = document.getElementById('croix37');
    const croix38 = document.getElementById('croix38');
    const croix3 = document.getElementById('croix3');
    if((croix30.style.display==='block' && croix31.style.display==='block' && croix32.style.display==='block') || (croix30.style.display==='block' && croix33.style.display==='block' && croix36.style.display==='block') || (croix30.style.display==='block' && croix34.style.display==='block' && croix38.style.display==='block') || (croix31.style.display==='block' && croix34.style.display==='block' && croix37.style.display==='block') || (croix32.style.display==='block' && croix35.style.display==='block' && croix38.style.display==='block') || (croix32.style.display==='block' && croix34.style.display==='block' && croix36.style.display==='block') || (croix33.style.display==='block' && croix34.style.display==='block' && croix35.style.display==='block') || (croix36.style.display==='block' && croix37.style.display==='block' && croix38.style.display==='block')){
        croix3.style.display = 'block';

    }
    var p3;
    if(croix3.style.display==='block') {
        for (i = 0; i < 9; i++) {
            p3 = document.getElementById('p3' + i);
            p3.style.display = 'none';
        }
    }
    const croix40 = document.getElementById('croix40');
    const croix41 = document.getElementById('croix41');
    const croix42 = document.getElementById('croix42');
    const croix43 = document.getElementById('croix43');
    const croix44 = document.getElementById('croix44');
    const croix45 = document.getElementById('croix45');
    const croix46 = document.getElementById('croix46');
    const croix47 = document.getElementById('croix47');
    const croix48 = document.getElementById('croix48');
    const croix4 = document.getElementById('croix4');
    if((croix40.style.display==='block' && croix41.style.display==='block' && croix42.style.display==='block') || (croix40.style.display==='block' && croix43.style.display==='block' && croix46.style.display==='block') || (croix40.style.display==='block' && croix44.style.display==='block' && croix48.style.display==='block') || (croix41.style.display==='block' && croix44.style.display==='block' && croix47.style.display==='block') || (croix42.style.display==='block' && croix45.style.display==='block' && croix48.style.display==='block') || (croix42.style.display==='block' && croix44.style.display==='block' && croix46.style.display==='block') || (croix43.style.display==='block' && croix44.style.display==='block' && croix45.style.display==='block') || (croix46.style.display==='block' && croix47.style.display==='block' && croix48.style.display==='block')){
        croix4.style.display = 'block';

    }
    var p4;
    if(croix4.style.display==='block') {
        for (i = 0; i < 9; i++) {
            p4 = document.getElementById('p4' + i);
            p4.style.display = 'none';
        }
    }
    const croix50 = document.getElementById('croix50');
    const croix51 = document.getElementById('croix51');
    const croix52 = document.getElementById('croix52');
    const croix53 = document.getElementById('croix53');
    const croix54 = document.getElementById('croix54');
    const croix55 = document.getElementById('croix55');
    const croix56 = document.getElementById('croix56');
    const croix57 = document.getElementById('croix57');
    const croix58 = document.getElementById('croix58');
    const croix5 = document.getElementById('croix5');
    if((croix50.style.display==='block' && croix51.style.display==='block' && croix52.style.display==='block') || (croix50.style.display==='block' && croix53.style.display==='block' && croix56.style.display==='block') || (croix50.style.display==='block' && croix54.style.display==='block' && croix58.style.display==='block') || (croix51.style.display==='block' && croix54.style.display==='block' && croix57.style.display==='block') || (croix52.style.display==='block' && croix55.style.display==='block' && croix58.style.display==='block') || (croix52.style.display==='block' && croix54.style.display==='block' && croix56.style.display==='block') || (croix53.style.display==='block' && croix54.style.display==='block' && croix55.style.display==='block') || (croix56.style.display==='block' && croix57.style.display==='block' && croix58.style.display==='block')){
        croix5.style.display = 'block';

    }
    var p5;
    if(croix5.style.display==='block') {
        for (i = 0; i < 9; i++) {
            p5 = document.getElementById('p5' + i);
            p5.style.display = 'none';
        }
    }
    const croix60 = document.getElementById('croix60');
    const croix61 = document.getElementById('croix61');
    const croix62 = document.getElementById('croix62');
    const croix63 = document.getElementById('croix63');
    const croix64 = document.getElementById('croix64');
    const croix65 = document.getElementById('croix65');
    const croix66 = document.getElementById('croix66');
    const croix67 = document.getElementById('croix67');
    const croix68 = document.getElementById('croix68');
    const croix6 = document.getElementById('croix6');
    if((croix60.style.display==='block' && croix61.style.display==='block' && croix62.style.display==='block') || (croix60.style.display==='block' && croix63.style.display==='block' && croix66.style.display==='block') || (croix60.style.display==='block' && croix64.style.display==='block' && croix68.style.display==='block') || (croix61.style.display==='block' && croix64.style.display==='block' && croix67.style.display==='block') || (croix62.style.display==='block' && croix65.style.display==='block' && croix68.style.display==='block') || (croix62.style.display==='block' && croix64.style.display==='block' && croix66.style.display==='block') || (croix63.style.display==='block' && croix64.style.display==='block' && croix65.style.display==='block') || (croix66.style.display==='block' && croix67.style.display==='block' && croix68.style.display==='block')){
        croix6.style.display = 'block';

    }
    var p6;
    if(croix6.style.display==='block') {
        for (i = 0; i < 9; i++) {
            p6 = document.getElementById('p6' + i);
            p6.style.display = 'none';
        }
    }
    const croix70 = document.getElementById('croix70');
    const croix71 = document.getElementById('croix71');
    const croix72 = document.getElementById('croix72');
    const croix73 = document.getElementById('croix73');
    const croix74 = document.getElementById('croix74');
    const croix75 = document.getElementById('croix75');
    const croix76 = document.getElementById('croix76');
    const croix77 = document.getElementById('croix77');
    const croix78 = document.getElementById('croix78');
    const croix7 = document.getElementById('croix7');
    if((croix70.style.display==='block' && croix71.style.display==='block' && croix72.style.display==='block') || (croix70.style.display==='block' && croix73.style.display==='block' && croix76.style.display==='block') || (croix70.style.display==='block' && croix74.style.display==='block' && croix78.style.display==='block') || (croix71.style.display==='block' && croix74.style.display==='block' && croix77.style.display==='block') || (croix72.style.display==='block' && croix75.style.display==='block' && croix78.style.display==='block') || (croix72.style.display==='block' && croix74.style.display==='block' && croix76.style.display==='block') || (croix73.style.display==='block' && croix74.style.display==='block' && croix75.style.display==='block') || (croix76.style.display==='block' && croix77.style.display==='block' && croix78.style.display==='block')){
        croix7.style.display = 'block';

    }
    var p7;
    if(croix7.style.display==='block') {
        for (i = 0; i < 9; i++) {
            p7 = document.getElementById('p7' + i);
            p7.style.display = 'none';
        }
    }
    const croix80 = document.getElementById('croix80');
    const croix81 = document.getElementById('croix81');
    const croix82 = document.getElementById('croix82');
    const croix83 = document.getElementById('croix83');
    const croix84 = document.getElementById('croix84');
    const croix85 = document.getElementById('croix85');
    const croix86 = document.getElementById('croix86');
    const croix87 = document.getElementById('croix87');
    const croix88 = document.getElementById('croix88');
    const croix8 = document.getElementById('croix8');
    if((croix80.style.display==='block' && croix81.style.display==='block' && croix82.style.display==='block') || (croix80.style.display==='block' && croix83.style.display==='block' && croix86.style.display==='block') || (croix80.style.display==='block' && croix84.style.display==='block' && croix88.style.display==='block') || (croix81.style.display==='block' && croix84.style.display==='block' && croix87.style.display==='block') || (croix82.style.display==='block' && croix85.style.display==='block' && croix88.style.display==='block') || (croix82.style.display==='block' && croix84.style.display==='block' && croix86.style.display==='block') || (croix83.style.display==='block' && croix84.style.display==='block' && croix85.style.display==='block') || (croix86.style.display==='block' && croix87.style.display==='block' && croix88.style.display==='block')){
        croix8.style.display = 'block';

    }
    var p8;
    if(croix8.style.display==='block') {
        for (i = 0; i < 9; i++) {
            p8 = document.getElementById('p8' + i);
            p8.style.display = 'none';
        }
    }

    const cercle00 = document.getElementById('cercle00');
    const cercle01 = document.getElementById('cercle01');
    const cercle02 = document.getElementById('cercle02');
    const cercle03 = document.getElementById('cercle03');
    const cercle04 = document.getElementById('cercle04');
    const cercle05 = document.getElementById('cercle05');
    const cercle06 = document.getElementById('cercle06');
    const cercle07 = document.getElementById('cercle07');
    const cercle08 = document.getElementById('cercle08');
    const cercle0 = document.getElementById('cercle0');
    if((cercle00.style.display==='block' && cercle01.style.display==='block' && cercle02.style.display==='block') || (cercle00.style.display==='block' && cercle03.style.display==='block' && cercle06.style.display==='block') || (cercle00.style.display==='block' && cercle04.style.display==='block' && cercle08.style.display==='block') || (cercle01.style.display==='block' && cercle04.style.display==='block' && cercle07.style.display==='block') || (cercle02.style.display==='block' && cercle05.style.display==='block' && cercle08.style.display==='block') || (cercle02.style.display==='block' && cercle04.style.display==='block' && cercle06.style.display==='block') || (cercle03.style.display==='block' && cercle04.style.display==='block' && cercle05.style.display==='block') || (cercle06.style.display==='block' && cercle07.style.display==='block' && cercle08.style.display==='block')){
        cercle0.style.display = 'block';

    }

    if(cercle0.style.display==='block') {
        for (i = 0; i < 9; i++) {
            p0 = document.getElementById('p0' + i);
            p0.style.display = 'none';
        }
    }

    const cercle10 = document.getElementById('cercle10');
    const cercle11 = document.getElementById('cercle11');
    const cercle12 = document.getElementById('cercle12');
    const cercle13 = document.getElementById('cercle13');
    const cercle14 = document.getElementById('cercle14');
    const cercle15 = document.getElementById('cercle15');
    const cercle16 = document.getElementById('cercle16');
    const cercle17 = document.getElementById('cercle17');
    const cercle18 = document.getElementById('cercle18');
    const cercle1 = document.getElementById('cercle1');
    if((cercle10.style.display==='block' && cercle11.style.display==='block' && cercle12.style.display==='block') || (cercle10.style.display==='block' && cercle13.style.display==='block' && cercle16.style.display==='block') || (cercle10.style.display==='block' && cercle14.style.display==='block' && cercle18.style.display==='block') || (cercle11.style.display==='block' && cercle14.style.display==='block' && cercle17.style.display==='block') || (cercle12.style.display==='block' && cercle15.style.display==='block' && cercle18.style.display==='block') || (cercle12.style.display==='block' && cercle14.style.display==='block' && cercle16.style.display==='block') || (cercle13.style.display==='block' && cercle14.style.display==='block' && cercle15.style.display==='block') || (cercle16.style.display==='block' && cercle17.style.display==='block' && cercle18.style.display==='block')){
        cercle1.style.display = 'block';
    }

    if(cercle1.style.display==='block') {
        for (i = 0; i < 9; i++) {
            p1 = document.getElementById('p1' + i);
            p1.style.display = 'none';
        }
    }
    const cercle20 = document.getElementById('cercle20');
    const cercle21 = document.getElementById('cercle21');
    const cercle22 = document.getElementById('cercle22');
    const cercle23 = document.getElementById('cercle23');
    const cercle24 = document.getElementById('cercle24');
    const cercle25 = document.getElementById('cercle25');
    const cercle26 = document.getElementById('cercle26');
    const cercle27 = document.getElementById('cercle27');
    const cercle28 = document.getElementById('cercle28');
    const cercle2 = document.getElementById('cercle2');
    if((cercle20.style.display==='block' && cercle21.style.display==='block' && cercle22.style.display==='block') || (cercle20.style.display==='block' && cercle23.style.display==='block' && cercle26.style.display==='block') || (cercle20.style.display==='block' && cercle24.style.display==='block' && cercle28.style.display==='block') || (cercle21.style.display==='block' && cercle24.style.display==='block' && cercle27.style.display==='block') || (cercle22.style.display==='block' && cercle25.style.display==='block' && cercle28.style.display==='block') || (cercle22.style.display==='block' && cercle24.style.display==='block' && cercle26.style.display==='block') || (cercle23.style.display==='block' && cercle24.style.display==='block' && cercle25.style.display==='block') || (cercle26.style.display==='block' && cercle27.style.display==='block' && cercle28.style.display==='block')){
        cercle2.style.display = 'block';
    }

    if(cercle2.style.display==='block') {
        for (i = 0; i < 9; i++) {
            p2 = document.getElementById('p2' + i);
            p2.style.display = 'none';
        }
    }

    const cercle30 = document.getElementById('cercle30');
    const cercle31 = document.getElementById('cercle31');
    const cercle32 = document.getElementById('cercle32');
    const cercle33 = document.getElementById('cercle33');
    const cercle34 = document.getElementById('cercle34');
    const cercle35 = document.getElementById('cercle35');
    const cercle36 = document.getElementById('cercle36');
    const cercle37 = document.getElementById('cercle37');
    const cercle38 = document.getElementById('cercle38');
    const cercle3 = document.getElementById('cercle3');
    if((cercle30.style.display==='block' && cercle31.style.display==='block' && cercle32.style.display==='block') || (cercle30.style.display==='block' && cercle33.style.display==='block' && cercle36.style.display==='block') || (cercle30.style.display==='block' && cercle34.style.display==='block' && cercle38.style.display==='block') || (cercle31.style.display==='block' && cercle34.style.display==='block' && cercle37.style.display==='block') || (cercle32.style.display==='block' && cercle35.style.display==='block' && cercle38.style.display==='block') || (cercle32.style.display==='block' && cercle34.style.display==='block' && cercle36.style.display==='block') || (cercle33.style.display==='block' && cercle34.style.display==='block' && cercle35.style.display==='block') || (cercle36.style.display==='block' && cercle37.style.display==='block' && cercle38.style.display==='block')){
        cercle3.style.display = 'block';
    }


    if(cercle3.style.display==='block') {
        for (i = 0; i < 9; i++) {
            p3 = document.getElementById('p3' + i);
            p3.style.display = 'none';
        }
    }
    const cercle40 = document.getElementById('cercle40');
    const cercle41 = document.getElementById('cercle41');
    const cercle42 = document.getElementById('cercle42');
    const cercle43 = document.getElementById('cercle43');
    const cercle44 = document.getElementById('cercle44');
    const cercle45 = document.getElementById('cercle45');
    const cercle46 = document.getElementById('cercle46');
    const cercle47 = document.getElementById('cercle47');
    const cercle48 = document.getElementById('cercle48');
    const cercle4 = document.getElementById('cercle4');
    if((cercle40.style.display==='block' && cercle41.style.display==='block' && cercle42.style.display==='block') || (cercle40.style.display==='block' && cercle43.style.display==='block' && cercle46.style.display==='block') || (cercle40.style.display==='block' && cercle44.style.display==='block' && cercle48.style.display==='block') || (cercle41.style.display==='block' && cercle44.style.display==='block' && cercle47.style.display==='block') || (cercle42.style.display==='block' && cercle45.style.display==='block' && cercle48.style.display==='block') || (cercle42.style.display==='block' && cercle44.style.display==='block' && cercle46.style.display==='block') || (cercle43.style.display==='block' && cercle44.style.display==='block' && cercle45.style.display==='block') || (cercle46.style.display==='block' && cercle47.style.display==='block' && cercle48.style.display==='block')){
        cercle4.style.display = 'block';
    }

    if(cercle4.style.display==='block') {
        for (i = 0; i < 9; i++) {
            p4 = document.getElementById('p4' + i);
            p4.style.display = 'none';
        }
    }

    const cercle50 = document.getElementById('cercle50');
    const cercle51 = document.getElementById('cercle51');
    const cercle52 = document.getElementById('cercle52');
    const cercle53 = document.getElementById('cercle53');
    const cercle54 = document.getElementById('cercle54');
    const cercle55 = document.getElementById('cercle55');
    const cercle56 = document.getElementById('cercle56');
    const cercle57 = document.getElementById('cercle57');
    const cercle58 = document.getElementById('cercle58');
    const cercle5 = document.getElementById('cercle5');
    if((cercle50.style.display==='block' && cercle51.style.display==='block' && cercle52.style.display==='block') || (cercle50.style.display==='block' && cercle53.style.display==='block' && cercle56.style.display==='block') || (cercle50.style.display==='block' && cercle54.style.display==='block' && cercle58.style.display==='block') || (cercle51.style.display==='block' && cercle54.style.display==='block' && cercle57.style.display==='block') || (cercle52.style.display==='block' && cercle55.style.display==='block' && cercle58.style.display==='block') || (cercle52.style.display==='block' && cercle54.style.display==='block' && cercle56.style.display==='block') || (cercle53.style.display==='block' && cercle54.style.display==='block' && cercle55.style.display==='block') || (cercle56.style.display==='block' && cercle57.style.display==='block' && cercle58.style.display==='block')){
        cercle5.style.display = 'block';
    }

    if(cercle5.style.display==='block') {
        for (i = 0; i < 9; i++) {
            p5 = document.getElementById('p5' + i);
            p5.style.display = 'none';
        }
    }

    const cercle60 = document.getElementById('cercle60');
    const cercle61 = document.getElementById('cercle61');
    const cercle62 = document.getElementById('cercle62');
    const cercle63 = document.getElementById('cercle63');
    const cercle64 = document.getElementById('cercle64');
    const cercle65 = document.getElementById('cercle65');
    const cercle66 = document.getElementById('cercle66');
    const cercle67 = document.getElementById('cercle67');
    const cercle68 = document.getElementById('cercle68');
    const cercle6 = document.getElementById('cercle6');
    if((cercle60.style.display==='block' && cercle61.style.display==='block' && cercle62.style.display==='block') || (cercle60.style.display==='block' && cercle63.style.display==='block' && cercle66.style.display==='block') || (cercle60.style.display==='block' && cercle64.style.display==='block' && cercle68.style.display==='block') || (cercle61.style.display==='block' && cercle64.style.display==='block' && cercle67.style.display==='block') || (cercle62.style.display==='block' && cercle65.style.display==='block' && cercle68.style.display==='block') || (cercle62.style.display==='block' && cercle64.style.display==='block' && cercle66.style.display==='block') || (cercle63.style.display==='block' && cercle64.style.display==='block' && cercle65.style.display==='block') || (cercle66.style.display==='block' && cercle67.style.display==='block' && cercle68.style.display==='block')){
        cercle6.style.display = 'block';
    }

    if(cercle6.style.display==='block') {
        for (i = 0; i < 9; i++) {
            p6 = document.getElementById('p6' + i);
            p6.style.display = 'none';
        }
    }

    const cercle70 = document.getElementById('cercle70');
    const cercle71 = document.getElementById('cercle71');
    const cercle72 = document.getElementById('cercle72');
    const cercle73 = document.getElementById('cercle73');
    const cercle74 = document.getElementById('cercle74');
    const cercle75 = document.getElementById('cercle75');
    const cercle76 = document.getElementById('cercle76');
    const cercle77 = document.getElementById('cercle77');
    const cercle78 = document.getElementById('cercle78');
    const cercle7 = document.getElementById('cercle7');
    if((cercle70.style.display==='block' && cercle71.style.display==='block' && cercle72.style.display==='block') || (cercle70.style.display==='block' && cercle73.style.display==='block' && cercle76.style.display==='block') || (cercle70.style.display==='block' && cercle74.style.display==='block' && cercle78.style.display==='block') || (cercle71.style.display==='block' && cercle74.style.display==='block' && cercle77.style.display==='block') || (cercle72.style.display==='block' && cercle75.style.display==='block' && cercle78.style.display==='block') || (cercle72.style.display==='block' && cercle74.style.display==='block' && cercle76.style.display==='block') || (cercle73.style.display==='block' && cercle74.style.display==='block' && cercle75.style.display==='block') || (cercle76.style.display==='block' && cercle77.style.display==='block' && cercle78.style.display==='block')){
        cercle7.style.display = 'block';
    }

    if(cercle7.style.display==='block') {
        for (i = 0; i < 9; i++) {
            p7 = document.getElementById('p7' + i);
            p7.style.display = 'none';
        }
    }

    const cercle80 = document.getElementById('cercle80');
    const cercle81 = document.getElementById('cercle81');
    const cercle82 = document.getElementById('cercle82');
    const cercle83 = document.getElementById('cercle83');
    const cercle84 = document.getElementById('cercle84');
    const cercle85 = document.getElementById('cercle85');
    const cercle86 = document.getElementById('cercle86');
    const cercle87 = document.getElementById('cercle87');
    const cercle88 = document.getElementById('cercle88');
    const cercle8 = document.getElementById('cercle8');
    if((cercle80.style.display==='block' && cercle81.style.display==='block' && cercle82.style.display==='block') || (cercle80.style.display==='block' && cercle83.style.display==='block' && cercle86.style.display==='block') || (cercle80.style.display==='block' && cercle84.style.display==='block' && cercle88.style.display==='block') || (cercle81.style.display==='block' && cercle84.style.display==='block' && cercle87.style.display==='block') || (cercle82.style.display==='block' && cercle85.style.display==='block' && cercle88.style.display==='block') || (cercle82.style.display==='block' && cercle84.style.display==='block' && cercle86.style.display==='block') || (cercle83.style.display==='block' && cercle84.style.display==='block' && cercle85.style.display==='block') || (cercle86.style.display==='block' && cercle87.style.display==='block' && cercle88.style.display==='block')){
        cercle8.style.display = 'block';
    }

    if(cercle8.style.display==='block') {
        for (i = 0; i < 9; i++) {
            p8 = document.getElementById('p8' + i);
            p8.style.display = 'none';
        }
    }
}

function victoireTotale() {

    const croix0 = document.getElementById('croix0');
    const croix1 = document.getElementById('croix1');
    const croix2 = document.getElementById('croix2');
    const croix3 = document.getElementById('croix3');
    const croix4 = document.getElementById('croix4');
    const croix5 = document.getElementById('croix5');
    const croix6 = document.getElementById('croix6');
    const croix7 = document.getElementById('croix7');
    const croix8 = document.getElementById('croix8');

    if ((croix0.style.display === 'block' && croix1.style.display === 'block' && croix2.style.display === 'block') || (croix0.style.display === 'block' && croix3.style.display === 'block' && croix6.style.display === 'block') || (croix0.style.display === 'block' && croix4.style.display === 'block' && croix8.style.display === 'block') || (croix1.style.display === 'block' && croix4.style.display === 'block' && croix7.style.display === 'block') || (croix2.style.display === 'block' && croix5.style.display === 'block' && croix8.style.display === 'block') || (croix2.style.display === 'block' && croix4.style.display === 'block' && croix6.style.display === 'block') || (croix3.style.display === 'block' && croix4.style.display === 'block' && croix5.style.display === 'block') || (croix6.style.display === 'block' && croix7.style.display === 'block' && croix8.style.display === 'block')) {

        const page = document.getElementById('tout');
        page.style.display = 'none';
        const titre = document.getElementById('titre');
        titre.innerHTML += '<form action="controleur.php" method="POST"></br><input type="submit" name="action" value="Victoire" onclick="refresh()"/><form>';

    }
    const cercle0 = document.getElementById('cercle0');
    const cercle1 = document.getElementById('cercle1');
    const cercle2 = document.getElementById('cercle2');
    const cercle3 = document.getElementById('cercle3');
    const cercle4 = document.getElementById('cercle4');
    const cercle5 = document.getElementById('cercle5');
    const cercle6 = document.getElementById('cercle6');
    const cercle7 = document.getElementById('cercle7');
    const cercle8 = document.getElementById('cercle8');

    if ((cercle0.style.display === 'block' && cercle1.style.display === 'block' && cercle2.style.display === 'block') || (cercle0.style.display === 'block' && cercle3.style.display === 'block' && cercle6.style.display === 'block') || (cercle0.style.display === 'block' && cercle4.style.display === 'block' && cercle8.style.display === 'block') || (cercle1.style.display === 'block' && cercle4.style.display === 'block' && cercle7.style.display === 'block') || (cercle2.style.display === 'block' && cercle5.style.display === 'block' && cercle8.style.display === 'block') || (cercle2.style.display === 'block' && cercle4.style.display === 'block' && cercle6.style.display === 'block') || (cercle3.style.display === 'block' && cercle4.style.display === 'block' && cercle5.style.display === 'block') || (cercle6.style.display === 'block' && cercle7.style.display === 'block' && cercle8.style.display === 'block')) {

        const page = document.getElementById('tout');
        page.style.display = 'none';
        const titre = document.getElementById('titre');
        titre.innerHTML += '</br><input type="submit" value="Défaite :\'(" onclick="refresh()"/>';

    }

    if((croix0.style.display==='block' || cercle0.style.display==='block') && (croix1.style.display==='block' || cercle1.style.display==='block') && (croix2.style.display==='block' || cercle2.style.display==='block') && (croix3.style.display==='block' || cercle3.style.display==='block') && (croix4.style.display==='block' || cercle4.style.display==='block') && (croix5.style.display==='block' || cercle5.style.display==='block') && (croix6.style.display==='block' || cercle6.style.display==='block') && (croix7.style.display==='block' || cercle7.style.display==='block') && (croix8.style.display==='block' || cercle8.style.display==='block')) {

        const page = document.getElementById('tout');
        page.style.display = 'none';
        const titre = document.getElementById('titre');
        titre.innerHTML += '</br><input type="submit" value="Egalité :o" onclick="refresh()"/>';

    }
}

function refresh() {
    window.location.reload();
}

function init() {

    creation();
}

