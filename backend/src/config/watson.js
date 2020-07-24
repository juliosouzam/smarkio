import 'dotenv/config';
import path from 'path';

export default {
  apiKey: process.env.WATSON_API_KEY,
  urlWatson: process.env.WATSON_API_URL,
  destination: path.resolve(__dirname, '..', '..', 'tmp'),
  langUS: 'en-US_AllisonVoice',
  langBR: 'pt-BR_IsabelaV3Voice',
};
