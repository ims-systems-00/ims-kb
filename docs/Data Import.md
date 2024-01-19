---
sidebar_position: 999
---

---

# Data Import

## Prerequisites for Importing Data into iMS System

Before you begin importing data into iMS Systems, you must first ensure that the data in question is in the **CSV** file format and organised in **columns** with the top row of each column providing the name of the field, as the system will read the top row for the names of the columns and will then provide these for you to select via the dropdowns.

*Please also view the specific section for your chosen module [here](#available-modules) to ensure that your spreadsheet meets all the relevant requirements.*

## Importing Data into iMS Systems

To begin importing data into iMS Systems, navigate to and click on the `Data import` button on the `Sidebar`, which is on the left-hand side. You will then see a drawer open from the sidebar containing the different pages within this module. Click on the `Data import` page.

This is where you can begin importing your data, provided it is in the correct format, into iMS Systems. You must first select the `Module` you wish to import data into. 

After selecting the `Module`, you will then need to select the `Format`. Currently this dropdown only consists of `CSV`, but more options may be added in the future. After selecting this, you must then select the `Date format`. Similarly to the `Format` field, this currently only includes the **United Kingdom** date format, but more options may be added in the future.

Finally, simply click inside the box on the right-hand side, then navigate and select the relevant file you wish to import into the system. 

*The form will be completely different based on the choice of `Module`. The different options will all be covered in their own seperate sections below, which will cover both **required** and **optional** fields as well as any requirements for specific fields. Please view this [here](#available-modules)*

### Selecting Data to Import into iMS Systems

When selecting which data to import into the system, it is important to note the following:

* You **must** select an option in the relevant dropdown next to all **required** fields. These fields are marked with a **red star** next to their names, as well as by the fact that the `Migrate` button is already checked by default next to them.
    * Other fields, whilst not necessary for the data import process, will be beneficial if they are also filled in.

* If you wish to import any optional fields, simply select the relevant option from the dropdown and then you **must** also check the `Migrate` box next to it as well.
    * If you do not check the `Migrate` box, then the Data Import process will ignore that field completely.

* When selecting an "Owner", you will be provided a list of all users within the system - if you wish to assign everything to a single user, then simply select their name here. Otherwise, you can leave this field blank and then go into each piece of data after importing has been completed and manually assign each one to the relevant user.
    * *Please note, it may be more useful to split the file you are importing based on the Owner. For example, if a user has multiple pieces of data within a certain category, it may be quicker to save their data on a separate spreadsheet and then import it into the system whilst automatically assigning it to them, rather than importing all the data and assigning each piece manually.*

## Validating your Data

Before your data is imported into the system, you must first validate it in order to ensure that the data matches the field correctly. Some examples of this include:

* Email fields must include email addresses with an @ symbol
* Date fields must be in the correct format
* Category fields must match the categories within the system
* Scoring or Priority Level fields, such as in Risk or Incident Management, must be within the existing number limits 

*The specific requirements, if any, are all included in [this](#available-modules) section below for each module.*

In order to check your selection for this, simply follow all the steps above, then simply click the `Validate dataset` button at the bottom of the page. Once you have clicked this, the system will compare the data in the dropdowns you have selected against the requirements.

If your data validation is unsuccessful, then you will be notified on the page the reason why the field in question failed the data validation process. You will also see a new button appear called `Download report` which will compile all the data validation errors and allow you to see the issues for each column. This will allow you to edit your initial spreadsheet to meet these requirements.

If your data validation is successful, then you can simply move on to starting the migration process.

## Starting the Data Migration Process

Once you have successfully validated your data, you can then begin the migration process. You will see a new field appear at the bottom of the page which requires you to type the requested phrase in order to begin the process. 

Once you have typed in the correct phrase, simply click on `Start Migration` and the process will begin. This will happen automatically in the background, and you will be notified when it is completed via both a pop-up and bell notification within the system.

## Available Modules

This section below will cover all of the currently available modules you can import data into, alongside all the fields which will be present, if the information within must be in any specific format and whether or not they are optional or mandatory. You can use this information to ensure that your spreadhseet is all correct before starting the Data Import process.

### CRM/Customers

| Field Name 			| Format Requirements?																| Optional or Required? | 
| :-------------------- | :-------------------------------------------------------------------------------- | :-------------------- |
| Priority 1 Escalation | Major System defects and crash. Resolution in 6 hours. 							| Optional Required     |
| Priority 2 Escalation | Issues with Logging into accounts. Resolution in 9 hours. 						| Optional Required     |
| Priority 3 Escalation | Document issues, help with navigation and use of System. Resolution in 48 hours.	| Optional Mandator     |
| Priority 4 Escalation | Technical queries and advice. Resolution in 72 hours.								| Optional Mandatory    |