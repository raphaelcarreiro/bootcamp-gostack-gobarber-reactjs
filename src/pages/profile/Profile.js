import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useSelector, useDispatch } from 'react-redux';
import { updateProfileRequest } from 'store/modules/user/actions';
import AvatarInput from 'pages/profile/avatar/AvatarInput';
import { signOut } from 'store/modules/auth/actions';
import { Container } from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit} initialData={profile}>
        <AvatarInput name="avatar_id" />
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" placeholder="Seu endereço de e-mail" />

        <hr />

        <Input
          name="oldPassword"
          type="password"
          placeholder="Sua senha atual"
        />
        <Input name="password" type="password" placeholder="Sua nova senha" />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirme sua nova senha"
        />

        <button type="submit">Atualizar perfil</button>
      </Form>
      <button onClick={handleSignOut} type="button">
        Sair do GoBarber
      </button>
    </Container>
  );
}
