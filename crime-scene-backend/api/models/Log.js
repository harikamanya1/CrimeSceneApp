const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LogSchema = new Schema({
  timestamp: { type: String, required: true },
  name: { type: String, required: true },
  role: { type: String, required: true },
  badgeNumber: { type: String, required: true },
  purpose: { type: String, required: true },
  authorizingPerson: { type: String, required: true },
  areaAccessed: { type: String, required: true },
  actionsPerformed: { type: String, required: true },
  duration: { type: String, required: true },
  witnesses: { type: String, required: true },
  ppeUsed: { type: String, required: true },
  incidents: { type: String, required: true },
});

module.exports = mongoose.model('Log', LogSchema);
