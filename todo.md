# Project TODO

## Funcionalidades Principais

- [x] Criar estrutura de dados para Áreas de Brodmann (BA44-45, BA22, BA1-4, BA17-19, BA9-10, BA9-46)
- [x] Implementar componente BrainMap com ImageBackground e hotspots clicáveis
- [x] Adicionar imagem assets/ten20.png ao projeto
- [x] Criar hotspots transparentes nas coordenadas percentuais especificadas
- [x] Implementar sistema de seleção de áreas de Brodmann
- [x] Destacar pontos 10-20 correspondentes quando área é selecionada
- [x] Criar painel de detalhes com nome, função e indicação terapêutica
- [x] Implementar layout responsivo desktop-first
- [x] Configurar tema de cores personalizado
- [x] Gerar logo personalizado do aplicativo
- [x] Atualizar configurações de branding no app.config.ts
- [x] Testar responsividade e interatividade
- [x] Criar checkpoint final do projeto

## Correções Urgentes

- [x] Corrigir alinhamento dos hotspots com aspect ratio fixo
- [x] Garantir que todos os 15 pontos estejam sempre visíveis
- [x] Implementar seletor de áreas de Brodmann (6 botões)
- [x] Corrigir sistema de destaque (amarelo para ativos, cinza para inativos)
- [x] Ajustar posicionamento com transform translate(-50%, -50%)
- [x] Testar seleção de todas as 6 áreas de Brodmann

## Bugs Críticos a Corrigir

- [x] Corrigir label do seletor mostrando "-4" ao invés de "BA1-4"
- [x] Fazer mapa ocupar largura completa do container
- [x] Alinhar hotspots corretamente com a imagem usando onLayout
- [x] Garantir que painel de informações apareça ao selecionar área
- [x] Verificar que todas as 6 chaves existem no BRODMANN_MAP
- [x] Testar seleção de BA9-46, BA1-4 e BA17-19 com painel visível

## Nova Funcionalidade - Dados Detalhados por Ponto

- [x] Atualizar estrutura de dados para mapear cada ponto 10-20 individualmente
- [x] Implementar clique direto nos hotspots para seleção
- [x] Mostrar informações específicas de cada ponto (brodmann, função, indicação)
- [x] Remover seletor de áreas agregadas e usar seleção direta nos pontos
- [x] Testar clique em todos os 15 pontos

## Ajuste Fino - Dados Exatos do Anexo

- [x] Criar estrutura TEN20_POINTS com 5 campos obrigatórios
- [x] Criar BRODMANN_GROUPS para seleção por grupo
- [x] Implementar seleção individual (clique no ponto)
- [x] Implementar seleção por grupo (botões de grupo)
- [x] Atualizar painel para mostrar campos exatos do anexo
- [x] Remover campos antigos (indicacao, funcao genérica)
- [x] Testar seleção individual e por grupo

## Ajuste de UX - Tamanho dos Hotspots

- [x] Aumentar tamanho dos hotspots para versão web
- [x] Manter tamanho adequado para mobile
- [x] Aumentar fonte dos labels dos hotspots

## Correção Definitiva - SVG com Coordenadas Absolutas

- [x] Criar estrutura de dados com coordenadas SVG absolutas
- [x] Implementar BrainMapSVG usando react-native-svg
- [x] Renderizar imagem dentro do SVG
- [x] Renderizar hotspots como Circle + Text no SVG
- [x] Testar alinhamento em diferentes tamanhos de tela

## Modo de Edição - Ajuste Manual de Hotspots

- [x] Criar toggle "Modo edição" no cabeçalho
- [x] Implementar hotspots draggable quando modo edição ativo
- [x] Mostrar coordenadas (x,y) em tempo real ao arrastar
- [x] Criar botão "Salvar coordenadas"
- [x] Exportar JSON com coordenadas atualizadas
- [x] Desabilitar seleção de pontos quando em modo edição

## Bug - Salvamento de Coordenadas

- [x] Corrigir captura de coordenadas finais após arrasto
- [x] Garantir que editedCoordinates seja atualizado corretamente
- [x] Testar salvamento no console após arrastar múltiplos pontos

## Persistência de Coordenadas

- [x] Criar constante STORAGE_KEY para chave do storage
- [x] Implementar salvamento em localStorage (web) e AsyncStorage (mobile)
- [x] Carregar coordenadas salvas ao montar componente
- [x] Usar coordenadas salvas como fonte prioritária
- [x] Adicionar botão "Resetar coordenadas"
- [x] Implementar remoção do storage ao resetar
- [x] Testar persistência após refresh da página

## Correção Build Web para Vercel

- [x] Renomear script "build" para "build:server"
- [x] Criar script "build:web" com expo export
- [x] Atualizar script "build" padrão para limpar caches e exportar web
- [x] Testar build web localmente
