module.exports.checkMessageExists = (message, sentMessage, delay) => {
  const channel = message.channel;

  setTimeout(() => {
    channel.messages
      .fetch(sentMessage.id)
      .then((fetchedMessage) => {
        console.log('Message exists');

        fetchedMessage
          .delete()
          .then(() => console.log('Message deleted successfully'))
          .catch((err) => console.log('Could not delete the message', err));
      })
      .catch((err) => {
        if (err.httpStatus === 404) {
          console.log('Message already deleted');
        } else {
          console.log(err);
        }
      });
  }, delay);
};
