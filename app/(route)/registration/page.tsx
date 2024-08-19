import Navbar from "../_components/Navbar";

const RegistrationPage = () => {
  return (
    <main className="h-full w-full">
      <Navbar />
      <div className="flex flex-col items-center px-3 xl:px-0">
        <div className="flex w-full max-w-[1248px] flex-col items-center justify-center">
          <div className="flex w-full flex-col items-center border-b border-[#E5E7EB] py-5">
            <h1 className="text-2xl font-bold md:text-3xl">발급하기</h1>
            <h2 className="mt-3 text-base text-[#4E5968] md:text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </h2>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RegistrationPage;
