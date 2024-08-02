var Role;
(function (Role) {
    Role[Role["ADMIN"] = 4] = "ADMIN";
    Role[Role["READ_ONLY"] = 5] = "READ_ONLY";
    Role[Role["AUTHOR"] = 6] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "Mert",
    age: 25,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN,
};
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
if (person.role === Role.ADMIN) {
    console.log("is admin");
}
