# node-otpless-demo

---

> ## A. OTPLessAuth Dependency
>
> You can install the OTPLess node Auth SDK using npm:

```bash
npm install otpless-node-js-auth-sdk
```

> ## B. OTPLessAuth class

The `OTPLess node Auth` Node.js SDK is a powerful library that enables you to perform authentication using the OTPLess service. This SDK simplifies the integration of OTPLess authentication into your Node.js applications.

### Methods:

---

> ### 1. Verify Auth Token

This method help to resolve `token` which is issued by `OTPLess` which return user detail
from that token also this method verify that token is valid, token should not expired and
issued by only `otpless.com`

##### Method Signature:

```javascript
const userDetail = await UserDetail.verifyToken(token, clientId, clientSecret);
```

#### Method Params:

| Params       | Data type | Mandatory | Constraints | Remarks                            |
| ------------ | --------- | --------- | ----------- | ---------------------------------- |
| token        | String    | true      |             | token which you get from `OTPLess` |
| clientId     | String    | true      |             | Your OTPLess `Client Id`           |
| clientSecret | String    | true      |             | Your OTPLess `Client Secret`       |

#### Return

Return:
Object Name: UserDetail

---

> ### 2. Decode IdToken

This method help to resolve `idToken(JWT token)` which is issued by `OTPLess` which return user detail
from that token also this method verify that token is valid, token should not expired and
issued by only `otpless.com`

##### Method Signature:

```javascript
const userDetail = await UserDetail.decodeIdToken(idToken, clientId, clientSecret)
```

#### Method Params:

| Params       | Data type | Mandatory | Constraints | Remarks                                                                      |
| ------------ | --------- | --------- | ----------- | ---------------------------------------------------------------------------- |
| idToken      | String    | true      |             | idToken which is JWT token which you get from `OTPLess` by exchange code API |
| clientId     | String    | true      |             | Your OTPLess `Client Id`                                                     |
| clientSecret | String    | true      |             | Your OTPLess `Client Secret`                                                 |

#### Return

Return:
Object Name: UserDetail

---

> ### 3. Verify Code

This method help to resolve `code` which is return from `OTPLess` which will return user detail
from that code also this method verify that code is valid, code should not expired and
issued by only `otpless.com`

##### Method Signature:

```javascript
const userDetail = await UserDetail.verifyCode(code, clientId, clientSecret);
```

#### Method Params:

| Params       | Data type | Mandatory | Constraints | Remarks                           |
| ------------ | --------- | --------- | ----------- | --------------------------------- |
| code         | String    | true      |             | code which you get from `OTPLess` |
| clientId     | String    | true      |             | Your OTPLess `Client Id`          |
| clientSecret | String    | true      |             | Your OTPLess `Client Secret`      |

#### Return

Return:
Object Name: UserDetail

---

> ### 4. Magic Link

This method help to get `magic link` which is return from `OTPLess` which will return token
and request id from that mobile number or email id. Issued by only `otpless.com`

##### Method Signature:

```javascript
const magicLinkTokens = await UserDetail.magicLink(
  mobile,
  email,
  redirectURI,
  channel,
  clientId,
  clientSecret
);
```

#### Method Params:

| Params       | Data type | Mandatory | Constraints | Remarks                                                           |
| ------------ | --------- | --------- | ----------- | ----------------------------------------------------------------- |
| mobile       | String    | false     |             | Input by your user.                                               |
| email        | String    | false     |             | Input by your user.                                               |
| redirectURI  | String    | true      |             | Your redirectURI.                                                 |
| channel      | String    | false     |             | WHATSAPP/SMS (if no channel given WHATSAPP is chosen as default)  |
| clientId     | String    | true      |             | Your OTPLess `Client Id`                                          |
| clientSecret | String    | true      |             | Your OTPLess `Client Secret`                                      |

#### Return

Return:
Object Name: magicLinkTokens

---

> ### 5. Send OTP

This method help to send OTP to your users and OTP issued by only `otpless.com`

##### Method Signature:

```javascript
const response = await UserDetail.sendOTP(phoneNumber, email, channel, hash, orderId, expiry, otpLength, clientId, clientSecret);
```

#### Method Params:

| Params       | Data type | Mandatory | Constraints | Remarks                           |
| ------------ | --------- | --------- | ----------- | --------------------------------- |
| phoneNumber  | String    | true      |             | Mobile Number of your users       |
| email        | String    | true      |             | Mail Id of your users             |
| channel      | String    | false     |             | WHATSAPP, SMS                     |
| hash         | String    | true      |             | Your mobile application Hash      |
| orderId      | String    | true      |             | Unique Order id                   |
| expiry       | Int       | false     |             | OTP expiry in sec                 |
| otpLength    | String    | false     |             | Values like 6 or 4                |
| clientId     | String    | true      |             | Your OTPLess `Client Id`          |
| clientSecret | String    | true      |             | Your OTPLess `Client Secret`      |

#### Return

> `success` (boolean): This will be `true` in case of method successfully performed operation.<br>
> `errorMessage` (String): The will be errorMessage in case of any error.<br>
> `orderId` (String): This will be your Unique Order id.<br>
> `refId` (String): The will be refId when OTP successfully send.<br>

---

> ### 6. ReSend OTP

This method help to resend OTP to your users and OTP issued by only `otpless.com`

##### Method Signature:

```javascript
const response = await UserDetail.resendOTP(orderId, clientId, clientSecret);
```

#### Method Params:

| Params       | Data type | Mandatory | Constraints | Remarks                               |
| ------------ | --------- | --------- | ----------- | --------------------------------------|
| orderId      | String    | true      |             | Unique Order id(same as send method)  |
| clientId     | String    | true      |             | Your OTPLess `Client Id`              |
| clientSecret | String    | true      |             | Your OTPLess `Client Secret`          |

#### Return

> `success` (boolean): This will be `true` in case of method successfully performed operation.<br>
> `errorMessage` (String): The will be errorMessage in case of any error.<br>
> `orderId` (String): This will be your Unique Order id.<br>
> `refId` (String): The will be refId when OTP successfully send.<br>

---

> ### 7. Verify OTP

This method help to Verify OTP to your users and OTP issued by only `otpless.com`

##### Method Signature:

```javascript
const response = await UserDetail.verifyOTP(email, phoneNumber, orderId, otp, clientId, clientSecret);
```

#### Method Params:

| Params       | Data type | Mandatory | Constraints | Remarks                               |
| ------------ | --------- | --------- | ----------- | --------------------------------------|
| email        | String    | true      |             | Mail Id of your users                 |
| phoneNumber  | String    | true      |             | Mobile Number of your users           |
| orderId      | String    | true      |             | Unique Order id                       |
| otp          | String    | true      |             | Enter otp here                        |
| clientId     | String    | true      |             | Your OTPLess `Client Id`              |
| clientSecret | String    | true      |             | Your OTPLess `Client Secret`          |

#### Return

> `isOTPVerified` (boolean): This will be `true` in case of OTP verified.<br>
> `reason` (String): The will be errorMessage in case of OTP doesn't verified.<br>

---

> ### UserDetail Object Fields:
>
> `success` (boolean): This will be `true` in case of method successfully performed operation.<br>
> `authTime` (Long, required): The time when authentication was completed.<br>
> `phoneNumber` (String, required): The user's phone number.<br>
> `countryCode` (String, required): The country code of user's phone number.<br> 
> `nationalPhoneNumber` (String, required): The user's phone number without country code.<br> 
> `email` (String, required): The user's email address.<br> 
> `name` (String, required): The user's full name.<br>

> ### MagicLinkTokens Object Fields:
>
> `success` (boolean): This will be `true` in case of method successfully performed operation.<br> 
> `requestIds` (List, required): List of Token and Type of AUth.<br>
> `type` (String, required): Auth type.<br> 
> `value` (String, required): Token value.<br>

### Error case:

`success` (boolean): This will be `false`. The method is failed to perform.<br>
`errorMessage` (String): The message contains error information.<br>

### Example of usage

```javascript
const { UserDetail } = require('otpless-node-js-auth-sdk');

const idToken = "..."; // Replace with your ID token
const clientId = "..."; // Replace with your client ID
const clientSecret = "..."; // Replace with your client secret

const userDetail = await UserDetail.decodeIdToken(
  idToken,
  clientId,
  clientSecret
);
console.log("User Details:", userDetail);
```

This method allows you to decode and verify OTPLess tokens and retrieve user information for integration into your
node js application.
