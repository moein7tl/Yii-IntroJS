var YiiIntroJS = (function(){
    return {
        start:function(selectorID,event){
            $("#"+selectorID).attr(event,"javascript:introJs().start();");
        },
        addHints:function(selectorID,event){
            $("#"+selectorID).attr(event,"javascript:introJs().addHints();");
        },
        set:function(selectorID,step,intro,position){
            $("#"+selectorID).attr('data-step', step);
            $("#"+selectorID).attr('data-intro', intro);  
            if (position == 'right' || position == 'left'  || position == 'top' || position == 'bottom')
                $("#"+selectorID).attr('data-position', position);  
            else
                $("#"+selectorID).attr('data-position', 'auto');  
        },
        setHint:function(selectorID,hint,intro,position,hintpos){
            $("#"+selectorID).attr('data-hint', intro);
            $("#"+selectorID).attr('data-hintposition', hintpos);  
            if (position == 'right' || position == 'left'  || position == 'top' || position == 'bottom')
                $("#"+selectorID).attr('data-position', position);  
            else
                $("#"+selectorID).attr('data-position', 'auto');
        },
        exit: function(selectorID,event){
            $("#"+selectorID).attr(event, "introJs().exit();");  
        }

    }
}());
