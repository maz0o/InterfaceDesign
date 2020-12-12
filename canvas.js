        // Hide the canvas while getting user info on form
        $("#canvas").hide();

        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");

        function playGame(circles, rects) {

            // hide the completed form and show the canvas
            $("#setup").hide();
            $("#canvas").show();


            // draw user's circles
            ctx.fillStyle = "blue";
            for (var n = 0; n < circles; n++) {
                ctx.save();
                ctx.beginPath();
                ctx.arc(n * 25 + 15, 25, 10, 0, Math.PI * 2, false);
                ctx.closePath();
                ctx.fill();
                ctx.restore();
            }

            // draw user's rectangles
            ctx.fillStyle = "green";
            for (var n = 0; n < rects; n++) {
                ctx.save();
                ctx.beginPath();
                ctx.rect(n * 20 + 5, 75, 10, 10);
                ctx.fill();
                ctx.restore();
            }
        }

        $("#play").click(function () {

            var circleCount = $("#circles").val();
            var rectangleCount = $("#rectangles").val();

            playGame(circleCount, rectangleCount);

        });