const pubsub = require("@google-cloud/pubsub");
const isBuffer = require("is-buffer");
const PubSub = require("@google-cloud/pubsub");

module.exports = async (message, topicName, attributes = {}) => {
  const pubsub = new PubSub();
  console.log(`will send message to topic ${topicName}`);
  let dataBuffer = null;
  if (isBuffer(message)) {
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
    console.error("error:", err);
  }
};
