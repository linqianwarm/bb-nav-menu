// var index = 0;

var renderData = function (data) {
  $("#menu").append('<ul id="ulIndex0"></ul>');
  for(var i in data) {
    var firstNode = data[i];
    if (firstNode) {
      
      if (firstNode.children && firstNode.children.length > 0) {
        $('#ulIndex0').append('<li class="item-group"><div class="menu-title" id='+firstNode.key+'>'+firstNode.name+'>> </div><ul id=ulIndex'+firstNode.key+'></ul></li>');
        deepRender(firstNode);
      }else {
        $('#ulIndex0').append('<li class="leaf-node" id='+firstNode.key+'>'+firstNode.name+'</li>');
      }
    }
  }
  // var tplLi='<li>'+data.name+''
}



var deepRender = function (data) {
  if (data.children) {
    for(var i in data.children) {
      var nextData = data.children[i];
      // $('#ulIndex'+data.key+'').append('<li id='+nextData.key+'>'+nextData.name+'</li>');
      if (nextData.children && nextData.children.length > 0) {
        $('#ulIndex'+data.key+'').append('<li><div class="menu-title" id='+nextData.key+'>'+nextData.name+'>> </div><ul id=ulIndex'+nextData.key+'></ul></li>');
        deepRender(nextData);
      }else{
        $('#ulIndex'+data.key+'').append('<li class="leaf-node" id='+nextData.key+'>'+nextData.name+'</li>');
      }
    }
  }
}

var bindEvents = function () {

  $('body').on('click', '.item-group div', function() {
    var _this = $(this);
    $(this).next().toggleClass('hide');
    console.log($(this).text());
  })
  
  $('body').on('click', '.leaf-node', function() {
    var _this = $(this);
    var id = _this.attr('id');
    window.history.pushState(null,null,"#"+id+"");
    console.log(id);
  })

  window.addEventListener('hashchange', function() {
    console.log("change");
  });
}

$.getJSON("./nav-data.json",function(data){
  console.log(data);
  renderData(data);
})
bindEvents();