---
sidebar_position: 1
---

# Configuration

Let's configure iMS. This should take less than **10 minutes**

More information about the UI, navigating it, and the numerous buttons can be found in the `General Information` portion of the User Manual. However, it is recommended to complete the Configuration at least once before moving on.

## Getting Started

To get started, we will begin by **creating your organisation** with the appropriate number of licenses (these will be included in the onboarding process).

First, you need to access your organisation's iMS by visiting the appropriate subdomain within [yourdomain.imssystems.tech][iMS]. As an example, the demo version of iMS is hosted on [my.imssystems.tech][myIMS].

## Create a Business Unit

Log in to the system using your **superadmin** login details and navigate to `Our iMS` from the `Sidebar` which is on the left side of the screen.

After clicking on `Our iMS`, you will find 5 buttons on the drop-down that opens there. Click on `Business Units` then navigate to the `Create a function` tab to create your first business function. 

Here you will find two drop-down menus - the first being `Access type` and the second is `Access policy`. 

**Access Type** defines the type of business function you are creating, of which there are `Internal` and `External` types. 

**Access Policy** allows you to pick what features the business function is granted access to.

For now, you can either choose between one of the two premade policies or create your own
- iMS Business Function
- iMS Compliance Body

Once you have successfully created your first business function, proceed to the next step.

## Create a User

Navigate back to the `Sidebar`, under `Our IMS` click on `Users`. 

From here, click on the `Create user` tab.

Here you can add users by filling the form. Once you have added one or more members you will need to grant them access to Business Units relevant to their role.

## Add a User to a Business Unit

Navigate back to the `Sidebar`, under `Our IMS` click on `Business Units`.

From here, click on the pencil icon to the right of the Business Unit you created earlier.

Navigate to the `Add members` tab and use the two drop down menus to first select the user you created and the role you want to assign them within the Business Unit.

After adding the user to your Business Unit, navigate to the `Members` tab.

To grant access to a user, click on the green `key` icon of the user you want to grant access to.

**If the user cannot be added to a Business Unit, you will get one of the following errors**

> This license is unavailable for this group

This could be a result of either the organisation as a whole or only that specific Business Unit not possessing enough `Basic User Licenses`. The number of **Basic User Licenses** your organisation possesses will be related to the service you purchased.

If this is your first time setting up iMS, continue following this guide, otherwise, if this occurs in the future please visit the [Troubleshooting Guide][].

## License management

Navigate to the `Sidebar`, under `Our IMS` click on `License Management`. 

From here, find the Business Unit you create and click on the pencil icon to the right of it.

Navigate to the `Manage licenses` tab.

The table titled **Remaining licenses** is the total number of licenses remaining for your organisation as a whole.

Add a single license relevant to the job role you wish to give to your first user, this will be either HoS (*head of service*) or Basic User.

Once you have assigned the relevant license to the Business Unit, return to the Business Unit and add the user once again.

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