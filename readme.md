# Telegram Bot with PostgreSQL Database

This is a simple Telegram bot that uses a PostgreSQL database to store incoming messages from users.

## Requirements

- Node.js
- `telegraf` module
- `pg` module
- `dotenv` module

## Installation

1. Clone the repository: `git clone https://github.com/username/telegram-bot-postgresql.git`
2. Install dependencies: `npm install`
3. Create a `.env` file and set the following environment variables:
   - `TOKEN`: the token for your Telegram bot
   - `DB_HOST`: the host of your PostgreSQL database
   - `DB_PORT`: the port of your PostgreSQL database
   - `DB_USER`: the username for your PostgreSQL database
   - `DB_PASSWORD`: the password for your PostgreSQL database
   - `DB_NAME`: the name of your PostgreSQL database
4. Run the bot: `node index.js`

## Usage

1. Start the bot by sending the `/start` command.
2. Send a message to the bot.
3. The message will be inserted into the PostgreSQL database.
4. Check the database to see the inserted message.

## License

This project is licensed under the [MIT License](LICENSE).
