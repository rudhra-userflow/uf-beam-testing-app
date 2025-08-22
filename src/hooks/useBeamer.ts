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

const useBeamer = () => {
  (window as any).beamer_config = {
    product_id: "EYnTXKlH78427",
    user_id: userId,
    user_name: username,
    user_email: email,
    user_signed_up_at: signedUpAt,
    firstname: firstname,
    lastname: lastname,
    phone: phone,
    address: address,
    avatar: avatar,
    company: company,
    company_id: company_id,
  };
};

export default useBeamer;
