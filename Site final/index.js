var inicio=confirm('Bem-Vindo ao Music world! Vamos testar seus conhecimentos!');
var sair = "<html><head><title>Voce nao quis participar</title></head><body>Obrigado pela sua resposta!<br></body></html>";
if(inicio==false){document.write(sair);}
else{ window.alert('Começou o game! Clique em Ok abaixo para começar');
//Inicio do quiz
var certo = "<b>Correto!</b>"; var errado = "<b style='color:red;'>Errado!</b>";var o = new Array();
var acertos=0; var erros=0; var respostas = new Array(); var p = new Array();var r = new Array();
var t=10; //COLOQUE AQUI TOTAL DE PERGUNTAS DO QUIZ !!!!
// LISTA DE PERGUNTAS
p[1] = "Quantas cordas tem um Violão classico normal?";
r[1] = '6';
p[2] = "Quantas cordas tem um ukulele?";
r[2] = 4;
p[3] = "Qual e a clave musical mais usada?(clave de sol ou Clave de Fa)";
r[3] = 'clave de sol'
p[4] = "Em que ano foi lançado o primeiro piano?";
r[4] = 1709;
p[5] = "E correto afirmar que o saxophone e da familia dos metais?(sim ou não)";
r[5] = 'não';
p[6] = "O saxophone pertence a familia da madeira?(sim ou não)";
r[6] = 'sim';
p[7] = "Quem toca instrumentos de percusão e..?(percusioneiro ou percusionista";
r[7] = 'percusionista';
p[8] = "Os trombones são tocados por trombonistas ou trombondeiros"
r[8] = 'trombonistas'
p[9] = "Qual o nome do site que vc entrou?";
r[9] = 'music wolrd';
p[10] = "Quantas cordas tem o violino";
r[10] = 4;

 for(var i=1;i<=t;i++){o[i] = i;} 
 for(var i=1;i<=10;i++)       
 {
  n=Math.round(t*(Math.random())); 
  m=Math.round(t*(Math.random()));
  if(m==0){m++;}
  if(n==0){n++;}
  var temp = o[n];
  o[n]=o[m];
  o[m]=temp;
 } 
for(var i=1;i<=t;i++)
{
  respostas[o[i]] = prompt(p[o[i]],"");
   if(respostas[o[i]]==r[o[i]]){respostas[o[i]]=certo;acertos++;}else{respostas[o[i]]=errado;erros++;}
 }
//fim do quiz
document.write("Javascript Quiz:<br><br>Suas respostas:<br><br>");
document.write("<ol>");
for(var i=1;i<=t;i++)
{
document.write("<li>"+respostas[o[i]]);}
document.write("</ol>");
document.write("<br>Total de acertos: "+acertos);
document.write("<br>Total de erros: "+erros);
document.write("<br><br><input type=button value='Respostas' Onclick=javascript:if(document.getElementById('rp').style.display=='none'){document.getElementById('rp').style.display='block';}else{document.getElementById('rp').style.display='none';}>");
document.write("<br><div id='rp' class='rp' style='display:none;'><ol>");
for(var i=1;i<=t;i++)
 { document.write("<li>"+p[o[i]]+"<br>R:"+r[o[i]]);}
document.write("</ol></div>")};