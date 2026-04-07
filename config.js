// config.js — User-configurable defaults
// ownerNumber is the single source of truth — never stored in settings.json
require('dotenv').config();
module.exports = {
  defaultPrefix: '.',
  defaultOwnerName: 'Kevo Loves',
  ownerNumber: '254xxxxx',
  sessionID: process.env.SESSION_ID || '' 
  // Arrow-MD≈
  // get session ID from https://arrow-md-pair-site.onrender.com/
}