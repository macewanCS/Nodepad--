exports.categories = function(req, res){
  res.render((__dirname + './../../public/views/categories.ejs'));
};

exports.forms = function(req, res){
  
  module.exports = req.params.form;
  
  console.log("started looking with " + req.params.form);
  if (req.params.form.match(/hardware/i)){
    console.log("Its a hardware ticket, eh");
    res.render((__dirname + '/../../public/views/hardware.ejs'));
  }
  else if (req.params.form.match(/software/i)){
    console.log("Its a software ticket, eh");
    res.render((__dirname + '/../../public/views/software.ejs'));
  }
  else if (req.params.form.match(/password/i)){
    console.log("Its a password ticket, eh");
    res.render((__dirname + '/../../public/views/password.ejs'));
  }
  else if (req.params.form.match(/service/i)){
    console.log("Its a service ticket, eh");
    res.render((__dirname + '/../../public/views/service.ejs'));
  }
  else if (req.params.form.match(/general/i)){
    console.log("Its a general ticket, eh");
    res.render((__dirname + '/../../public/views/general.ejs'));
  }
}

exports.create = function(req, res){
  console.log("Create is running");
  console.log(req.body);
}