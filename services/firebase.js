// services/firebase.js
import { initializeApp } from 'firebase/app';
import { initializeAuth, getAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { sendPasswordResetEmail } from 'firebase/auth';
import { Alert } from 'react-native';  // Import Alert for showing alerts
import { useRouter } from 'expo-router'; // Assuming you use expo-router for navigation

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANg6pLx0zR5Ajg4FFjFDPvaxPNy1O2njU",
  authDomain: "loadinbaylocator.firebaseapp.com",
  projectId: "loadinbaylocator",
  storageBucket: "loadinbaylocator.appspot.com",
  messagingSenderId: "836229091487",
  appId: "1:836229091487:web:45453d6bb97f00ce1892aa",
  measurementId: "G-SRQMY42FM6"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth with AsyncStorage for persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

// Initialize Firestore
const firestore = getFirestore(app); // or use getDatabase for Realtime Database

// Password reset function
const handlePasswordReset = (email) => {
  if (!email) {
    Alert.alert('Error', 'Please enter your email address');
    return;
  }

  sendPasswordResetEmail(auth, email)
    .then(() => {
      Alert.alert('Success', 'Password reset email sent');
      router.back(); // Navigate back to the previous screen
    })
    .catch((error) => {
      Alert.alert('Error', error.message);
    });
};

export { auth, firestore, handlePasswordReset };
