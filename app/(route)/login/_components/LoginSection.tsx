"use client";

import useInput from "@/app/_hooks/useInput";
import Link from "next/link";

const LoginSection = () => {
  const phoneNumber = useInput({ input: "" });
  const password = useInput({ input: "" });

  return (
    <div className="my-4 flex flex-col">
      <input
        className="mt-2 w-full rounded-lg border border-gray-200 bg-white px-4 py-3"
        placeholder="휴대전화번호"
        onChange={phoneNumber.onChange}
        value={phoneNumber.value}
        type="text"
      />
      <input
        className="mt-2 w-full rounded-lg border border-gray-200 bg-white px-4 py-3"
        placeholder="비밀번호"
        onChange={password.onChange}
        value={password.value}
        type="text"
      />
      <button
        className="mt-2 w-full rounded-lg bg-blue-500 py-3 text-white"
        type="button"
      >
        로그인
      </button>
      <div className="mx-auto mt-2 flex">
        <div>계정이 없으신가요?</div>
        <Link className="ml-2 font-bold underline" href="/join">
          회원가입
        </Link>
      </div>
    </div>
  );
};

export default LoginSection;
