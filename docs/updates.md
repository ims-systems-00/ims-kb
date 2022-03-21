---
sidebar_position: 0
---
# Patch Notes

TEST

## v2.4.2

### Added

- Table
	- Search bars have been added.
	- Searches work for basic fields like reference title description name email etc.
- Bug reporting
	- You can now directly raise a ticket to the iMS Team from inside the system.
- Login
	- You must now enter your Organisation name during login
- System entry point
	- v2.4.2 will require users have to go to <https://app.imssystems.tech> in order to login
- Compliance
	- Previously, clauses that could not be edited could not be viewed.
- Dashboard
	- Current date is shown on the dashboard

## v2.4.1

### Added

- Toolkit
    - BS9997 toolkit has been added to the system
    - `Overview` tab has been added to each toolkit, showing a brief summary of progress

### Changed

- Profile Picture
    - Profile Picture upload has been moved to the avatar section
- Supplier Management
    - Comments and Filters have been added to Suppliers
- Licence Management
    - Licence Management, allocation and revoking of licences has been reworked. Basic Users and Heads of Service are now combined into User Licences, and User Licences are expended once per user, as opposed to previous once per user per business unit
- Tables
    - Columns can now be resized. Currently does not save across pages and reloads.
- Date format
    - 24-hour date format has been implemented across the system
- Dashboard
    - Greetings have been added and tailored to individual users in the dashboard.

### Fixed

- Buttons
    - Update buttons are now disabled when data is being processed.

## v2.3.3

### Added

- System defaults
    - **NEW:** `Issue date` and `Scheduled date` have been added to Reports Intervals
    - `Push notifications` are now expandable to allow users to get a full view of the text

### Fixed

- Document management
    - Version numbers were previously showing in reverse order.
    - `Share with` form was not showing all users
- Task manager
	- `Requested` task needed to be accepted again after updating task details
- Date picker
	- Year and Month selectors were shown as invisible
- Calendar
	- `Agenda` text has been aligned to the left
- Dashboard
	- Scrolling at the top of the dashboard caused latency

## v2.3.2

### Added

- Risk Management - event notification added for users of the Business Unit and for Super Admin when risks are mitigated.
- Incident Management - event notification added for Super Admin when incidents are resolved.
- Management Review
	- **NEW:** Added `Scheduled time` to table	
- Compliance Table
	- Colour-coding implemented in compliance tables
	- **NEW:** `Last Updated By` and `Last Updated Date` added in toolkit table and details tab.

### Fixed

- CQC
	- KLOE table previously didn't update in real-time
- Task Manager
	- Notifications previously didn’t redirect to the detail page

## v2.3.1

### Added

- **NEW:** Comment section added in Risk Management section
- KPI - deleting now lets you confirm your choice
- Tables
	- **NEW:** Filter feature introduced.
	- **NEW:** Pagination feature introduced.

### Removed

- Compliance service
	- Tabbed view in all modules has been replaced with the filter feature.

### Fixed

- Task Manager: Some tasks could not be assigned.
- Incident Management: Attachments would not update, this has been fixed
- KPI: Objectives can now be amended again

## v2.2.1

### Changed

#### Comment sections
- Comments thread design finalized

## v2.1.5

### Changed

#### Comment sections
- Comments thread design initialized
- Text colours updated

## v2.1.4

### Changed

#### Comment sections
- Latest comments now display from the top

#### Force reload 
- Tables now refresh on update across the system

## v2.1.3

### Added

#### Incident Management
- **NEW**:You can now assign an incident to a user - The owner can only be assigned once and can never be amended
- **NEW**:A comment section has been added to track updates from multiple users

### Changed

#### Calendar
- A major bug fix linked to a few modules
- Event details now update when the original event is updated

#### Task Manager
- You can now reassign a declined task

## v2.0

TL;DR
- Rework to most of the site to implement modals, now you don't need to click `Back to list` and wait a few seconds every time you want to make a change
- Massive rework to Our IMS - most only relevant if you're an Admin or Head of Service
- Some sweet QoL changes site-wide
- New icons for the sidebar and graphs for the dashboard!
- Profile Pics - You can add 'em...
- Brand new module - CQC!
- New security features

If you can be bothered to read, here's all the changes:

#### CQC
- CQC added

#### Sidebar
- Amazing new icons for:
	- Our IMS
	- Incident Management
	- Compliance
- Changed Our IMS from a button to a drop-down menu
- **NEW**: Access Policies
- *MOVED*: User Access to Our IMS - Licence Management and Users

#### Dashboard
- **NEW**: "Total Assets" graph
- **NEW**: CQC Overview has been added
- Previously, the "Asset Finance" chart did not correctly reflect changes... oops!

#### Our IMS
- Business Units
	- Reworked the creation process of Business Units and Users to be significantly easier <sub>I hope.</sub>
	- You can now create Internal and External functions in the same form, less clicks!
	- You can now adjust the level of access to specific modules, including read/write limitations. Do this using the new Access Policies
	- **NEW**: Grant toolkit access to each Business Unit as a whole, this was previously done on a per-user basis
	- **NEW**: When adding a user to a Business Unit you can now see the number of licences remaining for each user-type
- Users
	- *MOVED*: From "User Access" - Users to "Our IMS" - Users.
	- **NEW**: Email verification is now in place; users must verify their email before they can be granted access by an admin!
		- Verification links last for an hour, so be quick or you'll have an annoyed admin...
- **NEW**: Access Policies
	- You can now create and customise Access Policies, which allows admins to have control over what Business Units can access, and what they can do with what they are given access to!
- Licence Management
	- *MOVED*: From "User Access" - License Management to "Our IMS" - Licence Management
	- **NEW**: You can now view in one page:
		- the licences granted to your organisation
		- the licences assigned to various units within your organisation
		- the number of licences remaining
	- **NEW** Requests tab
		- HoS users can now request licences from Admins if they need more!
		- HoS users can now request toolkit access from Admins if they didnt have it before!
		- Admins can now request for more licences from iMS!
- **NEW**: System Defaults
	- System Dates, Incident Resolution and Report Intervals have been moved to a new submenu, System Defaults
	- **NEW**: Push Notification has been added to System Defaults, use this to send notifications to the entire Organisation
- ~~REMOVED~~: Our IMS (submenu)
	- The submenu "Our IMS" has been removed, with the previous functionality implemented into the Internal and External function tabs

#### Inventory Management
- No changes :(

#### Risk Management
- **NEW**: Colour-coding based on risk score
- **NEW**: Now tracks initial and current risk scores, feel free to change them up!

#### Incident Management
- **NEW**: Colour-coding based on priority level

#### Audits
- **NEW**: Added a new field to the creation form, "Focus Area"
- **NEW**: You can now modify the Auditor assigned to an audit
- Audit creation and modification have been simplified

#### Management Reviews
- **NEW**: Schedule - You can now directly add Attendees during the review creation process
- **NEW**: Schedule - You can now modify the interval between reviews
- **NEW**: Attendees now receive a notification when they're added to a Management Review, no excuses now!
- Schedule - Attendee selection has been simplified
- KPI - Adjusted layout and styling to be more user-friendly

#### Continual Improvement
- **NEW**: "Title" field added to the creation form
- **NEW**: You can now modify the owner of an OFI
- Adjusted layout and styling to be more user-friendly

#### Supplier Management
- **NEW**: You can now modify the contract start and end dates
- **NEW**: Upload your Contract, Onboarding and SLA files to make them Compliant.
- Adjusted layout and styling to be more user-friendly

#### Document Management
- **NEW**: Added "Confidentiality" selection to the form
- Now tracks *who* uploaded a new version of a file
- Adjusted layout and styling to be more user-friendly

#### Task Manager
- **NEW** You are now able to preview a task before accepting it, click the eye icon!
- You can no longer delete a completed task. Sorry~
- Clicking `Update` should no longer send the task back to requests... probably...

#### Calendar
- Admins can no longer snoop on your personal events!

#### Profile
- **NEW**: You can now upload your "professional" profile pictures!
- Fixed the ability to change your name and bio
- You can't look at other peoples salaries... unless you're their manager.