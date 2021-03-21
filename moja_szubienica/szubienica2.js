
var kategoria = new Array(5);
var haslo2 = new Array(24);

var id_kat = "";


kategoria[0] = "Biznes";
kategoria[1] = "Historia";
kategoria[2] = "Życiowe";
kategoria[3] = "jakieś";
kategoria[4] = "jakieś";

haslo2[0] = "BEZ PRACY NIE MA KOŁACZY";
haslo2[1] = "Co za duŻo to nie zdrowo";
haslo2[2] = "Nie ma tego złego co by na dobre nie wyszło";
haslo2[3] = "Zamiłowanie do krzątaniny to jeszcze nie przedsiębiorczość";
haslo2[4] = "Biznes posiada tylko dwie funkcje marketing i innowacje";
haslo2[5] = "Dobry biznes to taki który da się zautomatyzować";
haslo2[6] = "Tworzenie firmy to nie sprint To maraton";
haslo2[7] = "Czego nie możesz zmierzyć tym nie możesz zarządzać";
haslo2[8] = "Nie sądzę by ktokolwiek urodził się ze smykałką do handlu za to każdy z nas może zostać tym kim zechce";
haslo2[9] = "Skuteczne przywództwo jest wykonywaniem najpierw rzeczy najważniejszych Efektywne zarządzanie jest dyscypliną w ich realizacji";
haslo2[10] = "W Życiu nie chodzi o czekanie aŻ burza minie Chodzi o to by nauczyć się tańczyć w deszczu";
haslo2[11] = "Przyjdzie taka chwila, gdy stwierdzisz Że wszystko się skończyło To właśnie będzie początek";
haslo2[12] = "Najszczersze rzeczy wypowiada się w Żartach";
haslo2[13] = "Czasami ludzie nie będą rozumieć twojej drogi Nie muszą ona nie jest dla nich";
haslo2[14] = "Tak młody jak dziś nie będziesz juŻ nigdy";
haslo2[15] = "Podaruj swoją nieobecność tym którzy nie cenią twojej obecności";
haslo2[16] = "Odwaga to panowanie nad strachem, a nie brak strachu";
haslo2[17] = "Nie oceniaj mnie po przeszłości juŻ w niej nie Żyje";
haslo2[18] = "Aby zerwać z nawykiem wyrób sobie inny który go wymaŻe";
haslo2[19] = "Pudłujesz 100% szczałó∑ jeśli ich w ogóle nie wykonujesz";
haslo2[20] = "Dwa najwaniejsze dni Twojego Życia to ten w którym się urodziłeś oraz ten w którym dowiedziałeś się po co ";
haslo2[21] = "Twoje ycie staje się lepsze tylko gdy ty stajesz się lepszym";
haslo2[22] = "Nic nie jest podawane na tacy  każdy zawsze trafia na jakieś przeszkody po drodze  Kiedy się pojawią zastanów się jak je pokonać a nie myśl o tym że to już koniec drogi";
haslo2[23] = "Jeśli przechodzisz przez piekło nie zatrzymuj się";
haslo2[24] = "Zawsze wydaję się coś nie moŻliwe, dopóki nie zostanie zrobione";
haslo2[25] = "Cierpliwość wytrwałość i pot tworzą niepokonaną kombinację sukcesu";
for (i=0;i<=25;i++) haslo2[i] = haslo2[i].toUpperCase();

//var tab =[];

//for (i=0;i<=2;i++) tab[i]=[];

//for (i=0; i<=2; i++)
//{
//    for (j=0;j<=2;j++) tab[i][j] = haslo2[j];
//}


//const tab1 = [
//    [haslo2[0], haslo2[1], haslo2[2], haslo2[3], haslo2[5], haslo2[6], haslo2[7], haslo2[8], haslo2[9], haslo2[10], haslo2[11], haslo2[12], haslo2[13], haslo2[14]],
//    [haslo3[5],haslo3[5],haslo3[5],haslo3[5],haslo3[5],haslo3[5],haslo3[5],haslo3[5],haslo3[5],haslo3[5]],
//    ["c1", "c2", "c3", "c4", "c5", "c6"],
//]

//alert(haslo2[2]);
var ile_skuch = 0;
//haslo=haslo.toLowerCase();

var id_tablicy = 0;



//id_tablicy = (Math.floor(Math.random()*9));

//alert(id_tablicy);

//alert(id_tablicy);
//var dlugosc = haslo2[0,id_tablicy].length;

var dlugosc=0;
var yes = new Audio("yes.wav");
var no = new Audio("no.wav");
var tresc_diva = "";
var haslo1 = "";

function wypisz_haslo()
{

    if (haslo1 != "") document.getElementById("plansza").innerHTML = haslo1;

    //document.getElementById("kategorie").innerHTML = tresc_kat + " ";
    //document.getElementById("plansza").innerHTML = "Wybierz kategorie hasła";

}
window.onload = start;

var litery = new Array(35);

litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ż";
litery[34] = "Ź";

function start()
{
    var tresc_kat="";

    for (i=0;i<=34;i++)
    {
        var element = "lit" + i;
        tresc_diva = tresc_diva +'<div class="litera" onclick="sprawdz('+i+')" id="'+element+'">' + litery[i] + '</div>';
        if ( (i+1 ) % 7 == 0) tresc_diva = tresc_diva + '<div style = "clear:both"></div>';

    }
   


    for (j=0; j<=4; j++) 
    {
        var element_kat ="kat" + j;
        tresc_kat = tresc_kat + '<div class="kat" onClick="sprawdz_kat('+j+')" id = "'+element_kat+'"> ' + kategoria[j] + '</div>';
        //document.getElementById("kategorie").innerHTML = kategoria[j] + " ";
    
    }  

    document.getElementById("kategorie").innerHTML = tresc_kat + " ";
    //document.getElementById("alfabet").innerHTML = tresc_diva;
    document.getElementById("plansza").innerHTML = "Wybierz kategorie hasła";



    wypisz_haslo();
}

function sprawdz_kat(nr)
{
    var min = 0;
    var max = 0;
   // var haslo1 ="";

    id_kat = nr;
    if( id_kat == 0) id_tablicy = (Math.floor(Math.random()*9));
    
    if( id_kat == 1) 
    {
        min = 11;
        max = 21;
    }
    if( id_kat == 2) 
    {
        min = 22;
        max = 32;
    }
    if( id_kat == 3) 
    {
        min = 33;
        max = 43;
    }


    if (min != 0) id_tablicy = (Math.floor(Math.random()*(max - min+1) + min ));
    //alert(haslo2[[id_tablicy]]);
    //else alert("błąd");
    if (haslo2[[id_tablicy]] == undefined) 
    {
        alert(" Brak haseł dla tej kategorii ");
        tresc_diva="";
        start();
    }
    else 
    {
        document.getElementById("alfabet").innerHTML = tresc_diva;
        document.getElementById("szubienica").innerHTML = '<img src="img/s0.jpg" alt=""/>';
    }
        dlugosc = haslo2[[id_tablicy]].length;
    
            
    for ( i=0; i<dlugosc; i++)
    {
        if(haslo2[id_tablicy].charAt(i)==" ")haslo1 = haslo1 + " ";
        else haslo1 = haslo1  +  "-";
    }
   
    //document.getElementById("plansza").innerHTML = haslo1;
    var element_kat ="kat" + nr;
    var tresc_kat="";
        tresc_kat = '<div class="new" onClick="sprawdz_kat('+nr+')" id = "'+element_kat+'"> ' + kategoria[nr] + '</div>';
       // document.getElementById("kategorie").innerHTML = kategoria[nr] + " ";
       
        document.getElementById("kategorie").innerHTML = tresc_kat + " ";
        document.getElementById(element_kat).style.alignItems="center";
        document.getElementById(element_kat).style.background="#330000";
        document.getElementById(element_kat).style.color="#C00000";
        document.getElementById(element_kat).style.border="3px solid #C00000";
        document.getElementById(element_kat).style.cursor="default";
        document.getElementById(element_kat).setAttribute("onclick",";");
    


    
    wypisz_haslo();

}
String.prototype.ustawZnak = function(miejsce, znak)
{
    if (miejsce > this.length - 1) return this.toString();
    else return this.substr(0,miejsce)+znak+this.substr(miejsce+1);

}

function sprawdz(nr)
{
    var trafiona = false;
    for (i=0; i<dlugosc; i++)
    {
        if (haslo2[id_tablicy].charAt(i) == litery[nr])
        {
          //haslo.ustawZnak(i,litery[nr]); 
          haslo1 = haslo1.ustawZnak(i,litery[nr]);
          trafiona=true;
          //alert(nr);  
        }

    }
    if (trafiona == true)
    {   
        var element = "lit" + nr;
        yes.play();
        document.getElementById(element).style.background="#003300";
        document.getElementById(element).style.color="#00C000";
        document.getElementById(element).style.border="3px solid #00C000";
        document.getElementById(element).style.cursor="default";
        
        wypisz_haslo();
     }
     else
     {
        var element = "lit" + nr;
        no.play();
        document.getElementById(element).style.background="#330000";
        document.getElementById(element).style.color="#C00000";
        document.getElementById(element).style.border="3px solid #C00000";
        document.getElementById(element).style.cursor="default";
        document.getElementById(element).setAttribute("onclick",";");
        ile_skuch++;
        var obraz = "img/s" +ile_skuch+ ".jpg";
        document.getElementById("szubienica").innerHTML='<img src="'+obraz+'" alt =" " />';
    }
        
    //wygrana
    
    if (haslo2[id_tablicy] == haslo1)
    {
        document.getElementById("alfabet").innerHTML="Tak Jest! wygrałeś " + haslo2[id_tablicy] + '<br /><br /><span class="reset" onclick="location.reload()"> JESZCZE RAZ  ?</span>';
        
    }
    
    //przegrana

    if (ile_skuch>=9)
    document.getElementById("alfabet").innerHTML="Ooooops, Przegrałeś, hasło brzmi:  " + haslo2[id_tablicy] + '<br /><br /><span class="reset" onclick="location.reload()"> JESZCZE RAZ ? </span>';
ś
    
    
}