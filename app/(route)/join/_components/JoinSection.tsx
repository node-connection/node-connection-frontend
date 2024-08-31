"use client";

import useInput from "@/app/_hooks/useInput";
import { useState } from "react";

const JoinSection = () => {
  const [organization, setOrganization] = useState("ViewerMSP");
  const registryCode = useInput({ input: "" });
  const id = useInput({ input: "" });
  const password = useInput({ input: "" });
  const passwordConfirm = useInput({ input: "" });
  const username = useInput({ input: "" });
  const email = useInput({ input: "" });
  const phoneNumber = useInput({ input: "" });

  const handleViewer = () => {
    if (organization === "ViewerMSP") return;
    setOrganization("ViewerMSP");
  };

  const handleRegistry = () => {
    if (organization === "RegistryMSP") return;
    setOrganization("RegistryMSP");
  };

  // TODO: Add handleJoin logic
  // const handleJoin = async () => {};

  return (
    <div className="my-4 flex flex-col">
      <div className="mb-1 border-b border-[#E5E7EB] pb-3">
        <div className="flex gap-2">
          <button
            className={`mt-2 w-full rounded-lg py-3 transition-all duration-300 ${organization === "ViewerMSP" ? "cursor-default border border-blue-500 bg-blue-500 text-white" : "border border-zinc-200 bg-white text-black"}`}
            onClick={handleViewer}
            type="button"
          >
            개인
          </button>
          <button
            className={`mt-2 w-full rounded-lg py-3 transition-all duration-300 ${organization === "RegistryMSP" ? "cursor-default border border-blue-500 bg-blue-500 text-white" : "border border-zinc-200 bg-white text-black"}`}
            onClick={handleRegistry}
            type="button"
          >
            등기소
          </button>
        </div>
        {organization === "RegistryMSP" && (
          <input
            className="mt-2 w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 transition-all duration-300 focus:border-blue-500"
            placeholder="등기소 인증코드"
            onChange={registryCode.onChange}
            value={registryCode.value}
            type="text"
          />
        )}
      </div>
      <div className="mb-1 border-b border-[#E5E7EB] pb-3">
        <input
          className="mt-2 w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 transition-all duration-300 focus:border-blue-500"
          placeholder="아이디"
          onChange={id.onChange}
          value={id.value}
          type="text"
        />
        <input
          className="mt-2 w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 transition-all duration-300 focus:border-blue-500"
          placeholder="비밀번호"
          onChange={password.onChange}
          value={password.value}
          type="text"
        />
        <input
          className="mt-2 w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 transition-all duration-300 focus:border-blue-500"
          placeholder="비밀번호 확인"
          onChange={passwordConfirm.onChange}
          value={passwordConfirm.value}
          type="text"
        />
      </div>
      <input
        className="mt-2 w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 transition-all duration-300 focus:border-blue-500"
        placeholder="이름"
        onChange={username.onChange}
        value={username.value}
        type="text"
      />
      <input
        className="mt-2 w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 transition-all duration-300 focus:border-blue-500"
        placeholder="이메일"
        onChange={email.onChange}
        value={email.value}
        type="text"
      />
      <input
        className="mt-2 w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 transition-all duration-300 focus:border-blue-500"
        placeholder="전화번호"
        onChange={phoneNumber.onChange}
        value={phoneNumber.value}
        type="text"
      />
      <button
        className="mt-3 w-full rounded-lg bg-blue-500 py-3 text-white transition-all duration-300 hover:bg-blue-600"
        // onClick={handleJoin}
        type="button"
      >
        회원가입
      </button>
    </div>
  );
};

export default JoinSection;
