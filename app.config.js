
import 'dotenv/config.js'
export default {
  "expo": {
    "name": "chatapp_native",
    "slug": "chatapp_native",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      }
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    exstra: {
      apiKey: process.env.ApiKey,
      authDomain: process.env.AuthDomain,
      projectId: process.env.ProjectId,
      storageBucket: process.env.StorageBucket,
      messagingSenderId: process.env.MessagingSenderId,
      appId: process.env.AppId
    }
  }
}
