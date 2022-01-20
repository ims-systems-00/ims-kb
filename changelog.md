# v2.3.2 ( 19 January 2022)
## Added
### Management Review
- Added scheduled time
### Compliance Toolkit
- Last updated by and date in toolkit table and detail page. 
## Changed
### Compliance Toolkit
- Select control and implement control feature implemented in ISO 20000, ISO 27001, ISO 9001, ISO 45001 
### Color of the compliance pie chart
- Non compliant color have been changed to amber
## Fixed 
### CQC
- CQC KLOE table doesn't update real time
### Incident Management
- Incident form update button doesn't change with check mark status
### Risk Management
- Risk form update button doesn't change with check mark status
### Complaints
- Complaints form update button doesn't change with check mark status
### Significant Events
- Significant Events form update button doesn't change with check mark status
### Safeguardings
- Safeguardings form update button doesn't change with check mark status
### Whistleblowing
- Whistleblowing form update button doesn't change with check mark status
### Task Manager
- Notification doesn't redirect to the detail page
- Accept task not handled properly
# v2.3.1 ( 18 January 2022)
## Added
- Comment section in risk management section
- KPI delete button alert added.
### Tables
- New filter feature introduced across the system.
- New pagination mechanism introduced across the system.
## Changed
- compliance default tab is shifted to overview
### Compliance service
- ['Breaking'] New Data structure update in all the tools.
- ['Breaking] Evidence APIs and data structure updated.
## Removed
- removed the prefixes of all the attachments in detail page in all the modules
### Compliance service
- ['Breaking] Current Comments API has been removed for all the iso modules and new comments api is recomended to be used from now on.
- Tab views in all the modules is replaced with filter feature.
## Fixed 
- Task manager assign user feature not working.
- Task manager complete doesn't auto refresh the page
- Incident management attachment does not update.
- Default filter should be opened data in all modules.
- Email should be having user name in additional message.
- Attachment mutation problem in risk management, ci, task manager, incident management.
- Kpi objective amendment not working.
- Compliance percentage not updating properly in ISO 27002 and DSPT.
# v2.2.1 ( 31 December 2021)
## Changed
### Comment sections
- Comments thread design finalized. Text colors updated.
- Comments database migrated to activity database. So we can implement timeline feature in future.
## Added
### Activity api
- Activity api is avaible, able to handle activities quite in a performant way. Will act as a centralized service for all the moudles.
## Removed
### Comments API
- Comments api has been removed for all the modules.
# v2.1.5 ( 27 December 2021)
## Changed
### Comment sections
- Comments thread design initialized. Text colors updated.
## Added
### Development library 
- new scss designs created. `card-timeline` class avaiable, new button mixin class avaible `btn-text`.
- use `card-timeline` only of there is a activity thread sections in the system and `btn-text` helps to render only text-based buttons.
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