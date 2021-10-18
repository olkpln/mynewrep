$(function () {
    $("td").click(whoIs);
  });
  
  function whoIs(e) {
    let hlpstr = "";
    hlpstr += "This is " + e.target.id + ". ";
    let hlpcls = e.target.classList;
    if (!hlpcls.contains("white") && !hlpcls.contains("black")) {
      hlpstr += "Empty here.";
    } else {
      if (hlpcls.contains("white")) {
        hlpstr += "White ";
      } else {
        hlpstr += "Black ";
      }
      if (hlpcls.contains("king")) {
        hlpstr += "king here.";
      } else if (hlpcls.contains("queen")) {
        hlpstr += "queen here.";
      } else if (hlpcls.contains("rook")) {
        hlpstr += "rook here.";
      } else if (hlpcls.contains("bishop")) {
        hlpstr += "bishop here.";
      } else if (hlpcls.contains("knight")) {
        hlpstr += "knight here.";
      } else {
        hlpstr += "pawn here.";
      }
    }
    console.log(hlpstr);
  }
  
  $(function () {
    $("td").click(markStep);
  });

  function markStep(e) { 
    // По клику на клетке пометить ее классом stepfrom.
  
    $(this).toggleClass("stepfrom");

    // Если на кликнутой клетке уже есть такой класс, просто убрать его.
    if ($("td").not(this).hasClass("stepfrom")) {
        $(this).removeClass("stepfrom");
    }
    // Если есть другая клетка с этим классом, пометить кликнутую клетку классом stepto.

    if ($("td").not(this).hasClass("stepfrom")) {
      $(this).toggleClass("stepto");
    }
    // Если на кликнутой клетке есть класс stepto, просто убрать его.
    if ($("td").not(this).hasClass("stepto")) {
        $(this).removeClass("stepto");
    }
    // Если на доске уже есть другая клетка с классом stepto, убрать классы stepfrom и stepto с ранее помеченных клеток, 
    if ($("td").not(this).hasClass("stepto")) {
        $(this).removeClass("stepto");
        $(this).removeClass("stepfrom");
        //кликнутую пометить классом stepfrom.
        //$(this).toggleClass("stepfrom");
    }
      // Если после всех манипуляций на доске остались клетки с классами stepfrom и steptoб вывести в консоль объект вида {stepfrom: <cell id>, stepto: <cell id>}
    if ($("td").hasClass("stepfrom") && $("td").hasClass("stepto")) {
        let x;
        x = $(".stepfrom").attr("id");
        console.log("stepfrom:" + x);
        console.log("stepto:" + this.id);
    };
}
