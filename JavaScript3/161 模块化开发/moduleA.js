var moduleA = (function(mod){
    var count = 10;
    function showA(){
        count += 20;
        alert(count);
    }
    function showB(){
        count += 10;
        alert(count);
    }
    mod.outA = showA;
    mod.outB = showB;

    //对外暴露
    return mod;
})(moduleA || {});