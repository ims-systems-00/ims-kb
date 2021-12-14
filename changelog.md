# v2.1.3 ( 14 December 2021)
## __Added__
### Incident managment
- Assign the incident to an owner feature added. The owner can only be assigned once and can never be amended. (Pop up notification available)
- Comment section created.
### System Infrastructure
- Database collection renaming and synchronization in all three environments.
- Deployment pipeline infrastructure shifted to GitHub actions from AWS in the backend.
## __Changed__
### Calendar
- The faulty query for event attendees has been fixed.
- Calendar events now update when original event’s (task, incident, etc) details are updated
### Task manager
- Fixed Task reassign feature and working properly.
### Email service
- Service changed from Microsoft SMPT to SendGrid API.
