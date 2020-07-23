import fs from 'fs';
import { resolve } from 'path';
import { randomBytes } from 'crypto';
import { IamAuthenticator } from 'ibm-watson/auth';
import TextToSpeech from 'ibm-watson/text-to-speech/v1';

import watsonConfig from '../../config/watson';

import Comment from '../models/Comment';

class StreamController {
  // eslint-disable-next-line consistent-return
  async show(request, response) {
    const { language = 'en' } = request.query;
    const { comment_id } = request.params;

    const comment = await Comment.findOne({ where: { id: comment_id } });

    if (!comment) {
      return response.status(400).json({ error: 'Doesnt exists comment' });
    }

    const textToSpeech = new TextToSpeech({
      authenticator: new IamAuthenticator({ apikey: watsonConfig.apiKey }),
    });

    const synthesizeParams = {
      text: comment.comment,
      accept: 'audio/mp3',
      voice: language === 'en' ? watsonConfig.langUS : watsonConfig.langBR,
    };

    const audioName = randomBytes(16).toString('hex');

    const respAudio = await textToSpeech.synthesize(synthesizeParams);
    const audio = respAudio.result;
    const audioFile = resolve(watsonConfig.destination, `${audioName}.mp3`);

    audio.pipe(fs.createWriteStream(audioFile));

    await new Promise((resolv) => audio.on('end', resolv));

    const streamTrack = await fs.promises.stat(resolve(audioFile));

    response.writeHead(200, {
      'Content-Type': 'audio/mp3',
      'Content-Length': streamTrack.size,
      'Accept-Ranges': 'bytes',
    });

    const highWaterMark = 128;

    const stream = fs.createReadStream(audioFile, { highWaterMark });

    stream.on('end', () => console.log('acabou'));

    stream.pipe(response);
  }
}

export default new StreamController();
