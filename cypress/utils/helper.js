class Helper {
    getRandomEmail() {
        const randomNumber = Math.floor(Math.random() * Math.random() * 10000000);
        const randomString = Math.random().toString(36).substring(4);
        const randomEmail = `test+${randomNumber}${randomString}@gmail.com`;
        return randomEmail;
    }
}

module.exports = new Helper();
