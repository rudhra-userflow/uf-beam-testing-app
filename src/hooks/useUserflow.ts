import { useEffect } from "react";
import userflow from "userflow.js";
import { useNavigate } from "react-router-dom";
import { createRandomUser } from "./createRandomUser";

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

const useUserflow = () => {
  const navigate = useNavigate();

  useEffect(() => {
    userflow.init("ct_uevqk6bpgvc7lc3pihhm5mpkoi");
    userflow.setResourceCenterLauncherHidden(true)
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
      locale_code: "EN-us",
      company_name: company,
      num_list: randomNumbersArray(),
      isweekday: true,
      page: "app",
      user_id: userId,
      device_type: window.innerWidth > 800 ? "desktop" : "mobile",
      assignment_id: [123, 234],
      tier: "enterprise",
    });

    userflow.group(company_id, {
      company_id: "team-" + userId.slice(0, 5),
      name: company,
      departments: ["Engineering", "Product"],
      plan: "pro",
      services: "BASIC",
    });
  }, []);

  // useEffect(() => {
  //   userflow.init("ct_uevqk6bpgvc7lc3pihhm5mpkoi");
  //   userflow.setResourceCenterLauncherHidden(true)
  //   userflow.identify("6ea2cbf1-a305-4fae-96cf-4e1789b808eb", {
  //     name: "Testing User",
  //     email: `test-email@gmail.com`,
  //   });

  //   userflow.group(company_id, {
  //     company_name: company,
  //   });

  // }, []);
};

export default useUserflow;
