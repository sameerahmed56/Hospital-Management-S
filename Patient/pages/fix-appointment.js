$(document).ready(function () {
    $("button").click(function () {
        var fired_button = $(this).val();
        //  alert(fired_button);
        document.getElementById('outEmail').innerHTML = fired_button;
        console.log(fired_button);
    });
});