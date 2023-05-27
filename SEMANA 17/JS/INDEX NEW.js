function openMenu(){
    document.getElementById("mainMenu").style.width="480px";//vista en celular
    document.getElementById("mainMenu").style.display="flex";//vista en celular
    document.getElementById("mainMenu").style.height="1000";//vista en celular
    document.getElementById("openmenu").style.display="none";//vista en celular
}
function closeNav(){
    document.getElementById("mainMenu").style.width="0";
    document.getElementById("mainMenu").style.transition="0.9s all";
    window.location.reload()
}
