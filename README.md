# Gmail UI Redesign
This app is created with command `npx create-react-app`.

## Deploy Locally
```bash
# Clone repo
git clone https://github.com/alexliu0809/gmail-ui-redesign.git

# Update npm if your npm version is too low (i.e. < 8)
# npm install -g npm@8

# Install dependencies
cd gmail-redesign-code
rm -rf node_modules # remove old installation
rm package-lock.json yarn.lock # remove old locks
npm cache clear --force
npm install
yarn add uuid
yarn add react-router-dom
yarn add firebase
yarn add react-tooltip
# Start locally
yarn start
```

## Deploy on Firebase
```bash
cd gmail-redesign-code

# Install dependencies
npm install -g firebase-tools

# Deploy with firebase
firebase login
firebase init
npm run build
firebase deploy ## https://clone-e0ec2.web.app/
```

## Deploy the Latest
```
npm run build
firebase deploy
```
