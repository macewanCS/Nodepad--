exports.categories = function(req, res){
  res.render((__dirname + './../../public/views/categories.ejs'));
};

exports.forms = function(req, res){
  console.log("started looking with " + req.params.ticketid);
  if (req.params.ticketid = /hardware/){
    console.log("Its a hardware ticket, eh");
    res.render((__dirname + '/../../public/views/hardware.ejs'));
  }
  else if (req.params.ticketid = /software/){
    console.log("Its a software ticket, eh");
    res.render((__dirname + '/../../public/views/software.ejs'));
  }
  else if (req.params.ticketid = /software/){
    console.log("Its a password ticket, eh");
    res.render((__dirname + '/../../public/views/password.ejs'));
  }
  else if (req.params.ticketid = /software/){
    console.log("Its a service ticket, eh");
    res.render((__dirname + '/../../public/views/service.ejs'));
  }
  else if (req.params.ticketid = /software/){
    console.log("Its a general ticket, eh");
    res.render((__dirname + '/../../public/views/general.ejs'));
  }
}