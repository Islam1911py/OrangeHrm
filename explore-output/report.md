# My Info exploration report
Run: 2026-10-18T12:09:58.460Z

## Login page
- URL: https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
- Screenshot: screens/login-page.png   HTML: html/login-page.html
- Headings: Login

| Label | Kind | Value | Disabled | Required | Name attr | Placeholder |
|---|---|---|---|---|---|---|
| Username | text |  | false | false | username | Username |
| Password | password |  | false | false | password | Password |
- Buttons: Login

## Admin - Add Employee form
- URL: https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee
- Screenshot: screens/admin-add-employee-form.png   HTML: html/admin-add-employee-form.html
- Headings: PIM | Add Employee

| Label | Kind | Value | Disabled | Required | Name attr | Placeholder |
|---|---|---|---|---|---|---|
|  | text |  | false | false |  | Search |
|  | file |  | false | false |  |  |
|  | text |  | false | false | firstName | First Name |
|  | text |  | false | false | middleName | Middle Name |
|  | text |  | false | false | lastName | Last Name |
| Employee Id | text | 0388 | false | false |  |  |
|  | checkbox | on | false | false |  |  |
- Buttons: Upgrade | Cancel | Save

## Throw-away ESS user
- username: ess_mvds9spkz5  (empNumber 186); disposable, no data

## Landing page after login
- URL: https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index
- Screenshot: screens/landing-page-after-login.png   HTML: html/landing-page-after-login.html
- Headings: Dashboard

| Label | Kind | Value | Disabled | Required | Name attr | Placeholder |
|---|---|---|---|---|---|---|
|  | text |  | false | false |  | Search |

- Side panel links:  | Leave | Time | My Info | Performance | Dashboard | Directory | Claim | Buzz

- After clicking My Info the URL is: https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/186

## Tab - Personal Details
- URL: https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/186
- Screenshot: screens/tab-personal-details.png   HTML: html/tab-personal-details.html
- Tabs: Personal Details | Contact Details | Emergency Contacts | Dependents | Immigration | Job | Salary | Report-to | Qualifications | Memberships
- Headings: PIM | Aglae Gleichnerfke | Personal Details | Custom Fields | Attachments

| Label | Kind | Value | Disabled | Required | Name attr | Placeholder |
|---|---|---|---|---|---|---|
|  | text |  | false | false |  | Search |
|  | text | Aglae | false | false | firstName | First Name |
|  | text |  | false | false | middleName | Middle Name |
|  | text | Gleichnerfke | false | false | lastName | Last Name |
| Employee Id | text | 0388 | true | false |  |  |
| Other Id | text |  | false | false |  |  |
| Driver's License Number | text |  | true | false |  |  |
| License Expiry Date | text |  | false | false |  | yyyy-dd-mm |
| Date of Birth | text |  | true | false |  | yyyy-dd-mm |
| Male | radio | 1 | false | false |  |  |
| Female | radio | 2 | false | false |  |  |
| Test_Field | text |  | false | false |  |  |
|  | checkbox | on | false | false |  |  |
| Nationality | dropdown | -- Select -- | false | false | | |
| Marital Status | dropdown | -- Select -- | false | false | | |
| Blood Type | dropdown | -- Select -- | false | false | | |
- Buttons: Save | Save | Add
- Table columns: File Name | Description | Size | Type | Date Added | Added By | Actions  (rows: 0, "No Records Found")

## Tab - Contact Details
- URL: https://opensource-demo.orangehrmlive.com/web/index.php/pim/contactDetails/empNumber/186
- Screenshot: screens/tab-contact-details.png   HTML: html/tab-contact-details.html
- Tabs: Personal Details | Contact Details | Emergency Contacts | Dependents | Immigration | Job | Salary | Report-to | Qualifications | Memberships
- Headings: PIM | Aglae Gleichnerfke | Contact Details | Address | Telephone | Email | Attachments

| Label | Kind | Value | Disabled | Required | Name attr | Placeholder |
|---|---|---|---|---|---|---|
|  | text |  | false | false |  | Search |
| Street 1 | text |  | false | false |  |  |
| Street 2 | text |  | false | false |  |  |
| City | text |  | false | false |  |  |
| State/Province | text |  | false | false |  |  |
| Zip/Postal Code | text |  | false | false |  |  |
| Home | text |  | false | false |  |  |
| Mobile | text |  | false | false |  |  |
| Work | text |  | false | false |  |  |
| Work Email | text |  | false | false |  |  |
| Other Email | text |  | false | false |  |  |
|  | checkbox | on | false | false |  |  |
| Country | dropdown | -- Select -- | false | false | | |
- Buttons: Save | Add
- Table columns: File Name | Description | Size | Type | Date Added | Added By | Actions  (rows: 0, "No Records Found")

## Tab - Emergency Contacts
- URL: https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmergencyContacts/empNumber/186
- Screenshot: screens/tab-emergency-contacts.png   HTML: html/tab-emergency-contacts.html
- Tabs: Personal Details | Contact Details | Emergency Contacts | Dependents | Immigration | Job | Salary | Report-to | Qualifications | Memberships
- Headings: PIM | Aglae Gleichnerfke | Assigned Emergency Contacts | Attachments

| Label | Kind | Value | Disabled | Required | Name attr | Placeholder |
|---|---|---|---|---|---|---|
|  | text |  | false | false |  | Search |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
- Buttons: Add | Add
- Table columns: Name | Relationship | Home Telephone | Mobile | Work Telephone | Actions | File Name | Description | Size | Type | Date Added | Added By | Actions  (rows: 0, "No Records Found")

## Tab - Dependents
- URL: https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewDependents/empNumber/186
- Screenshot: screens/tab-dependents.png   HTML: html/tab-dependents.html
- Tabs: Personal Details | Contact Details | Emergency Contacts | Dependents | Immigration | Job | Salary | Report-to | Qualifications | Memberships
- Headings: PIM | Aglae Gleichnerfke | Assigned Dependents | Attachments

| Label | Kind | Value | Disabled | Required | Name attr | Placeholder |
|---|---|---|---|---|---|---|
|  | text |  | false | false |  | Search |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
- Buttons: Add | Add
- Table columns: Name | Relationship | Date of Birth | Actions | File Name | Description | Size | Type | Date Added | Added By | Actions  (rows: 0, "No Records Found")

## Tab - Immigration
- URL: https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewImmigration/empNumber/186
- Screenshot: screens/tab-immigration.png   HTML: html/tab-immigration.html
- Tabs: Personal Details | Contact Details | Emergency Contacts | Dependents | Immigration | Job | Salary | Report-to | Qualifications | Memberships
- Headings: PIM | Aglae Gleichnerfke | Assigned Immigration Records | Attachments

| Label | Kind | Value | Disabled | Required | Name attr | Placeholder |
|---|---|---|---|---|---|---|
|  | text |  | false | false |  | Search |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
- Buttons: Add | Add
- Table columns: Document | Number | Issued By | Issued Date | Expiry Date | Actions | File Name | Description | Size | Type | Date Added | Added By | Actions  (rows: 0, "No Records Found")

## Tab - Job
- URL: https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewJobDetails/empNumber/186
- Screenshot: screens/tab-job.png   HTML: html/tab-job.html
- Tabs: Personal Details | Contact Details | Emergency Contacts | Dependents | Immigration | Job | Salary | Report-to | Qualifications | Memberships
- Headings: PIM | Aglae Gleichnerfke | Job Details | Attachments

| Label | Kind | Value | Disabled | Required | Name attr | Placeholder |
|---|---|---|---|---|---|---|
|  | text |  | false | false |  | Search |
| Joined Date | text |  | true | false |  | yyyy-dd-mm |
|  | checkbox | on | false | false |  |  |
| Job Title | dropdown | -- Select -- | true | false | | |
| Job Category | dropdown | -- Select -- | true | false | | |
| Sub Unit | dropdown | -- Select -- | true | false | | |
| Location | dropdown | -- Select -- | true | false | | |
| Employment Status | dropdown | -- Select -- | true | false | | |
- Table columns: File Name | Description | Size | Type | Date Added | Added By | Actions  (rows: 0, "No Records Found")

## Tab - Salary
- URL: https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewSalaryList/empNumber/186
- Screenshot: screens/tab-salary.png   HTML: html/tab-salary.html
- Tabs: Personal Details | Contact Details | Emergency Contacts | Dependents | Immigration | Job | Salary | Report-to | Qualifications | Memberships
- Headings: PIM | Aglae Gleichnerfke | Assigned Salary Components | Attachments

| Label | Kind | Value | Disabled | Required | Name attr | Placeholder |
|---|---|---|---|---|---|---|
|  | text |  | false | false |  | Search |
- Table columns: Salary Component | Amount | Currency | Pay Frequency | Direct Deposit Amount | File Name | Description | Size | Type | Date Added | Added By | Actions  (rows: 0, "No Records Found")

## Tab - Report-to
- URL: https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewReportToDetails/empNumber/186
- Screenshot: screens/tab-report-to.png   HTML: html/tab-report-to.html
- Tabs: Personal Details | Contact Details | Emergency Contacts | Dependents | Immigration | Job | Salary | Report-to | Qualifications | Memberships
- Headings: PIM | Aglae Gleichnerfke | Report to | Assigned Supervisors | Assigned Subordinates | Attachments

| Label | Kind | Value | Disabled | Required | Name attr | Placeholder |
|---|---|---|---|---|---|---|
|  | text |  | false | false |  | Search |
- Table columns: Name | Reporting Method | Name | Reporting Method | File Name | Description | Size | Type | Date Added | Added By | Actions  (rows: 0, "No Records Found")

## Tab - Qualifications
- URL: https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewQualifications/empNumber/186
- Screenshot: screens/tab-qualifications.png   HTML: html/tab-qualifications.html
- Tabs: Personal Details | Contact Details | Emergency Contacts | Dependents | Immigration | Job | Salary | Report-to | Qualifications | Memberships
- Headings: PIM | Aglae Gleichnerfke | Qualifications | Work Experience | Education | Skills | Languages | License | Attachments

| Label | Kind | Value | Disabled | Required | Name attr | Placeholder |
|---|---|---|---|---|---|---|
|  | text |  | false | false |  | Search |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
- Buttons: Add | Add | Add | Add | Add | Add
- Table columns: Company | Job Title | From | To | Comment | Actions | Level | Year | GPA/Score | Actions | Skill | Years of Experience | Actions | Language | Fluency | Competency | Comments | Actions | License Type | Issued Date | Expiry Date | Actions | File Name | Description | Size | Type | Date Added | Added By | Actions  (rows: 0, "No Records Found")

## Tab - Memberships
- URL: https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewMemberships/empNumber/186
- Screenshot: screens/tab-memberships.png   HTML: html/tab-memberships.html
- Tabs: Personal Details | Contact Details | Emergency Contacts | Dependents | Immigration | Job | Salary | Report-to | Qualifications | Memberships
- Headings: PIM | Aglae Gleichnerfke | Assigned Memberships | Attachments

| Label | Kind | Value | Disabled | Required | Name attr | Placeholder |
|---|---|---|---|---|---|---|
|  | text |  | false | false |  | Search |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
- Buttons: Add | Add
- Table columns: Membership | Subscription Paid By | Subscription Amount | Currency | Subscription Commence Date | Subscription Renewal Date | Actions | File Name | Description | Size | Type | Date Added | Added By | Actions  (rows: 0, "No Records Found")

- Personal Details > Nationality options: -- Select -- | Afghan | Albanian | Algerian | American | Andorran | Angolan | Antiguans | Argentinean | Armenian | Australian | Austrian | Azerbaijani | Bahamian | Bahraini | Bangladeshi | Barbadian | Barbudans | Batswana | Belarusian | Belgian | Belizean | Beninese | Bhutanese | Bolivian | Bosnian | Brazilian | British | Bruneian | Bulgarian | Burkinabe | Burmese | Burundian | Cambodian | Cameroonian | Canadian | Cape Verdean | Central African | Chadian | Chilean | Chinese | Colombian | Comoran | Congolese | Costa Rican | Croatian | Cuban | Cypriot | Czech | Danish | Djibouti | Dominican | Dutch | East Timorese | Ecuadorean | Egyptian | Emirian | Equatorial Guinean | Eritrean | Estonian | Ethiopian | Fijian | Filipino | Finnish | French | Gabonese | Gambian | Georgian | German | Ghanaian | Greek | Grenadian | Guatemalan | Guinea-Bissauan | Guinean | Guyanese | Haitian | Herzegovinian | Honduran | Hungarian | I-Kiribati | Icelander | Indian | Indonesian | Iranian | Iraqi | Irish | Israeli | Italian | Ivorian | Jamaican | Japanese | Jordanian | Kazakhstani | Kenyan | Kittian and Nevisian | Kuwaiti | Kyrgyz | Laotian | Latvian | Lebanese | Liberian | Libyan | Liechtensteiner | Lithuanian | Luxembourger | Macedonian | Malagasy | Malawian | Malaysian | Maldivan | Malian | Maltese | Marshallese | Mauritanian | Mauritian | Mexican | Micronesian | Moldovan | Monacan | Mongolian | Moroccan | Mosotho | Motswana | Mozambican | Namibian | Nauruan | Nepalese | New Zealander | Nicaraguan | Nigerian | Nigerien | North Korean | Northern Irish | Norwegian | Omani | Pakistani | Palauan | Panamanian | Papua New Guinean | Paraguayan | Peruvian | Polish | Portuguese | Qatari | Romanian | Russian | Rwandan | Saint Lucian | Salvadoran | Samoan | San Marinese | Sao Tomean | Saudi | Scottish | Senegalese | Serbian | Seychellois | Sierra Leonean | Singaporean | Slovakian | Slovenian | Solomon Islander | Somali | South African | South Korean | Spanish | Sri Lankan | Sudanese | Surinamer | Swazi | Swedish | Swiss | Syrian | Taiwanese | Tajik | Tanzanian | Thai | Togolese | Tongan | Trinidadian or Tobagonian | Tunisian | Turkish | Tuvaluan | Ugandan | Ukrainian | Uruguayan | Uzbekistani | Venezuelan | Vietnamese | Welsh | Yemenite | Zambian | Zimbabwean
- Personal Details > Marital Status options: -- Select -- | Single | Married | Other
- Personal Details > Blood Type options: -- Select -- | A+ | A- | B+ | B- | O+ | O- | AB+ | AB-

## Personal Details - invalid date typed
Typed "abc" in License Expiry Date (not saved).
- URL: https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/186
- Screenshot: screens/personal-details-invalid-date-typed.png   HTML: html/personal-details-invalid-date-typed.html
- Tabs: Personal Details | Contact Details | Emergency Contacts | Dependents | Immigration | Job | Salary | Report-to | Qualifications | Memberships
- Headings: PIM | Aglae Gleichnerfke | Personal Details | Custom Fields | Attachments

| Label | Kind | Value | Disabled | Required | Name attr | Placeholder |
|---|---|---|---|---|---|---|
|  | text |  | false | false |  | Search |
|  | text | Aglae | false | false | firstName | First Name |
|  | text |  | false | false | middleName | Middle Name |
|  | text | Gleichnerfke | false | false | lastName | Last Name |
| Employee Id | text | 0388 | true | false |  |  |
| Other Id | text |  | false | false |  |  |
| Driver's License Number | text |  | true | false |  |  |
| License Expiry Date | text | abc | false | false |  | yyyy-dd-mm |
| Date of Birth | text |  | true | false |  | yyyy-dd-mm |
| Male | radio | 1 | false | false |  |  |
| Female | radio | 2 | false | false |  |  |
| Test_Field | text |  | false | false |  |  |
|  | checkbox | on | false | false |  |  |
| Nationality | dropdown | -- Select -- | false | false | | |
| Marital Status | dropdown | -- Select -- | false | false | | |
| Blood Type | dropdown | -- Select -- | false | false | | |
- Buttons: Save | Save | Add
- Table columns: File Name | Description | Size | Type | Date Added | Added By | Actions  (rows: 0, "No Records Found")
- Validation messages: Should be a valid date in yyyy-dd-mm format

## Personal Details - empty first name
First Name cleared and Save clicked (blocked by validation, nothing saved).
- URL: https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/186
- Screenshot: screens/personal-details-empty-first-name.png   HTML: html/personal-details-empty-first-name.html
- Tabs: Personal Details | Contact Details | Emergency Contacts | Dependents | Immigration | Job | Salary | Report-to | Qualifications | Memberships
- Headings: PIM | Aglae Gleichnerfke | Personal Details | Custom Fields | Attachments

| Label | Kind | Value | Disabled | Required | Name attr | Placeholder |
|---|---|---|---|---|---|---|
|  | text |  | false | false |  | Search |
|  | text |  | false | false | firstName | First Name |
|  | text |  | false | false | middleName | Middle Name |
|  | text | Gleichnerfke | false | false | lastName | Last Name |
| Employee Id | text | 0388 | true | false |  |  |
| Other Id | text |  | false | false |  |  |
| Driver's License Number | text |  | true | false |  |  |
| License Expiry Date | text |  | false | false |  | yyyy-dd-mm |
| Date of Birth | text |  | true | false |  | yyyy-dd-mm |
| Male | radio | 1 | false | false |  |  |
| Female | radio | 2 | false | false |  |  |
| Test_Field | text |  | false | false |  |  |
|  | checkbox | on | false | false |  |  |
| Nationality | dropdown | -- Select -- | false | false | | |
| Marital Status | dropdown | -- Select -- | false | false | | |
| Blood Type | dropdown | -- Select -- | false | false | | |
- Buttons: Save | Save | Add
- Table columns: File Name | Description | Size | Type | Date Added | Added By | Actions  (rows: 0, "No Records Found")
- Validation messages: Required

## Personal Details - saved unchanged
Saved with unchanged values to read the success toast.
- URL: https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/186
- Screenshot: screens/personal-details-saved-unchanged.png   HTML: html/personal-details-saved-unchanged.html
- Tabs: Personal Details | Contact Details | Emergency Contacts | Dependents | Immigration | Job | Salary | Report-to | Qualifications | Memberships
- Headings: PIM | Aglae Gleichnerfke | Personal Details | Custom Fields | Attachments

| Label | Kind | Value | Disabled | Required | Name attr | Placeholder |
|---|---|---|---|---|---|---|
|  | text |  | false | false |  | Search |
|  | text | Aglae | false | false | firstName | First Name |
|  | text |  | false | false | middleName | Middle Name |
|  | text | Gleichnerfke | false | false | lastName | Last Name |
| Employee Id | text | 0388 | true | false |  |  |
| Other Id | text |  | false | false |  |  |
| Driver's License Number | text |  | true | false |  |  |
| License Expiry Date | text |  | false | false |  | yyyy-dd-mm |
| Date of Birth | text |  | true | false |  | yyyy-dd-mm |
| Male | radio | 1 | false | false |  |  |
| Female | radio | 2 | false | false |  |  |
| Test_Field | text |  | false | false |  |  |
|  | checkbox | on | false | false |  |  |
| Nationality | dropdown | -- Select -- | false | false | | |
| Marital Status | dropdown | -- Select -- | false | false | | |
| Blood Type | dropdown | -- Select -- | false | false | | |
- Buttons: Save | Save | Add
- Table columns: File Name | Description | Size | Type | Date Added | Added By | Actions  (rows: 0, "No Records Found")

## Add form - Emergency Contacts
- URL: https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmergencyContacts/empNumber/186
- Screenshot: screens/add-form-emergency-contacts.png   HTML: html/add-form-emergency-contacts.html
- Tabs: Personal Details | Contact Details | Emergency Contacts | Dependents | Immigration | Job | Salary | Report-to | Qualifications | Memberships
- Headings: PIM | Aglae Gleichnerfke | Save Emergency Contact | Assigned Emergency Contacts | Attachments

| Label | Kind | Value | Disabled | Required | Name attr | Placeholder |
|---|---|---|---|---|---|---|
|  | text |  | false | false |  | Search |
| Name | text |  | false | true |  |  |
| Relationship | text |  | false | true |  |  |
| Home Telephone | text |  | false | false |  |  |
| Mobile | text |  | false | false |  |  |
| Work Telephone | text |  | false | false |  |  |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
- Buttons: Cancel | Save | Add | Add
- Table columns: Name | Relationship | Home Telephone | Mobile | Work Telephone | Actions | File Name | Description | Size | Type | Date Added | Added By | Actions  (rows: 0, "No Records Found")

## Add form - Emergency Contacts - empty Save
Empty form saved: expecting "Required" messages only.
- URL: https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmergencyContacts/empNumber/186
- Screenshot: screens/add-form-emergency-contacts-empty-save.png   HTML: html/add-form-emergency-contacts-empty-save.html
- Tabs: Personal Details | Contact Details | Emergency Contacts | Dependents | Immigration | Job | Salary | Report-to | Qualifications | Memberships
- Headings: PIM | Aglae Gleichnerfke | Save Emergency Contact | Assigned Emergency Contacts | Attachments

| Label | Kind | Value | Disabled | Required | Name attr | Placeholder |
|---|---|---|---|---|---|---|
|  | text |  | false | false |  | Search |
| Name | text |  | false | true |  |  |
| Relationship | text |  | false | true |  |  |
| Home Telephone | text |  | false | false |  |  |
| Mobile | text |  | false | false |  |  |
| Work Telephone | text |  | false | false |  |  |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
- Buttons: Cancel | Save | Add | Add
- Table columns: Name | Relationship | Home Telephone | Mobile | Work Telephone | Actions | File Name | Description | Size | Type | Date Added | Added By | Actions  (rows: 0, "No Records Found")
- Validation messages: Required | Required | At least one phone number is required

## Add form - Dependents
- URL: https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewDependents/empNumber/186
- Screenshot: screens/add-form-dependents.png   HTML: html/add-form-dependents.html
- Tabs: Personal Details | Contact Details | Emergency Contacts | Dependents | Immigration | Job | Salary | Report-to | Qualifications | Memberships
- Headings: PIM | Aglae Gleichnerfke | Add Dependent | Assigned Dependents | Attachments

| Label | Kind | Value | Disabled | Required | Name attr | Placeholder |
|---|---|---|---|---|---|---|
|  | text |  | false | false |  | Search |
| Name | text |  | false | true |  |  |
| Date of Birth | text |  | false | false |  | yyyy-dd-mm |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
| Relationship | dropdown | -- Select -- | false | true | | |
- Buttons: Cancel | Save | Add | Add
- Table columns: Name | Relationship | Date of Birth | Actions | File Name | Description | Size | Type | Date Added | Added By | Actions  (rows: 0, "No Records Found")

- Dependents > Relationship options: -- Select -- | Child | Other
## Add form - Dependents - empty Save
Empty form saved: expecting "Required" messages only.
- URL: https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewDependents/empNumber/186
- Screenshot: screens/add-form-dependents-empty-save.png   HTML: html/add-form-dependents-empty-save.html
- Tabs: Personal Details | Contact Details | Emergency Contacts | Dependents | Immigration | Job | Salary | Report-to | Qualifications | Memberships
- Headings: PIM | Aglae Gleichnerfke | Add Dependent | Assigned Dependents | Attachments

| Label | Kind | Value | Disabled | Required | Name attr | Placeholder |
|---|---|---|---|---|---|---|
|  | text |  | false | false |  | Search |
| Name | text |  | false | true |  |  |
| Date of Birth | text |  | false | false |  | yyyy-dd-mm |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
| Relationship | dropdown | -- Select -- | false | true | | |
- Buttons: Cancel | Save | Add | Add
- Table columns: Name | Relationship | Date of Birth | Actions | File Name | Description | Size | Type | Date Added | Added By | Actions  (rows: 0, "No Records Found")
- Validation messages: Required | Required

## Add form - Immigration
- URL: https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewImmigration/empNumber/186
- Screenshot: screens/add-form-immigration.png   HTML: html/add-form-immigration.html
- Tabs: Personal Details | Contact Details | Emergency Contacts | Dependents | Immigration | Job | Salary | Report-to | Qualifications | Memberships
- Headings: PIM | Aglae Gleichnerfke | Add Immigration | Assigned Immigration Records | Attachments

| Label | Kind | Value | Disabled | Required | Name attr | Placeholder |
|---|---|---|---|---|---|---|
|  | text |  | false | false |  | Search |
| Passport | radio | 1 | false | false |  |  |
| Visa | radio | 2 | false | false |  |  |
| Number | text |  | false | true |  |  |
| Issued Date | text |  | false | false |  | yyyy-dd-mm |
| Expiry Date | text |  | false | false |  | yyyy-dd-mm |
| Eligible Status | text |  | false | false |  |  |
| Eligible Review Date | text |  | false | false |  | yyyy-dd-mm |
| Comments | textarea |  | false | false |  | Type Comments here |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
| Issued By | dropdown | -- Select -- | false | false | | |
- Buttons: Cancel | Save | Add | Add
- Table columns: Document | Number | Issued By | Issued Date | Expiry Date | Actions | File Name | Description | Size | Type | Date Added | Added By | Actions  (rows: 0, "No Records Found")

- Immigration > Issued By options: -- Select -- | Afghanistan | Albania | Algeria | American Samoa | Andorra | Angola | Anguilla | Antarctica | Antigua and Barbuda | Argentina | Armenia | Aruba | Australia | Austria | Azerbaijan | Bahamas | Bahrain | Bangladesh | Barbados | Belarus | Belgium | Belize | Benin | Bermuda | Bhutan | Bolivia | Bosnia and Herzegovina | Botswana | Bouvet Island | Brazil | British Indian Ocean Territory | Brunei Darussalam | Bulgaria | Burkina Faso | Burundi | Cambodia | Cameroon | Canada | Cape Verde | Cayman Islands | Central African Republic | Chad | Chile | China | Christmas Island | Cocos (Keeling) Islands | Colombia | Comoros | Congo | Congo, the Democratic Republic of the | Cook Islands | Costa Rica | Cote D'Ivoire | Croatia | Cuba | Cyprus | Czech Republic | Denmark | Djibouti | Dominica | Dominican Republic | Ecuador | Egypt | El Salvador | Equatorial Guinea | Eritrea | Estonia | Ethiopia | Falkland Islands (Malvinas) | Faroe Islands | Fiji | Finland | France | French Guiana | French Polynesia | French Southern Territories | Gabon | Gambia | Georgia | Germany | Ghana | Gibraltar | Greece | Greenland | Grenada | Guadeloupe | Guam | Guatemala | Guinea | Guinea-Bissau | Guyana | Haiti | Heard Island and Mcdonald Islands | Holy See (Vatican City State) | Honduras | Hong Kong | Hungary | Iceland | India | Indonesia | Iran, Islamic Republic of | Iraq | Ireland | Israel | Italy | Jamaica | Japan | Jordan | Kazakhstan | Kenya | Kiribati | Korea, Democratic People's Republic of | Korea, Republic of | Kuwait | Kyrgyzstan | Lao People's Democratic Republic | Latvia | Lebanon | Lesotho | Liberia | Libyan Arab Jamahiriya | Liechtenstein | Lithuania | Luxembourg | Macao | Macedonia, the Former Yugoslav Republic of | Madagascar | Malawi | Malaysia | Maldives | Mali | Malta | Marshall Islands | Martinique | Mauritania | Mauritius | Mayotte | Mexico | Micronesia, Federated States of | Moldova, Republic of | Monaco | Mongolia | Montserrat | Morocco | Mozambique | Myanmar | Namibia | Nauru | Nepal | Netherlands | Netherlands Antilles | New Caledonia | New Zealand | Nicaragua | Niger | Nigeria | Niue | Norfolk Island | Northern Mariana Islands | Norway | Oman | Pakistan | Palau | Palestinian Territory, Occupied | Panama | Papua New Guinea | Paraguay | Peru | Philippines | Pitcairn | Poland | Portugal | Puerto Rico | Qatar | Reunion | Romania | Russian Federation | Rwanda | Saint Helena | Saint Kitts and Nevis | Saint Lucia | Saint Pierre and Miquelon | Saint Vincent and the Grenadines | Samoa | San Marino | Sao Tome and Principe | Saudi Arabia | Senegal | Serbia and Montenegro | Seychelles | Sierra Leone | Singapore | Slovakia | Slovenia | Solomon Islands | Somalia | South Africa | South Georgia and the South Sandwich Islands | Spain | Sri Lanka | Sudan | Suriname | Svalbard and Jan Mayen | Swaziland | Sweden | Switzerland | Syrian Arab Republic | Taiwan | Tajikistan | Tanzania, United Republic of | Thailand | Timor-Leste | Togo | Tokelau | Tonga | Trinidad and Tobago | Tunisia | Turkey | Turkmenistan | Turks and Caicos Islands | Tuvalu | Uganda | Ukraine | United Arab Emirates | United Kingdom | United States | United States Minor Outlying Islands | Uruguay | Uzbekistan | Vanuatu | Venezuela | Viet Nam | Virgin Islands, British | Virgin Islands, U.s. | Wallis and Futuna | Western Sahara | Yemen | Zambia | Zimbabwe
## Add form - Immigration - Expiry Date before Issued Date
Date order probe (nothing saved).
- URL: https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewImmigration/empNumber/186
- Screenshot: screens/add-form-immigration-expiry-date-before-issued-date.png   HTML: html/add-form-immigration-expiry-date-before-issued-date.html
- Tabs: Personal Details | Contact Details | Emergency Contacts | Dependents | Immigration | Job | Salary | Report-to | Qualifications | Memberships
- Headings: PIM | Aglae Gleichnerfke | Add Immigration | Assigned Immigration Records | Attachments

| Label | Kind | Value | Disabled | Required | Name attr | Placeholder |
|---|---|---|---|---|---|---|
|  | text |  | false | false |  | Search |
| Passport | radio | 1 | false | false |  |  |
| Visa | radio | 2 | false | false |  |  |
| Number | text |  | false | true |  |  |
| Issued Date | text | 2030-10-10 | false | false |  | yyyy-dd-mm |
| Expiry Date | text | 2020-10-10 | false | false |  | yyyy-dd-mm |
| Eligible Status | text |  | false | false |  |  |
| Eligible Review Date | text |  | false | false |  | yyyy-dd-mm |
| Comments | textarea |  | false | false |  | Type Comments here |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
| Issued By | dropdown | -- Select -- | false | false | | |
- Buttons: Cancel | Save | Add | Add
- Table columns: Document | Number | Issued By | Issued Date | Expiry Date | Actions | File Name | Description | Size | Type | Date Added | Added By | Actions  (rows: 0, "No Records Found")
- Validation messages: Expiry date should be after issued date

## Add form - Immigration - empty Save
Empty form saved: expecting "Required" messages only.
- URL: https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewImmigration/empNumber/186
- Screenshot: screens/add-form-immigration-empty-save.png   HTML: html/add-form-immigration-empty-save.html
- Tabs: Personal Details | Contact Details | Emergency Contacts | Dependents | Immigration | Job | Salary | Report-to | Qualifications | Memberships
- Headings: PIM | Aglae Gleichnerfke | Add Immigration | Assigned Immigration Records | Attachments

| Label | Kind | Value | Disabled | Required | Name attr | Placeholder |
|---|---|---|---|---|---|---|
|  | text |  | false | false |  | Search |
| Passport | radio | 1 | false | false |  |  |
| Visa | radio | 2 | false | false |  |  |
| Number | text |  | false | true |  |  |
| Issued Date | text |  | false | false |  | yyyy-dd-mm |
| Expiry Date | text |  | false | false |  | yyyy-dd-mm |
| Eligible Status | text |  | false | false |  |  |
| Eligible Review Date | text |  | false | false |  | yyyy-dd-mm |
| Comments | textarea |  | false | false |  | Type Comments here |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
| Issued By | dropdown | -- Select -- | false | false | | |
- Buttons: Cancel | Save | Add | Add
- Table columns: Document | Number | Issued By | Issued Date | Expiry Date | Actions | File Name | Description | Size | Type | Date Added | Added By | Actions  (rows: 0, "No Records Found")

## Add form - Memberships
- URL: https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewMemberships/empNumber/186
- Screenshot: screens/add-form-memberships.png   HTML: html/add-form-memberships.html
- Tabs: Personal Details | Contact Details | Emergency Contacts | Dependents | Immigration | Job | Salary | Report-to | Qualifications | Memberships
- Headings: PIM | Aglae Gleichnerfke | Add Membership | Assigned Memberships | Attachments

| Label | Kind | Value | Disabled | Required | Name attr | Placeholder |
|---|---|---|---|---|---|---|
|  | text |  | false | false |  | Search |
| Subscription Amount | text |  | false | false |  |  |
| Subscription Commence Date | text |  | false | false |  | yyyy-dd-mm |
| Subscription Renewal Date | text |  | false | false |  | yyyy-dd-mm |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
| Membership | dropdown | -- Select -- | false | true | | |
| Subscription Paid By | dropdown | -- Select -- | false | false | | |
| Currency | dropdown | -- Select -- | false | false | | |
- Buttons: Cancel | Save | Add | Add
- Table columns: Membership | Subscription Paid By | Subscription Amount | Currency | Subscription Commence Date | Subscription Renewal Date | Actions | File Name | Description | Size | Type | Date Added | Added By | Actions  (rows: 0, "No Records Found")

- Memberships > Membership options: -- Select -- | ACCA | British Computer Society (BCS) | Chartered Institute of Marketing (CIM) | CIMA
- Memberships > Subscription Paid By options: -- Select -- | Company | Individual
- Memberships > Currency options: -- Select -- | Afghanistan Afghani | Albanian Lek | Algerian Dinar | Angolan New Kwanza | Argentina Pesos | Argentine Peso | Aruban Florin | Australian Dollar | Bahamian Dollar | Bahraini Dinar | Bangladeshi Taka | Barbados Dollar | Belize Dollar | Bermudian Dollar | Bhutan Ngultrum | Bolivian Boliviano | Botswana Pula | Brazilian Real | Brunei Dollar | Bulgarian Lev | Burundi Franc | Canadian Dollar | Cape Verde Escudo | Cayman Islands Dollar | CFA Franc BCEAO | CFA Franc BEAC | CFP Franc | Chilean Peso | Chinese Yuan Renminbi | Colombian Peso | Comoros Franc | Costa Rican Colon | Croatian Kuna | Cuban Peso | Cyprus Pound | Czech Koruna | Danish Krona | Djibouti Franc | Dominican Peso | Eastern Caribbean Dollars | Ecuador Sucre | Egyptian Pound | El Salvador Colon | Estonian Krona | Ethiopian Birr | Euro | Falkland Islands Pound | Fiji Dollar | Gambian Dalasi | Ghanaian Cedi | Gibraltar Pound | Gold (oz.) | Guatemalan Quetzal | Guinea Franc | Guyanan Dollar | Haitian Gourde | Honduran Lempira | Hong Kong Dollar | Hungarian Forint | Iceland Krona | IMF Special Drawing Right | Indian Rupee | Indonesian Rupiah | Iranian Rial | Iraqi Dinar | Israeli New Shekel | Jamaican Dollar | Japanese Yen | Jordanian Dinar | Kampuchean Riel | Kazakhstan Tenge | Kenyan Shilling | Korean Won | Kuwaiti Dinar | Lao Kip | Latvian Lats | Lebanese Pound | Lesotho Loti | Liberian Dollar | Libyan Dinar | Lithuanian Litas | Macau Pataca | Malagasy Franc | Malawi Kwacha | Malaysian Ringgit | Maldive Rufiyaa | Maltese Lira | Mauritanian Ouguiya | Mauritius Rupee | Mexican New Peso | Mexican Peso | Mongolian Tugrik | Moroccan Dirham | Mozambique Metical | Myanmar Kyat | Namibia Dollar | Nepalese Rupee | New Zaire | New Zealand Dollar | Nicaraguan Cordoba Oro | Nigerian Naira | NL Antillian Guilder | North Korean Won | Norwegian Krona | Omani Rial | Pakistan Rupee | Palladium (oz.) | Panamanian Balboa | Papua New Guinea Kina | Paraguay Guarani | Peruvian Nuevo Sol | Philippine Peso | Platinum (oz.) | Polish Zloty | Pound Sterling | Qatari Rial | Romanian Leu | Russia Rubles | Russian Rouble | Samoan Tala | Sao Tome/Principe Dobra | Saudi Arabia Riyal | Seychelles Rupee | Sierra Leone Leone | Silver (oz.) | Singapore Dollar | Slovak Koruna | Solomon Islands Dollar | Somali Shilling | South African Rand | Sri Lanka Rupee | St. Helena Pound | Sudanese Dinar | Sudanese Pound | Surinamese Dollar | Swaziland Lilangeni | Swedish Krona | Swiss Franc | Syrian Pound | Taiwan Dollar | Tanzanian Shilling | Thai Baht | Tongan Pa'anga | Trinidad/Tobago Dollar | Tunisian Dinar | Turkish Lira | Uganda Shilling | Ukraine Hryvnia | United States Dollar | Uruguayan Peso | Utd. Arab Emir. Dirham | Vanuatu Vatu | Venezuelan Bolivar | Vietnamese Dong | Yemeni Riyal | Yugoslav Dinar | Yugoslavian Dinar | Zambian Kwacha | Zimbabwe Dollar
## Add form - Memberships - Subscription Renewal Date before Subscription Commence Date
Date order probe (nothing saved).
- URL: https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewMemberships/empNumber/186
- Screenshot: screens/add-form-memberships-subscription-renewal-date-before-subscription-commence-date.png   HTML: html/add-form-memberships-subscription-renewal-date-before-subscription-commence-date.html
- Tabs: Personal Details | Contact Details | Emergency Contacts | Dependents | Immigration | Job | Salary | Report-to | Qualifications | Memberships
- Headings: PIM | Aglae Gleichnerfke | Add Membership | Assigned Memberships | Attachments

| Label | Kind | Value | Disabled | Required | Name attr | Placeholder |
|---|---|---|---|---|---|---|
|  | text |  | false | false |  | Search |
| Subscription Amount | text |  | false | false |  |  |
| Subscription Commence Date | text | 2030-10-10 | false | false |  | yyyy-dd-mm |
| Subscription Renewal Date | text | 2020-10-10 | false | false |  | yyyy-dd-mm |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
| Membership | dropdown | -- Select -- | false | true | | |
| Subscription Paid By | dropdown | -- Select -- | false | false | | |
| Currency | dropdown | -- Select -- | false | false | | |
- Buttons: Cancel | Save | Add | Add
- Table columns: Membership | Subscription Paid By | Subscription Amount | Currency | Subscription Commence Date | Subscription Renewal Date | Actions | File Name | Description | Size | Type | Date Added | Added By | Actions  (rows: 0, "No Records Found")
- Validation messages: Renewal date should be after the commencing date

## Add form - Memberships - empty Save
Empty form saved: expecting "Required" messages only.
- URL: https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewMemberships/empNumber/186
- Screenshot: screens/add-form-memberships-empty-save.png   HTML: html/add-form-memberships-empty-save.html
- Tabs: Personal Details | Contact Details | Emergency Contacts | Dependents | Immigration | Job | Salary | Report-to | Qualifications | Memberships
- Headings: PIM | Aglae Gleichnerfke | Add Membership | Assigned Memberships | Attachments

| Label | Kind | Value | Disabled | Required | Name attr | Placeholder |
|---|---|---|---|---|---|---|
|  | text |  | false | false |  | Search |
| Subscription Amount | text |  | false | false |  |  |
| Subscription Commence Date | text |  | false | false |  | yyyy-dd-mm |
| Subscription Renewal Date | text |  | false | false |  | yyyy-dd-mm |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
| Membership | dropdown | -- Select -- | false | true | | |
| Subscription Paid By | dropdown | -- Select -- | false | false | | |
| Currency | dropdown | -- Select -- | false | false | | |
- Buttons: Cancel | Save | Add | Add
- Table columns: Membership | Subscription Paid By | Subscription Amount | Currency | Subscription Commence Date | Subscription Renewal Date | Actions | File Name | Description | Size | Type | Date Added | Added By | Actions  (rows: 0, "No Records Found")

## Add form - Qualifications - Work Experience
- URL: https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewQualifications/empNumber/186
- Screenshot: screens/add-form-qualifications-work-experience.png   HTML: html/add-form-qualifications-work-experience.html
- Tabs: Personal Details | Contact Details | Emergency Contacts | Dependents | Immigration | Job | Salary | Report-to | Qualifications | Memberships
- Headings: PIM | Aglae Gleichnerfke | Qualifications | Add Work Experience | Work Experience | Education | Skills | Languages | License | Attachments

| Label | Kind | Value | Disabled | Required | Name attr | Placeholder |
|---|---|---|---|---|---|---|
|  | text |  | false | false |  | Search |
| Company | text |  | false | true |  |  |
| Job Title | text |  | false | true |  |  |
| From | text |  | false | false |  | yyyy-dd-mm |
| To | text |  | false | false |  | yyyy-dd-mm |
| Comment | textarea |  | false | false |  |  |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
- Buttons: Cancel | Save | Add | Add | Add | Add | Add | Add
- Table columns: Company | Job Title | From | To | Comment | Actions | Level | Year | GPA/Score | Actions | Skill | Years of Experience | Actions | Language | Fluency | Competency | Comments | Actions | License Type | Issued Date | Expiry Date | Actions | File Name | Description | Size | Type | Date Added | Added By | Actions  (rows: 0, "No Records Found")

## Add form - Qualifications - Work Experience - To before From
Date order probe (nothing saved).
- URL: https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewQualifications/empNumber/186
- Screenshot: screens/add-form-qualifications-work-experience-to-before-from.png   HTML: html/add-form-qualifications-work-experience-to-before-from.html
- Tabs: Personal Details | Contact Details | Emergency Contacts | Dependents | Immigration | Job | Salary | Report-to | Qualifications | Memberships
- Headings: PIM | Aglae Gleichnerfke | Qualifications | Add Work Experience | Work Experience | Education | Skills | Languages | License | Attachments

| Label | Kind | Value | Disabled | Required | Name attr | Placeholder |
|---|---|---|---|---|---|---|
|  | text |  | false | false |  | Search |
| Company | text |  | false | true |  |  |
| Job Title | text |  | false | true |  |  |
| From | text | 2030-10-10 | false | false |  | yyyy-dd-mm |
| To | text | 2020-10-10 | false | false |  | yyyy-dd-mm |
| Comment | textarea |  | false | false |  |  |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
- Buttons: Cancel | Save | Add | Add | Add | Add | Add | Add
- Table columns: Company | Job Title | From | To | Comment | Actions | Level | Year | GPA/Score | Actions | Skill | Years of Experience | Actions | Language | Fluency | Competency | Comments | Actions | License Type | Issued Date | Expiry Date | Actions | File Name | Description | Size | Type | Date Added | Added By | Actions  (rows: 0, "No Records Found")
- Validation messages: To date should be after from date

## Add form - Qualifications - Work Experience - empty Save
Empty form saved: expecting "Required" messages only.
- URL: https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewQualifications/empNumber/186
- Screenshot: screens/add-form-qualifications-work-experience-empty-save.png   HTML: html/add-form-qualifications-work-experience-empty-save.html
- Tabs: Personal Details | Contact Details | Emergency Contacts | Dependents | Immigration | Job | Salary | Report-to | Qualifications | Memberships
- Headings: PIM | Aglae Gleichnerfke | Qualifications | Add Work Experience | Work Experience | Education | Skills | Languages | License | Attachments

| Label | Kind | Value | Disabled | Required | Name attr | Placeholder |
|---|---|---|---|---|---|---|
|  | text |  | false | false |  | Search |
| Company | text |  | false | true |  |  |
| Job Title | text |  | false | true |  |  |
| From | text |  | false | false |  | yyyy-dd-mm |
| To | text |  | false | false |  | yyyy-dd-mm |
| Comment | textarea |  | false | false |  |  |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
- Buttons: Cancel | Save | Add | Add | Add | Add | Add | Add
- Table columns: Company | Job Title | From | To | Comment | Actions | Level | Year | GPA/Score | Actions | Skill | Years of Experience | Actions | Language | Fluency | Competency | Comments | Actions | License Type | Issued Date | Expiry Date | Actions | File Name | Description | Size | Type | Date Added | Added By | Actions  (rows: 0, "No Records Found")

## Add form - Qualifications - Education
- URL: https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewQualifications/empNumber/186
- Screenshot: screens/add-form-qualifications-education.png   HTML: html/add-form-qualifications-education.html
- Tabs: Personal Details | Contact Details | Emergency Contacts | Dependents | Immigration | Job | Salary | Report-to | Qualifications | Memberships
- Headings: PIM | Aglae Gleichnerfke | Qualifications | Work Experience | Add Education | Education | Skills | Languages | License | Attachments

| Label | Kind | Value | Disabled | Required | Name attr | Placeholder |
|---|---|---|---|---|---|---|
|  | text |  | false | false |  | Search |
|  | checkbox | on | false | false |  |  |
| Institute | text |  | false | false |  |  |
| Major/Specialization | text |  | false | false |  |  |
| Year | text |  | false | false |  |  |
| GPA/Score | text |  | false | false |  |  |
| Start Date | text |  | false | false |  | yyyy-dd-mm |
| End Date | text |  | false | false |  | yyyy-dd-mm |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
| Level | dropdown | -- Select -- | false | true | | |
- Buttons: Add | Cancel | Save | Add | Add | Add | Add | Add
- Table columns: Company | Job Title | From | To | Comment | Actions | Level | Year | GPA/Score | Actions | Skill | Years of Experience | Actions | Language | Fluency | Competency | Comments | Actions | License Type | Issued Date | Expiry Date | Actions | File Name | Description | Size | Type | Date Added | Added By | Actions  (rows: 0, "No Records Found")

- Qualifications - Education > Level options: No Records Found
## Add form - Qualifications - Education - End Date before Start Date
Date order probe (nothing saved).
- URL: https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewQualifications/empNumber/186
- Screenshot: screens/add-form-qualifications-education-end-date-before-start-date.png   HTML: html/add-form-qualifications-education-end-date-before-start-date.html
- Tabs: Personal Details | Contact Details | Emergency Contacts | Dependents | Immigration | Job | Salary | Report-to | Qualifications | Memberships
- Headings: PIM | Aglae Gleichnerfke | Qualifications | Work Experience | Add Education | Education | Skills | Languages | License | Attachments

| Label | Kind | Value | Disabled | Required | Name attr | Placeholder |
|---|---|---|---|---|---|---|
|  | text |  | false | false |  | Search |
|  | checkbox | on | false | false |  |  |
| Institute | text |  | false | false |  |  |
| Major/Specialization | text |  | false | false |  |  |
| Year | text |  | false | false |  |  |
| GPA/Score | text |  | false | false |  |  |
| Start Date | text | 2030-10-10 | false | false |  | yyyy-dd-mm |
| End Date | text | 2020-10-10 | false | false |  | yyyy-dd-mm |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
| Level | dropdown | -- Select -- | false | true | | |
- Buttons: Add | Cancel | Save | Add | Add | Add | Add | Add
- Table columns: Company | Job Title | From | To | Comment | Actions | Level | Year | GPA/Score | Actions | Skill | Years of Experience | Actions | Language | Fluency | Competency | Comments | Actions | License Type | Issued Date | Expiry Date | Actions | File Name | Description | Size | Type | Date Added | Added By | Actions  (rows: 0, "No Records Found")
- Validation messages: End date should be after Start date

## Add form - Qualifications - Education - empty Save
Empty form saved: expecting "Required" messages only.
- URL: https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewQualifications/empNumber/186
- Screenshot: screens/add-form-qualifications-education-empty-save.png   HTML: html/add-form-qualifications-education-empty-save.html
- Tabs: Personal Details | Contact Details | Emergency Contacts | Dependents | Immigration | Job | Salary | Report-to | Qualifications | Memberships
- Headings: PIM | Aglae Gleichnerfke | Qualifications | Work Experience | Add Education | Education | Skills | Languages | License | Attachments

| Label | Kind | Value | Disabled | Required | Name attr | Placeholder |
|---|---|---|---|---|---|---|
|  | text |  | false | false |  | Search |
|  | checkbox | on | false | false |  |  |
| Institute | text |  | false | false |  |  |
| Major/Specialization | text |  | false | false |  |  |
| Year | text |  | false | false |  |  |
| GPA/Score | text |  | false | false |  |  |
| Start Date | text |  | false | false |  | yyyy-dd-mm |
| End Date | text |  | false | false |  | yyyy-dd-mm |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
| Level | dropdown | -- Select -- | false | true | | |
- Buttons: Add | Cancel | Save | Add | Add | Add | Add | Add
- Table columns: Company | Job Title | From | To | Comment | Actions | Level | Year | GPA/Score | Actions | Skill | Years of Experience | Actions | Language | Fluency | Competency | Comments | Actions | License Type | Issued Date | Expiry Date | Actions | File Name | Description | Size | Type | Date Added | Added By | Actions  (rows: 0, "No Records Found")

## Add form - Qualifications - Skills
- URL: https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewQualifications/empNumber/186
- Screenshot: screens/add-form-qualifications-skills.png   HTML: html/add-form-qualifications-skills.html
- Tabs: Personal Details | Contact Details | Emergency Contacts | Dependents | Immigration | Job | Salary | Report-to | Qualifications | Memberships
- Headings: PIM | Aglae Gleichnerfke | Qualifications | Work Experience | Education | Add Skill | Skills | Languages | License | Attachments

| Label | Kind | Value | Disabled | Required | Name attr | Placeholder |
|---|---|---|---|---|---|---|
|  | text |  | false | false |  | Search |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
| Years of Experience | text |  | false | false |  |  |
| Comments | textarea |  | false | false |  |  |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
| Skill | dropdown | -- Select -- | false | true | | |
- Buttons: Add | Add | Cancel | Save | Add | Add | Add | Add
- Table columns: Company | Job Title | From | To | Comment | Actions | Level | Year | GPA/Score | Actions | Skill | Years of Experience | Actions | Language | Fluency | Competency | Comments | Actions | License Type | Issued Date | Expiry Date | Actions | File Name | Description | Size | Type | Date Added | Added By | Actions  (rows: 0, "No Records Found")

- Qualifications - Skills > Skill options: No Records Found
## Add form - Qualifications - Skills - empty Save
Empty form saved: expecting "Required" messages only.
- URL: https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewQualifications/empNumber/186
- Screenshot: screens/add-form-qualifications-skills-empty-save.png   HTML: html/add-form-qualifications-skills-empty-save.html
- Tabs: Personal Details | Contact Details | Emergency Contacts | Dependents | Immigration | Job | Salary | Report-to | Qualifications | Memberships
- Headings: PIM | Aglae Gleichnerfke | Qualifications | Work Experience | Education | Add Skill | Skills | Languages | License | Attachments

| Label | Kind | Value | Disabled | Required | Name attr | Placeholder |
|---|---|---|---|---|---|---|
|  | text |  | false | false |  | Search |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
| Years of Experience | text |  | false | false |  |  |
| Comments | textarea |  | false | false |  |  |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
| Skill | dropdown | -- Select -- | false | true | | |
- Buttons: Add | Add | Cancel | Save | Add | Add | Add | Add
- Table columns: Company | Job Title | From | To | Comment | Actions | Level | Year | GPA/Score | Actions | Skill | Years of Experience | Actions | Language | Fluency | Competency | Comments | Actions | License Type | Issued Date | Expiry Date | Actions | File Name | Description | Size | Type | Date Added | Added By | Actions  (rows: 0, "No Records Found")
- Validation messages: Required

## Add form - Qualifications - Languages
- URL: https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewQualifications/empNumber/186
- Screenshot: screens/add-form-qualifications-languages.png   HTML: html/add-form-qualifications-languages.html
- Tabs: Personal Details | Contact Details | Emergency Contacts | Dependents | Immigration | Job | Salary | Report-to | Qualifications | Memberships
- Headings: PIM | Aglae Gleichnerfke | Qualifications | Work Experience | Education | Skills | Add Language | Languages | License | Attachments

| Label | Kind | Value | Disabled | Required | Name attr | Placeholder |
|---|---|---|---|---|---|---|
|  | text |  | false | false |  | Search |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
| Comments | textarea |  | false | false |  |  |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
| Language | dropdown | -- Select -- | false | true | | |
| Fluency | dropdown | -- Select -- | false | true | | |
| Competency | dropdown | -- Select -- | false | true | | |
- Buttons: Add | Add | Add | Cancel | Save | Add | Add | Add
- Table columns: Company | Job Title | From | To | Comment | Actions | Level | Year | GPA/Score | Actions | Skill | Years of Experience | Actions | Language | Fluency | Competency | Comments | Actions | License Type | Issued Date | Expiry Date | Actions | File Name | Description | Size | Type | Date Added | Added By | Actions  (rows: 0, "No Records Found")

- Qualifications - Languages > Language options: -- Select -- | Arabic | Chinese | English | French | Russian | Spanish
- Qualifications - Languages > Fluency options: No Records Found
- Qualifications - Languages > Competency options: -- Select -- | Poor | Basic | Good | Mother Tongue
## Add form - Qualifications - Languages - empty Save
Empty form saved: expecting "Required" messages only.
- URL: https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewQualifications/empNumber/186
- Screenshot: screens/add-form-qualifications-languages-empty-save.png   HTML: html/add-form-qualifications-languages-empty-save.html
- Tabs: Personal Details | Contact Details | Emergency Contacts | Dependents | Immigration | Job | Salary | Report-to | Qualifications | Memberships
- Headings: PIM | Aglae Gleichnerfke | Qualifications | Work Experience | Education | Skills | Add Language | Languages | License | Attachments

| Label | Kind | Value | Disabled | Required | Name attr | Placeholder |
|---|---|---|---|---|---|---|
|  | text |  | false | false |  | Search |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
| Comments | textarea |  | false | false |  |  |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
| Language | dropdown | -- Select -- | false | true | | |
| Fluency | dropdown | -- Select -- | false | true | | |
| Competency | dropdown | -- Select -- | false | true | | |
- Buttons: Add | Add | Add | Cancel | Save | Add | Add | Add
- Table columns: Company | Job Title | From | To | Comment | Actions | Level | Year | GPA/Score | Actions | Skill | Years of Experience | Actions | Language | Fluency | Competency | Comments | Actions | License Type | Issued Date | Expiry Date | Actions | File Name | Description | Size | Type | Date Added | Added By | Actions  (rows: 0, "No Records Found")
- Validation messages: Required | Required | Required

## Add form - Qualifications - License
- URL: https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewQualifications/empNumber/186
- Screenshot: screens/add-form-qualifications-license.png   HTML: html/add-form-qualifications-license.html
- Tabs: Personal Details | Contact Details | Emergency Contacts | Dependents | Immigration | Job | Salary | Report-to | Qualifications | Memberships
- Headings: PIM | Aglae Gleichnerfke | Qualifications | Work Experience | Education | Skills | Languages | Add License | License | Attachments

| Label | Kind | Value | Disabled | Required | Name attr | Placeholder |
|---|---|---|---|---|---|---|
|  | text |  | false | false |  | Search |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
| License Number | text |  | false | false |  |  |
| Issued Date | text |  | false | false |  | yyyy-dd-mm |
| Expiry Date | text |  | false | false |  | yyyy-dd-mm |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
| License Type | dropdown | -- Select -- | false | true | | |
- Buttons: Add | Add | Add | Add | Cancel | Save | Add | Add
- Table columns: Company | Job Title | From | To | Comment | Actions | Level | Year | GPA/Score | Actions | Skill | Years of Experience | Actions | Language | Fluency | Competency | Comments | Actions | License Type | Issued Date | Expiry Date | Actions | File Name | Description | Size | Type | Date Added | Added By | Actions  (rows: 0, "No Records Found")

- Qualifications - License > License Type options: No Records Found
## Add form - Qualifications - License - Expiry Date before Issued Date
Date order probe (nothing saved).
- URL: https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewQualifications/empNumber/186
- Screenshot: screens/add-form-qualifications-license-expiry-date-before-issued-date.png   HTML: html/add-form-qualifications-license-expiry-date-before-issued-date.html
- Tabs: Personal Details | Contact Details | Emergency Contacts | Dependents | Immigration | Job | Salary | Report-to | Qualifications | Memberships
- Headings: PIM | Aglae Gleichnerfke | Qualifications | Work Experience | Education | Skills | Languages | Add License | License | Attachments

| Label | Kind | Value | Disabled | Required | Name attr | Placeholder |
|---|---|---|---|---|---|---|
|  | text |  | false | false |  | Search |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
| License Number | text |  | false | false |  |  |
| Issued Date | text | 2030-10-10 | false | false |  | yyyy-dd-mm |
| Expiry Date | text | 2020-10-10 | false | false |  | yyyy-dd-mm |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
| License Type | dropdown | -- Select -- | false | true | | |
- Buttons: Add | Add | Add | Add | Cancel | Save | Add | Add
- Table columns: Company | Job Title | From | To | Comment | Actions | Level | Year | GPA/Score | Actions | Skill | Years of Experience | Actions | Language | Fluency | Competency | Comments | Actions | License Type | Issued Date | Expiry Date | Actions | File Name | Description | Size | Type | Date Added | Added By | Actions  (rows: 0, "No Records Found")
- Validation messages: Expiry date should be after issued date

## Add form - Qualifications - License - empty Save
Empty form saved: expecting "Required" messages only.
- URL: https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewQualifications/empNumber/186
- Screenshot: screens/add-form-qualifications-license-empty-save.png   HTML: html/add-form-qualifications-license-empty-save.html
- Tabs: Personal Details | Contact Details | Emergency Contacts | Dependents | Immigration | Job | Salary | Report-to | Qualifications | Memberships
- Headings: PIM | Aglae Gleichnerfke | Qualifications | Work Experience | Education | Skills | Languages | Add License | License | Attachments

| Label | Kind | Value | Disabled | Required | Name attr | Placeholder |
|---|---|---|---|---|---|---|
|  | text |  | false | false |  | Search |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
| License Number | text |  | false | false |  |  |
| Issued Date | text |  | false | false |  | yyyy-dd-mm |
| Expiry Date | text |  | false | false |  | yyyy-dd-mm |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
| License Type | dropdown | -- Select -- | false | true | | |
- Buttons: Add | Add | Add | Add | Cancel | Save | Add | Add
- Table columns: Company | Job Title | From | To | Comment | Actions | Level | Year | GPA/Score | Actions | Skill | Years of Experience | Actions | Language | Fluency | Competency | Comments | Actions | License Type | Issued Date | Expiry Date | Actions | File Name | Description | Size | Type | Date Added | Added By | Actions  (rows: 0, "No Records Found")

## Add form - Qualifications - Attachments
- URL: https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewQualifications/empNumber/186
- Screenshot: screens/add-form-qualifications-attachments.png   HTML: html/add-form-qualifications-attachments.html
- Tabs: Personal Details | Contact Details | Emergency Contacts | Dependents | Immigration | Job | Salary | Report-to | Qualifications | Memberships
- Headings: PIM | Aglae Gleichnerfke | Qualifications | Work Experience | Education | Skills | Languages | License | Add Attachment

| Label | Kind | Value | Disabled | Required | Name attr | Placeholder |
|---|---|---|---|---|---|---|
|  | text |  | false | false |  | Search |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
| Select File | file |  | false | true |  |  |
| Comment | textarea |  | false | false |  | Type comment here |
- Buttons: Add | Add | Add | Add | Add | Cancel | Save
- Table columns: Company | Job Title | From | To | Comment | Actions | Level | Year | GPA/Score | Actions | Skill | Years of Experience | Actions | Language | Fluency | Competency | Comments | Actions | License Type | Issued Date | Expiry Date | Actions  (rows: 0, "No Records Found")

## Add form - Qualifications - Attachments - empty Save
Empty form saved: expecting "Required" messages only.
- URL: https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewQualifications/empNumber/186
- Screenshot: screens/add-form-qualifications-attachments-empty-save.png   HTML: html/add-form-qualifications-attachments-empty-save.html
- Tabs: Personal Details | Contact Details | Emergency Contacts | Dependents | Immigration | Job | Salary | Report-to | Qualifications | Memberships
- Headings: PIM | Aglae Gleichnerfke | Qualifications | Work Experience | Education | Skills | Languages | License | Add Attachment

| Label | Kind | Value | Disabled | Required | Name attr | Placeholder |
|---|---|---|---|---|---|---|
|  | text |  | false | false |  | Search |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
| Select File | file |  | false | true |  |  |
| Comment | textarea |  | false | false |  | Type comment here |
- Buttons: Add | Add | Add | Add | Add | Cancel | Save
- Table columns: Company | Job Title | From | To | Comment | Actions | Level | Year | GPA/Score | Actions | Skill | Years of Experience | Actions | Language | Fluency | Competency | Comments | Actions | License Type | Issued Date | Expiry Date | Actions  (rows: 0, "No Records Found")
- Validation messages: Required

## Dependents - relationship Other selected
- URL: https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewDependents/empNumber/186
- Screenshot: screens/dependents-relationship-other-selected.png   HTML: html/dependents-relationship-other-selected.html
- Tabs: Personal Details | Contact Details | Emergency Contacts | Dependents | Immigration | Job | Salary | Report-to | Qualifications | Memberships
- Headings: PIM | Aglae Gleichnerfke | Add Dependent | Assigned Dependents | Attachments

| Label | Kind | Value | Disabled | Required | Name attr | Placeholder |
|---|---|---|---|---|---|---|
|  | text |  | false | false |  | Search |
| Name | text |  | false | true |  |  |
| Please Specify | text |  | false | true |  |  |
| Date of Birth | text |  | false | false |  | yyyy-dd-mm |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
| Relationship | dropdown | Other | false | true | | |
- Buttons: Cancel | Save | Add | Add
- Table columns: Name | Relationship | Date of Birth | Actions | File Name | Description | Size | Type | Date Added | Added By | Actions  (rows: 0, "No Records Found")

## Attachment - exactly 1MB
File auto_rfv9ce.txt selected, NOT saved.
- URL: https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/186
- Screenshot: screens/attachment-exactly-1mb.png   HTML: html/attachment-exactly-1mb.html
- Tabs: Personal Details | Contact Details | Emergency Contacts | Dependents | Immigration | Job | Salary | Report-to | Qualifications | Memberships
- Headings: PIM | Aglae Gleichnerfke | Personal Details | Custom Fields | Add Attachment

| Label | Kind | Value | Disabled | Required | Name attr | Placeholder |
|---|---|---|---|---|---|---|
|  | text |  | false | false |  | Search |
|  | text | Aglae | false | false | firstName | First Name |
|  | text |  | false | false | middleName | Middle Name |
|  | text | Gleichnerfke | false | false | lastName | Last Name |
| Employee Id | text | 0388 | true | false |  |  |
| Other Id | text |  | false | false |  |  |
| Driver's License Number | text |  | true | false |  |  |
| License Expiry Date | text |  | false | false |  | yyyy-dd-mm |
| Date of Birth | text |  | true | false |  | yyyy-dd-mm |
| Male | radio | 1 | false | false |  |  |
| Female | radio | 2 | false | false |  |  |
| Test_Field | text |  | false | false |  |  |
| Select File | file | C:\fakepath\auto_rfv9ce.txt | false | true |  |  |
| Comment | textarea |  | false | false |  | Type comment here |
| Nationality | dropdown | -- Select -- | false | false | | |
| Marital Status | dropdown | -- Select -- | false | false | | |
| Blood Type | dropdown | -- Select -- | false | false | | |
- Buttons: Save | Save | Cancel | Save

## Attachment - 1 byte over 1MB
File auto_3g9hwj.txt selected, NOT saved.
- URL: https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/186
- Screenshot: screens/attachment-1-byte-over-1mb.png   HTML: html/attachment-1-byte-over-1mb.html
- Tabs: Personal Details | Contact Details | Emergency Contacts | Dependents | Immigration | Job | Salary | Report-to | Qualifications | Memberships
- Headings: PIM | Aglae Gleichnerfke | Personal Details | Custom Fields | Add Attachment

| Label | Kind | Value | Disabled | Required | Name attr | Placeholder |
|---|---|---|---|---|---|---|
|  | text |  | false | false |  | Search |
|  | text | Aglae | false | false | firstName | First Name |
|  | text |  | false | false | middleName | Middle Name |
|  | text | Gleichnerfke | false | false | lastName | Last Name |
| Employee Id | text | 0388 | true | false |  |  |
| Other Id | text |  | false | false |  |  |
| Driver's License Number | text |  | true | false |  |  |
| License Expiry Date | text |  | false | false |  | yyyy-dd-mm |
| Date of Birth | text |  | true | false |  | yyyy-dd-mm |
| Male | radio | 1 | false | false |  |  |
| Female | radio | 2 | false | false |  |  |
| Test_Field | text |  | false | false |  |  |
| Select File | file | C:\fakepath\auto_3g9hwj.txt | false | true |  |  |
| Comment | textarea |  | false | false |  | Type comment here |
| Nationality | dropdown | -- Select -- | false | false | | |
| Marital Status | dropdown | -- Select -- | false | false | | |
| Blood Type | dropdown | -- Select -- | false | false | | |
- Buttons: Save | Save | Cancel | Save
- Validation messages: Attachment Size Exceeded

## Attachment - small pdf
File auto_m2aum4.pdf selected, NOT saved.
- URL: https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/186
- Screenshot: screens/attachment-small-pdf.png   HTML: html/attachment-small-pdf.html
- Tabs: Personal Details | Contact Details | Emergency Contacts | Dependents | Immigration | Job | Salary | Report-to | Qualifications | Memberships
- Headings: PIM | Aglae Gleichnerfke | Personal Details | Custom Fields | Add Attachment

| Label | Kind | Value | Disabled | Required | Name attr | Placeholder |
|---|---|---|---|---|---|---|
|  | text |  | false | false |  | Search |
|  | text | Aglae | false | false | firstName | First Name |
|  | text |  | false | false | middleName | Middle Name |
|  | text | Gleichnerfke | false | false | lastName | Last Name |
| Employee Id | text | 0388 | true | false |  |  |
| Other Id | text |  | false | false |  |  |
| Driver's License Number | text |  | true | false |  |  |
| License Expiry Date | text |  | false | false |  | yyyy-dd-mm |
| Date of Birth | text |  | true | false |  | yyyy-dd-mm |
| Male | radio | 1 | false | false |  |  |
| Female | radio | 2 | false | false |  |  |
| Test_Field | text |  | false | false |  |  |
| Select File | file | C:\fakepath\auto_m2aum4.pdf | false | true |  |  |
| Comment | textarea |  | false | false |  | Type comment here |
| Nationality | dropdown | -- Select -- | false | false | | |
| Marital Status | dropdown | -- Select -- | false | false | | |
| Blood Type | dropdown | -- Select -- | false | false | | |
- Buttons: Save | Save | Cancel | Save

## Emergency Contacts - after Save (toast and list row)
- URL: https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmergencyContacts/empNumber/186
- Screenshot: screens/emergency-contacts-after-save-toast-and-list-row.png   HTML: html/emergency-contacts-after-save-toast-and-list-row.html
- Tabs: Personal Details | Contact Details | Emergency Contacts | Dependents | Immigration | Job | Salary | Report-to | Qualifications | Memberships
- Headings: PIM | Aglae Gleichnerfke | Assigned Emergency Contacts | Attachments

| Label | Kind | Value | Disabled | Required | Name attr | Placeholder |
|---|---|---|---|---|---|---|
|  | text |  | false | false |  | Search |
|  | checkbox | on | false | false |  |  |
|  | checkbox | 0 | false | false |  |  |
|  | checkbox | on | false | false |  |  |
- Buttons: Add | Add
- Table columns: Name | Relationship | Home Telephone | Mobile | Work Telephone | Actions | File Name | Description | Size | Type | Date Added | Added By | Actions  (rows: 1, "No Records Found")

- First list row HTML: html/emergency-contacts-list-row.html

## Emergency Contacts - edit form
- URL: https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmergencyContacts/empNumber/186
- Screenshot: screens/emergency-contacts-edit-form.png   HTML: html/emergency-contacts-edit-form.html
- Tabs: Personal Details | Contact Details | Emergency Contacts | Dependents | Immigration | Job | Salary | Report-to | Qualifications | Memberships
- Headings: PIM | Aglae Gleichnerfke | Edit Emergency Contact | Assigned Emergency Contacts | Attachments

| Label | Kind | Value | Disabled | Required | Name attr | Placeholder |
|---|---|---|---|---|---|---|
|  | text |  | false | false |  | Search |
| Name | text | Clara Cremin | false | true |  |  |
| Relationship | text | Sibling | false | true |  |  |
| Home Telephone | text | 8574563862 | false | false |  |  |
| Mobile | text |  | false | false |  |  |
| Work Telephone | text |  | false | false |  |  |
|  | checkbox | on | false | false |  |  |
|  | checkbox | 0 | true | false |  |  |
|  | checkbox | on | false | false |  |  |
- Buttons: Cancel | Save | Add | Add
- Table columns: Name | Relationship | Home Telephone | Mobile | Work Telephone | Actions | File Name | Description | Size | Type | Date Added | Added By | Actions  (rows: 1, "No Records Found")

## Emergency Contacts - row selected (Delete Selected button)
- URL: https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmergencyContacts/empNumber/186
- Screenshot: screens/emergency-contacts-row-selected-delete-selected-button.png   HTML: html/emergency-contacts-row-selected-delete-selected-button.html
- Tabs: Personal Details | Contact Details | Emergency Contacts | Dependents | Immigration | Job | Salary | Report-to | Qualifications | Memberships
- Headings: PIM | Aglae Gleichnerfke | Assigned Emergency Contacts | Attachments

| Label | Kind | Value | Disabled | Required | Name attr | Placeholder |
|---|---|---|---|---|---|---|
|  | text |  | false | false |  | Search |
|  | checkbox | on | false | false |  |  |
|  | checkbox | 0 | false | false |  |  |
|  | checkbox | on | false | false |  |  |
- Buttons: Add | Delete Selected | Add
- Table columns: Name | Relationship | Home Telephone | Mobile | Work Telephone | Actions | File Name | Description | Size | Type | Date Added | Added By | Actions  (rows: 1, "No Records Found")

## Emergency Contacts - delete confirmation dialog
- URL: https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmergencyContacts/empNumber/186
- Screenshot: screens/emergency-contacts-delete-confirmation-dialog.png   HTML: html/emergency-contacts-delete-confirmation-dialog.html
- Tabs: Personal Details | Contact Details | Emergency Contacts | Dependents | Immigration | Job | Salary | Report-to | Qualifications | Memberships
- Headings: PIM | Aglae Gleichnerfke | Assigned Emergency Contacts | Attachments

| Label | Kind | Value | Disabled | Required | Name attr | Placeholder |
|---|---|---|---|---|---|---|
|  | text |  | false | false |  | Search |
|  | checkbox | on | false | false |  |  |
|  | checkbox | 0 | false | false |  |  |
|  | checkbox | on | false | false |  |  |
- Buttons: Add | Delete Selected | Add | × | No, Cancel | Yes, Delete
- Table columns: Name | Relationship | Home Telephone | Mobile | Work Telephone | Actions | File Name | Description | Size | Type | Date Added | Added By | Actions  (rows: 1, "No Records Found")
- Dialog text: ×Are you Sure?The selected record will be permanently deleted. Are you sure you want to continue? No, Cancel  Yes, Delete

## Emergency Contacts - after Delete
- URL: https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmergencyContacts/empNumber/186
- Screenshot: screens/emergency-contacts-after-delete.png   HTML: html/emergency-contacts-after-delete.html
- Tabs: Personal Details | Contact Details | Emergency Contacts | Dependents | Immigration | Job | Salary | Report-to | Qualifications | Memberships
- Headings: PIM | Aglae Gleichnerfke | Assigned Emergency Contacts | Attachments

| Label | Kind | Value | Disabled | Required | Name attr | Placeholder |
|---|---|---|---|---|---|---|
|  | text |  | false | false |  | Search |
|  | checkbox | on | false | false |  |  |
|  | checkbox | on | false | false |  |  |
- Buttons: Add | Add
- Table columns: Name | Relationship | Home Telephone | Mobile | Work Telephone | Actions | File Name | Description | Size | Type | Date Added | Added By | Actions  (rows: 0, "No Records Found")

# Problems during the walk
- none