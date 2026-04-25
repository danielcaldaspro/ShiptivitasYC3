const Database = require('better-sqlite3');
const fs = require('fs');
const db = new Database('./shiptivity.db');

const dau = db.prepare(`
    SELECT date(login_timestamp, 'unixepoch') as day, count(distinct user_id) as users
    FROM login_history GROUP BY day ORDER BY day
`).all();

const changes = db.prepare(`
    SELECT date(timestamp, 'unixepoch') as day, count(*) as count
    FROM card_change_history WHERE oldStatus IS NOT NULL
    GROUP BY day ORDER BY day
`).all();

const data = { dau, changes };
fs.writeFileSync('./data.json', JSON.stringify(data, null, 2));
console.log('Data exported to data.json');
