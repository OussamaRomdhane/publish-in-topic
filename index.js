const pubsub = require("@google-cloud/pubsub");

exports.publishInTopic = async (message, topicName, attributes = {}) => {
  console.log(`will send to topic ${topicName} : ${message}`);
  const dataBuffer = Buffer.from(message);
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
