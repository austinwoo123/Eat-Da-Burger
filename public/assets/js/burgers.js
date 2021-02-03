$(function () {
    $(".eat-burger").on("click", function (event) {
        var id = $(this).data("id");
        var burgerState = {
            devoured: 1
        };


        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: burgerState
        }).then(
            function () {
                console.log("Finished eating burger", newBurger);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

})


