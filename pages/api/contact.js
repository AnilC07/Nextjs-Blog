import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    // ServerSide validation
    if (!email || !email.includes("@") || !name || !message) {
      res.status(422).json({ message: "Invalid input" });
      return;
    }

    // Store in DB
    const newMessage = { email, name, message };

    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clusterName}.b3tjvwe.mongodb.net/${process.env.mongodb_database}`;

    let client;
    try {
      client = await MongoClient.connect(connectionString);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
    const db = client.db();

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: error.message });
      return;
    }

    client.close();

    res.status(201).json({ message: "Your message was successfully sent" });
  }
}

export default handler;
