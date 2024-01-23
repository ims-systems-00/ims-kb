---
sidebar_position: 999
---

---

# Data Import

## Prerequisites for Importing Data into iMS System

Before you begin importing data into iMS Systems, you must first ensure that the data in question is in the **CSV** file format and organised in **columns** with the top row of each column providing the name of the field, as the system will read the top row for the names of the columns and will then provide these for you to select via the dropdowns. You must also ensure that there are no empty cells within any of the columns, otherwise the data import process will not validate successfully.

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

| Field Name 			 | Format Requirements?																        | Optional or Required? | 
| :--------------------- | :--------------------------------------------------------------------------------------- | :-------------------- |
| Business function      | N/A                                                   							        | **Required**          |
| Company number         | This field must be a number.                              						        | Optional              |
| Probability            | This field must be a number.                                                 	        | Optional              |
| Source                 | N/A                          						                        		    | Optional              |
| Organisational profile | This field must be one of the following: Live, Prospect, Warm lead, Qualified, Proposal.	| Optional              |
| Phone number           | This field must be a number.                         								    | Optional              |
| Customer name          | N/A                                                  								    | **Required**          |
| Building name          | N/A                                                  								    | Optional              |
| Street name            | N/A                                                  								    | Optional              |
| Post code              | N/A                                                  								    | Optional              |
| Town                   | N/A                                                  								    | Optional              |
| Account manager        | N/A                                                  								    | Optional              |
| Account number         | N/A                                                  								    | Optional              |
| Primary contact        | N/A                                                  								    | Optional              |
| Primary email          | This field must include an email address.            								    | **Required**          |
| Secondary contact      | N/A                                                  								    | Optional              |
| Secondary email        | This field must include an email address.            								    | Optional              |
| Service provision      | N/A                                                  								    | Optional              |
| Contract value         | This field must be a number.                         								    | Optional              |
| Contract start date    | This field must be a valid date.                     								    | Optional              |
| Contract end date      | This field must be a valid date.                     								    | Optional              |
| Review date            | This field must be a valid date.                     								    | Optional              |
| Notes                  | N/A                                                  								    | Optional              |
| Reason for loss        | N/A                                                  								    | Optional              |

### Risk management

| Field Name 			    | Format Requirements?																                       | Optional or Required? | 
| :------------------------ | :------------------------------------------------------------------------------------------------------- | :-------------------- |
| Business function         | N/A                                                   							                       | **Required**          |
| Risk title                | N/A                                                        						                       | **Required**          |
| Risk category             | This field must be one of the following: Hardware, Software, People, Premise, Organisational, Clinical.  | **Required**          |
| Description               | N/A                                                        						                       | Optional              |
| Controls and mitigation   | N/A                                                        						                       | Optional              |
| Acceptance rationale      | N/A                                                        						                       | Optional              |
| Decision maker            | N/A                                                        						                       | Optional              |
| Risk owner                | N/A                                                        						                       | Optional              |
| Likelihood                | This field must be a number between 1 and 5.                 						                       | **Required**          |
| Consequence               | This field must be a number between 1 and 5.               						                       | **Required**          |

### Incident management

| Field Name 			 | Format Requirements?										 | Optional or Required? | 
| :--------------------- | :-------------------------------------------------------- | :-------------------- |
| Business function      | N/A                                                   	 | **Required**          |
| Incident title         | N/A                                                       | **Required**          |
| Description            | N/A                                                       | Optional              |
| Incident owner         | N/A                          						     | Optional              |
| Method of notification | N/A                                                       | Optional              |
| Affected service       | N/A                                                  	 | Optional              |
| Resolution             | N/A                                                  	 | Optional              |
| Priority               | This field must be one of the following: P1, P2, P3, P4.	 | Optional              |

### Inventory/hardware

| Field Name 			 | Format Requirements?				 | Optional or Required? | 
| :--------------------- | :-------------------------------- | :-------------------- |
| Business function      | N/A                               | **Required**          |
| Name                   | N/A                               | **Required**          |
| Tag                    | N/A                               | Optional              |
| Owner                  | N/A                          	 | Optional              |
| Assigned date          | This field must be a valid date.  | Optional              |
| Returned date          | This field must be a valid date.  | Optional              |
| Destruction date       | This field must be a valid date.  | Optional              |
| Cost                   | This field must be a number.      | Optional              |

### Inventory/information

| Field Name 			 | Format Requirements?				 | Optional or Required? | 
| :--------------------- | :-------------------------------- | :-------------------- |
| Business function      | N/A                               | **Required**          |
| Information inventory  | N/A                               | Optional              |
| Title                  | N/A                               | **Required**          |
| Owner                  | N/A                          	 | Optional              |
| Storage location       | N/A                          	 | Optional              |
| Format                 | N/A                          	 | Optional              |
| Link                   | N/A                          	 | Optional              |
| Cost                   | This field must be a number.      | Optional              |

### Inventory/people

| Field Name 			 | Format Requirements?				 | Optional or Required? | 
| :--------------------- | :-------------------------------- | :-------------------- |
| Business function      | N/A                               | **Required**          |
| Name                   | N/A                               | **Required**          |
| Role                   | N/A                               | **Required**          |
| Responsibility         | N/A                               | Optional              |
| Skill                  | N/A                               | **Required**          |

### Inventory/premise

| Field Name 			 | Format Requirements?				 | Optional or Required? | 
| :--------------------- | :-------------------------------- | :-------------------- |
| Business function      | N/A                               | **Required**          |
| Name                   | N/A                               | **Required**          |
| Location               | N/A                               | **Required**          |
| Address                | N/A                               | **Required**          |
| Cost                   | This field must be a number.      | Optional              |

### Inventory/software

| Field Name 			 | Format Requirements?				 | Optional or Required? | 
| :--------------------- | :-------------------------------- | :-------------------- |
| Business function      | N/A                               | **Required**          |
| Name                   | N/A                               | **Required**          |
| Number of licences     | This field must be a number.      | Optional              |
| Number of installs     | This field must be a number.      | Optional              |
| Cost                   | This field must be a number.      | Optional              |