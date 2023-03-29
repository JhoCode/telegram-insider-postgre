require('dotenv').config();
const { Telegraf } = require('telegraf');
const { Pool } = require('pg');

const token = process.env.TOKEN;
const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;


// Conexión a la base de datos
const pool = new Pool({
  user: dbUser,
  host: dbHost,
  database: dbName,
  password: dbPassword,
  port: dbPort,
});

// Función para insertar un mensaje en la tabla de la base de datos
async function insertMessage(ctx) {
  const message = ctx.message.text;
  const userId = ctx.message.from.id;
  const username = ctx.message.from.username;
  const now = new Date().toISOString();

  const client = await pool.connect();
  await client.query('INSERT INTO messages (id, message, created_at) VALUES (DEFAULT, $1, $2)', [message, now]);
  client.release();

  ctx.reply('Mensaje insertado en la base de datos');
}

// Creación del bot y configuración para que llame a la función insertMessage cuando recibe un mensaje
const bot = new Telegraf(token);
bot.start((ctx) => ctx.reply('Bienvenido al bot'));
bot.on('message', insertMessage);
bot.launch();
