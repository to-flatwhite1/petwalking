import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, enableIndexedDbPersistence } from "firebase/firestore";

// Firebase 설정
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

// Firebase Authentication, Firestore 인스턴스 가져오기
const auth = getAuth(app);
const db = getFirestore(app);

// IndexedDB persistence 활성화

  enableIndexedDbPersistence(db)
  .catch((err) => {
    if (err.code === 'failed-precondition') {
      console.log("Persistence failed: multiple tabs open.");
    } else if (err.code === 'unimplemented') {
      console.log("Persistence is not available in this browser.");
    }
  });


export { auth, db };
