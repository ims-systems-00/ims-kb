# v2.1.4 ( 17 December 2021)
## Changed
### Comment sections
- Latest comments are at the top.
### Force reload 
- Table doen't refresh on update accross the system. (issue fixed)
# v2.1.3 ( 14 December 2021)
## Added
### Incident managment
- Assign the incident to an owner feature added. Owner can only be assigned once and can never be amended.(Pop up notification available)
- Comment section created.
### Email service 
- Service changed from Microsoft smpt to sendgrid api.
### System Infrusture
- Database collection renaming and synchronization in all the three environment.
- Deployment pipeline infrusture shifted to github actions from aws in the backend.
## Changed
###  Calendar
- Faulty query for event attendees as been fixed.
- Update of system event realted information automatically updates in calendar.
### Task manager
- Fixed Task reassign feature and working properly.