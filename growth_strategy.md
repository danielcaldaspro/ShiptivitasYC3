# Estratégia de Crescimento Shiptivitas (Task 3)

## 📊 Insights dos Dados
Nossa análise revelou um crescimento de **121.5% no DAU**, mas com alta volatilidade. O trabalho ocorre em **surtos (picos de 17 mudanças/dia)** seguidos de dias silenciosos. O engajamento é real, mas reativo.

## 💡 3 Ideias Actionable

### 1. Previsão de "Onda de Carga"
- **Hypothesis**: A atividade é explosiva e imprevisível. Antecipar picos de trabalho evitaria gargalos e estabilizaria o uso da plataforma.
- **Expected Impact**: Redução de 25% no tempo de espera das tarefas e um DAU mais estável.
- **What the feature is**: Um painel de "Previsão de Fluxo" que alerta o time 24h antes de um acúmulo de cards com prazos próximos coincidirem.

### 2. Geofence Status Sync
- **Hypothesis**: Dias com alto DAU mas poucas mudanças indicam que o time está apenas monitorando, esperando por eventos externos para agir manualmente.
- **Expected Impact**: Aumento de 40% na precisão dos dados em tempo real e automação do fluxo manual.
- **What the feature is**: Automação via GPS que move cartões entre colunas automaticamente quando o veículo físico entra ou sai de áreas geofuncionais pré-definidas.

### 3. Handoff Colaborativo (Passagem de Bastão)
- **Hypothesis**: A queda brusca no DAU em certos dias ocorre por falta de clareza na responsabilidade da próxima etapa. O fluxo "morre" na mão de alguém.
- **Expected Impact**: Redução da volatilidade do DAU em 30% através de um efeito dominó de notificações.
- **What the feature is**: Uma função de "Marcar Próximo Responsável" ao mover um card, notificando instantaneamente a pessoa que deve assumir a carga na nova coluna.
