# Build APK — Beginner Steps

1. Install Android Studio.
2. Extract this ZIP.
3. Open Android Studio.
4. Select **Open** and choose the `android` folder.
5. Wait for Gradle sync to finish.
6. Select **Build → Build Bundle(s) / APK(s) → Build APK(s)**.
7. Android Studio will show the APK location.
8. For a production APK use **Build → Generate Signed App Bundle / APK**.

The Android app loads the included OnePay web application from Android assets.

Real payment processing is NOT included yet. Before publishing, connect:
- Firebase Authentication/backend
- Firestore/database if required
- Payment provider API
- Server-side verification
- Webhooks
- Secure API keys
