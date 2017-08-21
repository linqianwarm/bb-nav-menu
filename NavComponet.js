
var Nav = function(config){
	var _this = this;
	_this.config = config;

	_this.init();
}

Nav.prototype = {
	tplTitleNode: function(nodeData){
		return '<li class="item-group">'+
					'<div class="menu-title" data-index='+nodeData.key+'>'+nodeData.name+'>> </div>'+
					'<ul class="hide" id=ulIndex'+nodeData.key+'></ul>'+
				'</li>';
	},
	tplLeafNode: function(nodeData){
		return '<li class="leaf-node" data-index='+nodeData.key+'>'+nodeData.name+'</li>';
	},
	init: function(){
		var _this = this,
				config = _this.config,
				hashKey = _this.getCurHash();

		_this.bindEvents();
		_this.render(config.data);
  	_this.renderSelected(hashKey);

	},
	render: function () {
		var _this = this,
			config = _this.config,
			data = config.data;

		$("#"+config.container+"").append('<ul id="ulIndex0"></ul>');

		for(var i in data) {
		  var firstNode = data[i];
	    if (firstNode) {     
	      if (firstNode.children && firstNode.children.length > 0) {
	        $('#ulIndex0').append(_this.tplTitleNode(firstNode));
	        _this.deepRender(firstNode);
	      }else {
	      	$("#ulIndex0").append(_this.tplLeafNode(firstNode));
	      }
			}
		}
	},

	deepRender: function(data) {
		var _this = this;
		if (data.children) {
	    for(var i in data.children) {
	      var nextData = data.children[i];
	      if (nextData.children && nextData.children.length > 0) {
	        $('#ulIndex'+data.key+'').append(_this.tplTitleNode(nextData));
	        _this.deepRender(nextData);
	      }else{
	        $('#ulIndex'+data.key+'').append(_this.tplLeafNode(nextData));
	      }
	    }
	  }
	},

	renderSelected: function (key) {
		$('.leaf-node').removeClass('cur');
  	$('.leaf-node[data-index='+key+']').addClass('cur');
  	$('.leaf-node[data-index='+key+']').parentsUntil('#menu','.item-group ul').removeClass('hide');
  },

  getCurHash: function (){
  	var hash = window.location.hash;
	  var hashKey = hash.substr(1);
	  console.log("hashchange",hashKey);
	  return hashKey;
  },

  bindEvents: function (argument) {
		var _this = this,
				config = _this.config;

  	$('#'+config.container+'').on('click', '.item-group div', function() {
	    var $this = $(this);
	    $this.next().toggleClass('hide');
	    $this.parent().siblings().children('ul').eq(0).addClass('hide');
	    console.log($this.text());
	  })
	  
	  $('#'+config.container+'').on('click', '.leaf-node', function() {
	    var $this = $(this);
	    var indexKey = $this.data('index');

	    // 此时已改变状态 
	    window.history.pushState(null,null,"#"+indexKey+"");
	    _this.renderSelected(indexKey);  
	  })

	  window.addEventListener('hashchange', function() {
	    var hashKey = _this.getCurHash();
	    _this.renderSelected(hashKey);
	  });
  }
}

window.Nav = Nav;