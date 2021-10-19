$(function(){
    var field = $('#green')[0].getBoundingClientRect();
    var step = 10;
    var borders = {
        left: 0,
        top: 0,
        // вычисляем правый и нижний края
        right: field.width,
        bottom: field.height,
    }
    $('#red').on('mouseover', function(e){
        var red = $('#red')[0];
        var coords = e.target.getBoundingClientRect();
        // вычисляем центр красного блока
        var center = {
            x: coords.left + coords.width / 2,
            y: coords.top + coords.height / 2,
        }
        // сравниваем координаты центра и координаты курсора мыши
        // определяем в каком направлении двигаться
        var delta = {
            x: Math.sign(center.x - e.clientX),
            y: Math.sign(center.y - e.clientY),
        }
        // определяем положение верхнего левого угла блока относительно его родителя
        var oldplace = {
            left: red.offsetLeft,
            top: red.offsetTop,
        }
        // определяем положение верхнего левого угла блока относительно его родителя и вычисляем новое положение
        var newplace = {
            left: oldplace.left + step * delta.x,
            top: oldplace.top + step * delta.y,
        }
        // проверяем нет ли касания границ поля.
        if (borders.left > newplace.left) {
            newplace.left = borders.left;
        } else if (borders.right - coords.width < newplace.left) {
            newplace.left = borders.right - coords.width - 2;
        }
        if (borders.top > newplace.top) {
            newplace.top = borders.top;
        } else if (borders.bottom - coords.height < newplace.top) {
            newplace.top = borders.bottom - coords.height - 2;
        }
        // прописываем в стили красного блока новое положение
        $('#red').css('left', (oldplace.left) + 'px');
        $('#red').css('top', (red.offsetTop) + 'px');
        var xstep = (newplace.left - oldplace.left) / 1000;
        var ystep = (newplace.top - oldplace.top) / 1000;
        for (var i = 1; i < 1001; i++) {
            $('#red').css('left', (oldplace.left + xstep * i) + 'px');
            $('#red').css('top', (oldplace.top + ystep * i) + 'px');
            if ((i > 10) && (i < 990)) {
                i += 9;
                if ((i > 100) && (i < 900)) {
                    i += 90;
                }
            }
        }
    });
});