import { useState } from 'react';
import styled from 'styled-components';
import { storage } from '../utils/storage';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  max-width: 400px;
  margin: 2rem auto;
`;

const Input = styled.input`
  padding: 0.5rem;
  margin: 1rem 0;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background: #646cff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background: #535bf2;
  }
`;

interface LoginProps {
  onLogin: (user: { username: string; dailyGoal: number }) => void;
}

export function Login({ onLogin }: LoginProps) {
  const [username, setUsername] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      const user = { 
        username, 
        dailyGoal: 2000,
        isNewUser: true 
      };
      storage.setUser(user);
      onLogin(user);
    }
  };

  return (
    <LoginContainer>
      <h1>HydroTracker</h1>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Ingresa tu nombre"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <Button type="submit">Comenzar</Button>
      </form>
    </LoginContainer>
  );
}