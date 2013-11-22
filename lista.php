<script type="text/javascript">

function cambiar()
{
   var index=document.forms.formulario.marca.selectedIndex;
   
   document.forms.formulario.serie.length=0;
   
   if(index==0) marca0();
   if(index==1) marca1();
   if(index==2) marca2(); 
   if(index==3) marca3(); 
   if(index==4) marca4(); 
}

function marca0(){

opcion0=new Option("Indiferente","","defauldSelected");
document.forms.formulario.barrios.options[0]=opcion0;

}

function marca4(){

opcion0=new Option("ameba 1","ameba 1","defauldSelected");
opcion1=new Option("ameba 3","ameba 3");
opcion2=new Option("ameba 5","ameba 5");
opcion3=new Option("ameba 6","Serie 6");
opcion4=new Option("Serie 7","Serie 7");
opcion5=new Option("Serie x","Serie x");
opcion6=new Option("Serie z4","Serie z4");
opcion7=new Option("Serie M","Serie M");
opcion8=new Option("Serie Hybrid","Serie Hybrid");

document.forms.formulario.serie.options[0]=opcion0;
document.forms.formulario.serie.options[1]=opcion1;
document.forms.formulario.serie.options[2]=opcion2;
document.forms.formulario.serie.options[3]=opcion3;
document.forms.formulario.serie.options[4]=opcion4;
document.forms.formulario.serie.options[5]=opcion5;
document.forms.formulario.serie.options[6]=opcion6;
document.forms.formulario.serie.options[7]=opcion7;
document.forms.formulario.serie.options[8]=opcion8;

}

function marca1(){

opcion0=new Option("Serie 1","Serie 1","defauldSelected");
opcion1=new Option("Serie 3","Serie 3");
opcion2=new Option("Serie 5","Serie 5");
opcion3=new Option("Serie 6","Serie 6");
opcion4=new Option("Serie 7","Serie 7");
opcion5=new Option("Serie x","Serie x");
opcion6=new Option("Serie z4","Serie z4");
opcion7=new Option("Serie M","Serie M");
opcion8=new Option("Serie Hybrid","Serie Hybrid");

document.forms.formulario.serie.options[0]=opcion0;
document.forms.formulario.serie.options[1]=opcion1;
document.forms.formulario.serie.options[2]=opcion2;
document.forms.formulario.serie.options[3]=opcion3;
document.forms.formulario.serie.options[4]=opcion4;
document.forms.formulario.serie.options[5]=opcion5;
document.forms.formulario.serie.options[6]=opcion6;
document.forms.formulario.serie.options[7]=opcion7;
document.forms.formulario.serie.options[8]=opcion8;

}

function marca2(){

opcion0=new Option("370z","370z","defauldSelected"); 
opcion1=new Option("March","March");
opcion2=new Option("Murano","Murano");
opcion3=new Option("Sentra","Sentra");
opcion4=new Option("B13","B13");
opcion5=new Option("Sentra","Sentra");
opcion6=new Option("B16","B16");
opcion7=new Option("Tiida","Tiida");
opcion8=new Option("Versa","Versa");
opcion9=new Option("Xtrail","Xtrail");
opcion10=new Option("Frontier 4X4","Frontier 4X4");
opcion11=new Option("Juke","Juke");
opcion12=new Option("Qashqai","Qashqai");
opcion13=new Option("Note","Note");

document.forms.formulario.serie.options[0]=opcion0;
document.forms.formulario.serie.options[1]=opcion1;
document.forms.formulario.serie.options[2]=opcion2;
document.forms.formulario.serie.options[3]=opcion3;
document.forms.formulario.serie.options[4]=opcion4;
document.forms.formulario.serie.options[5]=opcion5;
document.forms.formulario.serie.options[6]=opcion6;
document.forms.formulario.serie.options[7]=opcion7;
document.forms.formulario.serie.options[8]=opcion8;
document.forms.formulario.serie.options[9]=opcion9;
document.forms.formulario.serie.options[10]=opcion10;
document.forms.formulario.serie.options[11]=opcion11;
document.forms.formulario.serie.options[12]=opcion12;
document.forms.formulario.serie.options[13]=opcion13;

}

function marca3(){

opcion0=new Option("Diavel","Diavel","defauldSelected");
opcion1=new Option("Hypermotard","Hypermotard");
opcion2=new Option("Monster","Monster");
opcion3=new Option("Multistrada","Multistrada");
opcion4=new Option("Streetfighter","Streetfighter");
opcion5=new Option("Superbike","Superbike");
opcion6=new Option("796","796");
opcion7=new Option("Streetfighter","Streetfighter");
opcion8=new Option("Panigale","Panigale");
opcion9=new Option("Hyperstrada","Hyperstrada");
opcion10=new Option("Diavel Dark","Diavel Dark");

document.forms.formulario.serie.options[0]=opcion0;
document.forms.formulario.serie.options[1]=opcion1;
document.forms.formulario.serie.options[2]=opcion2;
document.forms.formulario.serie.options[3]=opcion3;
document.forms.formulario.serie.options[4]=opcion4;
document.forms.formulario.serie.options[5]=opcion5;
document.forms.formulario.serie.options[6]=opcion6;
document.forms.formulario.serie.options[7]=opcion7;
document.forms.formulario.serie.options[8]=opcion8;
document.forms.formulario.serie.options[9]=opcion9;
document.forms.formulario.serie.options[10]=opcion10;

}
</script>