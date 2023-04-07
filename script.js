$(document).ready(function(){
    let desktopSize = window.matchMedia("(min-width: 1px)");
    if (desktopSize.matches){
        $(".block-1, .block-22").click(function(){
            $(".block-2").toggleClass("ball")
            $("#p1").toggle();
            $("#p2").toggle();
            $("#p3").toggle();
            $("#p4").toggle();
            $("#p5").toggle();
            $("#p6").toggle();
        })
    }
    else {
        
    }
});
