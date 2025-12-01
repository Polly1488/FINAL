$(function () {

    $("#labForm").on("submit", function (e) {
        e.preventDefault();

        let lab = $("#labSelect").val();
        let ok = $("#confirmCheck").is(":checked");
        let valid = true;

        if (!lab) {
            $("#labError").removeClass("d-none");
            valid = false;
        } else {
            $("#labError").addClass("d-none");
        }

        if (!ok) {
            $("#confirmError").removeClass("d-none");
            valid = false;
        } else {
            $("#confirmError").addClass("d-none");
        }

        if (valid) {
            window.open(lab, "_blank");
        }
    });

    $("#labSelect").on("change", function () {
        $("#labError").addClass("d-none");
    });

    $("#confirmCheck").on("change", function () {
        $("#confirmError").addClass("d-none");
    });

});