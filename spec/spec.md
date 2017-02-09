#EPL Ticketing System
The goal of this application is to simplify the ticketing system for the EPL. The ticketing system is a Javascript application is written using Nodejs and express frameworks. The client has expressed some frustrations with the current system in that all of the required information is not taken from the email, or that some private information such as passwords can be put inside of the body of the email. The goal of the program is to streamline the process of creating a ticket and inserting it into the existing heat database so that IT can still use their existing system for handling tickets. As well, through the addition of an announcements screen as well as a a help screen, we are hoping to give the user another way to try and solve their issues before they have to put another ticket in the system for something that is either already a known issue or a simple fix that a guide can solve. 

#Using the Ticketing System
##Logging in
You must have an account to view the content of the system. When you go to the site, you will be prompted for a Username and password. Once you have logged in, you will be brought to the main page. On this page as well is a way to do a forgotten password request. 
##Main Page
The Main page will show a simplified version of the different tabs in the bar. Recent announcements will be shown at the top to inform any Employees of current issues (ie Internet outtage at a certain branch). In separate tables, the user will also see a list of both personal and branch tickets, starting from the most recent. If the ticket is open, it will show submission date, otherwise it will show closed. Beneath those will be the Frequently Asked Questions, which will potentially help users solve common issues, keeping IT resources free for other problems.
##My Ticket Page
The My Ticket Page will show the user all of their open tickets by default, with another tab to look at all of their open and closed tickets together. These will be displayed in a tabular fashion, with columns for the type of the ticket, when the ticket was submitted and all of the pertinent information for the ticket itself. The user will have the ability to sort based on the categories that the product owner has specified, as well as being able to search through the tickets by keyword. As well, with it being in a table, there will be the ability to go through and sort the table based on the columns. From this page as well there will be the ability to edit the Ticket as well as self close the ticket.

  * **Editing a Ticket**
  To edit a ticket, the user can get there from the inital My ticket page or after viewing a ticket from one of those pages. Once the
  user has began editing the ticket, any required information will have to be input before they are able to submit the changes. As well   the user will be shown a screen confirming their edits afterwords.
  * **Closing a Ticket**
  To close a ticket the user will still be able to get there from either the MY ticket page or after viewing a ticket, when the user goes to do this action, they must put the solution to the problem before they are able to submit the closing of the ticket. Now this will not actually close the ticket from the IT side, just set a flag saying that this ticket needs to be reviewed by IT after it has actually been closed.

##Branch Ticket Page
This page works the same as the afforementioned My Tickets Page, but the user can view any ticket that they are authorized to see from their entire branch. These will include open and closed tickets. The reason behind having a branch tickets is to try and stop an influx of tickets coming in from the same issue, such as wifi being down over the entire branch. The user should check an issue to see if it has been reported before submitting a ticket that may be effect he whole branch. There will be a way to filter which branches are being viewed at any time, so a user will be able to see any branch's tickets. 
##Ticket Submission Page
This page is where a user will submit a ticket. The imperative information for IT/HR will be required so there is no need to follow up. The tickets will be separated into categories, so that we can reduce confusion amongst employees. 

**Categories**
  * Software
  * Hardware
  * Password
  * Service
  * General
  
Each of the categories will have different mandatory information to be filled in, which will require a different form.
Before tickets are submitted, the user will see a page that confirms info. The ticket screen will be an accordian, with the ability to go back and change fields if a mistake has been made.

##IT Ticket pages
This will be the page that IT employees see. The tabs will have Tickets that IT may submit, they have a list of open and close tickets and they will viewed by priority. IT will be able to search for a tickey by keyword, and sort by priority. The closed tickets page will have an option to view the IT solution.
##Announcements
This page will show the Announcements from IT, it can inform users of large problems, or give friendly reminders to employees. This is another way to stop an influx of tickets over a known issue, such as wifi being down over the entire branch. An IT user can come in and put an announcement in like IT holiday hours, which will then show up for all users in the announcement's page. As well, the EPL already has a system in place for announcements, so giving another place for users to see those kind of announcements on their tickiting pages is a good way of focusing information all in one place.
##Help
Help will have a section of frequently asked questions that some of the clients may have come accross, this helps to avoid having IT members repeatedly helping users with some easily fixed problems, these could be written and added by the IT staff. 
##Users
This system will have 3 main kinds of users, Customers, Managers, and IT workers.

1. Customers
  * The customer will be able to view their own tickets and submit tickets for either their branch or for themselves. 
  * They wil be able to see announcements and go to the help screen to look for guides, but not be able to add to them
2. Managers
  * The Manager will be able to submit and create tickets as well, but they will be able to view tickets for everyone in thier branch even if they did not create them.
  * The Manager will also be able to see the announcements but will not be able to change them.
3. IT
  * These users will have higher permissions then the other users, being able to see all tickets in the system.
  * They will be able to add to the announcements screen and the help screen.
##Mobile
The system will also be able to be viewed well on mobile screens/tablets. It will become more vertical, but the mainsystem functionality will still be there. The user will be able to view thier tickets on the mobile screen, submit a ticket, as well as looking at help and announcements. 

