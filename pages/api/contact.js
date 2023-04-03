import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;
    console.log({ email, name, message });
    // ServerSide validation
    if (!email || !email.includes("@") || !name || !message) {
      res.status(422).json({ message: "Invalid input" });
      return;
    }

    // Store in DB
    const newMessage = { email, name, message };
    console.log(newMessage);

    let client;
    try {
      client = await MongoClient.connect(
        "mongodb+srv://anilcelik075:ny1NVzkNhe8piLBf@cluster0.b3tjvwe.mongodb.net/contact"
      );
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
