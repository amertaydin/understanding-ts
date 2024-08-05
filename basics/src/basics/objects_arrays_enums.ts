enum Role {
  ADMIN = 4,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Mert",
  age: 25,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN) {
  console.log("is admin");
}
