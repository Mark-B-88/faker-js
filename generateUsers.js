const fs = require("fs");
const { faker } = require("@faker-js/faker");

function generateFakeUser() {
	return {
		fullName: `${faker.person.firstName()} ${faker.person.lastName()}`,
		phoneNumber: faker.phone.number(),
		email: faker.internet.email(),
		jobTitle: faker.person.jobTitle(),
	};
}

const users = faker.helpers.multiple(generateFakeUser, { count: 100 });
generateFakeUser(users);

function saveJsonData(data) {
	const jsonData = JSON.stringify(data, null, 2);
	fs.writeFile("fake_users.json", jsonData, (err) => {
		if (err) {
			console.error("Error writing JSON file:", err);
		} else {
			console.log("JSON file has been saved successfully!");
		}
	});
}

saveJsonData(users);
