-- 1. Daily Active Users (DAU) before and after feature change
-- Considering the launch as the point where user-driven status changes began to scale (approx. Jan 2019)
SELECT 
    date(login_timestamp, 'unixepoch') as day,
    count(distinct user_id) as daily_active_users
FROM login_history
GROUP BY day
ORDER BY day;

-- 2. Number of status changes by card
-- This query tracks how many times each specific card was moved/updated
SELECT 
    cardID,
    count(*) as total_status_changes
FROM card_change_history
WHERE oldStatus IS NOT NULL
GROUP BY cardID
ORDER BY total_status_changes DESC;

-- 3. Daily volume of status changes (to map activity over time)
SELECT 
    date(timestamp, 'unixepoch') as day,
    count(*) as daily_changes
FROM card_change_history
WHERE oldStatus IS NOT NULL
GROUP BY day
ORDER BY day;
