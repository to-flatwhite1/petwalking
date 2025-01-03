"use client";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/lib/firebase";  // Firestore 추가
import { setDoc, doc } from "firebase/firestore";  // Firestore 관련 함수 추가
import { useRouter } from "next/navigation";  // useRouter 훅을 사용하여 라우팅
import { Flex } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { Piedra } from "next/font/google";

const piedra = Piedra({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");  // 닉네임 상태 추가
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);  // 로딩 상태 추가
  const router = useRouter();  // useRouter 훅을 사용하여 라우팅

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 로딩 상태 시작
    setLoading(true);
    setError(""); // 이전 오류 메시지 초기화

    try {
      // Firebase Authentication으로 회원가입
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Firestore에 사용자 정보 저장
      const userRef = doc(db, "users", user.uid); // 'users' 컬렉션에 유저 UID로 문서 생성
      await setDoc(userRef, {
        email: user.email,
        nickname: nickname,
      });

      // 회원가입 성공 후 알림 메시지
      alert("회원가입 성공!");

      // 상태 초기화
      setEmail("");
      setPassword("");
      setNickname("");  // 닉네임 초기화

      // Firestore 작업이 완료된 후, 메인 화면으로 리디렉션
      router.push("/");  // 홈 페이지로 리디렉션

    } catch (err) {
      // 에러 처리
      console.error(err);  // 오류를 콘솔에서 확인
      setError("회원가입 실패. 다시 시도해 주세요.");
    } finally {
      // 로딩 상태 종료
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Flex justify="center" align="center" gap="5px">
          <Image
            alt="Logo"
            src="/images/common/pet.png"
            width={100}
            height={100}
            className="h-16 w-auto"
          />
          <Flex>
            <div className={`leading-3 ${piedra.className} text-2xl`}>
              pet Walking
            </div>
          </Flex>
        </Flex>
        <h2 className="mt-6 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Create your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="nickname" className="block text-sm/6 font-medium text-gray-900">
                Nickname
              </label>
              <div className="mt-2">
                <input
                  id="nickname"
                  name="nickname"
                  type="text"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              disabled={loading}  // 로딩 중 버튼 비활성화
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {loading ? "Signing up..." : "Sign up"}  {/* 로딩 중 메시지 변경 */}
            </button>
          </form>

          <div>
            <div className="relative mt-10">
              <div aria-hidden="true" className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm/6 font-medium">
                <span className="bg-white px-6 text-gray-900">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              {/* Google and GitHub buttons */}
            </div>
          </div>
        </div>

        <p className="mt-10 text-center text-sm/6 text-gray-500">
          Already a member?{" "}
          <Link
            href="/sign_in"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
