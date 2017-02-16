var tickets_controller = require("./controllers/tickets_controller.js")

var appRouter = function(app) {
  app.get("/", function(req,res){
    res.render((__dirname + '/../public/views/home.ejs'));
  })
  app.get('/home', function(req, res){
    res.render((__dirname + '/../public/views/home.ejs'));
  });

  app.get('/announcements', function(req, res){
    res.render((__dirname + '/../public/views/announcements.ejs'));
  });

  app.get('/help', function(req, res){
    res.render((__dirname + '/../public/views/help.ejs'));
  });

  app.get('/mytickets', tickets_controller.mytickets);
  app.get('/mytickets/:ticketid/view', tickets_controller.view);
  app.get('/mytickets/:ticketid/edit', tickets_controller.edit);
  app.get('/mytickets/:ticketid/resolve', tickets_controller.resolve);
  

  app.get('/branchtickets', function(req, res){
    res.render((__dirname + '/../public/views/branchtickets.ejs'));
  });
}

module.exports = appRouter;