/* eslint-disable no-console */
import mailSystem from './mailSystem';
import smtpTransport from './smtpTransport';
import repository from './repository';

test('should handle send mail', () => {
  // arrange
  const to = '...';
  const subject = '...';
  const model = {
    name: 'william',
  };
  const DEFAULT_FROM = 'test@euri.com';

  const smtp = jest.spyOn(smtpTransport, 'send').mockImplementation();
  const sendMail = jest.spyOn(mailSystem, 'sendWelcomeMail');

  // act
  mailSystem.init(DEFAULT_FROM);
  mailSystem.sendWelcomeMail(to, subject, model);

  // assert
  expect(sendMail).toHaveBeenCalledTimes(1);
  expect(sendMail).toHaveBeenCalledWith(to, subject, model);
  expect(smtp).toHaveBeenCalledTimes(1);
  expect(smtp).toHaveBeenCalledWith(
    expect.objectContaining({
      toAddress: to,
      fromAddress: DEFAULT_FROM,
      subject,
      body: expect.toInclude(model.name),
    }),
  );

  console.log(smtp.mock.calls[0][0]);
});

test('should handle transfer mails', () => {
  // arrange
  const firstMail = {
    toAddress: 'william@euri.com',
    fromAddress: 'test@euri.com',
    subject: 'test mail',
    body: 'Hello william, with this mail I...',
  };

  const repo = jest.spyOn(repository, 'getMails').mockReturnValue([
    firstMail,
    {
      toAddress: 'william@skynet.be',
      fromAddress: 'test@euri.com',
      subject: 'test mail 2',
      body: 'Hello william, with this mail I...',
    },
  ]);

  const backend = {};
  backend.transfer = jest.fn(mails => console.log(`Transfer: ${mails}`));

  // act
  mailSystem.transferMails(backend);

  // assert
  expect(repo).toHaveBeenCalledTimes(1);
  expect(backend.transfer).toHaveBeenCalledWith([firstMail]);
});
