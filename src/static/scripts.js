// ...existing code...

function renderActivities(activities) {
  const activityContainer = document.querySelector('main');
  activityContainer.innerHTML = '';

  activities.forEach(activity => {
    const activityCard = document.createElement('div');
    activityCard.classList.add('activity-card');

    const activityTitle = document.createElement('h4');
    activityTitle.textContent = activity.title;
    activityCard.appendChild(activityTitle);

    const activityDescription = document.createElement('p');
    activityDescription.textContent = activity.description;
    activityCard.appendChild(activityDescription);

    // New participant list
    const participantList = document.createElement('ul');
    participantList.classList.add('participant-list');
    activity.participants.forEach(participant => {
      const participantItem = document.createElement('li');
      participantItem.textContent = participant;
      participantList.appendChild(participantItem);
    });
    activityCard.appendChild(participantList);

    activityContainer.appendChild(activityCard);
  });
}

// Example usage
const activities = [
  {
    title: 'Yoga Class',
    description: 'A relaxing yoga session.',
    participants: ['Alice', 'Bob']
  },
  {
    title: 'Cooking Workshop',
    description: 'Learn to cook delicious meals.',
    participants: ['Charlie', 'Dave']
  }
];

renderActivities(activities);

// ...existing code...