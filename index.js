const pubsub = require("@google-cloud/pubsub");

module.exports = async (message, topicName, attributes = {}) => {
  console.log(`will send message to topic ${topicName}`);
  const dataBuffer = null;
  if (Buffer.isBuffer(message)) {
    dataBuffer = message;
  } else {
    dataBuffer = Buffer.from(message);
  }
  try {
    const messageId = await pubsub
      .topic(topicName)
      .publisher()
      .publish(dataBuffer, attributes);
    console.log(`Message ${messageId} published.`);
  } catch (err) {
    console.err("error:", err);
  }
};
