// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// 다른 Firebase 서비스를 사용할 경우 아래와 같이 추가할 수 있습니다.
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

// Firebase 설정 (Firebase Console에서 제공된 값 사용)
const firebaseConfig = {
  apiKey: "AIzaSyCz_kGItJpT3KBAFP598C_PuM_Q54o_CPU",
  authDomain: "petwalking-e375c.firebaseapp.com",
  projectId: "petwalking-e375c",
  storageBucket: "petwalking-e375c.firebasestorage.app",
  messagingSenderId: "824189896147",
  appId: "1:824189896147:web:633074a227f9f0d5c1db26",
  measurementId: "G-L3X2RDGP0B",
};

// Firebase 앱 초기화
const app = initializeApp(firebaseConfig);

// Firebase Authentication 인스턴스 가져오기
const auth = getAuth(app);
// Firebase Firestore, Storage 등의 서비스도 필요하다면 추가로 설정할 수 있습니다.
// const firestore = getFirestore(app);
// const storage = getStorage(app);

export { auth }; // 필요한 서비스만 export
