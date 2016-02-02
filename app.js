var zoomer = zoomer || {}

zoomer.name = 'zoomer';

zoomer.elements = function() {
    function getDimentions(el) {
        var d = {};
        
        d.x1 = el.offsetLeft - window.pageXOffset;
        d.y1 = el.offsetTop - window.pageYOffset;
        d.x2 = el.offsetLeft + el.offsetWidth - window.pageXOffset;
        d.y2 = el.offsetTop + el.offsetHeight - window.pageYOffset;
        
        // console.log(+ window.pageXOffset);
        // console.log(+ window.pageYOffset);
        
        return d;
    }
    
    return function() {
        var elements = document.getElementsByClassName(zoomer.name),
            dim,
            mouseX,
            mouseY,
            verticalPercent,
            horizontalPercent;
            
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
                            
                            if(mouseX > dim.x1 && mouseX < dim.x2 && mouseY > dim.y1 && mouseY < dim.y2) {
                                horizontalPercent = (mouseX-dim.x1)/(dim.x2 - dim.x1);
                                verticalPercent = (mouseY-dim.y1)/(dim.y2 - dim.y1);
                                //  console.log('x: ' + horizontalPercent);
                                //  console.log('y: ' + verticalPercent);
                                if(el.style.backgroundSize !== 'initial') {
                                    el.style.backgroundSize = 'initial';
                                }
                                el.style.backgroundPositionX = (horizontalPercent * 100) + '%';
                                el.style.backgroundPositionY = (verticalPercent * 100) + '%';
                            }
                        }
                        
                    })
                    
                    el.addEventListener('mouseout', function() {
                        el.style.backgroundSize = 'cover';
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
