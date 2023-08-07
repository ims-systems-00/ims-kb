---
sidebar_position: 1000
---
# Release Notes

# V3.0.6 ( 10 June 2023 )

## Added

### UI/UX

- Navigation bar redesigned with better UX
- Send report and worklog shifted under quick actions in navbar
- Fixed mini sidebar with nested modular sidebar introduced
- Dashboard UI and UX upgraded
- To-do list introduced in dashboard
- Notification view embadded in drawer for quick actions
- Table in each module redesigned
- Drawer view introduced managing quick options

### Details view 

- Quick drawer view introduced on row click of the table
- Full page view introduced on the actions of table
- Raising task and linking of toolkit is introduced
- Quick actions on specific section can be done from both drawer and details view

### Document Management

- Linking of document to module introduced
- Linked documents on each module been fetched on a button on top of the table
- Audit trail of document introduced in

### Compliance

- ISO 27001 (Annex A) available in the system
- Analytics of compliance brought into dashboard
- Amendment in toolkit ISO 27001 (2022), ISO 14001, BS 9997 and ISO 45001 available in system
- Automated implemented triggering based on module utilisation introduced

### Task manager

- Link of task management to risk, incident, cip, audit, supplier and crm introduced



# V3.0.5 ( 26 April 2023 )
## Added 
### Our iMS 

- `User` delete `data-transfer` prompt added in users table (Delete button). 
- Deleted user show up as `Firstname Lastname (Deactivated)` in the system.
- When removing a user from `BU` system sends notification to user.

### Compliance (ISO 27001 toolkit updates)

- ISO 27001 2013 version updated
- ISO 27001 (2022) version introduced
- ISO 27001 (2022 Annex A) version introduced.
- Analytics for these toolkits in dashboard and reports added.
- `Clause`, `Control`, `Sub-control` labels introduced.
# V3.0.4 ( 7 April 2023 )

## Added

### Component library

- `Drawer` component and `Context provider` introduced so that can be used in
  multiple modules

# V3.0.3 ( 28 March 2023 )

## Activities on document management

- Detailed logging system added for automated activities. Many informtion can
  be captured depending on the event.

# V3.0.2 ( 27 March 2023 )

## Added

### Document Management

- Document version flow changed
  > New Document can now be added from the top of repository and add new version addition is on the row dropdown.
- Authorisers and document purpose auto selection for new version added.d

## Fixed

- Bug reports

# V3.0.1 ( 8 March 2023 )

## Added

### Document Repository

- Folder navigation back to one level up button introduced
- Back to repository button mode beside edit repository button
- Going back to repository (Folders/Files) view from a document view opens the exact folder that you were in before.

## Removed

### Dashboard

- Task analytics removed

# V3.0.0 ( 2 March 2023 )

### Added

### Document Management

- Document version control
- Folder management
- Signature on documents
- Authorisation process of document
- Comments and automated activities

### Design system

- Introduction to new design system
- New Details page layout created

## Change

### Notification UI

- New Notification layout added.

# V2.5.15 ( 14 December 2022 )

## Fix

### Report intervals

- automated send dashboard report (report subscription) feature stopping issue fixed.

### Mention Notifications

- Notification for **@mentions** is now linked to relavant modules ( ie : click on notifications will redirect you to the data )

- Only Triggered Notifications in email redirect to page after login feature implemented. (Note: This works for the emails that are generated as part of system bell notifications, other in general emails do not have these feature yet)

### Email templates

- latest email template applied to **@mention** emails.

- new email template applied across the system.

> Note: email design has been handled for different email clients, design break issues are sorted

### Risk management

- risk type migration **organizational** to **Organisational** has been implemented

# V2.5.14 ( 13 December 2022 )

## Fix

### Login form

- Dropdown text changed to `Your organisation`

# V2.5.13 ( 28 November 2022 )

## Fix

### My CRM Analytics

- Contract started this month wrong calculation.

- Contract ended this month wrong calculation.

- Contract review this month wrong calculation

# V2.5.12 ( 21 November 2022 )

## Added

- Login page new design
- Amend edit feature
- Text editor accross the
- Mention feature with notification

## Fix

- No attachments related to supreme state deletion handled
- Supplier management Kpi adding hides the business unit name fixed

### Attachment list

- Modified date and modified by information is invisible in attachments in all modules
- Business unit switch crashing the iHR problem sorted

### Audit and Management review

- Date and time validation issue sorted only 0 to 24 hour are allowed

## Changes

- Details page design

### Audits

- audits opened for HOS and Basic user roles
- notifications added for the users of a business unit and via email

## Added

### Text editor

- Text components pushed

# V2.5.11 ( 26 October 2022 )

## Fix

### Software inventory

- No Business unit name population when adding software asset key problem fixed

### Business unit

- Users can now remove themselvs from a business unit.

### Dashboard

- Attribute renamed in dashboard report pdf from `closed` to `mitigated`
- New business unit dashboard template replaced the older one.

### Document management

- Search repository functionality added

## System updates

- System updated to node.js V16.17.1

# V2.5.10 ( 30 September 2022 )

## Fix

### Dashboard

- incidents analutics has been fixed in both dashboard

# V2.5.9 ( 26 September 2022 )

## Fix

### Attachment previewer

- Unavailable file preview component handled properly.
- Download and X button introduced

# V2.5.8 ( 23 September 2022 )

## Added

### Google Analytics

- Google analytics initialised

## Changed

### Incident management

- Data import validation source not found issue sorted

### CRM/Customers

- Address fields made optional in data import validation module.

# V2.5.7 ( 21 September 2022 )

## Added

### Logo

- Latest logo replaced in all places

### Audits

- Audit liked to `risk management`, `incident management`, `continual improvement and planning`.
- Audit report latest design implemented
- auditors name introduced in audit table

### UI

- Details page layouts updates
- ICON and PopUp image updates throughout the system
- Document Management Preview Feature bug fixes and UI Update

### Data import

- A bulk number of data importing facility has been brought in the system. User can add their bulk legacy data module by module

## Fixed

### Attachment

- Attchment utility allignment issue has been sorted

## Breaking change

### Data-base migration (Document Management)

- db name change : documents -> documentrepositories
- db name change : docversions -> documents
- attribute change : **document** -> **repository** in `documentreviews` model
- attribute change : **version** -> **document** in `documentreviews` model
- attribute change : **document** -> **repository** in `document` model
- reference fields : `REP-` for repository, `DOC-` for actual document

### Comments and Identity counter migration

- Document Management comments
- Rename model name in identity counters

# V2.5.6 ( 10 August 2022 )

## Added

### iHR

- Staff wallet module integrated with expense report and leaves
- Line manager and country field, working days added in user profile
- Worklogs and timesheets feature added in iHR
- Direct reports for line manager
- Cost per mile and currency been added in my organisation

### Document Management

- Document management with enhanced version controlling
- Document authorisation
- Document signature
- Document preview feature in the system

### Notifications

- Initialised email notification
- Nudge feature added in incident,risk, task and ofi
- Email template modified

### CRM

- Interaction analytics has been added

# V2.5.5 ( 17 June 2022 )

## Changed

- New organisational dashboard report has been integrated
- Error page added

## Fixes

- Unlimited looping of comments/interaction has been fixed
- If any user is removed from business unit task manager going blank issue is fixed
- Completed task can be accepted/declined by any assignee issue fixed

## Added

- iso15686-5 integrated in the system

## Changed

- System defaults shifted under my organisation in dropdown

# V2.5.4 ( 11 May 2022 )

## Added

### Task manager

- Search filter query reviewed and improvements implemented

# V2.5.3 ( 11 May 2022 )

## Added

### Dashboard

- Digital maturity matrix dashboard introduced.

## Fixes

- Minor spellings has been fixed

## CI/CD

- Environment build runtime updated from 12 to 16

# V2.5.2 ( 11 May 2022 )

## Added

### CRM

- CRM licence management and access policy introduced

## Changed

### Dashboard

- linking to all the module from dashboard is implemented
- Code base restructured in both front end and back end
- Title truncation added in task manager analytics

## Removed

### Dev-lib

- Unnecessary licence management code cleared
- Backend infrastructure updated

## Fixed

### Miscellaneous

- Custom policy tool allocation problem

# V2.5.1 ( 16 April 2022 )

# Task manager updates

- Multiple user assign feature has been added.
- Cross business unit task assignment feature has been added.
- Team priority feature has been added.

# V2.4.6 ( 5 April 2022 )

### Notification system

- Pagination Not working properly and read only notifications not working properly has been fixed

# V2.4.5 ( 4 April 2022 )

### Compliance

- ISO14001 introduced is available now

### Audit

- Risk scoring system in audit form has been added.

### Password invalidation

- Invalid attempts are set to number 5.
- Account lock for too many bad attempts is set to 1 hour.
- Verification email spamming protected

# V2.4.4 ( 24 March 2022 )

### Dashboard

- CRM analytics introduced
- Live customer analytics with values are available for most valued customer, Lowest value customer and average contract value

### CRM

- Customer specific analytics introduced
- Customer logo Introduced in invoice form
- Invoice bug reports has been fixed.
- Interaction section introduced in customers.
- Invoice table validation introduced
- My customer filter available to see which customer a user is managing.
- My customer analytics introduced.
- Analytics for valuable customer, contract starting and ending this month added
- Live customer analytics with values are available for most valued customer, Lowest value customer and average contract value for customer managing by end user

# V2.4.3 ( 10 March 2022 )

### Developer updates

- Profile picture secure URL introduced
- CSV support for mobile app has been introduced

### Supplier management

- Contract value added in the supplier form
- Contract value analytics introduced in the dashboard

### Organisation profile

- From the dropdown of profile section organisation overview is available.
- Super user can amend organisation info, all other user will have a read view

# V2.4.2 ( 21 February 2022 )

### Table

- Search bars have been added.
  > **Searches are working for basic fields like reference title description name email etc.**

### Bug reporting

- You can now directly raise a ticket to iMS Systems team from inside the system.

### Login

- Organisation selection is introduced in login form

### System entry point

- After v2.4.2 users have to go to domain `https://portals.imssystems.tech` to access ims systems

### Dashboard

- Todays date is showed on the top of the dashboard

### Compliance

- Clauses which are not amendable are also viewable. Users have read view for all the clauses

### Authentication

- Flow has been modified. Forgot password needs organisation name.

# V2.4.1 ( 14 February 2022 )

## Added

### Toolkit

- BS 9997 compliance toolkit is available in system
- Summary of each compliance tool is introduced to the system

### CRM

- CRM System has been introduced.

#### Features

- Customers Listing
- Customer Incident management.
- Send Invoices

## Profile

- New Profile picture upload has been moved to avatar section.

## Changed

### Supplier management

- Managing supplier incidents is upgraded, comments and filters has been added.

### Document management

- Modified date are inline with the version info in detail page.

### License management

- License allocation in business unit is not available anymore.
- Request includes only number of business units, number of users and the toolkits.
- No grant license feature is available in client end from the request table.
  > **All the licenses are managed from iMS Systems end.**
- `Manage licenses` section for super admin only has toolkit license management.
- Anyone having a super admin or hos access can create user anytime as long as licenses are available in the organisation.
- A license is utilized when a user is created.
  > **Not when a new role is added in a function.**
- A license is freed when a user is deleted or removed from the system.
  > **Not when the role is deleted from a function.**
- Organisational overview table has been changed and relevant information are rearranged.
- Business units table indicates how many roles are being utilized in each function. But doesn't change the roles. These roles do not have any relationship with with licenses. These are just static information.

### Table

- Column resizing feature available. Tables can be expanded in horizontal direction.

### Admin theme

- Default theme has been set to red and mode is white.

### Date format

- 24 Hour date format across the system introduced

### Dashboard

- Greetings introduced in dashboard in place of integrated management system.
- Analytics changed finance and users duplication in business unit has been fixed.
  > **First business unit is prioritized and considered as the primary business unit.**

## Fixed

### Buttons

- Updated buttons doesn't remain disabled when the data is being processed.

### Task manager

- Assigned date issue fixed.

# V2.3.3 (27 January 2022)

## Added

### Document management

- Shared with notifications has been integrated

### System defaults

- Issue date and scheduled date has been added in report interval
- Push notification is expandable to get the full view

## Fixed

### Document management

- Version detail showing reverse order.
- Share with form not populating all the users

### Task manager

- Requested task needs to accept again

### Our iMS

- Business unit user table pagination need to click twice

### Date picker

- Invisible years and months of date select

### Calendar

- Agenda title left aligned

### Dashboard

- Scrolling lags at the dashboard

# V2.3.2 ( 19 January 2022)

## Added

### Risk management

- Risk management mitigated event notification added for users of the particular unit and super admin.
- Incident management resolved event notification added for super admin.

### Management Review

- Added scheduled time

### Compliance Toolkit

- Last updated by and date in toolkit table and detail page.

### Compliance Table

- Color code implemented in compliance table

## Changed

### Compliance Toolkit

- Select control and implement control feature implemented in ISO 20000, ISO 27001, ISO 9001, ISO 45001
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

# V2.3.1 ( 18 January 2022)

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

# V2.2.1 ( 31 December 2021)

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

# V2.1.5 ( 27 December 2021)

## Changed

### Comment sections

- Comments thread design initialized. Text colors updated.

## Added

### Development library

- new scss designs created. `card-timeline` class available, new button mixin class available `btn-text`.
- use `card-timeline` only of there is a activity thread sections in the system and `btn-text` helps to render only text-based buttons.

# V2.1.4 ( 17 December 2021)

## Changed

### Comment sections

- Latest comments are at the top.

### Force reload

- Table doen't refresh on update accross the system. (issue fixed)

# V2.1.3 ( 14 December 2021)

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

### Calendar

- Faulty query for event attendees as been fixed.
- Update of system event realted information automatically updates in calendar.

### Task manager

- Fixed Task reassign feature and working properly.
