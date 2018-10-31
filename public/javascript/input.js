//Add product inputs to relevant section when user click 'submit' button.
$( "#product-input" ).submit(function(e) {
    e.preventDefault();
    e.stopPropagation();
});

//Add rack inputs when user click 'submit' button.
$( "#rack-input" ).submit(function(e) {
    e.preventDefault();
    e.stopPropagation();

    var rackName = $('input[name="rackName"]').val();;
    var rackSize = $('select[name="rackSize"]').val();
    
    var model = myDiagram.model;
    
    model.startTransaction("add rack");
    
    model.addNodeData({ key: rackName, isGroup: true, pos: "0 0", size: rackSize })
    
    model.commitTransaction("add rack");
});