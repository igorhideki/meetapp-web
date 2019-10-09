export function selectMeetup(meetup) {
  return {
    type: '@meetup/SELECT',
    payload: { meetup },
  };
}
