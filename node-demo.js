const express = require('express');
const { UserDetail } = require('otpless-node-js-auth-sdk');
const app = express();

const clientId = "kp******ri"; // Replace with Your OTPLess `Client Id`
const clientSecret = "4d********qx"; // Replace with Your OTPLess `Client Secret`
const phoneNumber = "91*********"; // Replace with your mobile number
const email = 'sa******8@gmail.com'; // Replace with your email ID
const redirectURI = 'http://localhost:3000'; // Replace with your redirect url
const channel = 'WHATSAPP';// you can use SMS
const token = 'token'; // token received from magicLinkTokens
const code = 'code'; // code received on your specified redirect URI 
const hash = 'hash'; // Your mobile application Hash
const orderId = 'orderId'; // Unique Order id.
const expiry = '5'; // OTP expiry in sec
const otpLength = '4'; // Values like 6 or 4
const otp = '4'; // Enter OTP here

app.get('/magic-link-token', async (req, res) => {
  try {

    const magicLinkTokens = await UserDetail.magicLink(phoneNumber,email,redirectURI,channel,clientId,clientSecret);
    console.log("MagicLink Tokens Details:", magicLinkTokens);
    res.json(magicLinkTokens);

  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'An error occurred in magic-link-token' });
  }
});

app.get('/verify-token', async (req, res) => {
    try {

        const userDetailUsingToken = await UserDetail.verifyToken(token,clientId,clientSecret);
        console.log("User Details:", userDetailUsingToken);
        res.json(userDetailUsingToken);

    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: 'An error occurred in verify-token' });
    }
});

app.get('/verify-code', async (req, res) => {
    try {

        const userDetailUsingCode = await UserDetail.verifyCode(code, clientId, clientSecret);
        console.log("User Details:", userDetailUsingCode);
        res.json(userDetailUsingCode);

    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: 'An error occurred in verify-code' });
    }
});

app.get('/send-OTP', async (req, res) => {
    try {
  
        const sendOTP = await UserDetail.sendOTP(phoneNumber, email, channel, hash, orderId, expiry, otpLength, clientId, clientSecret);
        console.log("send otp response:", sendOTP);
        res.json(sendOTP);

    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: 'An error occurred in send-OTP' });
    }
});

app.get('/send-OTP', async (req, res) => {
    try {
  
        const sendOTP = await UserDetail.sendOTP(phoneNumber, email, channel, hash, orderId, expiry, otpLength, clientId, clientSecret);
        console.log("send otp response:", sendOTP);
        res.json(sendOTP);

    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: 'An error occurred in send-OTP' });
    }
});

app.get('/resend-OTP', async (req, res) => {
    try {
  
        const response = await resendOTP(orderId, clientId, clientSecret);
        console.log("resend otp response:", response);
        res.json(response);

    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: 'An error occurred in send-OTP' });
    }
});

app.get('/verify-OTP', async (req, res) => {
    try {
  
        const response = await verifyOTP(email, phoneNumber, orderId, otp, clientId, clientSecret);
        console.log("verify otp response:", response);
        res.json(response);

    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: 'An error occurred in send-OTP' });
    }
});


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));