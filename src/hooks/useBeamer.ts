import { createRandomUser } from "./createRandomUser";

const {
  userId,
  username,
  email,
  firstname,
  lastname,
  phone,
  address,
  signedUpAt,
  avatar,
  company,
  company_id,
} = createRandomUser();

export const handleBeamerCallback = async (
  unreadCount: number,
): Promise<void> => {
  console.table({
    action: "Beamer Callback",
    data: { unreadCount },
    msg: "Beamer callback executed",
  });
};

const useBeamer = () => {
  // (window as any).beamer_config = {
  //   product_id: "EYnTXKlH78427",
  //   button: false,
  //   user_id: userId,
  //   user_name: username,
  //   user_email: email,
  //   user_signed_up_at: signedUpAt,
  //   firstname: firstname,
  //   lastname: lastname,
  //   phone: phone,
  //   address: address,
  //   avatar: avatar,
  //   company: company,
  //   company_id: company_id,
  //   lazy: false,
  //   callback: (unreadCount: number) => handleBeamerCallback(unreadCount),
  // };

  window.addEventListener("beforeunload", () => {
    localStorage.clear();
  });

  (window as any).beamer_config = {
    product_id: "JhXvpHcQ70039",
    user_id: "rudhrabharathywork",
    email: "rudhrabharathywork@gmail.com",
    date: "2022-12-11T12:34:56Z",
    counter: null,
    address: "",
    company_name: "acai",
    post_id: 2,
    lazy: false,
    button: false,
    // callback: (unreadCount: number) => handleBeamerCallback(unreadCount),
  };
};

export default useBeamer;
