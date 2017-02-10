#EPL Ticketing System

Our goal is to create a web application that allows EPL workers to create tickets online, which will be inserted into their current database system.

This system will be written in JavaScript using the Nodejs framework.

#Using the Ticketing System

#General Design

Our system will be designed similarly to the design of the [EPL website] (https://www.epl.ca/). This should give our targetted audience, EPL workers, some baseline familiarity with the system.

#How a User Navigates the Site

A user will be able to click the links at the top of the page to browse between the different screens on the site.

A user will also be able to navigate the site from the footer.

##Logging in

When you first navigate to the site, you will be prompted to login using a username and password. You must have a previously created EPL account to login to the system. 

This initial page also has the option to let a user recover a forgotten password.

After a succesful login, a user will be brought to the home screen.

##Home Screen

This screen will provide a general overview of each of the other screens in the application. 

A user will be able to see recent announcements, tickets they created, and tickets from their branch. 

They will also be able to see some general help that could help them solve their issue before submitting a ticket. 

##Viewing Personal Tickets

The system will allow a user to view all of their submitted tickets by clicking on the My Tickets screen. 

This page will display in a tabular fashion, all of the relevent information for the ticket displayed. 

A user will have the ability to sort tickets based on the categories that the product owner has specified, and be able to search through the tickets by keyword. 

From this page there will also be the ability to edit the Ticket and self close the ticket.

  * **Editing a Ticket**
  There will be required fields that must be filled before a user can submit any edits.   As well, a user will be shown a screen confirming their submission.
  * **Closing a Ticket**
  A user can resolve their ticket, but will be required to enter their solution to the problem before it can be resolved.

##Viewing Branch Tickets

A user wil be able to see tickets made at their branch by navigating to the Branch Tickets screen. This will include open and closed tickets.

This screen will be similar to the individual ticket screen in design. Searching will be accomplished in the same way as the my tickets screen.

##Submitting a ticket

The system will allow a user to submit a ticket into the HEAT database.  

There will be mandatory fields that a user must fill out.

There will be five categories for users to choose from when creating a ticket.

**Categories**
  * Software
  * Hardware
  * Password
  * Service
  * General
  
  
Each of the categories will have different mandatory information to be filled in, which will require a different form.

####Mandatory information table

Category | Required Information | Non-Required information | Example
--------- | -------------------- | ----------------------  | ----------
Password Reset | System, Account/Username | N/A | I forgot my password and need it reset
Hardware Issue | Equipment Type, Description of the problem | Asset Tag, Computer/Device name, Error Messages | My laptop screen is cracked
Software       | System, Is the system Completely broken?, Description of the problem | Steps to replicate | I cannot access the EPL Website
Service Request | Request type, Which system to allow access to, Asset Tag Where should the equipment be moved to(Move Request), what software to install, which pc should it be installed on(software request) | N/A | I need the projector moved from my room to the room next door
General Questions | What is the problem? | N/A | I am having trouble with my personal phone connecting to the web ticketing portal.


Before the user can submit their form, they will be shown their information and asked if it is correct, if it is not correct they will have the option to go back and edit the previously entered information. 

##Announcements

A user can view important announcements from IT

The Announcements will be sorted from newest to oldest in descending order

##Help
The system will have a help section that is for simple guides and tutorials.

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
A user can visit the site from mobile platforms

It will have the same functionality as the desktop page
