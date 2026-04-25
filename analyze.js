const Database = require('better-sqlite3');
const db = new Database('./shiptivity.db');

const formatDate = (ts) => new Date(ts * 1000).toISOString().split('T')[0];

// 1. DAU Query
const dau = db.prepare(`
    SELECT 
        date(login_timestamp, 'unixepoch') as day,
        count(distinct user_id) as users
    FROM login_history
    GROUP BY day
    ORDER BY day
`).all();

console.log('\nDAU Statistics:');
console.table(dau);

// 2. Status Changes Query
const statusChanges = db.prepare(`
    SELECT 
        date(timestamp, 'unixepoch') as day,
        count(*) as change_count
    FROM card_change_history
    WHERE oldStatus IS NOT NULL -- Ignore initial creation
    GROUP BY day
    ORDER BY day
`).all();

console.log('\nActual Status Changes (User Actions):');
console.table(statusChanges);

// 3. Find Feature Launch Day
// The feature launch is when we see a sustained increase in status changes
const launchDate = statusChanges.length > 0 ? statusChanges[0].day : null;
console.log('\nSuggested Launch Date:', launchDate);

// 4. Calculate Averages
if (launchDate) {
    const before = dau.filter(d => d.day < launchDate);
    const after = dau.filter(d => d.day >= launchDate);
    
    const avgBefore = before.reduce((acc, d) => acc + d.users, 0) / (before.length || 1);
    const avgAfter = after.reduce((acc, d) => acc + d.users, 0) / (after.length || 1);
    
    console.log(`\nAverage DAU Before: ${avgBefore.toFixed(2)}`);
    console.log(`Average DAU After: ${avgAfter.toFixed(2)}`);
    console.log(`Growth: ${(((avgAfter/avgBefore) - 1) * 100).toFixed(2)}%`);
}
