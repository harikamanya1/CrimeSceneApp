const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EvidenceSchema = new Schema({
  uniqueId: { type: String, required: true },
  timestamp: { type: String, required: true },
  collectorName: { type: String, required: true },
  role: { type: String, required: true },
  badgeNumber: { type: String, required: true },
  location: { type: String, required: true },
  evidenceType: { type: String, required: true },
  description: { type: String, required: true },
  condition: { type: String, required: true },
  photos: { type: String, required: true },
  chainOfCustody: { type: String, required: true },
  analysisType: { type: String, required: true },
  storageLocation: { type: String, required: true },
  notes: { type: String, required: true },
});

module.exports = mongoose.model('Evidence', EvidenceSchema);
