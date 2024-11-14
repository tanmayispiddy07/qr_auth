# QR Authentication App for Event Security 🚀

A web-based QR code authentication system developed for the Freshers Party event, designed to streamline and secure student entry using unique QR codes. This system ensures that only valid students gain entry while flagging any malicious access attempts.

## 📌 Features

- **Real-Time Verification**: Security staff scan QR codes at the entry point, and the app instantly validates each student’s entry status.
- **Seamless User Experience**: Simple and intuitive interface for easy use by security personnel.
- **Secure Event Management**: Only students with valid QR codes are granted access; invalid attendees are denied entry.
- **Enhanced Security**: Malicious attempts are flagged in real-time, preventing unauthorized access.

## 🛠️ How It Works

1. **QR Code Generation**: Unique QR codes are sent to each student.
2. **Scanning at Entry**: Security staff scan these codes at the entry point.
3. **Instant Validation**: The app connects with a MongoDB database to validate each QR code.
4. **Access Control**: 
   - ✅ Valid students are granted entry.
   - 🚫 Invalid attendees are denied access.
   - ⚠️ Malicious attempts are flagged for extra security.

## 🔧 Tech Stack

- **Frontend**: HTML (index.html)
- **Backend**: Node.js, Express (index.js)
- **Database**: MongoDB for storing and validating QR code data

## 📂 Project Structure

- `index.html`: The frontend of the application, providing an interface for QR code scanning.
- `index.js`: Backend logic to manage QR code validation and database connectivity.
- **MongoDB Integration**: Handles data management, including allowed and disallowed lists.

## 🎉 Project Background

This project was developed for the Department of CSE at RGUKT NUZVID's Freshers Party. It leverages skills in web development, database management, and security protocols to ensure a smooth, safe entry process for students.

Special thanks to **Vinuthna Sneha** for her support throughout the project!

## 🚀 Getting Started

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/qr-authentication-app.git
   cd qr-authentication-app
