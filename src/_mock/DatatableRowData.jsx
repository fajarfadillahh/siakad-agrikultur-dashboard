import { faker } from "@faker-js/faker";

const userRows = [...Array(100)].map(() => ({
  id: faker.random.numeric(8),
  username: faker.name.fullName(),
  email: faker.internet.email(),
  img: faker.internet.avatar(),
  age: faker.datatype.number({ min: 17, max: 62 }),
  status: faker.helpers.arrayElement(["active", "pending", "passive"]),
}));

export default userRows;
