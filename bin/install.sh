set -a # automatically export all variables
source .env
set +a

yarn add express dotenv mongoose cors
yarn add --dev nodemon @babel/core @babel/cli @babel/preset-env @babel/node
yarn add express express-openid-connect
touch .babelrc

echo "{
    "presets": ["@babel/preset-env"]
}" >> .babelrc
