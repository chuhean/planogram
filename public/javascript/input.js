//Add product inputs to relevant section when user click 'submit' button.
$( "#product-input" ).submit(function(e) {
    e.preventDefault();
    e.stopPropagation();
    
    var productName = $('input[name="productName"]').val();;
    var productColor = $('select[name="productColor"]').val();
    var productSize = $('select[name="productSize"]').val();
    var model;
    
    if (productSize === "small"){
        model = myPaletteSmall.model
    } else if (productSize === "tall"){
        model = myPaletteTall.model
    } else if (productSize === "wide"){
        model = myPaletteWide.model
    } else {
        model = myPaletteBig.model
    }
    
    model.startTransaction("add product");
    
    if (productSize === "small"){
        model.addNodeData({ key: productName, color: productColor });
    } else if (productSize === "tall"){
        model.addNodeData({ key: productName, color: productColor, size: "50 100" });
    } else if (productSize === "wide"){
        model.addNodeData({ key: productName, color: productColor, size: "100 50" });
    } else {
        model.addNodeData({ key: productName, color: productColor, size: "100 100" });
    }
    
    model.commitTransaction("add product");
    
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