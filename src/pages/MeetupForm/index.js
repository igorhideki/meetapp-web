import React from 'react';
import { useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { parseISO } from 'date-fns';

import api from '~/services/api';
import history from '~/services/history';

import BannerInput from '~/components/BannerInput';
import DatePicker from '~/components/Datepicker';
import { Button } from '~/styles/button';
import { Container } from './styles';

const schema = Yup.object().shape({
  banner_id: Yup.number().required('O banner é obrigatório'),
  title: Yup.string().required('O título é obrigatório'),
  description: Yup.string().required('A descrição é obrigatória'),
  date: Yup.date()
    .min(new Date(), 'Não é possível usar uma data passada')
    .typeError('Informe uma data válida')
    .required('A data é obrigatória'),
  location: Yup.string().required('A localização é obrigatória'),
});

export default function MeetupForm() {
  const meetup = useSelector(state => state.meetup);
  const meetupFormatted = meetup.id
    ? {
        ...meetup,
        date: parseISO(meetup.date),
      }
    : {};
  const isEdit = !!meetup.id;

  async function handleSubmit(data) {
    if (isEdit) {
      await api.put(`/meetups/${meetup.id}`, data);
    } else {
      await api.post('/meetups', data);
    }
    toast.success('Meetup salvo com sucesso!');
    history.push('/');
  }

  return (
    <Container>
      <Form
        initialData={meetupFormatted}
        onSubmit={handleSubmit}
        schema={schema}
        autoComplete="off"
      >
        <BannerInput name="banner_id" />
        <Input name="title" placeholder="Título do meetup" />
        <Input
          name="description"
          multiline
          rows="5"
          placeholder="Descrição completa"
        />
        <DatePicker
          name="date"
          placeholder="Data do meetup"
          minDate={new Date()}
        />
        <Input name="location" placeholder="Localização" />

        <Button type="submit">
          <MdAddCircleOutline color="#fff" size={20} />
          Salvar meetup
        </Button>
      </Form>
    </Container>
  );
}
