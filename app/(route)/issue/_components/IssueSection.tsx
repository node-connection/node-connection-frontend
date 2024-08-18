"use client";

import useInput from "@/app/_hooks/useInput";
import { useState } from "react";
import { useDaumPostcodePopup, Address } from "react-daum-postcode";

const IssueSection = () => {
  const [baseAddress, setBaseAddress] = useState("");
  const detailAddress = useInput({ input: "" });

  const open = useDaumPostcodePopup();

  const handleComplete = (data: Address) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    setBaseAddress(fullAddress);
  };

  const handleAddressSearch = async () => {
    await open({ onComplete: handleComplete });
  };

  const handleReset = () => {
    setBaseAddress("");
    detailAddress.setValue("");
  };

  const handleSubmit = () => {
    // TODO: API 호출

    console.log({
      baseAddress,
      detailAddress: detailAddress.value,
    });
  };

  return (
    <div className="flex w-full flex-col items-center py-5">
      <div className="flex w-full flex-col">
        <h3 className="mb-2 text-lg font-bold">주소 검색</h3>
        {baseAddress ? (
          <>
            <div className="w-full rounded-lg bg-gray-200 px-4 py-3 text-black">
              {baseAddress}
            </div>
            <input
              className="mt-2 w-full rounded-lg border border-gray-200 bg-white px-4 py-3"
              placeholder="상세주소"
              onChange={detailAddress.onChange}
              value={detailAddress.value}
              type="text"
            />
            <div className="flex gap-2">
              <button
                className="mt-2 w-full rounded-lg bg-gray-200 py-3 text-black"
                onClick={handleReset}
                type="button"
              >
                재설정
              </button>
              <button
                className="mt-2 w-full rounded-lg bg-blue-500 py-3 text-white"
                onClick={handleSubmit}
                type="button"
              >
                검색
              </button>
            </div>
          </>
        ) : (
          <button
            className="w-full rounded-lg bg-blue-500 py-3 text-white"
            onClick={handleAddressSearch}
            type="button"
          >
            주소 찾기
          </button>
        )}
      </div>
    </div>
  );
};

export default IssueSection;
