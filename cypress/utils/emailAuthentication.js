const MailListener = require('mail-listener2-updated');

const myEmail = 'test@abc.com';
const myPassword = 'pass1234';

class EmailListener {
  constructor(email) {
    this.mailListener = new MailListener({
      username: myEmail,
      password: myPassword,
      host: 'imap.gmail.com',
      port: 993,
      tls: true,
      connTimeout: 100000,
      authTimeout: 50000,
      tlsOptions: { rejectUnauthorized: false },
      mailbox: 'INBOX',
      searchFilter: ['UNSEEN', ['TO', email], ['SUBJECT', 'Test']],
      markSeen: true,
      fetchUnreadOnStart: true,
      mailParserOptions: { streamAttachments: true },
      attachments: true,
      attachmentOptions: { directory: 'attachments/' }
    });
  }

  init() {
    return new Promise((resolve, reject) => {
      try {
        this.mailListener.start();
        this.mailListener.on('server:connected', () => {
          resolve();
        });
      } catch (err) {
        reject(err);
      }
    });
  }

  async close() {
    this.mailListener.stop();
  }

  async getEmailHTML() {
    const messages = await new Promise((resolve, reject) => {
      this.mailListener.on('mail', function(mail) {
        if (mail) {
          resolve(mail);
        } else {
          reject('No Mail Found');
        }
      });
    });
    return messages.html;
  }
}

async function getVerificationURL(email) {
  let emailListener = new EmailListener(email);
  await emailListener.init();
  let emailHTML = await emailListener.getEmailHTML();
  await emailListener.close();
  const verificationLinks = emailHTML.match(
    /"https:\/\/staging.boatim.com\/auth\/action([^"]*")/g
  );
  return await verificationLinks[0].replace(/"/g, '');
}

module.exports = {
  getVerificationURL
};
