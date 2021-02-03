$(function () {
    $(".save-burger").on("click", function (event) {
        var id = $(this).data("id");
        var newBurger = $(this).data("newburger");

        var newBurgerState = {
            devoured: newBurger
        };


        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newBurgerState
        }).then(
            function () {
                console.log("changed burger to", newBurger);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

})


