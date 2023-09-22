const clearAndLoad=(element)=>{
    let body = $('body').empty();
    let tempElement=$('#'+element);
    tempElement.appendTo(body);
}