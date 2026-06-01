## Visão geral

Site one-page de proposta comercial, **mobile-first**, replicando fielmente o template em PDF da AethiX Digital (16 slides), adaptado para o cliente **Loulouxshoes**. Layout vertical com rolagem suave, identidade visual preto + accent coral/vermelho (`#FF4F3A`), tipografia sans-serif moderna (Inter/Space Grotesk), gradientes radiais sutis e elementos circulares decorativos como nas referências.

## Identidade & dados fixos

- **Responsável:** Luiz Messias (AethiX Digital) — logo no header/footer + foto pessoal na seção "Por trás dos projetos"
- **Cliente:** Cristiano Bronzatto
- **Empresa:** Loulouxshoes — logo (coração vermelho + raios pretos) usada na capa no lugar de "Sua marca"
- **Data:** 01/06/2026
- **Investimento:** R$ 3.800,00 à vista (Pix) ou 6x de R$ 633,33 sem juros no cartão

## Estrutura das seções (mobile-first)

1. **Capa** — gradiente preto→vermelho, logo Loulouxshoes centralizada, círculos decorativos
2. **Proposta Comercial** — título grande "Proposta / Comercial" (coral), grid 2x2 com Responsável / Cliente / Empresa / Data + parágrafo introdutório
3. **Introdução e objeto da proposta** — badge "Landing Page" em pill coral + texto descritivo
4. **Product Designer focado em UI/UX, não Web Designer** — headline impacto + bio
5. **Por trás dos projetos** — texto + foto do Luiz Messias (a anexada)
6. **Conheça meu Portfólio** — divisor de seção com seta
7. **Grid de projetos (bento)** — 4-6 cards mockup escuros (placeholders estilizados)
8. **Escopo do Projeto** — intro + 4 cards de páginas:
   - Página Inicial (8 seções)
   - Página Sobre (3 seções)
   - Página de Serviços (2 seções)
   - Página Contato (3 seções)
   - Nota: "O projeto inclui rodapé e barra de navegação"
9. **Diferenciais do Projeto** — Foco em UI/UX, Framer + AWS, Exclusividade
10. **Cronograma do Projeto** — 7 cards numerados (Contrato 50% → Briefing → Copy → Desenvolvimento → Aprovação → Pagamento 50% → Publicação)
11. **Onde você está investindo** — lista de entregáveis (Site Institucional, Landing Page, UX/UI Avançado, Responsivo, SEO Técnico) + bloco destacado de **investimento total R$ 3.800,00** com opções de pagamento (à vista Pix ou 6x sem juros no cartão) + prazo 40 dias
12. **Eai, vamos fechar?** — CTA final, validade orçamento 30 dias, prazo entrega 7 dias, botões WhatsApp/E-mail, logo AethiX Digital

## Decisões técnicas

- TanStack Start, rota única `/` em `src/routes/index.tsx`
- Tokens em `src/styles.css`: `--background` preto, `--accent` coral `oklch` do `#FF4F3A`, gradientes `--gradient-hero` (radial vermelho no canto)
- Tipografia: Inter via `@import` no styles.css
- Logos e foto via `lovable-assets create` a partir de `/mnt/user-uploads/` (Aethix, Loulouxshoes, foto Luiz)
- Componentes pequenos por seção em `src/components/proposal/*`
- Animações leves de fade/slide no scroll (CSS only, sem libs novas)
- Meta tags em PT-BR: title "Proposta Comercial — Loulouxshoes | AethiX Digital"

## Fora do escopo

- Sem backend, sem formulário funcional (CTA abre WhatsApp/mailto)
- Sem múltiplas rotas (proposta é one-page)
- Sem dark mode toggle (já é dark por padrão)
