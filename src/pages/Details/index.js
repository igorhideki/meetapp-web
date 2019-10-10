import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { MdEdit, MdDeleteForever, MdEvent, MdLocationOn } from 'react-icons/md';
import { toast } from 'react-toastify';

import { clearMeetupSelected } from '~/store/modules/meetup/actions';
import api from '~/services/api';
import history from '~/services/history';

import { Container } from './styles';
import { Button } from '~/styles/button';

export default function SignIn() {
  const meetup = useSelector(state => state.meetup);
  const dateFormatted = useMemo(
    () =>
      meetup.date
        ? format(parseISO(meetup.date), "d 'de' MMMM', às 'HH'h'", {
            locale: pt,
          })
        : '',
    [meetup.date]
  );
  const dispatch = useDispatch();

  if (!meetup.title) {
    history.goBack();
  }

  async function handleCancel() {
    try {
      await api.delete(`meetups/${meetup.id}`);
      toast.success('Meetup cancelado com succeso!');
      dispatch(clearMeetupSelected());
      history.replace('/');
    } catch (err) {
      toast.error('Falha ao cancelar meetup!');
    }
  }

  function handleEdit() {
    history.push('/meetup-form');
  }

  return (
    <Container>
      <header>
        <h1>{meetup.title}</h1>
        {!meetup.past && (
          <div>
            <Button secondary onClick={handleEdit}>
              <MdEdit color="#fff" sizze={20} />
              Editar
            </Button>
            <Button danger onClick={handleCancel}>
              <MdDeleteForever color="#fff" sizze={20} />
              Cancelar
            </Button>
          </div>
        )}
      </header>

      <section>
        <img src={meetup.banner ? meetup.banner.url : ''} alt="banner" />
        <p>{meetup.description}</p>
      </section>

      <footer>
        <div>
          <MdEvent color="#fff" sizze={20} />
          <time>{dateFormatted}</time>
        </div>
        <div>
          <MdLocationOn color="#fff" sizze={20} />
          <address>{meetup.location}</address>
        </div>
      </footer>
    </Container>
  );
}
