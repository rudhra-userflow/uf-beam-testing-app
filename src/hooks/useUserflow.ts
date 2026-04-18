import { useEffect } from "react";
import userflow from "userflow.js";
import { useNavigate } from "react-router-dom";
import { createRandomUser } from "./createRandomUser";
import test from "node:test";

const {
  userId,
  username,
  email,
  signedUpAt,
  firstname,
  lastname,
  phone,
  address,
  avatar,
  company,
  company_id,
} = createRandomUser();

const randomNumbersArray = () =>
  Array.from({ length: 3 }, () => Math.floor(Math.random() * 1000));

const useUserflow = async () => {
  const navigate = useNavigate();

  useEffect(() => {
    userflow.init("ct_uevqk6bpgvc7lc3pihhm5mpkoi");
    userflow.setCustomNavigate((url) => {
      navigate(url);
    });
    userflow.identify(userId, {
      name: username,
      email: email,
      signed_up_at: signedUpAt,
      demo: ["abc", "xyz", "pqr"],
      firstname: firstname,
      lastname: lastname,
      phone: phone,
      address: address,
      avatar: avatar,
      locale_code: "en-US",
      company_name: company,
      num_list: randomNumbersArray(),
      isweekday: true,
      page: "app",
      user_id: userId,
      device_type: window.innerWidth > 800 ? "desktop" : "mobile",
      assignment_id: [123, 234],
      tier: "enterprise",
      bankok: "4;26;12"
    });

    userflow.group(company_id, {
      company_id: "team-" + userId.slice(0, 5),
      departments: ["Engineering", "Product"],
      plan: "pro",
      services: "BASIC",
    });
  }, []);

  // useEffect(() => {
  //   userflow.init("ct_uevqk6bpgvc7lc3pihhm5mpkoi");
  //   userflow.identify("user-anon-test", {
  //     email: "user-anon-test@gmail.com",
  //     user_id: "user-anon-test",
  //     locale_code: "en-US",
  //     store_1: "store1",
  //   });

  //   userflow.group("abc pvt ltd", {
  //     company_id: "abc pvt ltd",
  //     departments: ["Engineering", "Product"],
  //     plan: "pro",
  //     services: "BASIC",
  //   });
  //   userflow.track("App Loaded");

  // }, []);
};

export default useUserflow;
