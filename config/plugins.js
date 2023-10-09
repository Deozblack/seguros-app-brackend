module.exports = ({ env }) => ({
    // ...
    email: {
      config: {
        provider: 'sendgrid',
        providerOptions: {
          apiKey: env('SENDGRID_API_KEY'),
        },
        settings: {
          defaultFrom: 'omarsolanoxnr@gmail.com',
          defaultReplyTo: 'omarsolanoxnr@gmail.com',
        },
      },
    },
    // ...
  });