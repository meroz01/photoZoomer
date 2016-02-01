var zoomer = zoomer || {}

zoomer.name = 'zoomer';

zoomer.elements = function() {
    function getDimentions(el) {
        var d = {};
        
        d.x1 = el.offsetLeft;
        d.y1 = el.offsetTop;
        d.x2 = el.offsetLeft + el.offsetWidth;
        d.y2 = el.offsetTop + el.offsetHeight;
        
        return d;
    }
    
    return function() {
        var elements = document.getElementsByClassName(zoomer.name),
            dim,
            mouseX,
            mouseY,
            heightPercent,
            widthPercent;
            
        for(var i in elements) {
            if(typeof elements[i] === 'object') {
                (function(el){
                    el.addEventListener('mousemove', function() {
                        if (dim !== getDimentions(el)) {
                            dim = getDimentions(el);
                            
                            mouseX = event.clientX;
                            mouseY = event.clientY;
                            
                            // console.log('x: ' + mouseX + ' x1: ' + dim.x1 + ' x2: ' + dim.x2);
                            // console.log('y ' + mouseY + ' y1: ' + dim.y1 + ' y2: ' + dim.y2);
                            
                            if(mouseX > dim.x1 && mouseX < dim.x2) {
                                widthPercent = mouseX/(dim.x2 - dim.x1);
                                console.log('x: ' + widthPercent);
                            }
                            
                            if(mouseY > dim.y1 && mouseY < dim.y2) {
                                heightPercent = mouseY/(dim.y2 - dim.y1);
                                console.log('y: ' + heightPercent);
                            }
                        }
                        
                    })
                })(elements[i]);
                
            }
        }
    }
}

window.onload = function() {
    var a = zoomer.elements();
    a();
}
