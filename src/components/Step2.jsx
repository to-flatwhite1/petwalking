"use client";
import { useState, useEffect } from "react";
import { auth, db } from "@/lib/firebase"; // Firebase 설정 가져오기
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore"; // Firestore에서 문서 가져오기

const Step2 = () => {
  const [user, setUser] = useState(null); // 로그인한 사용자 상태
  const [nickname, setNickname] = useState(""); // 닉네임 상태 관리
  const [loading, setLoading] = useState(true); // 로딩 상태 관리
  const [error, setError] = useState(""); // 에러 상태 관리
  const [offline, setOffline] = useState(false); // 네트워크 상태 관리

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user); // 사용자가 로그인하면 user 정보 설정

        // 네트워크 상태 확인
        if (!navigator.onLine) {
          setOffline(true); // 오프라인 상태 표시
        } else {
          setOffline(false); // 온라인 상태
        }

        try {
          if (!offline) {
            // 네트워크가 연결되어 있을 때 Firestore에서 데이터 요청
            const userRef = doc(db, "users", user.uid);
            const userDoc = await getDoc(userRef);
            if (userDoc.exists()) {
              setNickname(userDoc.data().nickname);
            } else {
              setError("사용자 정보가 없습니다.");
              setNickname(""); // 사용자 정보가 없으면 빈 문자열 설정
            }
          } else {
            // 오프라인 상태에서 사용자에게 알림
            setError("오프라인 상태입니다. 나중에 다시 시도해 주세요.");
            setNickname("");
          }
        } catch (error) {
          console.error("Error fetching nickname:", error);
          setError("닉네임을 가져오는 데 오류가 발생했습니다.");
          setNickname(""); // 에러 발생 시 닉네임 초기화
        }
      } else {
        setUser(null);
        setNickname("");
      }
      setLoading(false); // 로딩 종료
    });

    return () => unsubscribe();
  }, [offline]);

  if (loading) {
    return <div>Loading...</div>; // 로딩 중일 때 표시할 UI
  }

  return (
    <div className="max-w-[390px]">
      {/* 로그인한 사용자만 보이게 하는 부분 */}
      {user && nickname && (
        <div className="font-bold mb-4">
          {nickname}님 산책 걸음 수 입니다! {/* 닉네임 표시 */}
        </div>
      )}

      {/* 로그인되지 않으면 다른 메시지 */}
      {!user && (
        <div className="font-bold">
          오늘도 함께 즐겁게 산책 나가 볼까요?
        </div>
      )}

      {/* 에러가 발생한 경우 */}
      {error && <div className="text-red-500">{error}</div>}

      {/* 네트워크 상태가 오프라인인 경우 */}
      {offline && <div className="text-red-500">현재 오프라인 상태입니다.</div>}
    </div>
  );
};

export default Step2;
