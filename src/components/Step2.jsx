"use client";
import { Grid, GridItem } from "@chakra-ui/react";
import { auth } from "@/lib/firebase";  // Firebase 설정을 가져옵니다.
import { onAuthStateChanged } from "firebase/auth";
import Image from "next/image";
import { useState, useEffect } from "react";

const Step2 = () => {
    const [user, setUser] = useState(null);  // 현재 로그인한 사용자 상태 관리
  
    useEffect(() => {
        // Firebase 인증 상태 변화를 감지
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // 사용자가 로그인하면 user 정보가 전달됩니다.
                setUser(user);
            } else {
                // 로그인하지 않으면 user는 null
                setUser(null);
            }
        });
    
        // 컴포넌트가 언마운트 될 때, 구독 해제
        return () => unsubscribe();
    }, []);
  
    return (
        <div className="max-w-[390px]">
            {/* 로그인한 사용자만 보이게 하는 부분 */}
            {user && (
                <div className="font-bold mb-4">
                    {user.email}님 산책 걸음 수 입니다!
                </div>
            )}

            {/* 로그인되지 않으면 다른 메시지를 안 보이게 하기 */}
            {!user && (
                <div className="font-bold ">
                  오늘도 함께 즐겁게 산책 나가 볼까요?
                </div>
            )}

            {/* 나머지 컴포넌트 UI */}
        </div>
    );
};

export default Step2;
