import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { MdEdit, MdDeleteForever, MdEvent, MdLocationOn } from 'react-icons/md';

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

  if (!meetup.title) {
    history.goBack();
  }

  return (
    <Container>
      <header>
        <h1>{meetup.title}</h1>
        <div>
          <Button secondary>
            <MdEdit color="#fff" sizze={20} />
            Editar
          </Button>
          <Button danger>
            <MdDeleteForever color="#fff" sizze={20} />
            Cancelar
          </Button>
        </div>
      </header>

      <section>
        <img src="" alt="banner" />
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
