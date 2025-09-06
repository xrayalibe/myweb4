$(document).ready(function () {
    $(".tab-click").click(function (event) {
        event.preventDefault();
        $(".tab-click").removeClass("active");
        $(this).addClass("active");
        let idtab = $(this).attr("id").split("-")[1];
        $(".servie-tab-content").removeClass("active-tab").hide();
        $("#" + "content-" + idtab).addClass("active-tab").fadeIn(500);
    })

})