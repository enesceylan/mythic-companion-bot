const { checkMessageExists } = require('./checkMessageExists');

module.exports.destroyEmbedConversation = (message, embed, delay) => {
  message
    .reply({
      embeds: [embed],
    })
    .then((sentMessage) => {
      checkMessageExists(message, sentMessage, delay);
    });

  checkMessageExists(message, message, delay);

  // message
  //   .reply({
  //     embeds: [embed],
  //   })
  //   .then((msg) => {
  //     setTimeout(() => {
  //       if (msg.deletable) {
  //         msg.delete();
  //       }
  //     }, delay);
  //   })
  //   .catch(console.error);

  // setTimeout(() => {
  //   if (message.deletable) {
  //     message.delete();
  //   }
  // }, delay);
};
