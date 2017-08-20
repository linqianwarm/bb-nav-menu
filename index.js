$.getJSON("./nav-data.json",function(data){
  console.log(data);

  new Nav({
    container: 'menu',
    data: data
  })

})