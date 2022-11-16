window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

        document.getElementById("navbar").style.background = "#501e27";
    } else {

        document.getElementById("navbar").style.background = "none";
    }
}
//----Pricing section
function check() {
    var checkBox = document.getElementById("checbox");
    var text1 = document.getElementsByClassName("text1");
    var text2 = document.getElementsByClassName("text2");

    for (var i = 0; i < text1.length; i++) {
        if (checkBox.checked == true) {
            text1[i].style.display = "block";
            text2[i].style.display = "none";
        } else if (checkBox.checked == false) {
            text1[i].style.display = "none";
            text2[i].style.display = "block";
        }
    }
}
check();