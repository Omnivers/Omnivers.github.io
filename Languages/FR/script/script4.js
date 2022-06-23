const txtAnim=document.getElementById('sm-heading');
var txt = 'En attente de votre E-mail...';
var i=0;
var speed = 100;

function typeWriter() {
    if (i < txt.length-4) {
        txtAnim.innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    else if (i<txt.length) {
        txtAnim.innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, 700);
    }
    else{
        i=0;
        txtAnim.innerHTML="";
        typeWriter();
        }
}
window.onload=typeWriter();

////
function contactme() {
    document.getElementById("icons").style.display = "block";
    document.getElementById('contactme').style.display='none';
    document.getElementById('close').style.display='block';
  }
  function close() {    
  document.getElementById("icons").style.display = "none";
  document.getElementById('contactme').style.display='block';
  document.getElementById('close').style.display='none';
}
  document.getElementById('close').addEventListener('click', close);

