# reCAPTCHA Setup Instructions

## Overview

The contact form now includes Google reCAPTCHA v2 verification for enhanced security. Users must complete a CAPTCHA after clicking "Send Message" to verify they're not a robot.

## How to Set Up reCAPTCHA

1. **Get reCAPTCHA Keys**:
   - Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin/create)
   - Click "Create" to add a new site
   - Choose "reCAPTCHA v2" and select "I'm not a robot" Checkbox
   - Add your domain (e.g., `localhost` for development, `yourdomain.com` for production)
   - Accept the terms and submit

2. **Update Environment Variables**:
   Replace the placeholder values in `.env.local`:

   ```bash
   NEXT_PUBLIC_RECAPTCHA_SITE_KEY="your_actual_site_key_here"
   RECAPTCHA_SECRET_KEY="your_actual_secret_key_here"
   ```

3. **Domain Configuration**:
   - For development: Add `localhost` and `127.0.0.1`
   - For production: Add your actual domain (e.g., `yourportfolio.com`)

## User Experience Flow

1. User fills out the contact form
2. User clicks "Send Message"
3. reCAPTCHA appears with the message "Please verify that you're not a robot"
4. Button text changes to "Verify & Send Message"
5. User completes the CAPTCHA
6. Form submits with server-side verification
7. Email is sent if verification passes

## Security Features

- **Client-side validation**: reCAPTCHA must be completed before submission
- **Server-side verification**: API route verifies the token with Google's servers
- **Error handling**: Clear error messages for failed verifications
- **Automatic reset**: CAPTCHA resets on errors or after successful submission

## Styling

The reCAPTCHA widget uses the dark theme to match the portfolio's design aesthetic.
