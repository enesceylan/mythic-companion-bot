module.exports.destroyEmbedReply = (message, embed, delay) => {
  message
    .reply({
      embeds: [embed],
    })
    .then((msg) => {
      setTimeout(() => {
        msg.delete();
      }, delay);
    })
    .catch(console.error);

  setTimeout(() => {
    message.delete();
  }, delay);
};
