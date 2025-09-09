## 📖 Table of Contents

- [About The Project](#-about-the-project)
- [✨ Features](#-features)
- [📸 Screenshots](#-screenshots)
- [🛠️ Technologies Used](#-technologies-used)
- [🚀 Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [📜 Available Scripts](#-available-scripts)
- [📂 Project Structure](#-project-structure)
- [🤝 Contributing](#-contributing)
- [📝 License](#-license)
- [ acknowledgements](#-acknowledgements)

---

## 📍 About WatchIT Mobile App

Watchit is your ultimate movie discovery companion, powered by the extensive TMDB API. Browse an ever-growing library of films from around the world, effortlessly search for your favorites, and stay up-to-date with the latest trending movies. Dive deep into movie details with comprehensive metadata, including ratings, duration, release dates, and more. Finding your next movie night pick has never been easier.

---

## ✨ Features

Watchit is packed with features designed for the ultimate movie discovery experience.

*   **Real-time data**:
    *   Fetching and displaying real-time movie data

*   **Home Page**:
    *   Featured and discover movies

*   **Comprehensive Movie Database:**
    *   Powered by the extensive [TMDB API](https://www.themoviedb.org/documentation/api), providing access to a massive library of films from around the world.
    *   Browse curated lists such as **Trending**, **Upcoming**, and **Top Rated** movies to always find something new to watch.

*   **Advanced Search Functionality:**
    *   An intuitive and powerful search engine to instantly find any movie by its title.
    *   Get real-time search results as you type for a fast and efficient experience.

*   **Detailed Movie Insights:**
    *   Dive deep into any film with a dedicated details screen that provides rich metadata, including:
        *   High-resolution movie posters and backdrops.
        *   A concise and informative synopsis.
        *   Official trailers and video clips.
        *   User ratings and popularity scores.
        *   Runtime, release date, and original language.
        *   A full list of cast and crew members.

*   **User Authentication & Personalization (with Appwrite):**
    *   Secure user account creation and login functionality.
    *   Bookmark your favorite movies and save them to a personalized watchlist for easy access later.

*   **Modern & Intuitive User Experience:**
    *   **Sleek UI:** A visually stunning and easy-to-navigate interface built with **NativeWind**, providing a premium feel.
    *   **Smooth Animations:** Fluid screen transitions and interactions powered by **React Native Reanimated**, making the app a delight to use.
    *   **Haptic Feedback:** Subtle tactile feedback on key interactions enhances the user experience, making it more immersive.
    *   **Seamless Navigation:** Effortless browsing between sections with a clean bottom tab navigator and a logical screen hierarchy managed by **Expo Router**.

*   **Built on a Performant & Modern Stack:**
    *   **Cross-Platform:** Developed with **React Native & Expo** to ensure a consistent and smooth performance on both Android and iOS from a single codebase.
    *   **Optimized Image Handling:** Fast and efficient loading of movie posters and images using **Expo Image**, even on slower network connections.

---

## 📸 Screenshots

Here are some sneak peeks of the application.

|                Home Screen                |              Movie Details              |
| :---------------------------------------: | :---------------------------------------: |
|<img width="1170" height="2532" alt="IMG_0219" src="https://github.com/user-attachments/assets/d5d7c70e-48c0-4ce0-a2bb-4f13836607ff" /> | <img width="1170" height="2532" alt="IMG_0221" src="https://github.com/user-attachments/assets/a05ad210-a9cc-4072-afb7-0b6b5715f46e" /> 
<img width="1170" height="2532" alt="IMG_0222" src="https://github.com/user-attachments/assets/089d7499-c545-4c3e-aee2-bea4afb7fcff" /> |
| **Search & Discovery**                    | **Trending Movies**                          |
| <img width="1170" height="2532" alt="IMG_0224" src="https://github.com/user-attachments/assets/88d1c0e1-3bbe-4db0-a4f9-d2badd2fe979" />
<img width="1170" height="2532" alt="IMG_0225" src="https://github.com/user-attachments/assets/8f55d2e3-72aa-4598-8683-f13e2c6dade7" /> | <img width="1170" height="2532" alt="IMG_0219" src="https://github.com/user-attachments/assets/a33d8586-4a04-4ca5-911a-8410e15af271" /> |


<img width="1860" height="940" alt="Screenshot from 2025-09-08 11-28-05" src="https://github.com/user-attachments/assets/f984d789-ef75-4347-a4ba-ecd02d60f1f1" />


---

## 🛠️ Technologies Used

This project is built with a modern stack of technologies to ensure a high-quality and maintainable codebase.

### Core
- **[React](https://reactjs.org/):** A JavaScript library for building user interfaces.
- **[React Native](https://reactnative.dev/):** A framework for building native apps using React.
- **[Expo](https://expo.dev/):** A platform for making universal React applications.

### Navigation
- **[React Navigation](https://reactnavigation.org/):** A comprehensive navigation library for React Native.
- **[Expo Router](https://docs.expo.dev/router/introduction/):** A file-based router for React Native and web applications.

### Styling & UI
- **[NativeWind](https://www.nativewind.dev/):** A utility-first styling library for React Native.
- **[Expo Image](https://docs.expo.dev/versions/latest/sdk/image/):** A performant, cross-platform image component.
- **[Expo Blur](https://docs.expo.dev/versions/latest/sdk/blur-view/):** A component for creating blurred view effects.
- **[Expo Vector Icons](https://docs.expo.dev/guides/icons/):** A library of customizable icons.

### Backend & Services
- **[Appwrite](https://appwrite.io/):** An open-source backend platform for building web, mobile, and flutter applications.
- **[React Native Appwrite](https://www.npmjs.com/package/react-native-appwrite):** The official Appwrite SDK for React Native.

### State Management & Animations
- **[React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/):** A library for creating smooth animations and interactions.
- **[React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/):** A declarative API for handling touches and gestures.

### Development Tools
- **[ESLint](https://eslint.org/):** A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript.
- **[TypeScript](https://www.typescriptlang.org/):** A typed superset of JavaScript that compiles to plain JavaScript.

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm installed on your machine.
- **npm**
  ```sh
  npm install npm@latest -g
  ```
- **Expo CLI**
  ```sh
  npm install -g expo-cli
  ```

### Installation

1. **Clone the repo**
   ```sh
   git clone [https://github.com/your_username/mobile_movie_app.git](https://github.com/Abdelkader-gnichi/movies_mobile_app.git)
   ```
2. **Navigate to the project directory**
   ```sh
   cd mobile_movie_app
   ```
3. **Install NPM packages**
   ```sh
   npm install
   ```
4. **Start the development server**
   ```sh
   npx expo start
   ```

This will start the Metro bundler. You can then run the app on a physical device using the Expo Go app or on an emulator/simulator.

---

## 📜 Available Scripts

In the project directory, you can run the following commands:

- **`npm start`**: Starts the Metro bundler for Expo.

- **`npm run android`**: Runs the app on a connected Android device or emulator.

- **`npm run ios`**: Runs the app on the iOS simulator.

- **`npm run web`**: Runs the app in a web browser.

- **`npm run lint`**: Lints the project files using ESLint to check for code quality and style.

- **`npm run reset-project`**: Resets the project to a fresh state by moving the starter code.

---

## 📂 Project Structure

The project follows a feature-based structure to keep the codebase organized and scalable.

```
mobile_movie_app/
├── app/                  # Main directory for all the app screens and routes
├── assets/               # Static assets like images, fonts, etc.
├── components/           # Reusable UI components
├── constants/            # Constant values used throughout the app
├── lib/                  # Utility functions and helper scripts
├── scripts/              # Additional scripts for the project
├── babel.config.js       # Babel configuration
├── package.json          # Project dependencies and scripts
└── tailwind.config.js    # NativeWind (Tailwind CSS) configuration
```

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 🙌 Acknowledgements

A big thanks to the creators and maintainers of the amazing open-source libraries and tools used in this project.
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [NativeWind](https://www.nativewind.dev/)
- [Appwrite](https://appwrite.io/)
- And all other dependencies listed in the `package.json`.
