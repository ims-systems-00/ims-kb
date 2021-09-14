---
sidebar_position: 1
---

# Configuration

Let's configure iMS. This should take less than **10 minutes**

More information about the UI, navigating it, and the numerous buttons can be found in the `General Information` portion of the User Manual. However, it is recommended to complete the Configuration at least once before moving on.

## Getting Started

To get started, we will begin by **creating your organisation** with the appropriate number of licenses (these will be included in the onboarding process).

First, you need to access your organisation's iMS by visiting the appropriate subdomain within [yourdomain.imssystems.tech][iMS]. As an example, the demo version of iMS is hosted on [my.imssystems.tech][myIMS].

## Create a business function

Log in to the system using your **superadmin** login details and navigate to `Our iMS` from the `Sidebar` which is on the left side of the screen.

After clicking on `Our iMS`, you will find 5 buttons on the drop-down that opens there. Click on `Business Units` then navigate to the `Create a function` tab to create your first business function. 

Here you will find two drop-down menus - the first being `Access type` and the second is `Access policy`. 

**Access Type** defines the type of business function you are creating, of which there are `Internal` and `External` types. 

**Access Policy** allows you to pick what features the business function is granted access to.

For now, you can either choose between one of the two premade policies or create your own
- iMS Business Function
- iMS Compliance Body

Once you have successfully created your first business function, proceed to the next step.

## Add job roles to the team

Navigate back to the `Our iMS` tab, here you'll see all your business functions listed in the left pane. Click on the pencil icon next to your first business function and you will now be able to see your business function details (note that the pencil icon is the button used to edit details).

Navigate to the `Job roles` tab. Here you can add users by filling the form on the left. Once you have added one or more members you will need to grant them access to features relevant to their role.

## Granting access to users

To grant access to a user, click on the `key` icon of the user you want to grant access to from the user panel on the right side of the `Job Roles` tab.

If the user cannot be granted access, you will get one of the following errors
> Server error occurred, the operation failed.

> User could not be granted access

This could be a result of either the organisation as a whole or only that specific business function not possessing enough `Basic User Licenses`. The number of **Basic User Licenses** your organisation possesses will be related to the service you purchased.

If this is your first time setting up iMS, continue following this guide, otherwise, if this occurs in the future please visit the [Troubleshooting Guide][].

## License management

Navigate to the `License Management` menu by using the `Sidebar`, scroll down to the bottom and click `User Access`, then click `License Management`. Here you'll find a table with your allocated licenses, and underneath that is a list of business functions that your organisation has created. Currently, you should only have one business function. From here, assign the appropriate number of `Basic` licenses to the business function and return to your `Job Roles` tab using the `Our iMS` button in the sidebar.

## Access granted

Once again, attempt to click on the `key` icon on a user, this time the system should grant them access to the iMS System and send out a Welcome Email with the users' login credentials. 

The credentials in the Email might look like this
Email : <your.name@domain.com>
Password : `system generated password` ie: (jahd8234bj^&%d)


You are recommended to browse the "[General Information][]" portion of the User Manual if this is your first time using the iMS System.

[iMS]: https://imssystems.tech/ "iMS Homepage"
[myIMS]: https://my.imssystems.tech/ "Demo iMS"
[Permissions]: ./permission "Link to Permissions Page"
[General Information]: ./General%20Information/quick_links

**Not yet made troubleshooting guide**

[Troubleshooting Guide]: ./intro