const txtAnim=document.getElementById('sm-heading');
var txt = 'Few things about me...';
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