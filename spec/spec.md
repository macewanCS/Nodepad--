# EPL Ticketing System

Our goal is to create a web application that allows EPL workers to create tickets online, which will be inserted into their current database system.

This system will be written in JavaScript using the Nodejs framework.
 _We accomplished this in Nodejs so this was a success_
# Using the Ticketing System

# General Design

Our system will be designed similarly to the design of the [EPL website] (https://www.epl.ca/). This should give our targetted audience, EPL workers, some baseline familiarity with the system.
_Our final Design emulated the website_
# How a User Navigates the Site

A user will be able to click the links in the header of the page to browse between the different screens on the site.
_The header works_

A user will also be able to navigate the site from the footer.
_Goodnight Sweet Prince_
## Logging in

When you first navigate to the site, you will be prompted to login using a username and password. You must have a previously created EPL account to login to the system. 

This initial page also has the option to let a user recover a forgotten password.

After a succesful login, a user will be brought to the home screen.
_Logins work, but no forgotten password_
## Home Screen

This screen will provide a brief overview of each of the other screens in the application. 

A user will be able to see recent announcements, tickets they created, and tickets from their branch. 

They will also be able to see some general help that could help them solve their issue before submitting a ticket. 
_All this was amazing_
## Viewing Personal Tickets

The system will allow a user to view all of their submitted tickets by clicking on the My Tickets screen. 

This page will display in a tabular fashion, all of the relevant information for the ticket displayed. 

A user will have the ability to sort tickets based on the categories that the product owner has specified, and be able to search through the tickets by keyword. 

From this page there will also be the ability to edit the Ticket and self close the ticket.

  * **Editing a Ticket**
  There will be required fields that must be filled before a user can submit any edits.   As well, a user will be shown a screen confirming their submission.
  * **Closing a Ticket**
  A user can resolve their ticket, but will be required to enter their solution to the problem before it can be resolved.
_All of this was accomplished, including the tickets being in a tabular fashion_
## Viewing Branch Tickets

A user wil be able to see tickets made at their branch by navigating to the Branch Tickets screen. This will include open and closed tickets.

This screen will be similar to the individual ticket screen in design. Searching will be accomplished in the same way as the my tickets screen.
_Did This_
## Submitting a ticket

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
_All tickets could be submitted_
#### Mandatory information table

Category | Required Information | Non-Required information | Example
--------- | -------------------- | ----------------------  | ----------
Password Reset | System, Account/Username | N/A | I forgot my password and need it reset
Hardware Issue | Equipment Type, Description of the problem | Asset Tag, Computer/Device name, Error Messages | My laptop screen is cracked
Software       | System, Is the system Completely broken?, Description of the problem | Steps to replicate | I cannot access the EPL Website
Service Request | Request type, Which system to allow access to, Asset Tag Where should the equipment be moved to(Move Request), what software to install, which pc should it be installed on(software request) | N/A | I need the projector moved from my room to the room next door
General Questions | What is the problem? | N/A | I am having trouble with my personal phone connecting to the web ticketing portal.


Before the user can submit their form, they will be shown their information and asked if it is correct, if it is not correct they will have the option to go back and edit the previously entered information. 

_This was completed as well with the confirmation_
## Users

This system will have 3 main kinds of users.

1. Basic User
  * A basic user has access to ticket creation, editing, and resolving.
  * A basic user can see all tickets created at their branch.
  * A basic user can see the announcements and help screens.
2. Manager User
  * A manager user has access to ticket creation, editing, and resolving.
  * A manager user can see and edit all tickets created at their branch.
  * A manager user can see the announcements and help screens.
3. IT Superuser
  * An IT superuser can add or remove annoucements
  * An IT superuser can change the help screen

_We scrapped the manager user because it was out of scope, it became an HR user as well no one can edit each others tickets_  
## Mobile

A user can visit the site from mobile platforms

It will have the same functionality as the desktop page
_Some aspects are mobile friendly, but some arent_
## Announcements

A user can view important announcements from IT

The Announcements will be sorted from newest to oldest in descending order
_Announcements are done, only IT users can add them_
## Help

The system will have a help section that is for simple guides and tutorials.
_Help is a static page_

_Overall we accomplished a lot of what we set out to do in this spec and are quite proud of the finished product, Mobile did not get finished, and some of the things we thought were necessary ended up being extra after the demos_
