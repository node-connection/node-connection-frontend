"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/login");
  };

  const handleAuth = () => {
    handleLogin();
  };

  return (
    <nav className="sticky top-0 z-10 flex items-center justify-center bg-white bg-opacity-30 px-4 py-3 text-black backdrop-blur-md md:p-4">
      <div className="flex w-full max-w-[1140px]">
        <Link
          className="my-auto mr-auto flex whitespace-nowrap text-sm font-bold md:text-lg"
          href="/"
        >
          node-connection
        </Link>
        <Link
          className="my-auto px-1 text-sm text-[#4E5968] md:px-4 md:text-base"
          href="/issue"
        >
          발급하기
        </Link>
        <Link
          className="my-auto px-1 text-sm text-[#4E5968] md:px-4 md:text-base"
          href="/history"
        >
          발급내역 보기
        </Link>
        <button
          className="my-auto ml-2 rounded-lg bg-blue-500 px-3 py-2 text-sm text-white md:ml-4 md:text-base"
          onClick={handleAuth}
          type="button"
        >
          로그아웃
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
