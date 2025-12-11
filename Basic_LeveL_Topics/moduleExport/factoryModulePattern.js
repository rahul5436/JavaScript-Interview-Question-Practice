function UserFactory(role) {
  if (role === "admin") {
    return { role, permissions: ["read", "write", "delete"] };
  }
  if (role === "guest") {
    return { role, permissions: ["read"] };
  }
}

const admin = UserFactory("admin");
console.log(admin.permissions); // ['read','write','delete']
