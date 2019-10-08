import React, { useState, useEffect } from 'react';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';
import history from '~/services/history';

import { Container, Meetup } from './styles';
import { Button } from '~/styles/button';

export default function SignIn() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('organizing');
      const data = response.data.map(meetup => {
        const parseDate = parseISO(meetup.date);
        return {
          ...meetup,
          dateFormatted: format(parseDate, "d 'de' MMMM', às 'HH'h'", {
            locale: pt,
          }),
        };
      });
      console.tron.log(data);
      setMeetups(data);
    }

    loadMeetups();
  }, []);

  function handleDetails() {
    history.push('/details');
  }

  function handleNewMeetup() {
    history.push('/meetup-form');
  }

  return (
    <Container>
      <header>
        <h1>Meus meetups</h1>
        <Button onClick={handleNewMeetup}>
          <MdAddCircleOutline color="#fff" size={20} />
          Novo meetup
        </Button>
      </header>

      <ul>
        {meetups.map(meetup => (
          <Meetup key={meetup.id} past={meetup.past}>
            <span>{meetup.title}</span>
            <div>
              <time>{meetup.dateFormatted}</time>
              <MdChevronRight
                onClick={() => handleDetails(meetup)}
                color="#fff"
                size={24}
              />
            </div>
          </Meetup>
        ))}
      </ul>
    </Container>
  );
}
