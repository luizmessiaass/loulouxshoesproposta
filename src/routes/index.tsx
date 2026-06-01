import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, Mail } from "lucide-react";
import aethixLogo from "@/assets/aethix-logo.asset.json";
import loulouLogo from "@/assets/loulou-logo.asset.json";
import luizPhoto from "@/assets/luiz-photo.asset.json";
import { SectionHeader } from "@/components/proposal/SectionHeader";
import { CircleDecor } from "@/components/proposal/Decor";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Proposta Comercial — Loulouxshoes | AethiX Digital" },
      {
        name: "description",
        content:
          "Proposta comercial AethiX Digital para Loulouxshoes. Landing Page com foco em UI/UX, design responsivo e SEO técnico.",
      },
      { property: "og:title", content: "Proposta Comercial — Loulouxshoes" },
      {
        property: "og:description",
        content: "Proposta personalizada AethiX Digital para Cristiano Bronzatto / Loulouxshoes.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Proposta,
});

const escopo = [
  {
    tag: "Página Inicial",
    items: [
      "Seção herói",
      "Breve apresentação",
      "Benefícios",
      "Diferenciais",
      "Clientes/Projetos/Serviços",
      "FAQ",
      "Prova social (depoimentos)",
      "CTA final + formulário",
    ],
  },
  {
    tag: "Página Sobre",
    items: ["História da empresa", "Missão, visão e valores", "Parceiros & fornecedores"],
  },
  {
    tag: "Página de Serviços",
    items: ["Seção herói com Head de entrada", "Todos os serviços"],
  },
  {
    tag: "Página Contato",
    items: ["CTA + Formulário", "Redes sociais", "Localização (caso deseje)"],
  },
];

const diferenciais = [
  {
    title: "Foco em UI/UX",
    text: "Cada projeto é desenvolvido com base em princípios de experiência do usuário e interface estratégica. Não se trata apenas de estética, mas de organização visual, hierarquia de informação e tomada de decisão, garantindo clareza, profissionalismo e melhor desempenho na conversão.",
  },
  {
    title: "Framer e servidores AWS",
    text: "Os sites são desenvolvidos no Framer, plataforma moderna utilizada internacionalmente, com hospedagem em servidores AWS, referência mundial em infraestrutura e estabilidade. Isso garante alta performance, segurança, velocidade de carregamento e excelente experiência em qualquer dispositivo.",
  },
  {
    title: "Exclusividade",
    text: "O Framer ainda é uma ferramenta pouco explorada no Brasil, dominada por uma parcela reduzida de profissionais. Isso permite entregar projetos mais modernos, flexíveis e tecnologicamente avançados, fugindo de soluções genéricas e garantindo um diferencial competitivo real no mercado.",
  },
];

const cronograma = [
  {
    n: "1",
    t: "Contrato e pagamento inicial (50%)",
    d: "Início formal do projeto mediante assinatura do contrato e pagamento da primeira parcela, correspondente a 50% do valor total acordado.",
  },
  {
    n: "2",
    t: "Briefing e coleta de informações",
    d: "Etapa de alinhamento estratégico, onde são coletadas todas as informações necessárias, materiais, referências e direcionamentos para o desenvolvimento do projeto.",
  },
  {
    n: "3",
    t: "Desenvolvimento da Copy",
    d: "Com base no briefing, é estruturado o conteúdo estratégico do site (copywriting), incluindo organização das seções e narrativa. A copy é enviada para aprovação antes do início do desenvolvimento visual.",
  },
  {
    n: "4",
    t: "Desenvolvimento do Projeto",
    d: "Após a aprovação da copy, inicia-se o desenvolvimento do layout e da estrutura do site, aplicando os conceitos de UI/UX, identidade visual e arquitetura definidos previamente.",
  },
  {
    n: "5",
    t: "Aprovação Final do Projeto",
    d: "O projeto é apresentado para validação. Todas as solicitações de ajustes devem ser realizadas nesta etapa. Após a aprovação final, alterações adicionais poderão gerar custos extras.",
  },
  {
    n: "6",
    t: "Pagamento Final (50%)",
    d: "Após a aprovação do projeto, é realizado o pagamento da parcela final para liberação da etapa de publicação.",
  },
  {
    n: "7",
    t: "Publicação do projeto",
    d: "Com o pagamento final confirmado, é realizado o deploy do projeto, incluindo vinculação de domínio e configuração de hospedagem. A publicação ocorre somente após a confirmação do pagamento final (50%), uma vez que domínio e hospedagem dependem diretamente do pagamento por parte do contratante.",
  },
];

const investimento = [
  {
    title: "Landing Page",
    desc: "Landing Page completa, do design à publicação e conteúdo completo, estrutura conforme escopo da proposta.",
  },
  {
    title: "Serviços de UX/UI Avançados",
    desc: "Micro-animações, navegação intuitiva, interações e padrões de interface que garantem uma experiência fluida e agradável para o usuário.",
  },
  {
    title: "Design Responsivo",
    desc: "Adaptação perfeita para todos os dispositivos: desktop, tablet e mobile, sem comprometer funcionalidade.",
  },
  {
    title: "SEO Técnico",
    desc: "Estrutura do site, hierarquia de conteúdo, headings, meta tags e URLs otimizadas para aumentar a visibilidade no Google.",
  },
];

function Proposta() {
  const whatsapp =
    "https://wa.me/?text=" +
    encodeURIComponent("Olá Luiz! Vamos fechar a proposta da Loulouxshoes.");

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* Top bar */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
        <div className="mx-auto flex max-w-screen-md items-center justify-between px-5 py-3">
          <img src={aethixLogo.url} alt="AethiX Digital" className="h-7 w-auto invert" />
          <a
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-medium rounded-full bg-accent text-accent-foreground px-4 py-2 shadow-glow"
          >
            Fechar proposta
          </a>
        </div>
      </nav>

      <div className="mx-auto max-w-screen-md px-5">
        {/* 1. Capa */}
        <section className="relative bg-hero rounded-3xl my-6 px-6 py-20 sm:py-28 overflow-hidden border border-border/60">
          <CircleDecor className="-left-20 -bottom-20 w-[420px] h-[420px] text-foreground" />
          <div className="relative flex flex-col items-center text-center gap-6 animate-fade-up">
            <img
              src={loulouLogo.url}
              alt="Loulouxshoes"
              className="h-28 w-28 rounded-2xl object-cover ring-1 ring-white/10"
            />
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Proposta para
            </p>
            <h1 className="text-3xl font-semibold tracking-tight">Loulouxshoes</h1>
          </div>
        </section>

        {/* 2. Proposta Comercial */}
        <section className="py-14 animate-fade-up">
          <h2 className="text-5xl sm:text-6xl font-semibold leading-[0.95] tracking-tight">
            Proposta
            <br />
            <span className="text-accent">Comercial</span>
          </h2>

          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6">
            {[
              ["Responsável", "Luiz Messias"],
              ["Cliente", "Cristiano Bronzatto"],
              ["Empresa", "Loulouxshoes"],
              ["Data", "01/06/2026"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="text-sm font-medium">{k}:</dt>
                <dd className="text-sm text-muted-foreground mt-1">{v}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              Esta proposta tem como objetivo apresentar de forma clara os serviços de web design e
              desenvolvimento web que serão prestados, bem como a solução proposta para atender às
              necessidades do projeto. Aqui estão descritos o escopo do projeto, etapas de
              desenvolvimento, prazos estimados, condições comerciais, formas de pagamento e demais
              especificações técnicas relevantes.
            </p>
            <p>
              Este documento tem caráter informativo e estratégico, servindo para alinhar
              expectativas entre as partes quanto ao escopo, entregas e processo de desenvolvimento.
              A formalização legal do serviço, bem como direitos, deveres e responsabilidades,
              ocorre exclusivamente por meio de contrato específico, firmado entre as partes.
            </p>
          </div>
        </section>

        {/* 3. Introdução */}
        <section className="relative py-14 bg-section rounded-3xl px-6 my-6 border border-border/60 overflow-hidden">
          <SectionHeader title="Introdução" accent="e objeto da proposta" />
          <div className="mt-8 flex items-center gap-3">
            <span className="text-sm">Objeto da proposta:</span>
            <span className="rounded-full bg-accent text-accent-foreground text-sm font-medium px-4 py-1.5 shadow-glow">
              Landing Page
            </span>
          </div>
          <p className="mt-8 text-sm text-muted-foreground leading-relaxed">
            A solução proposta para a Loulouxshoes é o desenvolvimento de uma Landing Page de alta
            conversão, com identidade visual alinhada à marca, foco em performance e experiência
            mobile-first. O projeto contempla copywriting estratégico, design exclusivo, animações
            sutis e hospedagem profissional.
          </p>
        </section>

        {/* 4. Sobre Luiz */}
        <section className="py-14">
          <h2 className="text-3xl sm:text-4xl font-semibold leading-tight tracking-tight">
            Product Designer focado em <span className="text-accent">UI/UX</span>,{" "}
            <span className="text-muted-foreground">não Web Designer.</span>
          </h2>
          <p className="mt-8 text-sm text-muted-foreground leading-relaxed">
            Desenvolvo interfaces digitais pensadas para conversão e clareza. Cada projeto combina
            estética, estratégia e tecnologia para entregar experiências que fortalecem marcas e
            geram resultados reais.
          </p>
        </section>

        {/* 5. Por trás dos projetos */}
        <section className="py-14 grid sm:grid-cols-2 gap-8 items-center">
          <div>
            <SectionHeader title="Por trás dos" accent="projetos" />
            <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
              Sou Luiz Messias, fundador da AethiX Digital. Trabalho com design de produto e
              desenvolvimento web focado em UI/UX, atendendo marcas que valorizam exclusividade,
              performance e identidade visual de verdade.
            </p>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Cada entrega é construída com atenção a detalhes técnicos, tipografia, hierarquia e
              microinterações — princípios que definem uma boa interface.
            </p>
          </div>
          <div className="relative">
            <img
              src={luizPhoto.url}
              alt="Luiz Messias"
              className="w-full aspect-[4/5] object-cover rounded-3xl border border-border/60"
            />
          </div>
        </section>

        {/* 6 + 7. Portfólio */}
        <section className="relative py-14 bg-section rounded-3xl px-6 my-6 border border-border/60 overflow-hidden">
          <SectionHeader title="Conheça meu" accent="Portfólio" />
          <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
            Principais projetos <ArrowRight className="h-4 w-4 text-accent" />
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3">
            {[
              "from-rose-900/60 to-red-950",
              "from-zinc-800 to-zinc-950",
              "from-orange-900/50 to-red-950",
              "from-neutral-800 to-neutral-950",
              "from-red-900/60 to-zinc-950",
              "from-zinc-900 to-black",
            ].map((g, i) => (
              <div
                key={i}
                className={`aspect-[4/5] rounded-2xl bg-gradient-to-br ${g} border border-border/60 flex items-end p-4`}
              >
                <span className="text-xs text-muted-foreground">Projeto {i + 1}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 8. Escopo */}
        <section className="py-14">
          <SectionHeader
            title="Escopo"
            accent="do Projeto"
            subtitle="O escopo deste projeto foi estruturado com base nas informações levantadas até o momento. Ajustes ou ampliações poderão ser realizados conforme necessidade, podendo impactar prazos e valores apresentados nesta proposta."
          />
          <p className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
            Sugestão de estrutura <ArrowRight className="h-4 w-4 text-accent" />
          </p>
          <div className="mt-8 grid gap-4">
            {escopo.map((e) => (
              <article
                key={e.tag}
                className="rounded-2xl border border-border/60 bg-card p-5"
              >
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="text-sm font-medium text-muted-foreground">Seções</span>
                  <span className="rounded-full bg-accent text-accent-foreground text-xs font-medium px-3 py-1">
                    {e.tag}
                  </span>
                </div>
                <ol className="divide-y divide-border/60">
                  {e.items.map((it, i) => (
                    <li key={it} className="py-3 text-sm text-muted-foreground">
                      {i + 1}. {it}
                    </li>
                  ))}
                </ol>
              </article>
            ))}
            <p className="text-xs text-muted-foreground border border-border/60 rounded-xl px-4 py-3">
              O projeto inclui rodapé e barra de navegação.
            </p>
          </div>
        </section>

        {/* 9. Diferenciais */}
        <section className="relative py-14 bg-section rounded-3xl px-6 my-6 border border-border/60 overflow-hidden">
          <CircleDecor className="-left-20 -bottom-20 w-[400px] h-[400px] text-foreground" />
          <SectionHeader title="Diferenciais" accent="do Projeto" />
          <div className="mt-10 space-y-8 relative">
            {diferenciais.map((d) => (
              <div key={d.title}>
                <h3 className="text-lg font-medium">{d.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 10. Cronograma */}
        <section className="py-14">
          <SectionHeader
            title="Cronograma"
            accent="do Projeto"
            subtitle="Contrato, desenvolvimento e publicação."
          />
          <div className="mt-10 grid gap-4">
            {cronograma.map((c) => (
              <div
                key={c.n}
                className="rounded-2xl border border-border/60 bg-card p-5"
              >
                <div className="flex items-start gap-4">
                  <span className="shrink-0 h-9 w-9 rounded-full bg-accent text-accent-foreground text-sm font-semibold flex items-center justify-center shadow-glow">
                    {c.n}
                  </span>
                  <div>
                    <h3 className="text-base font-medium">{c.t}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 flex items-center gap-2 text-sm text-muted-foreground justify-center">
            Em caso de dúvidas, entre em contato <ArrowRight className="h-4 w-4 text-accent" />
          </p>
        </section>

        {/* 11. Investimento */}
        <section className="relative py-14 bg-section rounded-3xl px-6 my-6 border border-border/60 overflow-hidden">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>Onde você está investindo</span>
            <span className="text-foreground">Prazo de entrega: 40 dias</span>
          </div>
          <div className="h-px bg-gradient-to-r from-accent/80 via-accent/30 to-transparent mt-3" />

          <ul className="mt-6 divide-y divide-border/60">
            {investimento.map((i) => (
              <li key={i.title} className="py-4">
                <div className="flex items-start gap-3">
                  <Check className="h-4 w-4 text-accent mt-1 shrink-0" />
                  <div>
                    <h3 className="text-base font-medium">{i.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{i.desc}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-2xl border border-accent/40 bg-background/50 p-6 shadow-glow">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Investimento total
            </p>
            <p className="mt-2 text-4xl font-semibold tracking-tight">
              R$ 3.800<span className="text-2xl text-muted-foreground">,00</span>
            </p>
            <div className="mt-5 space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />À vista no Pix —{" "}
                <span className="font-medium">R$ 3.800,00</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                6x sem juros no cartão —{" "}
                <span className="font-medium">R$ 633,33/mês</span>
              </p>
            </div>
          </div>
        </section>

        {/* 12. CTA final */}
        <section className="relative py-20 bg-hero rounded-3xl px-6 my-6 border border-border/60 overflow-hidden">
          <img
            src={aethixLogo.url}
            alt="AethiX Digital"
            className="absolute top-6 right-6 h-8 w-auto invert opacity-80"
          />
          <h2 className="text-5xl sm:text-6xl font-semibold leading-[0.95] tracking-tight">
            Eai, vamos
            <br />
            <span className="text-accent">fechar?</span>
          </h2>

          <div className="mt-12 grid grid-cols-2 gap-6 text-sm">
            <div>
              <p className="text-muted-foreground">Validade do orçamento:</p>
              <p className="mt-1 font-medium">30 dias corridos</p>
            </div>
            <div>
              <p className="text-muted-foreground">Prazo de entrega:</p>
              <p className="mt-1 font-medium">40 dias corridos</p>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3">
            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-accent text-accent-foreground font-medium px-6 py-4 text-center shadow-glow hover:opacity-90 transition"
            >
              Fechar pelo WhatsApp
            </a>
            <a
              href="mailto:contato@aethix.digital"
              className="rounded-full border border-border bg-background/50 backdrop-blur px-6 py-4 text-center font-medium flex items-center justify-center gap-2 hover:bg-background transition"
            >
              <Mail className="h-4 w-4" /> contato@aethix.digital
            </a>
          </div>
        </section>

        <footer className="py-10 text-center text-xs text-muted-foreground">
          © 2026 AethiX Digital · Proposta exclusiva para Loulouxshoes
        </footer>
      </div>
    </main>
  );
}
