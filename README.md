# SNK OnePay

Complete demo payment platform package.

## Included
- Premium public landing page
- Checkout
- Success / failed pages
- Admin login
- Admin dashboard
- Transactions
- Websites
- Payment links
- Customers
- Revenue
- Settings
- PWA manifest + service worker
- Android Studio WebView wrapper project

## Demo admin
Email: admin@snkonepay.com
Password: SNKOnePay@2026

## Important
This package is a frontend/demo system. Real bKash/Nagad/Card payments require a secure backend, provider credentials, transaction verification and webhooks. Never put secret payment credentials in GitHub Pages frontend code.

## APK
The ZIP contains an Android Studio project under `android/`.
Open the `android/` folder in Android Studio, wait for Gradle sync, then:
Build > Build Bundle(s) / APK(s) > Build APK(s)

The generated APK will normally be under:
`android/app/build/outputs/apk/debug/app-debug.apk`

For production, use a signed release APK and replace demo authentication/payment logic with secure backend/Firebase Auth/provider APIs.
