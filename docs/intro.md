---
sidebar_position: 1
---

# Configuration

Let’s configure your iMS Systems.

Information about specific modules and how to use them can be found in their relevant pages on the sidebar within this Knowledge Base. 

It is reccomended to read through this page first before moving on, as you will be unable to utilise the system properly without following these steps first.

**Please Note: This page is mainly for Super Admins. If you are not a Super Admin, you will not have the ability to follow all of these steps below, however some of these are possible if you are a Head of Service.**

## Getting Started

First, you must already have an organisation with iMS Systems as well as your login credentials. If you do not have these yet, please book a [Demo](https://imssystems.tech/bookDemo.php) with us.

If you have these details, then simply access the iMS portal by visiting [portals.imssystems.tech](https://portals.imssystems.tech).

## Logging in

To log into the system, first click within the dropdown labeled `Enter your organisation` and start typing the name of your organisation. Once it appears in the dropdown, make sure to click on it.

Next, simply enter your `Email` and `Password` and click `Login`.

After you have logged into the system, you will be greeted by the Dashboard. 

On the left side of the system you will see the sidebar. You can either click on, or hover over, each of the buttons in order to see which module they link you to. You will see that the module you are currently in is noted by a blue highlight around the button. 

## Create a User

To begin creating a new user, navigate to and click on the `Our iMS` button on the `Sidebar`, which is on the left-hand side. You will then see a drawer open from the sidebar containing the different pages within this module.

Click on `Users` and then on the `Create user` tab.

This is where you can add Users to the system. You must first select the `User type`.

The `User type` selector is a drop-down menu, from which you can select from the following options:

+ Internal

    > This user will have full time access to the system.

+ External

    > This user can either have their access automatically expire within 1 to 5 days, or have the same full time access as an Internal User.

*The form will differ slightly depending on this choice. These differences will be covered later in this section.*

After selecting the relevant `User type`, you will then enter the `Email`, followed by the `First name`, `Last name`, `Job title` and `Working place` of the user in question.

The `Working place` refers to whether the user is working **On-site** or **Remote**. This can be changed by the user themselves at any time from their Profile. 

For **Internal** users, you will then have the option to enter their `Salary` if you wish, followed by their `Line manager`. These are both optional fields and can be added/amended at any time from the users' profile page.

For **External** users, you will instead have the option to control their `Access period.` This can vary from anywhere between **1 to 5 days** or **Full time** access. You can change or grant additional access at any time after creation.

Finally, click `Confirm` to create the user. This will utilise 1 of your user licences which you will be able to see a summary of on the right side of this tab. After creating this user, the system will send out an email to allow them to verify their account.

*Users must both be **verified** and be **assigned to a Business Unit** in order to access the system. Creating and assigning users to a Business Unit will be covered below.*

## Create a Business Unit

To begin creating a new Business Unit, navigate to and click on the `Our iMS` button on the `Sidebar`, which is on the left-hand side. You will then see a drawer open from the sidebar containing the different pages within this module.

Click on `Business Units` and then on the `Create a function` tab.

This is where you can add Business Units to the system. You must first select the `Access type`.

The `Access type` selector is a drop-down menu, from which you can select from the following options:

+ Internal function

    > This access type is effectively for teams or departments within the same company, such as HR, Operations and Finance.

+ External function

    > This access type is for outside parties that would need access to your iMS Systems, such as for Compliance Bodies that want to audit your Organisation.

After selecting the `Access type`, you will then need to select the `Access policy`. This dropdown consists of `iMS Business function`, `iMS Compliance body` as well as any other access policies you may have created yourself within the `Access Policies` section of `Our iMS`. 

*The form will be completely different based on this choice. Please note that any custom Access Policies will be treated the same as the `iMS Business function` access policy for the purposes of this form, so refer to that section for all custom access policies.*

### Creating a Business Unit with iMS Business Function Access Policy

After selecting `iMS Business function` or a custom policy for the `Access policy` dropdown, you will then need to enter the `Name` of the Business Unit, followed by its `Operating location` and `Responsibility`.

Finally, click `Confirm` to create the business unit. This will utilise 1 of your business unit licences which you will be able to see a summary of on the right side of this tab. After creating this business unit, you will then be able to add members to it in order to grant your users access to the system.

*For business units created this way, you will be able to assign users as either a **iMS Basic User** or as a **iMS Head of service**.*

### Creating a Business Unit with iMS Compliance Body Access Policy

After selecting `iMS Compliance body` for the `Access policy` dropdown, you will then need to enter the name of the `Compliance body`, followed by what `Standards` they cover and their relevant `Responsibility`.

Finally, click `Confirm` to create the business unit. This will utilise 1 of your business unit licences which you will be able to see a summary of on the right side of this tab. After creating this business unit, you will then be able to add members to it in order to grant your users access to the system.

*For business units created this way, you will only be able to assign users as an **iMS Auditor** within it.*

## Add a User to a Business Unit

To begin adding a user to a business unit, navigate to and click on the `Our iMS` button on the `Sidebar`, which is on the left-hand side. You will then see a drawer open from the sidebar containing the different pages within this module.

Click on `Business Units` and then you will see a table which contains all of the business units you have created.

Navigate to the relevant business unit you wish to add a user to and click on their entry within the table to open a pop-up. On this pop-up, click on the `Add members` tab at the top.

You must first select which `User` it is you wish to add to this business unit followed by their `Role`.

There are 3 total different roles you can grant a user - though **iMS Auditor** will only appear for those business units created with the `iMS Compliance body` access policy.

+ iMS Basic User

    > This user will have full access to all of the basic modules within their business unit but a limited, read-only, access to `Our iMS`.

+ iMS Head of service

    > This user will have full access to all of the basic modules within their business unit as well as limited version of `Our iMS` that is specific to their business unit. They are able to add new users and business premises to their own business unit here, as well as send a licence request to their **Super Admin**.

+ iMS Auditor

    > This user will have read-only access to all of the basic modules within the entire system, with full access to the `Audits` module. Only **iMS Auditor** and **Super Admin** users are able to complete audits.

## Access granted

Once you have assigned a user to a business unit, they will then recieve an email notifying them. Provided they have first verified their account, as mentioned above, they will now be able to login and start using iMS Systems.

*The verification email sent to the user has a 1 week deadline before the link no longer works, due to security reasons. You can resend the verification email at any time from the `Users` tab within `Our iMS`.*

<!-- You are recommended to browse the [General Information][] portion of the User Manual if this is your first time using the iMS System. -->
