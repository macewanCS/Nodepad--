var tickets_controller = require("./controllers/tickets_controller.js");
var ticket_creation_controller = require("./controllers/ticket_creation_controller.js");
var home_controller = require("./controllers/home_controller.js");
  module.exports = function(app, passport) {
  app.get("/", function(req,res){
    res.render((__dirname + '/../public/views/login.ejs'));
  })

  var isAuthenticated = function (req, res, next) {
    if (req.isAuthenticated())
      return next()
    res.redirect('/')
  }
  
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

  app.get('/logout', isAuthenticated, function(req,res){
    req.logout();
    res.redirect('/');
  });

  app.get('/announcements',isAuthenticated, function(req, res){
    res.render((__dirname + '/../public/views/announcements.ejs'));
  });

  app.get('/help', isAuthenticated, function(req, res){
    res.render((__dirname + '/../public/views/help.ejs'));
  });
  
  //Categories
  app.get('/categories', isAuthenticated, ticket_creation_controller.categories);
  app.get('/categories/:form', ticket_creation_controller.forms);
  app.post('/createTicket', ticket_creation_controller.create);

  //MyTickets
  app.get('/mytickets', isAuthenticated, tickets_controller.mytickets);
  app.get('/mytickets/:ticketid/view', tickets_controller.view);
  app.get('/mytickets/:ticketid/edit', tickets_controller.edit);

  //Home
  app.get('/home', isAuthenticated, home_controller.home);
  app.get('/home/:ticketid/view', home_controller.view);
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
 
  app.get('/branchtickets', isAuthenticated, function(req, res){
    res.render((__dirname + '/../public/views/branchtickets.ejs'));
  });
}
