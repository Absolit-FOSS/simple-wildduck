# Simple WildDuck

Simple way to access the WildDuck api from your JavaScript.

Based completely on the existing API: https://docs.wildduck.email/api/

- [Setup and Usage](#setup-and-usage)
- [Contributing](#contributing)
  - [Project Structure](#project-structure)
- [Request Functions](#request-functions)
  - [Messages](#messages)
    - [updateMessageInfo](#updateMessageInfo)
    - [deleteMessage](#deleteMessage)
    <!-- and all the rest -->
  - [Applicationpasswords](#applicationpasswords)
    - [deleteAppPassword](#deleteapppassword)
    - [createNewAppPassword](#createnewapppassword)
    <!-- and all the rest -->

## Setup and Usage

```typescript
import wd from "@absolit/simple-wildduck";

// initial setup, only have to do once
wd.wdInit({
	baseUrl: "https://www.your-wildduck-server.com",
	accessToken: "my-access-token",
	xAccessToken: "HeaderXAccessToken",
});

// simply make a request as such
const users = await wd.getUsers({ limit: 10 });

// reap the data rewards
if (users.success && users.results.length > 0) {
	console.log(users.results[0].address);
}
```

## Contributing

### Project Structure

- `src/` -> All source code goes here
- `src/models` -> Models that can be used everywhere goes here
- `src/requests` -> All WildDuck request endpoints
  - `src/requests/.../index.ts` -> Exports all request functions
  - `src/requests/.../config.ts` -> Config to be applied to all requests
  - `src/requests/.../models.ts` -> All models used in related requests
  - `src/requests/.../get.ts` -> All GET request functions
  - `src/requests/.../delete.ts` -> All DELETE request functions
  - `src/requests/.../post.ts` -> All POST request functions
  - `src/requests/.../put.ts` -> All PUT request functions
- `src/setup` -> Module setup, required functions when imported into your project

## Request Functions

### Messages

#### updateMessageInfo

Request updateMessageInfo.

Docs: [https://docs.wildduck.email/api/#operation/updateMessageInfo](https://docs.wildduck.email/api/#operation/updateMessageInfo)

#### deleteMessage

Request deleteMessage.

Docs: [https://docs.wildduck.email/api/#operation/deleteMessage](https://docs.wildduck.email/api/#operation/deleteMessage)

#### deleteAllMessages

Request deleteAllMessages.

Docs: [https://docs.wildduck.email/api/#operation/deleteAllMessages](https://docs.wildduck.email/api/#operation/deleteAllMessages)

#### deleteOutboundMessage

Request deleteOutboundMessage.

Docs: [https://docs.wildduck.email/api/#operation/deleteOutboundMessage](https://docs.wildduck.email/api/#operation/deleteOutboundMessage)

#### uploadMessage

Request uploadMessage.

Docs: [https://docs.wildduck.email/api/#operation/uploadMessage](https://docs.wildduck.email/api/#operation/uploadMessage)

#### uploadMessageReply

Request uploadMessageReply.

Docs: [https://docs.wildduck.email/api/#operation/uploadMessageReply](https://docs.wildduck.email/api/#operation/uploadMessageReply)

#### forwardStoredMessage

Request forwardStoredMessage.

Docs: [https://docs.wildduck.email/api/#operation/forwardStoredMessage](https://docs.wildduck.email/api/#operation/forwardStoredMessage)

#### searchUpdateMessage

Request searchUpdateMessage.

Docs: [https://docs.wildduck.email/api/#operation/searchUpdateMessage](https://docs.wildduck.email/api/#operation/searchUpdateMessage)

#### submitDraftMessage

Request submitDraftMessage.

Docs: [https://docs.wildduck.email/api/#operation/submitDraftMessage](https://docs.wildduck.email/api/#operation/submitDraftMessage)

#### getMessageInfo

Request getMessageInfo.

Docs: [https://docs.wildduck.email/api/#operation/getMessageInfo](https://docs.wildduck.email/api/#operation/getMessageInfo)

#### getMessagesInMailbox

Request getMessagesInMailbox.

Docs: [https://docs.wildduck.email/api/#operation/getMessagesInMailbox](https://docs.wildduck.email/api/#operation/getMessagesInMailbox)

#### getMessageAttachment

Request getMessageAttachment.

Docs: [https://docs.wildduck.email/api/#operation/getMessageAttachment](https://docs.wildduck.email/api/#operation/getMessageAttachment)

#### getMessageSource

Request getMessageSource.

Docs: [https://docs.wildduck.email/api/#operation/getMessageSource](https://docs.wildduck.email/api/#operation/getMessageSource)

### Applicationpasswords

#### deleteAppPassword

Request deleteAppPassword.

Docs: [https://docs.wildduck.email/api/#operation/deleteAppPassword](https://docs.wildduck.email/api/#operation/deleteAppPassword)

#### createNewAppPassword

Request createNewAppPassword.

Docs: [https://docs.wildduck.email/api/#operation/createNewAppPassword](https://docs.wildduck.email/api/#operation/createNewAppPassword)

#### getAppPasswordInformation

Request getAppPasswordInformation.

Docs: [https://docs.wildduck.email/api/#operation/getAppPasswordInformation](https://docs.wildduck.email/api/#operation/getAppPasswordInformation)

#### listApplicationPasswords

Request listApplicationPasswords.

Docs: [https://docs.wildduck.email/api/#operation/listApplicationPasswords](https://docs.wildduck.email/api/#operation/listApplicationPasswords)

### Export

#### exportUserData

Request exportUserData.

Docs: [https://docs.wildduck.email/api/#operation/exportUserData](https://docs.wildduck.email/api/#operation/exportUserData)

#### importUserData

Request importUserData.

Docs: [https://docs.wildduck.email/api/#operation/importUserData](https://docs.wildduck.email/api/#operation/importUserData)

### Filters

#### updateFilterInformation

Request updateFilterInformation.

Docs: [https://docs.wildduck.email/api/#operation/updateFilterInformation](https://docs.wildduck.email/api/#operation/updateFilterInformation)

#### deleteFilter

Request deleteFilter.

Docs: [https://docs.wildduck.email/api/#operation/deleteFilter](https://docs.wildduck.email/api/#operation/deleteFilter)

#### createNewFilter

Request createNewFilter.

Docs: [https://docs.wildduck.email/api/#operation/createNewFilter](https://docs.wildduck.email/api/#operation/createNewFilter)

#### requestFilterInformation

Request requestFilterInformation.

Docs: [https://docs.wildduck.email/api/#operation/requestFilterInformation](https://docs.wildduck.email/api/#operation/requestFilterInformation)

#### listAllFilters

Request listAllFilters.

Docs: [https://docs.wildduck.email/api/#operation/listAllFilters](https://docs.wildduck.email/api/#operation/listAllFilters)

#### listFiltersForUser

Request listFiltersForUser.

Docs: [https://docs.wildduck.email/api/#operation/listFiltersForUser](https://docs.wildduck.email/api/#operation/listFiltersForUser)

### Cert

#### deleteTlsCert

Request deleteTlsCert.

Docs: [https://docs.wildduck.email/api/#operation/deleteTlsCert](https://docs.wildduck.email/api/#operation/deleteTlsCert)

#### createOrUpdateTlsCertificateForServerName

Request createOrUpdateTlsCertificateForServerName.

Docs: [https://docs.wildduck.email/api/#operation/createOrUpdateTlsCertificateForServerName](https://docs.wildduck.email/api/#operation/createOrUpdateTlsCertificateForServerName)

#### requestTlsCertificateInformation

Request requestTlsCertificateInformation.

Docs: [https://docs.wildduck.email/api/#operation/requestTlsCertificateInformation](https://docs.wildduck.email/api/#operation/requestTlsCertificateInformation)

#### listRegisteredTlsCertificates

Request listRegisteredTlsCertificates.

Docs: [https://docs.wildduck.email/api/#operation/listRegisteredTlsCertificates](https://docs.wildduck.email/api/#operation/listRegisteredTlsCertificates)

#### resolveIdForServerName

Request resolveIdForServerName.

Docs: [https://docs.wildduck.email/api/#operation/resolveIdForServerName](https://docs.wildduck.email/api/#operation/resolveIdForServerName)

### Domainaliases

#### deleteAlias

Request deleteAlias.

Docs: [https://docs.wildduck.email/api/#operation/deleteAlias](https://docs.wildduck.email/api/#operation/deleteAlias)

#### createNewDomainAlias

Request createNewDomainAlias.

Docs: [https://docs.wildduck.email/api/#operation/createNewDomainAlias](https://docs.wildduck.email/api/#operation/createNewDomainAlias)

#### getAliasInformation

Request getAliasInformation.

Docs: [https://docs.wildduck.email/api/#operation/getAliasInformation](https://docs.wildduck.email/api/#operation/getAliasInformation)

#### listRegisteredDomainAliases

Request listRegisteredDomainAliases.

Docs: [https://docs.wildduck.email/api/#operation/listRegisteredDomainAliases](https://docs.wildduck.email/api/#operation/listRegisteredDomainAliases)

#### resolveIdForDomainAlias

Request resolveIdForDomainAlias.

Docs: [https://docs.wildduck.email/api/#operation/resolveIdForDomainAlias](https://docs.wildduck.email/api/#operation/resolveIdForDomainAlias)

### Autoreplies

#### updateAutoreplyInformation

Request updateAutoreplyInformation.

Docs: [https://docs.wildduck.email/api/#operation/updateAutoreplyInformation](https://docs.wildduck.email/api/#operation/updateAutoreplyInformation)

#### deleteAutoreplyInfo

Request deleteAutoreplyInfo.

Docs: [https://docs.wildduck.email/api/#operation/deleteAutoreplyInfo](https://docs.wildduck.email/api/#operation/deleteAutoreplyInfo)

#### requestAutoreplyInformation

Request requestAutoreplyInformation.

Docs: [https://docs.wildduck.email/api/#operation/requestAutoreplyInformation](https://docs.wildduck.email/api/#operation/requestAutoreplyInformation)

### Storage

#### deleteStorageFile

Request deleteStorageFile.

Docs: [https://docs.wildduck.email/api/#operation/deleteStorageFile](https://docs.wildduck.email/api/#operation/deleteStorageFile)

#### uploadFileToStorage

Request uploadFileToStorage.

Docs: [https://docs.wildduck.email/api/#operation/uploadFileToStorage](https://docs.wildduck.email/api/#operation/uploadFileToStorage)

#### downloadFile

Request downloadFile.

Docs: [https://docs.wildduck.email/api/#operation/downloadFile](https://docs.wildduck.email/api/#operation/downloadFile)

#### getStoredFiles

Request getStoredFiles.

Docs: [https://docs.wildduck.email/api/#operation/getStoredFiles](https://docs.wildduck.email/api/#operation/getStoredFiles)

### Addresses

#### updateForwardedAddressInfo

Request updateForwardedAddressInfo.

Docs: [https://docs.wildduck.email/api/#operation/updateForwardedAddressInfo](https://docs.wildduck.email/api/#operation/updateForwardedAddressInfo)

#### updateAddressInfo

Request updateAddressInfo.

Docs: [https://docs.wildduck.email/api/#operation/updateAddressInfo](https://docs.wildduck.email/api/#operation/updateAddressInfo)

#### renameDomainInAddresses

Request renameDomainInAddresses.

Docs: [https://docs.wildduck.email/api/#operation/renameDomainInAddresses](https://docs.wildduck.email/api/#operation/renameDomainInAddresses)

#### deleteForwardedAddress

Request deleteForwardedAddress.

Docs: [https://docs.wildduck.email/api/#operation/deleteForwardedAddress](https://docs.wildduck.email/api/#operation/deleteForwardedAddress)

#### deleteAddress

Request deleteAddress.

Docs: [https://docs.wildduck.email/api/#operation/deleteAddress](https://docs.wildduck.email/api/#operation/deleteAddress)

#### createAddress

Request createAddress.

Docs: [https://docs.wildduck.email/api/#operation/createAddress](https://docs.wildduck.email/api/#operation/createAddress)

#### createNewForwardedAddress

Request createNewForwardedAddress.

Docs: [https://docs.wildduck.email/api/#operation/createNewForwardedAddress](https://docs.wildduck.email/api/#operation/createNewForwardedAddress)

#### getForwardedAddressInfo

Request getForwardedAddressInfo.

Docs: [https://docs.wildduck.email/api/#operation/getForwardedAddressInfo](https://docs.wildduck.email/api/#operation/getForwardedAddressInfo)

#### getAddressesInfo

Request getAddressesInfo.

Docs: [https://docs.wildduck.email/api/#operation/getAddressesInfo](https://docs.wildduck.email/api/#operation/getAddressesInfo)

#### getAddressInfo

Request getAddressInfo.

Docs: [https://docs.wildduck.email/api/#operation/getAddressInfo](https://docs.wildduck.email/api/#operation/getAddressInfo)

#### listRegisteredAddresses

Request listRegisteredAddresses.

Docs: [https://docs.wildduck.email/api/#operation/listRegisteredAddresses](https://docs.wildduck.email/api/#operation/listRegisteredAddresses)

#### listRegisteredAddressesForUser

Request listRegisteredAddressesForUser.

Docs: [https://docs.wildduck.email/api/#operation/listRegisteredAddressesForUser](https://docs.wildduck.email/api/#operation/listRegisteredAddressesForUser)

#### listAddressesFromCommunicationRegister

Request listAddressesFromCommunicationRegister.

Docs: [https://docs.wildduck.email/api/#operation/listAddressesFromCommunicationRegister](https://docs.wildduck.email/api/#operation/listAddressesFromCommunicationRegister)

### Mailboxes

#### updateMailboxInfo

Request updateMailboxInfo.

Docs: [https://docs.wildduck.email/api/#operation/updateMailboxInfo](https://docs.wildduck.email/api/#operation/updateMailboxInfo)

#### deleteMailbox

Request deleteMailbox.

Docs: [https://docs.wildduck.email/api/#operation/deleteMailbox](https://docs.wildduck.email/api/#operation/deleteMailbox)

#### createMailbox

Request createMailbox.

Docs: [https://docs.wildduck.email/api/#operation/createMailbox](https://docs.wildduck.email/api/#operation/createMailbox)

#### getMailboxInfo

Request getMailboxInfo.

Docs: [https://docs.wildduck.email/api/#operation/getMailboxInfo](https://docs.wildduck.email/api/#operation/getMailboxInfo)

#### getUserMailboxes

Request getUserMailboxes.

Docs: [https://docs.wildduck.email/api/#operation/getUserMailboxes](https://docs.wildduck.email/api/#operation/getUserMailboxes)

### Dkim

#### deleteDkimKey

Request deleteDkimKey.

Docs: [https://docs.wildduck.email/api/#operation/deleteDkimKey](https://docs.wildduck.email/api/#operation/deleteDkimKey)

#### createOrUpdateDkimKeyForDomain

Request createOrUpdateDkimKeyForDomain.

Docs: [https://docs.wildduck.email/api/#operation/createOrUpdateDkimKeyForDomain](https://docs.wildduck.email/api/#operation/createOrUpdateDkimKeyForDomain)

#### requestDkimInformation

Request requestDkimInformation.

Docs: [https://docs.wildduck.email/api/#operation/requestDkimInformation](https://docs.wildduck.email/api/#operation/requestDkimInformation)

#### listRegisteredDkimKeys

Request listRegisteredDkimKeys.

Docs: [https://docs.wildduck.email/api/#operation/listRegisteredDkimKeys](https://docs.wildduck.email/api/#operation/listRegisteredDkimKeys)

#### resolveIdForDkimDomain

Request resolveIdForDkimDomain.

Docs: [https://docs.wildduck.email/api/#operation/resolveIdForDkimDomain](https://docs.wildduck.email/api/#operation/resolveIdForDkimDomain)

#### authenticateUser

Request authenticateUser.

Docs: [https://docs.wildduck.email/api/#operation/authenticateUser](https://docs.wildduck.email/api/#operation/authenticateUser)

#### preAuthenticationCheck

Request preAuthenticationCheck.

Docs: [https://docs.wildduck.email/api/#operation/preAuthenticationCheck](https://docs.wildduck.email/api/#operation/preAuthenticationCheck)

#### listAuthenticationEvents

Request listAuthenticationEvents.

Docs: [https://docs.wildduck.email/api/#operation/listAuthenticationEvents](https://docs.wildduck.email/api/#operation/listAuthenticationEvents)

#### requestEventInformation

Request requestEventInformation.

Docs: [https://docs.wildduck.email/api/#operation/requestEventInformation](https://docs.wildduck.email/api/#operation/requestEventInformation)

### Users

#### updateUser

Request updateUser.

Docs: [https://docs.wildduck.email/api/#operation/updateUser](https://docs.wildduck.email/api/#operation/updateUser)

#### logoutUser

Request logoutUser.

Docs: [https://docs.wildduck.email/api/#operation/logoutUser](https://docs.wildduck.email/api/#operation/logoutUser)

#### deleteUser

Request deleteUser.

Docs: [https://docs.wildduck.email/api/#operation/deleteUser](https://docs.wildduck.email/api/#operation/deleteUser)

#### createUser

Request createUser.

Docs: [https://docs.wildduck.email/api/#operation/createUser](https://docs.wildduck.email/api/#operation/createUser)

#### cancelUserDeletion

Request cancelUserDeletion.

Docs: [https://docs.wildduck.email/api/#operation/cancelUserDeletion](https://docs.wildduck.email/api/#operation/cancelUserDeletion)

#### recalculateUserQuota

Request recalculateUserQuota.

Docs: [https://docs.wildduck.email/api/#operation/recalculateUserQuota](https://docs.wildduck.email/api/#operation/recalculateUserQuota)

#### resetUserPassword

Request resetUserPassword.

Docs: [https://docs.wildduck.email/api/#operation/resetUserPassword](https://docs.wildduck.email/api/#operation/resetUserPassword)

#### getUser

Request getUser.

Docs: [https://docs.wildduck.email/api/#operation/getUser](https://docs.wildduck.email/api/#operation/getUser)

#### getUsers

Request getUsers.

Docs: [https://docs.wildduck.email/api/#operation/getUsers](https://docs.wildduck.email/api/#operation/getUsers)

#### getChangeStream

Request getChangeStream.

Docs: [https://docs.wildduck.email/api/#operation/getChangeStream](https://docs.wildduck.email/api/#operation/getChangeStream)

#### getUserIdByUsername

Request getUserIdByUsername.

Docs: [https://docs.wildduck.email/api/#operation/getUserIdByUsername](https://docs.wildduck.email/api/#operation/getUserIdByUsername)

#### getDeletedUserInfo

Request getDeletedUserInfo.

Docs: [https://docs.wildduck.email/api/#operation/getDeletedUserInfo](https://docs.wildduck.email/api/#operation/getDeletedUserInfo)

#### searchUserMessages

Request searchUserMessages.

Docs: [https://docs.wildduck.email/api/#operation/searchUserMessages](https://docs.wildduck.email/api/#operation/searchUserMessages)

### Domainaccess

#### deleteDomainFromListing

Request deleteDomainFromListing.

Docs: [https://docs.wildduck.email/api/#operation/deleteDomainFromListing](https://docs.wildduck.email/api/#operation/deleteDomainFromListing)

#### addDomainToAllowlist

Request addDomainToAllowlist.

Docs: [https://docs.wildduck.email/api/#operation/addDomainToAllowlist](https://docs.wildduck.email/api/#operation/addDomainToAllowlist)

#### addDomainToBlocklisted

Request addDomainToBlocklisted.

Docs: [https://docs.wildduck.email/api/#operation/addDomainToBlocklisted](https://docs.wildduck.email/api/#operation/addDomainToBlocklisted)

#### listAllowlistedDomains

Request listAllowlistedDomains.

Docs: [https://docs.wildduck.email/api/#operation/listAllowlistedDomains](https://docs.wildduck.email/api/#operation/listAllowlistedDomains)

#### listBlocklistedDomains

Request listBlocklistedDomains.

Docs: [https://docs.wildduck.email/api/#operation/listBlocklistedDomains](https://docs.wildduck.email/api/#operation/listBlocklistedDomains)

### Archive

#### restoreArchivedMessage

Request restoreArchivedMessage.

Docs: [https://docs.wildduck.email/api/#operation/restoreArchivedMessage](https://docs.wildduck.email/api/#operation/restoreArchivedMessage)

#### restoreArchivedMessages

Request restoreArchivedMessages.

Docs: [https://docs.wildduck.email/api/#operation/restoreArchivedMessages](https://docs.wildduck.email/api/#operation/restoreArchivedMessages)

#### listArchivedMessage

Request listArchivedMessage.

Docs: [https://docs.wildduck.email/api/#operation/listArchivedMessage](https://docs.wildduck.email/api/#operation/listArchivedMessage)

### 2fa

#### enableCustom2FA

Request enableCustom2FA.

Docs: [https://docs.wildduck.email/api/#operation/enableCustom2FA](https://docs.wildduck.email/api/#operation/enableCustom2FA)

#### disable2FA

Request disable2FA.

Docs: [https://docs.wildduck.email/api/#operation/disable2FA](https://docs.wildduck.email/api/#operation/disable2FA)

#### disableCustom2FA

Request disableCustom2FA.

Docs: [https://docs.wildduck.email/api/#operation/disableCustom2FA](https://docs.wildduck.email/api/#operation/disableCustom2FA)

#### disableTOTPAuth

Request disableTOTPAuth.

Docs: [https://docs.wildduck.email/api/#operation/disableTOTPAuth](https://docs.wildduck.email/api/#operation/disableTOTPAuth)

#### validateTOTPToken

Request validateTOTPToken.

Docs: [https://docs.wildduck.email/api/#operation/validateTOTPToken](https://docs.wildduck.email/api/#operation/validateTOTPToken)

#### enableTOTPSeed

Request enableTOTPSeed.

Docs: [https://docs.wildduck.email/api/#operation/enableTOTPSeed](https://docs.wildduck.email/api/#operation/enableTOTPSeed)

#### generateTOTPSeed

Request generateTOTPSeed.

Docs: [https://docs.wildduck.email/api/#operation/generateTOTPSeed](https://docs.wildduck.email/api/#operation/generateTOTPSeed)

### Submission

#### submitMessageForDelivery

Request submitMessageForDelivery.

Docs: [https://docs.wildduck.email/api/#operation/submitMessageForDelivery](https://docs.wildduck.email/api/#operation/submitMessageForDelivery)

### Webhooks

#### deleteWebhook

Request deleteWebhook.

Docs: [https://docs.wildduck.email/api/#operation/deleteWebhook](https://docs.wildduck.email/api/#operation/deleteWebhook)

#### createWebhook

Request createWebhook.

Docs: [https://docs.wildduck.email/api/#operation/createWebhook](https://docs.wildduck.email/api/#operation/createWebhook)

#### getRegisteredWebhooks

Request getRegisteredWebhooks.

Docs: [https://docs.wildduck.email/api/#operation/getRegisteredWebhooks](https://docs.wildduck.email/api/#operation/getRegisteredWebhooks)

### Audit

#### createNewAudit

Request createNewAudit.

Docs: [https://docs.wildduck.email/api/#operation/createNewAudit](https://docs.wildduck.email/api/#operation/createNewAudit)

#### getAuditInformation

Request getAuditInformation.

Docs: [https://docs.wildduck.email/api/#operation/getAuditInformation](https://docs.wildduck.email/api/#operation/getAuditInformation)

#### exportAuditedEmails

Request exportAuditedEmails.

Docs: [https://docs.wildduck.email/api/#operation/exportAuditedEmails](https://docs.wildduck.email/api/#operation/exportAuditedEmails)
