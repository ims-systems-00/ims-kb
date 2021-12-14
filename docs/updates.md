---
sidebar_position: 0
---
# Patch Notes

## Patch Notes v2.1.3

#### Incident Management
- You can now assign an incident to a user
- A comment section has been added to track updates from multiple users

#### Calendar
- A major bug fix linked to a few modules
- Event details now update when the original event is updated

#### Task Manager
- You can now reassign a declined task

## Patch Notes v2.0

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