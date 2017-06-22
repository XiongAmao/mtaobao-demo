// REM init
var docHTML
!function(){
  function remInit() {
    var dpr = window.devicePixelRatio || 1
    var docEl = document.documentElement
    docHTML = docEl
    var clientWidth = docEl.clientWidth

    var dprs = [2, 3]
    var metaEl = document.querySelector('meta[name="viewport"]')
    dpr = !dprs.indexOf(dpr) ? dpr : 1
    // dpr = dprs.some(function(elem){ return elem === dpr}) ? dpr : 1 
    var scale = 1 / dpr
    // dpr控制在已有样式中，避免错乱

    metaEl.setAttribute('content', 'initial-scale=' + scale + ',maximum-scale=' + scale + ',minimum-scale=' + scale + ',user-scalable=no')
    // 控制缩放

    var remEl = document.createElement('style')
    var rem = clientWidth / 10 * dpr
    // rem基准为10

    remEl.innerHTML = 'html{font-size:' + rem + 'px!important;'
    docEl.firstElementChild.appendChild(remEl)
    docEl.setAttribute('data-dpr', dpr)
    docEl.setAttribute('style','width: 100%;height: 100%;overflow: hidden;')
    // css hack
  }
  remInit()
  // window.addEventListener('resize',function(){remInit()})
}()
