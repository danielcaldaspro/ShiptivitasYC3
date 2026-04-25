-- 1. Usuários Ativos Diários (DAU)
-- Esta query conta quantos usuários ÚNICOS logaram a cada dia. 
-- É a métrica mestre para saber se o app está crescendo ou morrendo.
SELECT 
    date(login_timestamp, 'unixepoch') as dia,
    count(distinct user_id) as usuarios_ativos
FROM login_history
GROUP BY dia
ORDER BY dia;

-- 2. Engajamento por Cartão (Status Changes)
-- Aqui vemos quais cargas/tarefas foram as mais "movimentadas". 
-- Ajuda a identificar onde o trabalho é mais intenso.
SELECT 
    cardID,
    count(*) as total_movimentacoes
FROM card_change_history
WHERE oldStatus IS NOT NULL
GROUP BY cardID
ORDER BY total_movimentacoes DESC;

-- 3. Volume Diário de Operações
-- Mostra o "ritmo" do time: quantos movimentos o Kanban recebe por dia.
-- Foi aqui que detectamos os picos de 17 mudanças diárias.
SELECT 
    date(timestamp, 'unixepoch') as dia,
    count(*) as total_mudancas_diarias
FROM card_change_history
WHERE oldStatus IS NOT NULL
GROUP BY dia
ORDER BY dia;
