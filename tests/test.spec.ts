import User from "../src/User";

describe("User test", () => {
  it("should make the user speak", () => {
    const user = new User("John", 30);
    const result = user.speak();
    expect(result).toBe("My name is John and I am 30 years old");
  });
});