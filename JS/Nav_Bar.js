var elms = document.querySelectorAll("#nav_items > div.btn");

      for (let i = 0; i < elms.length; i++) {
        console.log(elms[i])
        elms[i].onmouseenter = function (mouse) {
          var edge = closestEdge(mouse, elms[i]);
        };

        elms[i].onmouseleave = function (mouse) {
          var edge = closestEdge(mouse, elms[i]);
        };

        function closestEdge(mouse, elem) {
          var elemBounding = elem.getBoundingClientRect();

          var elementLeftEdge = elemBounding.left;
          var elementTopEdge = elemBounding.top;
          var elementRightEdge = elemBounding.right;
          var elementBottomEdge = elemBounding.bottom;

          var mouseX = mouse.pageX;
          var mouseY = mouse.pageY;

          var topEdgeDist = Math.abs(elementTopEdge - mouseY);
          var bottomEdgeDist = Math.abs(elementBottomEdge - mouseY);
          var leftEdgeDist = Math.abs(elementLeftEdge - mouseX);
          var rightEdgeDist = Math.abs(elementRightEdge - mouseX);

          var min = Math.min(
            topEdgeDist,
            bottomEdgeDist,
            leftEdgeDist,
            rightEdgeDist
          );

          switch (min) {
            case leftEdgeDist:
              return elem.querySelector("div.btn > div:nth-of-type(1)").setAttribute("style", "left:0");

            case rightEdgeDist:
              return elem.querySelector("div.btn > div:nth-of-type(1)").setAttribute("style", "right:0");

            case topEdgeDist:
              return elem.querySelector("div.btn > div:nth-of-type(1)").setAttribute("style", "left:0");

            case bottomEdgeDist:
              return elem.querySelector("div.btn > div:nth-of-type(1)").setAttribute("style", "left:0");
          }
        }
      }