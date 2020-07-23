import React, { useCallback, useRef, useState } from 'react';
import {
  MdPlayCircleOutline,
  MdPauseCircleOutline,
} from 'react-icons/md';
import { FaCircleNotch } from 'react-icons/fa'

import { Container, AnimationContainer, List, Button } from './styles';

function CommentList({ comments }) {
  const audioElementRef = useRef(null);
  const [idPlaying, setIdPlaying] = useState(null);
  const [loading, setLoading] = useState(false);
  const [language, setLanguage] = useState('ptBR');

  const handleOnEnded = useCallback(() => {
    setIdPlaying('');
  }, []);

  const handleStartPlay = useCallback((item) => {
    setIdPlaying(item.id);
    setLoading(true);
  }, []);

  return (
    <Container>
      <AnimationContainer>
        <h1>Lista de comentários</h1>

        <select onChange={(e) => setLanguage(e.target.value)} value={language}>
          <option value="ptBR">PT BR</option>
          <option value="en">EN US</option>
        </select>

        <List>
          {comments.map((comment) => (
            <li key={comment.id}>
              <span>{comment.comment}</span>

              <Button
                loading={String(!!(idPlaying === comment.id && loading) || 0)}
                type="button"
                onClick={() => handleStartPlay(comment)}
              >
                {idPlaying === comment.id && loading ? (
                  <FaCircleNotch size={24} color="#000" />
                ) : idPlaying === comment.id ? (
                  <MdPauseCircleOutline size={24} color="#000" />
                ) : (
                  <MdPlayCircleOutline size={24} color="#000" />
                )}
              </Button>
            </li>
          ))}
        </List>
      </AnimationContainer>

      {idPlaying && (
        <audio
          ref={audioElementRef}
          autoPlay
          onEnded={handleOnEnded}
          onPlay={() => setLoading(false)}
          src={`${process.env.REACT_APP_API_URL}/stream/${idPlaying}?language=${language}`}
        />
      )}
    </Container>
  );
}

CommentList.defaultProps = {
  comments: [],
};

export default CommentList;
