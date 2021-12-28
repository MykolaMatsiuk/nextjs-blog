import { MongoClient } from 'mongodb';

import { DATABASE_URL } from '../../lib/database-url';

async function handler(req, res) {
	if (req.method === 'POST') {
		const { email, name, message } = req.body;

		if (
			!email ||
			!email.includes('@') ||
			!name ||
			name.trim() === '' ||
			!message ||
			message.trim() === ''
		) {
			return res.status(422).json({ message: 'Invalid input' });
		}

		const newMessage = { email, name, message };

		let client;

		try {
			client = await MongoClient.connect(DATABASE_URL);
		} catch (error) {
			return res
				.status(500)
				.json({ message: 'Could not connect database' });
		}

		const db = client.db();

		try {
			const result = await db
				.collection('messages')
				.insertOne(newMessage);

			newMessage.id = result.insertedId;
		} catch (error) {
			client.close();
			return res
				.status(500)
				.json({ message: 'Error occured while saving message!' });
		}

		client.close();

		res.status(201).json({
			message: 'Successfully stored message!',
			message: newMessage
		});
	}
}

export default handler;
