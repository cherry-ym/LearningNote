console.log('加载完毕');

//用来管理模块
require.config({
    paths: {
        index: 'demo/index',
        scale: 'demo/scale',
        drag: 'demo/drag'
    }
})

//使用规范  AMD规范
require(['index'], function(index,){
    index.init();
})