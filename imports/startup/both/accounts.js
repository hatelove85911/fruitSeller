// import { Accounts } from 'meteor/std:accounts-ui';

// acconts UI configuration
// Accounts.ui.config({
  // passwordSignupFields: 'NO_PASSWORD',
  // loginPath: '/',
// });


// configure wechat
ServiceConfiguration.configurations.remove({
  service: "wechat"
});
ServiceConfiguration.configurations.insert({
  service: "wechat",
  appId: "wx84fc209d27bb487e",
  scope:'basic',
  secret: "b09cbe4f801f260c0687c595075ec81d"
});


