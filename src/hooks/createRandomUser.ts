import { faker } from "@faker-js/faker";

export function createRandomUser() {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(),
    firstname: faker.person.firstName(),
    lastname: faker.person.lastName(),
    phone: faker.phone.number(),
    address: faker.location.streetAddress(),
    website: faker.internet.url(),
    company: faker.company.name(),
    company_id: faker.string.uuid(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    signedUpAt: new Date().toISOString().split(".")[0] + "Z",
  };
}