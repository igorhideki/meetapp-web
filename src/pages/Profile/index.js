import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch, useSelector } from 'react-redux';

import { updateProfileRequest } from '~/store/modules/user/actions';
import { FormWrapper } from '~/styles/formWrapper';
import { Button } from '~/styles/button';

export default function Profile() {
  const [oldPassword, setOldPassword] = useState('');
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!oldPassword) {
      const passwordEl = document.getElementsByName('password')[0];
      const confirmPsswordEl = document.getElementsByName('confirmPassword')[0];

      passwordEl.value = '';
      confirmPsswordEl.value = '';
    }
  }, [oldPassword]);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <FormWrapper>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu endereço de e-mail" />

        <hr />

        <Input
          type="password"
          name="oldPassword"
          placeholder="Senha atual"
          onChange={e => setOldPassword(e.target.value)}
        />
        <Input
          type="password"
          name="password"
          placeholder="Nova senha"
          disabled={!oldPassword}
        />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirmação de senha"
          disabled={!oldPassword}
        />

        <Button type="submit">Salvar perfil</Button>
      </Form>
    </FormWrapper>
  );
}
