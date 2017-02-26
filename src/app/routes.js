var tickets_controller = require("./controllers/tickets_controller.js");
var ticket_creation_controller = require("./controllers/ticket_creation_controller.js");

module.exports = function(app, passport) {
  app.get("/", function(req,res){
    res.render((__dirname + '/../public/views/login.ejs'));
  })
  
  app.post("/", passport.authenticate('local-login', {
    successRedirect : '/home',
    failureRedirect : '/',
  }),
        function(req, res) {
            console.log("hello");

            if (req.body.remember) {
              req.session.cookie.maxAge = 1000 * 60 * 3;
            } else {
              req.session.cookie.expires = false;
            }
        res.redirect('/');
});
  
  app.get('/home', function(req, res){
    res.render((__dirname + '/../public/views/home.ejs'), {username : req.user});
  });

  app.get('/logout', function(req,res){
    req.logout();
    res.redirect('/');
  });

  app.get('/announcements', function(req, res){
    res.render((__dirname + '/../public/views/announcements.ejs'));
  });

  app.get('/help', function(req, res){
    res.render((__dirname + '/../public/views/help.ejs'));
  });
  
  app.get('/categories', ticket_creation_controller.categories);
  app.get('/categories/:form', ticket_creation_controller.forms);

  app.get('/mytickets', tickets_controller.mytickets);
  app.get('/mytickets/:ticketid/view', tickets_controller.view);
  app.get('/mytickets/:ticketid/edit', tickets_controller.edit);
  app.get('/mytickets/:ticketid/resolve', tickets_controller.resolve);
  app.get('/user1', function(req, res) {
        console.log("Shits fucked yo");
            if (req.user === undefined) {
                // The user is not logged in
                res.json({});
            } else {
                res.json({
                    username: req.user.username
                });
            }
        });
 
  app.get('/branchtickets', function(req, res){
    res.render((__dirname + '/../public/views/branchtickets.ejs'));
  });
}
