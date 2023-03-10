
echo "Kill all the running PM2 actions"
sudo pm2 kill

echo "Jump to app folder"
cd /home/ubuntu/textMedix_Google_Business_Svcs

echo "Update app from Git"
git pull origin main

echo "Install app dependencies"
sudo npm install

echo "Run new PM2 action"

sudo pm2 start index.js