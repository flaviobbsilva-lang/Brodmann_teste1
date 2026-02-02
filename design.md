# Design do Aplicativo - Mapa Interativo das Áreas de Brodmann (10–20)

## Visão Geral

Aplicativo móvel educacional e interativo para visualizar e explorar as Áreas de Brodmann (regiões 10-20) do córtex cerebral humano. O foco é em desktop first, mas com responsividade para dispositivos móveis.

## Orientação e Uso

- **Orientação primária**: Desktop/landscape (16:9 ou widescreen)
- **Orientação secundária**: Mobile portrait (9:16) - adaptação responsiva
- **Uso**: Duas mãos no desktop, uma mão no mobile

## Lista de Telas

### 1. Home (Tela Principal)
- **Conteúdo**: 
  - Visualização do mapa cerebral interativo (diagrama do córtex cerebral)
  - Áreas de Brodmann 10-20 destacadas e clicáveis
  - Painel lateral com informações da área selecionada
- **Funcionalidade**:
  - Clicar em uma área para ver detalhes
  - Zoom e pan no mapa (desktop: mouse wheel + drag, mobile: pinch + drag)
  - Alternar entre vista lateral e vista superior do cérebro
  - Busca rápida por número da área

### 2. Detalhes da Área (Modal/Painel Lateral)
- **Conteúdo**:
  - Número da área de Brodmann
  - Nome anatômico
  - Localização no cérebro
  - Funções principais
  - Características histológicas
  - Imagem ilustrativa (se disponível)
- **Funcionalidade**:
  - Fechar modal/painel
  - Navegar para área anterior/próxima
  - Compartilhar informações

### 3. Lista de Áreas (Tela Secundária - Tab)
- **Conteúdo**:
  - Lista completa das áreas 10-20
  - Cards com número, nome e função resumida
- **Funcionalidade**:
  - Scroll vertical
  - Busca e filtro
  - Clicar para ver detalhes

### 4. Sobre (Tela Informativa - Tab)
- **Conteúdo**:
  - Informações sobre Korbinian Brodmann
  - História da classificação
  - Referências científicas
  - Créditos do aplicativo
- **Funcionalidade**:
  - Scroll vertical
  - Links externos para referências

## Fluxos de Usuário Principais

### Fluxo 1: Explorar Área Específica
1. Usuário abre o app → Tela Home com mapa cerebral
2. Usuário clica em uma área numerada (ex: Área 10)
3. Painel lateral/modal abre com detalhes da Área 10
4. Usuário lê informações
5. Usuário fecha painel ou navega para outra área

### Fluxo 2: Buscar Área por Número
1. Usuário está na tela Home
2. Usuário digita "17" na barra de busca
3. Mapa destaca a Área 17
4. Painel de detalhes abre automaticamente

### Fluxo 3: Navegar pela Lista
1. Usuário clica na tab "Lista"
2. Visualiza lista de cards das áreas 10-20
3. Clica em um card (ex: Área 15)
4. Modal de detalhes abre
5. Usuário fecha e volta para a lista

## Escolhas de Cores

### Paleta Principal
- **Primary (Azul Neurociência)**: `#2563EB` (light) / `#3B82F6` (dark)
- **Background**: `#FFFFFF` (light) / `#0F172A` (dark)
- **Surface (Cards/Painéis)**: `#F8FAFC` (light) / `#1E293B` (dark)
- **Foreground (Texto Principal)**: `#0F172A` (light) / `#F1F5F9` (dark)
- **Muted (Texto Secundário)**: `#64748B` (light) / `#94A3B8` (dark)
- **Border**: `#E2E8F0` (light) / `#334155` (dark)

### Cores de Destaque para Áreas
- **Área Selecionada**: `#10B981` (verde)
- **Área Hover**: `#F59E0B` (amarelo/âmbar)
- **Áreas Adjacentes**: `#8B5CF6` (roxo)

### Cores Funcionais
- **Success**: `#10B981` (verde)
- **Warning**: `#F59E0B` (âmbar)
- **Error**: `#EF4444` (vermelho)
- **Info**: `#3B82F6` (azul)

## Estilo Visual

- **Tipografia**: Sistema (SF Pro no iOS, Roboto no Android)
- **Hierarquia de Texto**:
  - Título Principal: 32px, bold
  - Título de Seção: 24px, semibold
  - Subtítulo: 18px, medium
  - Corpo: 16px, regular
  - Caption: 14px, regular
  
- **Espaçamento**: Sistema de 4px (4, 8, 12, 16, 24, 32, 48)
- **Bordas**: Arredondadas (8px para cards, 12px para modais)
- **Sombras**: Sutis (elevation 2-4 no Material Design)

## Componentes Principais

1. **BrainMap**: Componente SVG interativo do cérebro
2. **AreaCard**: Card com informações resumidas de uma área
3. **AreaDetailPanel**: Painel/modal com informações completas
4. **SearchBar**: Barra de busca com autocompletar
5. **AreaList**: Lista scrollável de áreas
6. **ViewToggle**: Botão para alternar entre vistas do cérebro

## Considerações de Acessibilidade

- Contraste de cores WCAG AA
- Tamanhos de toque mínimos (44x44px)
- Suporte a leitores de tela
- Navegação por teclado (desktop)
- Texto alternativo para imagens

## Tecnologias e Bibliotecas

- **Mapa Interativo**: React Native SVG + Gesture Handler
- **Animações**: React Native Reanimated
- **Navegação**: Expo Router (tabs)
- **Estilização**: NativeWind (Tailwind CSS)
- **Estado**: React Context + useState (local, sem necessidade de backend)

## Notas de Implementação

- Dados das áreas armazenados localmente (JSON/TypeScript)
- Sem necessidade de autenticação ou backend
- Foco em performance e responsividade
- Suporte offline completo
- Otimização para desktop first, depois mobile
