import { faker } from "@faker-js/faker";

export const TransactionRows = [...Array(5)].map(() => ({
  id: faker.random.numeric(7),
  name: faker.name.fullName(),
  email: faker.internet.email(),
  numberId: faker.random.numeric(16),
  avatarImg: faker.internet.avatar(),
  date: faker.date.recent(),
  address: faker.address.streetAddress(true),
  status: faker.helpers.arrayElement(["Approved", "Pending"]),
}));

export default TransactionRows;
