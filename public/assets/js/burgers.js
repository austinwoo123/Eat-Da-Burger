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
    $(function () {

        // Add a new burger.
        $(".create-form").on("submit", function (event) {
            event.preventDefault();

            var newBurger = {
                burger_name: $("#newburger").val().trim(),
                devoured: 0
            };

            // Send the POST request.
            $.ajax("/api/burgers", {
                type: "POST",
                data: newBurger
            }).then(function () {
                console.log("Added new burger");
                // Reload the page to get the updated burger list.
                location.reload();
            });
        });

    })

})
