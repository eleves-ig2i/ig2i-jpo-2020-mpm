var noeud = "croix";
var O =0, D=0;

function tour() {
    var croix = document.getElementById('tourcroix');
    var cercle = document.getElementById('tourcercle');

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
    var total = document.getElementById('tout');

    for(var i = 0; i < 9; i++){
        total.innerHTML += "<div id='g" + i + "'><img src='ressources/noir.jpg' class='noir' id='noir"+i+"'><img src='ressources/cross.png' class='croix' id='croix"+i+"'><img src='ressources/circle.jpg' class='croix' id='cercle"+i+"'> </div>";
    }
}

function petits() {
    var idG0 = document.getElementById('g0');
    var idG1 = document.getElementById('g1');
    var idG2 = document.getElementById('g2');
    var idG3 = document.getElementById('g3');
    var idG4 = document.getElementById('g4');
    var idG5 = document.getElementById('g5');
    var idG6 = document.getElementById('g6');
    var idG7 = document.getElementById('g7');
    var idG8 = document.getElementById('g8');
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



function joue(img1, img2, caseO, caseD){

    var noiro = document.getElementById('noir'+caseO);
    var noird = document.getElementById('noir'+caseD);

    O = caseO;
    D = caseD;

    var noir0 = document.getElementById('noir0');
    var noir1 = document.getElementById('noir1');
    var noir2 = document.getElementById('noir2');
    var noir3 = document.getElementById('noir3');
    var noir4 = document.getElementById('noir4');
    var noir5 = document.getElementById('noir5');
    var noir6 = document.getElementById('noir6');
    var noir7 = document.getElementById('noir7');
    var noir8 = document.getElementById('noir8');

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

    var checkCr = document.getElementById('croix'+caseD);
    var checkCe = document.getElementById('cercle'+caseD);


    if(noeud==='croix' && (img1.style.display!=='block' && img2.style.display!=='block')){
        img1.style.display = 'block';
        noeud='cercle';
        noiro.style.display = 'block';
        noird.style.display = 'none';

    }
    if(noeud==='cercle' && (img1.style.display!=='block' && img2.style.display!=='block')){
        img2.style.display = 'block';
        noeud='croix';
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


    victoireCase();
    checkRelou();
    victoireTotale();

}

function checkRelou() {
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

    var croix00 = document.getElementById('croix00');
    var croix01 = document.getElementById('croix01');
    var croix02 = document.getElementById('croix02');
    var croix03 = document.getElementById('croix03');
    var croix04 = document.getElementById('croix04');
    var croix05 = document.getElementById('croix05');
    var croix06 = document.getElementById('croix06');
    var croix07 = document.getElementById('croix07');
    var croix08 = document.getElementById('croix08');
    var croix0 = document.getElementById('croix0');
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
    var croix10 = document.getElementById('croix10');
    var croix11 = document.getElementById('croix11');
    var croix12 = document.getElementById('croix12');
    var croix13 = document.getElementById('croix13');
    var croix14 = document.getElementById('croix14');
    var croix15 = document.getElementById('croix15');
    var croix16 = document.getElementById('croix16');
    var croix17 = document.getElementById('croix17');
    var croix18 = document.getElementById('croix18');
    var croix1 = document.getElementById('croix1');
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
    var croix20 = document.getElementById('croix20');
    var croix21 = document.getElementById('croix21');
    var croix22 = document.getElementById('croix22');
    var croix23 = document.getElementById('croix23');
    var croix24 = document.getElementById('croix24');
    var croix25 = document.getElementById('croix25');
    var croix26 = document.getElementById('croix26');
    var croix27 = document.getElementById('croix27');
    var croix28 = document.getElementById('croix28');
    var croix2 = document.getElementById('croix2');
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
    var croix30 = document.getElementById('croix30');
    var croix31 = document.getElementById('croix31');
    var croix32 = document.getElementById('croix32');
    var croix33 = document.getElementById('croix33');
    var croix34 = document.getElementById('croix34');
    var croix35 = document.getElementById('croix35');
    var croix36 = document.getElementById('croix36');
    var croix37 = document.getElementById('croix37');
    var croix38 = document.getElementById('croix38');
    var croix3 = document.getElementById('croix3');
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
    var croix40 = document.getElementById('croix40');
    var croix41 = document.getElementById('croix41');
    var croix42 = document.getElementById('croix42');
    var croix43 = document.getElementById('croix43');
    var croix44 = document.getElementById('croix44');
    var croix45 = document.getElementById('croix45');
    var croix46 = document.getElementById('croix46');
    var croix47 = document.getElementById('croix47');
    var croix48 = document.getElementById('croix48');
    var croix4 = document.getElementById('croix4');
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
    var croix50 = document.getElementById('croix50');
    var croix51 = document.getElementById('croix51');
    var croix52 = document.getElementById('croix52');
    var croix53 = document.getElementById('croix53');
    var croix54 = document.getElementById('croix54');
    var croix55 = document.getElementById('croix55');
    var croix56 = document.getElementById('croix56');
    var croix57 = document.getElementById('croix57');
    var croix58 = document.getElementById('croix58');
    var croix5 = document.getElementById('croix5');
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
    var croix60 = document.getElementById('croix60');
    var croix61 = document.getElementById('croix61');
    var croix62 = document.getElementById('croix62');
    var croix63 = document.getElementById('croix63');
    var croix64 = document.getElementById('croix64');
    var croix65 = document.getElementById('croix65');
    var croix66 = document.getElementById('croix66');
    var croix67 = document.getElementById('croix67');
    var croix68 = document.getElementById('croix68');
    var croix6 = document.getElementById('croix6');
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
    var croix70 = document.getElementById('croix70');
    var croix71 = document.getElementById('croix71');
    var croix72 = document.getElementById('croix72');
    var croix73 = document.getElementById('croix73');
    var croix74 = document.getElementById('croix74');
    var croix75 = document.getElementById('croix75');
    var croix76 = document.getElementById('croix76');
    var croix77 = document.getElementById('croix77');
    var croix78 = document.getElementById('croix78');
    var croix7 = document.getElementById('croix7');
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
    var croix80 = document.getElementById('croix80');
    var croix81 = document.getElementById('croix81');
    var croix82 = document.getElementById('croix82');
    var croix83 = document.getElementById('croix83');
    var croix84 = document.getElementById('croix84');
    var croix85 = document.getElementById('croix85');
    var croix86 = document.getElementById('croix86');
    var croix87 = document.getElementById('croix87');
    var croix88 = document.getElementById('croix88');
    var croix8 = document.getElementById('croix8');
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

    var cercle00 = document.getElementById('cercle00');
    var cercle01 = document.getElementById('cercle01');
    var cercle02 = document.getElementById('cercle02');
    var cercle03 = document.getElementById('cercle03');
    var cercle04 = document.getElementById('cercle04');
    var cercle05 = document.getElementById('cercle05');
    var cercle06 = document.getElementById('cercle06');
    var cercle07 = document.getElementById('cercle07');
    var cercle08 = document.getElementById('cercle08');
    var cercle0 = document.getElementById('cercle0');
    if((cercle00.style.display==='block' && cercle01.style.display==='block' && cercle02.style.display==='block') || (cercle00.style.display==='block' && cercle03.style.display==='block' && cercle06.style.display==='block') || (cercle00.style.display==='block' && cercle04.style.display==='block' && cercle08.style.display==='block') || (cercle01.style.display==='block' && cercle04.style.display==='block' && cercle07.style.display==='block') || (cercle02.style.display==='block' && cercle05.style.display==='block' && cercle08.style.display==='block') || (cercle02.style.display==='block' && cercle04.style.display==='block' && cercle06.style.display==='block') || (cercle03.style.display==='block' && cercle04.style.display==='block' && cercle05.style.display==='block') || (cercle06.style.display==='block' && cercle07.style.display==='block' && cercle08.style.display==='block')){
        cercle0.style.display = 'block';

    }

    if(cercle0.style.display==='block') {
        for (i = 0; i < 9; i++) {
            p0 = document.getElementById('p0' + i);
            p0.style.display = 'none';
        }
    }

    var cercle10 = document.getElementById('cercle10');
    var cercle11 = document.getElementById('cercle11');
    var cercle12 = document.getElementById('cercle12');
    var cercle13 = document.getElementById('cercle13');
    var cercle14 = document.getElementById('cercle14');
    var cercle15 = document.getElementById('cercle15');
    var cercle16 = document.getElementById('cercle16');
    var cercle17 = document.getElementById('cercle17');
    var cercle18 = document.getElementById('cercle18');
    var cercle1 = document.getElementById('cercle1');
    if((cercle10.style.display==='block' && cercle11.style.display==='block' && cercle12.style.display==='block') || (cercle10.style.display==='block' && cercle13.style.display==='block' && cercle16.style.display==='block') || (cercle10.style.display==='block' && cercle14.style.display==='block' && cercle18.style.display==='block') || (cercle11.style.display==='block' && cercle14.style.display==='block' && cercle17.style.display==='block') || (cercle12.style.display==='block' && cercle15.style.display==='block' && cercle18.style.display==='block') || (cercle12.style.display==='block' && cercle14.style.display==='block' && cercle16.style.display==='block') || (cercle13.style.display==='block' && cercle14.style.display==='block' && cercle15.style.display==='block') || (cercle16.style.display==='block' && cercle17.style.display==='block' && cercle18.style.display==='block')){
        cercle1.style.display = 'block';
    }

    if(cercle1.style.display==='block') {
        for (i = 0; i < 9; i++) {
            p1 = document.getElementById('p1' + i);
            p1.style.display = 'none';
        }
    }
    var cercle20 = document.getElementById('cercle20');
    var cercle21 = document.getElementById('cercle21');
    var cercle22 = document.getElementById('cercle22');
    var cercle23 = document.getElementById('cercle23');
    var cercle24 = document.getElementById('cercle24');
    var cercle25 = document.getElementById('cercle25');
    var cercle26 = document.getElementById('cercle26');
    var cercle27 = document.getElementById('cercle27');
    var cercle28 = document.getElementById('cercle28');
    var cercle2 = document.getElementById('cercle2');
    if((cercle20.style.display==='block' && cercle21.style.display==='block' && cercle22.style.display==='block') || (cercle20.style.display==='block' && cercle23.style.display==='block' && cercle26.style.display==='block') || (cercle20.style.display==='block' && cercle24.style.display==='block' && cercle28.style.display==='block') || (cercle21.style.display==='block' && cercle24.style.display==='block' && cercle27.style.display==='block') || (cercle22.style.display==='block' && cercle25.style.display==='block' && cercle28.style.display==='block') || (cercle22.style.display==='block' && cercle24.style.display==='block' && cercle26.style.display==='block') || (cercle23.style.display==='block' && cercle24.style.display==='block' && cercle25.style.display==='block') || (cercle26.style.display==='block' && cercle27.style.display==='block' && cercle28.style.display==='block')){
        cercle2.style.display = 'block';
    }

    if(cercle2.style.display==='block') {
        for (i = 0; i < 9; i++) {
            p2 = document.getElementById('p2' + i);
            p2.style.display = 'none';
        }
    }

    var cercle30 = document.getElementById('cercle30');
    var cercle31 = document.getElementById('cercle31');
    var cercle32 = document.getElementById('cercle32');
    var cercle33 = document.getElementById('cercle33');
    var cercle34 = document.getElementById('cercle34');
    var cercle35 = document.getElementById('cercle35');
    var cercle36 = document.getElementById('cercle36');
    var cercle37 = document.getElementById('cercle37');
    var cercle38 = document.getElementById('cercle38');
    var cercle3 = document.getElementById('cercle3');
    if((cercle30.style.display==='block' && cercle31.style.display==='block' && cercle32.style.display==='block') || (cercle30.style.display==='block' && cercle33.style.display==='block' && cercle36.style.display==='block') || (cercle30.style.display==='block' && cercle34.style.display==='block' && cercle38.style.display==='block') || (cercle31.style.display==='block' && cercle34.style.display==='block' && cercle37.style.display==='block') || (cercle32.style.display==='block' && cercle35.style.display==='block' && cercle38.style.display==='block') || (cercle32.style.display==='block' && cercle34.style.display==='block' && cercle36.style.display==='block') || (cercle33.style.display==='block' && cercle34.style.display==='block' && cercle35.style.display==='block') || (cercle36.style.display==='block' && cercle37.style.display==='block' && cercle38.style.display==='block')){
        cercle3.style.display = 'block';
    }


    if(cercle3.style.display==='block') {
        for (i = 0; i < 9; i++) {
            p3 = document.getElementById('p3' + i);
            p3.style.display = 'none';
        }
    }
    var cercle40 = document.getElementById('cercle40');
    var cercle41 = document.getElementById('cercle41');
    var cercle42 = document.getElementById('cercle42');
    var cercle43 = document.getElementById('cercle43');
    var cercle44 = document.getElementById('cercle44');
    var cercle45 = document.getElementById('cercle45');
    var cercle46 = document.getElementById('cercle46');
    var cercle47 = document.getElementById('cercle47');
    var cercle48 = document.getElementById('cercle48');
    var cercle4 = document.getElementById('cercle4');
    if((cercle40.style.display==='block' && cercle41.style.display==='block' && cercle42.style.display==='block') || (cercle40.style.display==='block' && cercle43.style.display==='block' && cercle46.style.display==='block') || (cercle40.style.display==='block' && cercle44.style.display==='block' && cercle48.style.display==='block') || (cercle41.style.display==='block' && cercle44.style.display==='block' && cercle47.style.display==='block') || (cercle42.style.display==='block' && cercle45.style.display==='block' && cercle48.style.display==='block') || (cercle42.style.display==='block' && cercle44.style.display==='block' && cercle46.style.display==='block') || (cercle43.style.display==='block' && cercle44.style.display==='block' && cercle45.style.display==='block') || (cercle46.style.display==='block' && cercle47.style.display==='block' && cercle48.style.display==='block')){
        cercle4.style.display = 'block';
    }

    if(cercle4.style.display==='block') {
        for (i = 0; i < 9; i++) {
            p4 = document.getElementById('p4' + i);
            p4.style.display = 'none';
        }
    }

    var cercle50 = document.getElementById('cercle50');
    var cercle51 = document.getElementById('cercle51');
    var cercle52 = document.getElementById('cercle52');
    var cercle53 = document.getElementById('cercle53');
    var cercle54 = document.getElementById('cercle54');
    var cercle55 = document.getElementById('cercle55');
    var cercle56 = document.getElementById('cercle56');
    var cercle57 = document.getElementById('cercle57');
    var cercle58 = document.getElementById('cercle58');
    var cercle5 = document.getElementById('cercle5');
    if((cercle50.style.display==='block' && cercle51.style.display==='block' && cercle52.style.display==='block') || (cercle50.style.display==='block' && cercle53.style.display==='block' && cercle56.style.display==='block') || (cercle50.style.display==='block' && cercle54.style.display==='block' && cercle58.style.display==='block') || (cercle51.style.display==='block' && cercle54.style.display==='block' && cercle57.style.display==='block') || (cercle52.style.display==='block' && cercle55.style.display==='block' && cercle58.style.display==='block') || (cercle52.style.display==='block' && cercle54.style.display==='block' && cercle56.style.display==='block') || (cercle53.style.display==='block' && cercle54.style.display==='block' && cercle55.style.display==='block') || (cercle56.style.display==='block' && cercle57.style.display==='block' && cercle58.style.display==='block')){
        cercle5.style.display = 'block';
    }

    if(cercle5.style.display==='block') {
        for (i = 0; i < 9; i++) {
            p5 = document.getElementById('p5' + i);
            p5.style.display = 'none';
        }
    }

    var cercle60 = document.getElementById('cercle60');
    var cercle61 = document.getElementById('cercle61');
    var cercle62 = document.getElementById('cercle62');
    var cercle63 = document.getElementById('cercle63');
    var cercle64 = document.getElementById('cercle64');
    var cercle65 = document.getElementById('cercle65');
    var cercle66 = document.getElementById('cercle66');
    var cercle67 = document.getElementById('cercle67');
    var cercle68 = document.getElementById('cercle68');
    var cercle6 = document.getElementById('cercle6');
    if((cercle60.style.display==='block' && cercle61.style.display==='block' && cercle62.style.display==='block') || (cercle60.style.display==='block' && cercle63.style.display==='block' && cercle66.style.display==='block') || (cercle60.style.display==='block' && cercle64.style.display==='block' && cercle68.style.display==='block') || (cercle61.style.display==='block' && cercle64.style.display==='block' && cercle67.style.display==='block') || (cercle62.style.display==='block' && cercle65.style.display==='block' && cercle68.style.display==='block') || (cercle62.style.display==='block' && cercle64.style.display==='block' && cercle66.style.display==='block') || (cercle63.style.display==='block' && cercle64.style.display==='block' && cercle65.style.display==='block') || (cercle66.style.display==='block' && cercle67.style.display==='block' && cercle68.style.display==='block')){
        cercle6.style.display = 'block';
    }

    if(cercle6.style.display==='block') {
        for (i = 0; i < 9; i++) {
            p6 = document.getElementById('p6' + i);
            p6.style.display = 'none';
        }
    }

    var cercle70 = document.getElementById('cercle70');
    var cercle71 = document.getElementById('cercle71');
    var cercle72 = document.getElementById('cercle72');
    var cercle73 = document.getElementById('cercle73');
    var cercle74 = document.getElementById('cercle74');
    var cercle75 = document.getElementById('cercle75');
    var cercle76 = document.getElementById('cercle76');
    var cercle77 = document.getElementById('cercle77');
    var cercle78 = document.getElementById('cercle78');
    var cercle7 = document.getElementById('cercle7');
    if((cercle70.style.display==='block' && cercle71.style.display==='block' && cercle72.style.display==='block') || (cercle70.style.display==='block' && cercle73.style.display==='block' && cercle76.style.display==='block') || (cercle70.style.display==='block' && cercle74.style.display==='block' && cercle78.style.display==='block') || (cercle71.style.display==='block' && cercle74.style.display==='block' && cercle77.style.display==='block') || (cercle72.style.display==='block' && cercle75.style.display==='block' && cercle78.style.display==='block') || (cercle72.style.display==='block' && cercle74.style.display==='block' && cercle76.style.display==='block') || (cercle73.style.display==='block' && cercle74.style.display==='block' && cercle75.style.display==='block') || (cercle76.style.display==='block' && cercle77.style.display==='block' && cercle78.style.display==='block')){
        cercle7.style.display = 'block';
    }

    if(cercle7.style.display==='block') {
        for (i = 0; i < 9; i++) {
            p7 = document.getElementById('p7' + i);
            p7.style.display = 'none';
        }
    }

    var cercle80 = document.getElementById('cercle80');
    var cercle81 = document.getElementById('cercle81');
    var cercle82 = document.getElementById('cercle82');
    var cercle83 = document.getElementById('cercle83');
    var cercle84 = document.getElementById('cercle84');
    var cercle85 = document.getElementById('cercle85');
    var cercle86 = document.getElementById('cercle86');
    var cercle87 = document.getElementById('cercle87');
    var cercle88 = document.getElementById('cercle88');
    var cercle8 = document.getElementById('cercle8');
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

    var croix0 = document.getElementById('croix0');
    var croix1 = document.getElementById('croix1');
    var croix2 = document.getElementById('croix2');
    var croix3 = document.getElementById('croix3');
    var croix4 = document.getElementById('croix4');
    var croix5 = document.getElementById('croix5');
    var croix6 = document.getElementById('croix6');
    var croix7 = document.getElementById('croix7');
    var croix8 = document.getElementById('croix8');

    if ((croix0.style.display === 'block' && croix1.style.display === 'block' && croix2.style.display === 'block') || (croix0.style.display === 'block' && croix3.style.display === 'block' && croix6.style.display === 'block') || (croix0.style.display === 'block' && croix4.style.display === 'block' && croix8.style.display === 'block') || (croix1.style.display === 'block' && croix4.style.display === 'block' && croix7.style.display === 'block') || (croix2.style.display === 'block' && croix5.style.display === 'block' && croix8.style.display === 'block') || (croix2.style.display === 'block' && croix4.style.display === 'block' && croix6.style.display === 'block') || (croix3.style.display === 'block' && croix4.style.display === 'block' && croix5.style.display === 'block') || (croix6.style.display === 'block' && croix7.style.display === 'block' && croix8.style.display === 'block')) {
        alert("CROIX A GAGNE !!!!! yahoo");
        window.location.reload();
    }
    var cercle0 = document.getElementById('cercle0');
    var cercle1 = document.getElementById('cercle1');
    var cercle2 = document.getElementById('cercle2');
    var cercle3 = document.getElementById('cercle3');
    var cercle4 = document.getElementById('cercle4');
    var cercle5 = document.getElementById('cercle5');
    var cercle6 = document.getElementById('cercle6');
    var cercle7 = document.getElementById('cercle7');
    var cercle8 = document.getElementById('cercle8');

    if ((cercle0.style.display === 'block' && cercle1.style.display === 'block' && cercle2.style.display === 'block') || (cercle0.style.display === 'block' && cercle3.style.display === 'block' && cercle6.style.display === 'block') || (cercle0.style.display === 'block' && cercle4.style.display === 'block' && cercle8.style.display === 'block') || (cercle1.style.display === 'block' && cercle4.style.display === 'block' && cercle7.style.display === 'block') || (cercle2.style.display === 'block' && cercle5.style.display === 'block' && cercle8.style.display === 'block') || (cercle2.style.display === 'block' && cercle4.style.display === 'block' && cercle6.style.display === 'block') || (cercle3.style.display === 'block' && cercle4.style.display === 'block' && cercle5.style.display === 'block') || (cercle6.style.display === 'block' && cercle7.style.display === 'block' && cercle8.style.display === 'block')) {
        alert("CERCLE A GAGNE !!!!! yahoo");
        window.location.reload();
    }

    if((croix0.style.display==='block' || cercle0.style.display==='block') && (croix1.style.display==='block' || cercle1.style.display==='block') && (croix2.style.display==='block' || cercle2.style.display==='block') && (croix3.style.display==='block' || cercle3.style.display==='block') && (croix4.style.display==='block' || cercle4.style.display==='block') && (croix5.style.display==='block' || cercle5.style.display==='block') && (croix6.style.display==='block' || cercle6.style.display==='block') && (croix7.style.display==='block' || cercle7.style.display==='block') && (croix8.style.display==='block' || cercle8.style.display==='block')){
        alert("EGALITE :o Dommage fromage !");
        window.location.reload();
    }
}

function init() {
    creation();
}

