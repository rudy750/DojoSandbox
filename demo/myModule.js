define([
       //the dojo /dom module is required by this module, so it goes in its list of dependencies
       "dojo/dom"
], function(dom){ 
    //once all modules in the dependency list have loaded, this function is called to define
  //the demo/myModule module.
  //
  //the dojo/dom module is passed as the first argument to this function; additional modules
  //in the dependency list would be passed in as subsequent arguments.

  var oldText ={};

  //this returned object becomes the defined value of this module 
  
  return {
    setText: function(id,text){
      var node = dom.byId(id);
      oldText[id] = node.innerHTML;
      console.log(oldText);
      node.innerHTML = text;
    },
    restoreText: function(id){
      var node = dom.byId(id);
      console.log(oldText);
      node.innerHTML =oldText[id];
     // delete oldText[id];
    }
  };
});


