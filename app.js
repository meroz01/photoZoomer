var zoomer = zoomer || {}

zoomer.name = 'zoomer';

zoomer.elements = function() {
    function getDimentions(el) {
        var d = {};
        
        d.x1 = el.offsetLeft;
        d.y1 = el.offsetTop;
        d.x2 = el.offsetLeft + el.offsetWidth;
        d.y2 = el.offsetTop + el.offsetHeight;
        
        console.log(d)
        
        return d;
    }
    
    return function() {
        var elements = document.getElementsByClassName(zoomer.name);
        for(var i in elements) {
            if(typeof elements[i] === 'object') {
                (function(el){
                    el.addEventListener('mouseover', function() {
                        console.log('in');
                        //console.log(getDimentions(elements[i]));
                        getDimentions(el);
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
