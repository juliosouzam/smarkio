import React, { useCallback, useEffect, useState } from 'react';

import { Container, Content, AnimationContainer } from './styles';
import CommentList from '../CommentList';

import api from '../../services/api';

function Layout() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');

  useEffect(() => {
    async function loadComments() {
      const response = await api.get('/comments');

      setComments(response.data);
    }

    loadComments();
  }, []);

  const handleTextChange = useCallback((e) => {
    setComment(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const response = await api.post('/comments', { comment });
      setComments((prevState) => [response.data, ...prevState]);
      setComment('');
    },
    [comment],
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit}>
            <h1>Comentários</h1>
            <textarea
              name=""
              id=""
              rows="10"
              onChange={handleTextChange}
              value={comment}
            ></textarea>
            <button type="submit">Salvar</button>
          </form>
        </AnimationContainer>
      </Content>

      <CommentList comments={comments} />
    </Container>
  );
}

export default Layout;
