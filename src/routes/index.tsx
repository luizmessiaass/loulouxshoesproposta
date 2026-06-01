import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, Mail, QrCode, ScanLine, Sparkles, Zap } from "lucide-react";
import aethixLogo from "@/assets/aethix-logo-new.asset.json";
import loulouLogo from "@/assets/loulou-logo.asset.json";
import luizPhoto from "@/assets/luiz-photo.asset.json";
import { SectionHeader } from "@/components/proposal/SectionHeader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Proposta Comercial — Loulouxshoes | AethiX Digital" },
      {
        name: "description",
        content:
          "Proposta AethiX Digital para Loulouxshoes: automação do fluxo produtivo com Airtable, Make, Z-API e baixa por QR Code.",
      },
      { property: "og:title", content: "Proposta Comercial — Loulouxshoes" },
      {
        property: "og:description",
        content: "Automação do fluxo produtivo Loulouxshoes — Airtable + Make + Z-API + leitura QR.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Proposta,
});

const escopo = [
  {
    tag: "Integração inicial",
    items: [
      "Conexão Tiny ERP → Airtable com importação automática dos pedidos vindos da Baggi",
      "Sincronização dos campos: cliente, produto, prioridade, observações, e-mail, WhatsApp, barcode, foto e ficha técnica",
      "Entrada na base 'Aprovados' com status inicial e responsável",
    ],
  },
  {
    tag: "Etapas de produção",
    items: [
      "Aprovados → Programação → Corte → Artesão → Costura, com regras de movimentação",
      "Baixa de etapa por leitura de QR Code / Barcode (LOU-XXXX) diretamente pelo celular",
      "Registro automático de quem finalizou e horário em cada etapa",
      "Encerramento e arquivamento do pedido ao final do fluxo",
    ],
  },
  {
    tag: "Leitura QR / Barcode",
    items: [
      "App de leitura via câmera do celular (PWA ou Airtable mobile)",
      "Ao apontar a câmera, a automação identifica o pedido e atualiza o status da etapa",
      "Captura automática: artesão responsável, data e hora exata da conclusão",
      "Validação para evitar baixas duplicadas ou fora de ordem",
    ],
  },
  {
    tag: "Automações Make + Z-API",
    items: [
      "Gatilho ao concluir a etapa do artesão: dispara mensagem ao cliente via Z-API com foto do responsável",
      "Gatilho ao concluir a costura: mensagem personalizada de avanço",
      "Variáveis dinâmicas: nome do cliente, número do pedido, produto e responsável",
      "Logs de envio gravados no Airtable para auditoria completa",
    ],
  },
  {
    tag: "Entregáveis",
    items: [
      "Base Airtable estruturada e documentada",
      "Cenários Make publicados e versionados",
      "Templates Z-API aprovados",
      "Treinamento da equipe (1 sessão) e manual de operação",
    ],
  },
];

const diferenciais = [
  {
    icon: Zap,
    title: "Fluxo desenhado para a operação real",
    text: "Cada etapa é mapeada com base no processo atual da Loulouxshoes, garantindo que a automação acompanhe a rotina do time.",
  },
  {
    icon: ScanLine,
    title: "Baixa por câmera, sem fricção",
    text: "O artesão aponta a câmera para o QR e pronto. Status, responsável e horário são registrados em segundos.",
  },
  {
    icon: Sparkles,
    title: "Experiência do cliente como diferencial",
    text: "Notificações com a foto do artesão criam conexão, transparência e tornam o processo parte da marca.",
  },
];

const cronograma = [
  { n: "01", t: "Contrato e kick-off", d: "Assinatura, pagamento inicial e alinhamento técnico." },
  { n: "02", t: "Mapeamento e acessos", d: "Levantamento do fluxo atual, acessos ao Tiny ERP, Airtable, Make e Z-API." },
  { n: "03", t: "Estruturação Airtable", d: "Tabelas, views por etapa, sincronização com o Tiny e anexo de mockups." },
  { n: "04", t: "QR / Barcode + automações", d: "Leitor por câmera, cenários Make e disparos Z-API com foto do artesão." },
  { n: "05", t: "Testes e validação", d: "Simulação de pedidos reais e ajustes finos com a equipe." },
  { n: "06", t: "Go-live", d: "Liberação em produção e entrega oficial do fluxo." },
  { n: "07", t: "Treinamento e suporte", d: "Capacitação + manual + 15 dias de suporte pós-implantação." },
];

const investimento = [
  { title: "Integração Tiny ERP → Airtable", desc: "Importação automática dos pedidos com todos os campos e anexo do mockup." },
  { title: "Estruturação completa do Airtable", desc: "Tabelas, views por etapa, automações nativas e controle de responsáveis." },
  { title: "Baixa por QR Code / Barcode", desc: "Leitura via câmera com registro automático de responsável e horário em cada etapa." },
  { title: "Cenários Make + Z-API", desc: "Orquestração das etapas e disparos automáticos para o cliente com foto do artesão." },
  { title: "Treinamento, manual e suporte", desc: "Capacitação da equipe, documentação e 15 dias de suporte técnico." },
];

function Proposta() {
  const whatsapp =
    "https://wa.me/?text=" +
    encodeURIComponent("Olá Luiz! Vamos fechar a proposta da Loulouxshoes.");

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* Top bar */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/60">
        <div className="mx-auto flex max-w-screen-md items-center justify-between px-5 py-3">
          <img src={aethixLogo.url} alt="AethiX Digital" className="h-8 w-auto invert" />
          <a
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-medium rounded-full bg-foreground text-background px-4 py-2 hover:opacity-90 transition"
          >
            Fechar proposta
          </a>
        </div>
      </nav>

      <div className="mx-auto max-w-screen-md px-5">
        {/* 1. Capa */}
        <section className="relative bg-hero rounded-3xl my-6 px-6 py-24 sm:py-32 overflow-hidden border border-border/60 shadow-elev noise">
          {/* grid bg */}
          <div className="absolute inset-0 grid-bg opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
          {/* concentric rings */}
          <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] animate-spin-slow opacity-20">
            {[1, 2, 3, 4, 5].map((i) => (
              <span
                key={i}
                className="absolute inset-0 rounded-full border border-foreground/30"
                style={{ transform: `scale(${0.4 + i * 0.15})` }}
              />
            ))}
          </div>

          <div className="relative flex flex-col items-center text-center gap-8 animate-fade-up">
            <img
              src={aethixLogo.url}
              alt="AethiX Digital"
              className="h-12 w-auto invert opacity-90 animate-float"
            />

            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
              <span className="h-px w-8 bg-foreground/40" />
              Proposta exclusiva
              <span className="h-px w-8 bg-foreground/40" />
            </div>

            <h1 className="font-display text-5xl sm:text-6xl font-semibold leading-[0.95] tracking-tight">
              <span className="text-shine">Loulouxshoes</span>
            </h1>

            <p className="max-w-sm text-sm text-muted-foreground leading-relaxed">
              Automação do fluxo produtivo com Airtable, Make, Z-API e baixa por leitura de QR Code.
            </p>

            <div className="flex items-center gap-3 mt-4">
              <img
                src={loulouLogo.url}
                alt="Loulouxshoes"
                className="h-14 w-14 rounded-2xl object-cover ring-1 ring-foreground/10"
              />
              <span className="text-2xl text-muted-foreground font-light">×</span>
              <div className="h-14 w-14 rounded-2xl bg-foreground/5 ring-1 ring-foreground/10 flex items-center justify-center">
                <img src={aethixLogo.url} alt="AethiX" className="h-9 w-auto invert" />
              </div>
            </div>
          </div>
        </section>

        {/* 2. Proposta Comercial */}
        <section className="py-16 animate-fade-up">
          <span className="inline-block text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Documento 01 — 06
          </span>
          <h2 className="font-display text-5xl sm:text-6xl font-semibold leading-[0.95] tracking-tight">
            Proposta
            <br />
            <span className="text-muted-foreground">Comercial</span>
          </h2>

          <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8">
            {[
              ["Responsável", "Luiz Messias"],
              ["Cliente", "Cristiano Bronzatto"],
              ["Empresa", "Loulouxshoes"],
              ["Data", "01/06/2026"],
            ].map(([k, v]) => (
              <div key={k} className="border-l-2 border-foreground/30 pl-4">
                <dt className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{k}</dt>
                <dd className="text-base font-medium mt-2">{v}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-12 space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              Esta proposta apresenta de forma clara os serviços de automação e integração que serão prestados,
              o escopo do projeto, prazos, condições comerciais e especificações técnicas relevantes.
            </p>
            <p>
              Este documento tem caráter informativo e estratégico, servindo para alinhar expectativas entre
              as partes. A formalização legal ocorre exclusivamente por meio de contrato específico.
            </p>
          </div>
        </section>

        {/* 3. Introdução */}
        <section className="relative py-16 bg-section rounded-3xl px-6 my-6 border border-border/60 overflow-hidden">
          <SectionHeader title="Introdução" accent="e objeto" />
          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-foreground/20 bg-foreground/5 px-5 py-2">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">Automação de Fluxo Produtivo</span>
          </div>
          <p className="mt-8 text-sm text-muted-foreground leading-relaxed">
            A solução proposta é o desenvolvimento de um fluxo produtivo totalmente automatizado dentro do
            Airtable, integrando os pedidos vindos da Baggi e do Tiny ERP, orquestrando cada etapa do processo
            (Aprovados, Programação, Corte, Artesão e Costura) e finalizando com comunicação automática ao
            cliente via Z-API. O objetivo é reduzir trabalho manual, dar previsibilidade à operação e
            transformar o processo em parte da experiência da marca.
          </p>
        </section>

        {/* 4. Sobre */}
        <section className="py-16">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight tracking-tight">
            Desenvolvedor Full Stack
            <br />
            <span className="text-muted-foreground">e arquiteto de automações.</span>
          </h2>
          <p className="mt-8 text-sm text-muted-foreground leading-relaxed">
            Une visão técnica e operacional para transformar processos complexos em fluxos simples, integrados
            e escaláveis — não desenvolve sistemas isolados, estrutura operações inteiras.
          </p>
        </section>

        {/* 5. Por trás dos projetos */}
        <section className="py-16 grid sm:grid-cols-2 gap-10 items-center">
          <div className="order-2 sm:order-1">
            <SectionHeader title="Por trás" accent="dos projetos" />
            <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
              Sou Luiz Henrique Messias, fundador da AethiX Digital. Atuo como Full Stack e Tech Lead,
              construindo plataformas SaaS, dashboards, integrações e automações para operações de e-commerce
              e marketplaces.
            </p>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Trabalho com Next.js, React, TypeScript, Node, Python, Supabase, Airtable, Make e Z-API — e
              minha experiência cobre o ciclo completo: pedidos, estoque, faturamento, logística e
              atendimento.
            </p>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Neste projeto, a proposta vai além de entregar uma automação: é estruturar um fluxo inteligente
              e escalável conectando Airtable, Make, Z-API e Tiny ERP para dar controle, velocidade e
              previsibilidade à operação.
            </p>
          </div>
          <div className="relative order-1 sm:order-2">
            <div className="absolute -inset-3 rounded-3xl bg-foreground/5 blur-xl" />
            <img
              src={luizPhoto.url}
              alt="Luiz Messias"
              className="relative w-full aspect-[4/5] object-cover rounded-3xl border border-border/60"
            />
          </div>
        </section>

        {/* 6. Destaque QR */}
        <section className="relative py-16 bg-section rounded-3xl px-6 my-6 border border-border/60 overflow-hidden">
          <div className="grid sm:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <span className="inline-block text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-3">
                Novidade
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">
                Baixa por <span className="text-shine">QR Code</span>
              </h2>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                O artesão aponta a câmera do celular para o QR/Barcode do pedido. Em segundos, a automação
                identifica a etapa, atualiza o status e registra quem finalizou e o horário exato.
              </p>
              <ul className="mt-6 space-y-2 text-sm">
                {["Sem digitação", "Registro automático de responsável", "Data e hora exatas", "Validação anti-duplicidade"].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <Check className="h-4 w-4" /> {t}
                  </li>
                ))}
              </ul>
            </div>

            {/* QR mock visual */}
            <div className="relative mx-auto h-44 w-44 rounded-3xl border border-foreground/20 bg-background/60 p-4 overflow-hidden">
              <div className="grid grid-cols-7 grid-rows-7 gap-[3px] h-full w-full">
                {Array.from({ length: 49 }).map((_, i) => {
                  const filled = [0,1,2,3,4,5,6,7,12,14,15,21,18,20,24,25,26,28,30,33,34,35,38,40,42,43,44,45,46,47,48].includes(i);
                  return <span key={i} className={filled ? "bg-foreground rounded-[2px]" : ""} />;
                })}
              </div>
              <div className="absolute inset-x-4 top-4 bottom-4 overflow-hidden pointer-events-none">
                <div className="h-1 w-full bg-foreground/70 shadow-[0_0_20px_2px_rgba(255,255,255,0.6)] animate-scan" />
              </div>
              <span className="absolute inset-0 rounded-3xl border border-foreground/30 animate-pulse-ring" />
              <QrCode className="absolute -top-2 -right-2 h-6 w-6 text-foreground/40" />
            </div>
          </div>
        </section>

        {/* 7. Escopo */}
        <section className="py-16">
          <SectionHeader
            title="Escopo"
            accent="do projeto"
            subtitle="O escopo foi estruturado com base nas informações levantadas até o momento. Ajustes ou ampliações poderão ser realizados conforme necessidade, podendo impactar prazos e valores."
          />
          <p className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
            Sugestão de fluxo <ArrowRight className="h-4 w-4" />
          </p>
          <div className="mt-8 grid gap-4">
            {escopo.map((e, idx) => (
              <article
                key={e.tag}
                className="group rounded-2xl border border-border/60 bg-card/60 backdrop-blur p-6 hover:border-foreground/30 transition"
              >
                <div className="flex items-center justify-between gap-3 mb-5">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    Etapa {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="rounded-full bg-foreground text-background text-xs font-medium px-3 py-1">
                    {e.tag}
                  </span>
                </div>
                <ol className="divide-y divide-border/60">
                  {e.items.map((it, i) => (
                    <li key={it} className="py-3 text-sm text-muted-foreground flex gap-3">
                      <span className="text-foreground/40 font-mono text-xs pt-0.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ol>
              </article>
            ))}
            <p className="text-xs text-muted-foreground border border-border/60 rounded-xl px-4 py-3">
              Custos externos sob responsabilidade da Loulouxshoes: assinaturas Airtable, Make e Z-API.
            </p>
          </div>
        </section>

        {/* 8. Diferenciais */}
        <section className="relative py-16 bg-section rounded-3xl px-6 my-6 border border-border/60 overflow-hidden">
          <SectionHeader title="Diferenciais" accent="do projeto" />
          <div className="mt-10 grid gap-5">
            {diferenciais.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl border border-border/60 bg-background/40 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="h-9 w-9 rounded-xl bg-foreground text-background flex items-center justify-center">
                    <Icon className="h-4 w-4" />
                  </span>
                  <h3 className="text-base font-medium">{title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 9. Cronograma */}
        <section className="py-16">
          <SectionHeader title="Cronograma" accent="do projeto" subtitle="Contrato, desenvolvimento e go-live." />
          <div className="mt-10 grid gap-4">
            {cronograma.map((c) => (
              <div key={c.n} className="rounded-2xl border border-border/60 bg-card/60 p-5">
                <div className="flex items-start gap-4">
                  <span className="shrink-0 font-display text-2xl font-semibold text-foreground/30">
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
        </section>

        {/* 10. Investimento */}
        <section className="relative py-16 bg-section rounded-3xl px-6 my-6 border border-border/60 overflow-hidden">
          <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            <span>Onde você está investindo</span>
            <span className="text-foreground">Entrega: 15 dias</span>
          </div>
          <div className="h-px bg-gradient-to-r from-foreground via-foreground/30 to-transparent mt-3" />

          <ul className="mt-6 divide-y divide-border/60">
            {investimento.map((i) => (
              <li key={i.title} className="py-4">
                <div className="flex items-start gap-3">
                  <Check className="h-4 w-4 mt-1 shrink-0" />
                  <div>
                    <h3 className="text-base font-medium">{i.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{i.desc}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-2xl border border-foreground/30 bg-background/60 p-6 backdrop-blur shadow-glow">
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Investimento total</p>
            <p className="mt-2 font-display text-5xl font-semibold tracking-tight text-shine">
              R$ 3.800<span className="text-2xl text-muted-foreground">,00</span>
            </p>
            <div className="mt-5 space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
                À vista no Pix — <span className="font-medium">R$ 3.800,00</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
                6× sem juros no cartão — <span className="font-medium">R$ 633,33/mês</span>
              </p>
            </div>
          </div>
        </section>

        {/* 11. CTA */}
        <section className="relative py-24 bg-hero rounded-3xl px-6 my-6 border border-border/60 overflow-hidden noise">
          <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
          <img
            src={aethixLogo.url}
            alt="AethiX Digital"
            className="absolute top-6 right-6 h-8 w-auto invert opacity-70"
          />
          <h2 className="relative font-display text-5xl sm:text-6xl font-semibold leading-[0.95] tracking-tight">
            Vamos
            <br />
            <span className="text-shine">construir juntos?</span>
          </h2>

          <div className="relative mt-12 grid grid-cols-2 gap-6 text-sm">
            <div className="border-l-2 border-foreground/30 pl-4">
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Validade</p>
              <p className="mt-2 font-medium">5 dias corridos</p>
            </div>
            <div className="border-l-2 border-foreground/30 pl-4">
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Entrega</p>
              <p className="mt-2 font-medium">15 dias corridos</p>
            </div>
          </div>

          <div className="relative mt-10 flex flex-col gap-3">
            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-foreground text-background font-medium px-6 py-4 text-center hover:opacity-90 transition"
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
