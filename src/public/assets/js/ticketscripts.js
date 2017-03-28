function colorHeader(header, change){
  $(change).css('visibility', 'visible');
  $(header).css('background-color', 'rgb(170,170,170)');
};

function toggleAccordian(close, open){
  $(close).collapse("toggle");
  $(open).collapse("toggle");
};

function toggleAccordianCheck(close, open, mandatory){
if (($(mandatory).val() == null)){
  alert("Please fill it out the information before proceeding");
  return;
}
if (($(mandatory).val().length > 0) && !($(mandatory).val().match(/^\s$/))){
    $(close).collapse("toggle");
    $(open).collapse("toggle");
  } else {
    alert("Please fill it out the information before proceeding");
  }
};

function undo(open, close1, close2, close3, close4){
    $(close1).collapse("hide");
    $(close2).collapse("hide");
    $(close3).collapse("hide");
    $(close4).collapse("hide");
    $(open).collapse("show");
};

function checkFilled(mandatory){
  if ($(mandatory).val().length > 0){
    showInfo();
  } 
  else {
    alert("Please fill it out the information before proceeding")
  }
}