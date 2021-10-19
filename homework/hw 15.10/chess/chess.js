$(function(){
  $('td').click(markStep);
});

function whoIs(cell) {
  let report = {
      id: null,
      content: null,
      color: null,
  }
  report.id = cell.id;
  hlpcls = cell.classList;
  if (hlpcls.contains('white')) {
      report.color = 'white';
  } else if (hlpcls.contains('black')) {
      report.color = 'black';
  }
  if (hlpcls.contains('king')) {
      report.content = 'king';
  } else if (hlpcls.contains('queen')) {
      report.content = 'queen';
  } else if (hlpcls.contains('rook')) {
      report.content = 'rook';
  } else if (hlpcls.contains('bishop')) {
      report.content = 'bishop';
  } else if (hlpcls.contains('knight')) {
      report.content = 'knight';
  } else if (hlpcls.contains('pawn')) {
      report.content = 'pawn';
  }
  return report;
}
function markStep(e) {
  let trg = $(e.target);
  let report = {
      stepfrom: null,
      stepto: null,
  }
  if (trg.hasClass('stepto')) {
      trg.removeClass('stepto');
  } else if ($('.stepto').length) {
      $('.stepto').removeClass('stepto');
      if (!trg.hasClass('stepfrom')) {
          $('.stepfrom').removeClass('stepfrom');
          trg.addClass('stepfrom');
      }
  } else if (trg.hasClass('stepfrom')) {
      trg.removeClass('stepfrom');
  } else if ($('.stepfrom').length) {
      trg.addClass('stepto');
  } else {
      trg.addClass('stepfrom');
  }
  if ($('.stepto').length && $('.stepfrom').length) {
      report.stepfrom = whoIs($('.stepfrom')[0]);
      report.stepto = whoIs($('.stepto')[0]);
      makeStep(report);
  }
}
function makeStep(plan) {
  if (plan.stepfrom.content && !plan.stepto.content) {
      $('#' + plan.stepfrom.id).removeClass(plan.stepfrom.color).removeClass(plan.stepfrom.content);
      $('#' + plan.stepto.id).addClass(plan.stepfrom.color).addClass(plan.stepfrom.content);
  } else if (plan.stepto.content) {
      alert('Конечная клетка уже занята - ходить нельзя!');
  } else if (!plan.stepfrom.content) {
      alert('Нечем ходить - начальная клетка пуста!');
  }
  $('.stepfrom').removeClass('stepfrom');
  $('.stepto').removeClass('stepto');
}