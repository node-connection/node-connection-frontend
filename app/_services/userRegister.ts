"use server";

import callApi from "../_utils/callApi";
import getSessionToken from "../_utils/getSessionToken";

type UserLoginProps = {
  username: string;
  email: string;
  phoneNumber: string;
  courtCode?: string;
};

const userRegister = async ({
  username,
  email,
  phoneNumber,
  courtCode,
}: UserLoginProps) => {
  const sessionToken = await getSessionToken();

  const res = await callApi({
    endpoint: "/user/register",
    method: "POST",
    token: sessionToken,
    body: {
      username,
      email,
      phoneNumber,
      courtCode: courtCode || null,
    },
  });

  console.log(res);

  return res;
};

export default userRegister;
