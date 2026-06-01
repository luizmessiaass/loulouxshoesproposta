import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Barcode,
  CalendarClock,
  Check,
  ChevronRight,
  Clock3,
  DatabaseZap,
  Mail,
  MessageCircle,
  PackageCheck,
  ScanLine,
  Scissors,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";
import { useEffect, useRef } from "react";
import { SectionHeader } from "@/components/proposal/SectionHeader";

const aethixLogoUrl = "/assets/aethix-logo-clean.png";
const loulouLogoUrl = "/assets/louloux-logo.jpeg";
const luizPhotoUrl = "/assets/luiz-photo.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Proposta Comercial - Loulouxshoes | AethiX Digital" },
      {
        name: "description",
        content:
          "Proposta AethiX Digital para automatizar o fluxo produtivo da Loulouxshoes com Airtable, Tiny ERP, Make, Z-API e leitura por QR Code.",
      },
      { property: "og:title", content: "Proposta Comercial - Loulouxshoes" },
      {
        property: "og:description",
        content:
          "Automacao operacional para pedidos Baggi/Tiny, producao em etapas, baixa por QR Code e mensagens automaticas via Z-API.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Proposta,
});

const orderFields = [
  ["Pedido", "7239"],
  ["Cliente", "Mariana Felix Angioletti"],
  ["Produto", "Coque Banana - 38"],
  ["Prioridade", "Urgente"],
  ["Entrega sensivel", "Casamento civil em 10/07/2026"],
  ["Barcode", "LOU-7239"],
];

const flowSteps = [
  {
    icon: PackageCheck,
    title: "Aprovado",
    description: "Pedido entra do e-commerce/Tiny com dados, anexos, itens, prioridade e barcode.",
  },
  {
    icon: CalendarClock,
    title: "Programacao",
    description:
      "Fila visual por urgencia, data critica, item individual e disponibilidade da fabrica.",
  },
  {
    icon: ScanLine,
    title: "Corte",
    description:
      "Leitura optica confirma entrada/saida, imprime ficha e evita baixa fora de ordem.",
  },
  {
    icon: Scissors,
    title: "Costura",
    description: "Responsavel confirma etapa por barcode, com data, hora e controle de parcial.",
  },
  {
    icon: Sparkles,
    title: "Pre-fabricado",
    description: "Etapa intermediaria para organizar pecas antes de montagem e acabamento.",
  },
  {
    icon: Workflow,
    title: "Montagem",
    description: "Cada item segue individualmente, mesmo quando o pedido tem multiplos produtos.",
  },
  {
    icon: Check,
    title: "Acabamento",
    description: "Conferencia final, etiqueta de caixa e liberacao para expedicao.",
  },
  {
    icon: Barcode,
    title: "Expedicao",
    description: "Etiqueta termica, ficha destacavel e leitura final antes do envio.",
  },
  {
    icon: MessageCircle,
    title: "Enviado",
    description:
      "Cliente recebe atualizacao automatica por WhatsApp/e-mail e o historico fica salvo.",
  },
];

const operationNeeds = [
  "Velocidade de adaptacao",
  "Facilidade operacional",
  "Mudancas constantes de fluxo",
  "Interface visual simples para a equipe de fabrica",
  "Implementacao rapida",
  "Autonomia operacional",
];

const scope = [
  {
    tag: "Integracao de pedidos",
    items: [
      "Automacao da importacao dos pedidos que entram no e-commerce, passam pelo Tiny ERP e hoje sao levados manualmente ao Airtable.",
      "Preenchimento dos campos essenciais: pedido, data, cliente, produto, prioridade, observacoes, e-mail, WhatsApp, foto, desenho tecnico, barcode e ultima alteracao.",
      "Pedidos com multiplos itens passam a ser quebrados em itens produtivos individuais, mantendo vinculo com o pedido original.",
    ],
  },
  {
    tag: "Controle visual de producao",
    items: [
      "Status produtivos: Aprovado, Programacao, Corte, Costura, Pre-fabricado, Montagem, Acabamento, Expedicao e Enviado.",
      "Interface simples para fabrica operar por botoes, leitura optica e cards visuais, sem precisar entender estrutura tecnica.",
      "Campos de auditoria para data/hora de entrada, conclusao, responsavel, atrasos, prioridade e tentativas de envio.",
    ],
  },
  {
    tag: "Leitura e impressao",
    items: [
      "Leitores de codigo de barras por etapa para atualizar automaticamente o status do item produtivo.",
      "Impressao de ficha fisica destacavel de producao com dados do pedido, mockup, barcode e observacoes.",
      "Impressao de etiquetas termicas para identificacao interna e etiqueta final de caixa.",
    ],
  },
  {
    tag: "Comunicacao e fiscal",
    items: [
      "Comunicacao automatica por WhatsApp/e-mail em marcos definidos pela operacao.",
      "Templates com variaveis dinamicas: nome, pedido, produto, etapa, prazo, responsavel e status parcial.",
      "Integracao com Tiny para emissao/liberacao de NF conforme regra comercial definida.",
      "Logs de sucesso, erro, reenvio e bloqueios gravados para auditoria.",
    ],
  },
  {
    tag: "Mini sistema bonus",
    items: [
      "Sistema proprio simples, com identidade visual Louloux, para intermediar etapas, leituras, impressao e comunicacao.",
      "Construido como camada modular: sem substituir tudo de uma vez, mas pronto para crescer quando a operacao pedir.",
      "Bonus gratuito incluso nesta proposta, sem custo adicional de desenvolvimento.",
    ],
  },
];

const highlights = [
  {
    icon: Zap,
    title: "Rapido sem virar sistema gigante",
    text: "A primeira versao resolve o fluxo critico sem trocar a operacao inteira de uma vez.",
  },
  {
    icon: DatabaseZap,
    title: "Autonomia para mudar o fluxo",
    text: "A estrutura permite adaptar status, regras e telas sem depender de grandes ciclos de desenvolvimento.",
  },
  {
    icon: MessageCircle,
    title: "Fabrica operando no simples",
    text: "A equipe trabalha com leitura, botoes claros, fichas impressas e telas objetivas.",
  },
];

const timeline = [
  ["01", "Kick-off e acessos", "Alinhamento tecnico, credenciais e validacao do fluxo real."],
  [
    "02",
    "Modelo operacional",
    "Status, itens produtivos, pedidos parciais, campos e regras de leitura.",
  ],
  [
    "03",
    "Integracao Tiny/Baggi",
    "Entrada dos pedidos aprovados com os campos e anexos necessarios.",
  ],
  [
    "04",
    "Mini sistema bonus",
    "Tela propria para leitura, status, impressao e operacao da fabrica.",
  ],
  ["05", "Make + Z-API + e-mail", "Cenarios de automacao e mensagens com variaveis dinamicas."],
  ["06", "Impressao e NF", "Ficha de producao, etiqueta termica, etiqueta final e regras Tiny/NF."],
  ["07", "Testes reais", "Simulacao com pedidos como LOU-7239, ajuste de erros e homologacao."],
  ["08", "Go-live assistido", "Publicacao, treinamento e acompanhamento inicial da operacao."],
];

const deliverables = [
  "Base Airtable estruturada para producao",
  "Views por etapa e responsavel",
  "QR/Barcode operacional por pedido",
  "Leitura optica por etapa",
  "Ficha destacavel de producao",
  "Etiqueta termica e etiqueta final de caixa",
  "Controle de pedidos parciais",
  "Cenarios Make publicados",
  "Mensagens Z-API configuradas",
  "Mini sistema bonus com identidade Louloux",
  "Manual de operacao e treinamento",
];

const systems = [
  {
    name: "Baggi",
    role: "Origem do pedido",
  },
  {
    name: "Tiny ERP",
    role: "Dados comerciais",
  },
  {
    name: "Airtable",
    role: "Painel operacional",
  },
  {
    name: "Make",
    role: "Orquestracao",
  },
  {
    name: "Z-API",
    role: "WhatsApp automatico",
  },
];

function AethixLogo({ compact = false }: { compact?: boolean }) {
  return (
    <img
      src={aethixLogoUrl}
      alt="AethiX Digital"
      className={compact ? "h-5 w-auto invert" : "h-12 w-auto invert sm:h-14"}
    />
  );
}

function SystemLogo({ name, className }: { name: string; className?: string }) {
  const logos: Record<string, string> = {
    Baggi: "https://bagy.com.br/wp-content/uploads/2023/10/Logo_Bagy_Branca.svg",
    "Tiny ERP": "https://tiny.com.br/assets/images/logo/logo-tiny-branca.svg",
    Airtable: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Airtable_Logo.svg",
    Make: "https://upload.wikimedia.org/wikipedia/commons/6/69/Make_Logo.svg",
    "Z-API": "/assets/z-api.svg",
  };

  const logoUrl = logos[name];

  if (logoUrl) {
    return (
      <span
        className={`flex h-14 w-32 shrink-0 items-center justify-center rounded-xl border border-border/80 bg-background/50 px-4 py-2 backdrop-blur shadow-sm ${className || ""}`}
      >
        <img
          src={logoUrl}
          alt={name}
          className={`max-h-full max-w-full object-contain ${
            name === "Airtable" || name === "Make" || name === "Z-API" ? "brightness-0 invert opacity-90" : "opacity-90"
          }`}
        />
      </span>
    );
  }

  return (
    <span
      className={`flex h-14 w-32 shrink-0 items-center justify-center rounded-xl border border-border/80 bg-background/50 px-4 text-xs font-black uppercase tracking-wider text-foreground/80 backdrop-blur shadow-sm ${className || ""}`}
      aria-hidden="true"
    >
      {name}
    </span>
  );
}

function Proposta() {
  const rootRef = useRef<HTMLElement>(null);
  const whatsapp =
    "https://wa.me/?text=" +
    encodeURIComponent("Ola Luiz! Vamos fechar a proposta da Loulouxshoes.");

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !rootRef.current) return;

    let ctx: { revert: () => void } | undefined;

    async function animate() {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);

      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        gsap.from("[data-hero]", {
          autoAlpha: 0,
          y: 28,
          duration: 0.85,
          ease: "power3.out",
          stagger: 0.08,
        });

        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
          gsap.from(element, {
            autoAlpha: 0,
            y: 34,
            duration: 0.75,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 84%",
              once: true,
            },
          });
        });
      }, rootRef);
    }

    void animate();

    return () => {
      ctx?.revert();
    };
  }, []);

  return (
    <main
      ref={rootRef}
      className="relative min-h-screen overflow-x-hidden bg-background text-foreground"
    >
      {/* Background ambient light orbs - fixed, full page */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,_oklch(0.25_0.04_250_/_0.35)_0%,_transparent_70%)] blur-3xl" />
        <div className="absolute top-1/3 -right-48 h-[500px] w-[500px] rounded-full bg-[radial-gradient(ellipse_at_center,_oklch(0.2_0.028_220_/_0.25)_0%,_transparent_70%)] blur-3xl" />
        <div className="absolute -bottom-32 left-1/3 h-[400px] w-[400px] rounded-full bg-[radial-gradient(ellipse_at_center,_oklch(0.18_0.022_260_/_0.3)_0%,_transparent_70%)] blur-3xl" />
      </div>
      <nav className="sticky top-0 z-50 border-b border-border/70 bg-background/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <a
            href="#topo"
            className="flex min-h-11 items-center gap-3"
            aria-label="Voltar ao inicio"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/70 bg-card/80">
              <AethixLogo compact />
            </span>
            <span className="hidden text-xs uppercase tracking-[0.26em] text-muted-foreground sm:inline">
              Proposta Loulouxshoes
            </span>
          </a>
          <a
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-glow transition duration-200 hover:-translate-y-0.5 hover:bg-primary/90"
          >
            Fechar proposta
          </a>
        </div>
      </nav>

      <div id="topo" className="relative z-10 mx-auto max-w-6xl px-5">
        <section className="relative z-10 my-6 min-h-[calc(100svh-6rem)] overflow-hidden rounded-[2rem] border border-border/60 bg-hero px-5 py-8 shadow-elev sm:px-8 lg:px-12">
          <div className="absolute inset-0 grid-bg opacity-80 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]" />
          {/* Hero glow orb top-left */}
          <div aria-hidden="true" className="pointer-events-none absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full bg-[radial-gradient(ellipse_at_center,_oklch(0.32_0.05_255_/_0.45)_0%,_transparent_70%)] blur-3xl" />
          {/* Hero glow orb bottom-right */}
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -right-24 h-[320px] w-[320px] rounded-full bg-[radial-gradient(ellipse_at_center,_oklch(0.22_0.03_230_/_0.35)_0%,_transparent_70%)] blur-2xl" />
          <div className="scan-orbit pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full border border-primary/15" />

          <div className="relative grid min-h-[calc(100svh-10rem)] items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="animate-fade-up">
              <div data-hero className="mb-8 flex flex-wrap items-center gap-3">
                <img
                  src={loulouLogoUrl}
                  alt="Loulouxshoes"
                  className="h-14 w-14 rounded-2xl object-cover ring-1 ring-primary/20"
                />
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                <span className="inline-flex min-h-14 items-center rounded-2xl border border-border/60 bg-card/80 px-4 py-2 backdrop-blur-sm">
                  <img src={aethixLogoUrl} alt="AethiX Digital" className="h-10 w-auto invert sm:h-12" />
                </span>
              </div>

              <p
                data-hero
                className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-accent"
              >
                <Workflow className="h-4 w-4" />
                Automacao produtiva
              </p>

              <h1
                data-hero
                className="max-w-4xl font-display text-5xl font-semibold leading-[0.94] text-balance sm:text-7xl lg:text-8xl"
              >
                Loulouxshoes com producao rastreavel, automatizada e mais humana.
              </h1>

              <p
                data-hero
                className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg"
              >
                Uma solucao modular para importar pedidos, controlar etapas por leitura optica,
                imprimir fichas e etiquetas, avisar o cliente e liberar NF sem transformar a fabrica
                em refem de um sistema gigante.
              </p>

              <div data-hero className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#escopo"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition duration-200 hover:-translate-y-0.5 hover:bg-primary/90"
                >
                  Ver escopo <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#investimento"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-border bg-background/40 px-6 text-sm font-semibold text-foreground backdrop-blur transition duration-200 hover:bg-card"
                >
                  Investimento e prazo
                </a>
              </div>
            </div>

            <div data-hero className="animate-fade-up [animation-delay:120ms]">
              <div className="relative mx-auto max-w-md rounded-[1.7rem] border border-border/70 bg-background/70 p-4 shadow-elev backdrop-blur-xl">
                <div className="rounded-[1.25rem] border border-border/70 bg-card/70 p-5">
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                        Pedido exemplo
                      </p>
                      <h2 className="mt-2 font-display text-3xl font-semibold">LOU-7239</h2>
                    </div>
                    <span className="rounded-full border border-warn/30 bg-warn/10 px-3 py-1 text-xs font-semibold text-warn">
                      Urgente
                    </span>
                  </div>

                  <div className="space-y-3">
                    {orderFields.map(([label, value]) => (
                      <div
                        key={label}
                        className="rounded-2xl border border-border/60 bg-background/55 px-4 py-3"
                      >
                        <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                          {label}
                        </p>
                        <p className="mt-1 text-sm font-medium text-foreground">{value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 grid grid-cols-[1fr_auto] items-center gap-4 rounded-2xl border border-accent/25 bg-accent/8 p-4">
                    <div>
                      <p className="text-xs font-semibold text-accent">Ficha tecnica inclusa</p>
                      <p className="mt-1 text-xs leading-5 text-muted-foreground">
                        Foto, desenho e mockup do produto seguem com o pedido em todas as etapas.
                      </p>
                    </div>
                    <Barcode className="h-9 w-9 text-accent" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-5 py-12 sm:grid-cols-3">
          {[
            ["Cliente", "Loulouxshoes"],
            ["Responsavel", "Luiz Messias - AethiX Digital"],
            ["Data", "01/06/2026"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-border/70 bg-card/45 p-5">
              <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                {label}
              </p>
              <p className="mt-2 text-base font-semibold">{value}</p>
            </div>
          ))}
        </section>

        <section data-reveal className="py-16">
          <div className="grid gap-8 rounded-[2rem] border border-border/70 bg-card/55 p-6 sm:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-10">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                Realidade da operacao
              </p>
              <h2 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
                A Louloux precisa de velocidade, simplicidade e liberdade para mudar.
              </h2>
              <p className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base">
                O caminho correto nao e substituir tudo de imediato. E criar uma camada operacional
                simples, visual e escalavel, que organiza o fluxo atual e permite evoluir sem travar
                a fabrica.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {operationNeeds.map((need) => (
                <div
                  key={need}
                  className="flex items-center gap-3 rounded-2xl border border-border/70 bg-background/45 p-4"
                >
                  <Check className="h-4 w-4 shrink-0 text-accent" />
                  <span className="text-sm font-semibold">{need}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <SectionHeader
            eyebrow="Objetivo"
            title="Da venda aprovada"
            accent="ao produto finalizado"
            subtitle="A proposta e desenvolver uma operacao que acompanha o pedido do momento em que ele entra como aprovado ate a conclusao das etapas produtivas, com visibilidade para o time e comunicacao automatica para o cliente."
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-5">
            {flowSteps.map(({ icon: Icon, title, description }, index) => (
              <article
                key={title}
                className="group relative rounded-2xl border border-border/70 bg-card/55 p-5 transition duration-200 hover:-translate-y-1 hover:border-accent/40"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-display text-3xl font-semibold text-foreground/20">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="relative my-6 overflow-hidden rounded-[2rem] border border-border/70 bg-section px-6 py-16 sm:px-8 lg:px-10">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                <ScanLine className="h-4 w-4" />
                Recomendacao tecnica
              </p>
              <h2 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
                Melhor que "bipar": confirmar por QR com contexto.
              </h2>
              <p className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base">
                O leitor fisico funciona, mas adiciona custo e depende de equipamento. Para este
                fluxo, a melhor primeira versao e um QR Code por pedido abrindo uma tela simples: o
                responsavel confere pedido, produto e etapa, toca em confirmar e a automacao faz o
                resto.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Evita erro", "O usuario ve o pedido antes de concluir a etapa."],
                ["Funciona no celular", "Sem instalar leitor dedicado na fase inicial."],
                ["Tem auditoria", "Responsavel, data, hora e etapa ficam gravados."],
                [
                  "Escala depois",
                  "Se fizer sentido, o mesmo barcode pode ser usado com scanner fisico.",
                ],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-border/70 bg-background/50 p-5 backdrop-blur"
                >
                  <Check className="mb-4 h-5 w-5 text-accent" />
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="escopo" className="py-16">
          <SectionHeader
            eyebrow="Escopo"
            title="O que sera"
            accent="desenvolvido"
            subtitle="O escopo abaixo cobre a primeira versao funcional do fluxo, com foco em operacao real, rastreabilidade e automacoes que reduzem tarefas manuais."
          />

          <div className="mt-10 grid gap-5">
            {scope.map((item, index) => (
              <article
                key={item.tag}
                className="rounded-[1.5rem] border border-border/70 bg-card/50 p-5 sm:p-6"
              >
                <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background font-display text-sm font-semibold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-lg font-semibold">{item.tag}</h3>
                  </div>
                  <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                    Incluso
                  </span>
                </div>
                <ol className="grid gap-3">
                  {item.items.map((line) => (
                    <li
                      key={line}
                      className="flex gap-3 rounded-2xl border border-border/55 bg-background/35 p-4 text-sm leading-6 text-muted-foreground"
                    >
                      <Check className="mt-1 h-4 w-4 shrink-0 text-accent" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ol>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 py-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow="Arquitetura"
              title="Ferramentas externas"
              accent="e responsabilidades"
              subtitle="A implementacao usa ferramentas de mercado para entregar velocidade sem criar um sistema pesado desde o primeiro dia."
            />
            <p className="mt-6 rounded-2xl border border-warn/30 bg-warn/10 p-4 text-sm leading-6 text-warn">
              Custos externos sob responsabilidade da Loulouxshoes: planos do Airtable, Make e
              Z-API. Caso algum plano precise de upgrade por limite de automacoes, registros ou
              envios, isso sera validado antes.
            </p>
          </div>

          <div className="grid gap-4">
            {systems.map((system) => (
              <article
                key={system.name}
                data-reveal
                className="flex items-center gap-4 rounded-2xl border border-border/70 bg-card/55 p-5"
              >
                <SystemLogo name={system.name} className={system.className} />
                <div>
                  <h3 className="font-display text-2xl font-semibold">{system.name}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">{system.role}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="relative my-6 overflow-hidden rounded-[2rem] border border-border/70 bg-section px-6 py-16 sm:px-8 lg:px-10">
          <SectionHeader eyebrow="Diferenciais" title="Por que esse fluxo" accent="vale a pena" />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {highlights.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="rounded-2xl border border-border/70 bg-background/45 p-6"
              >
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-10 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeader eyebrow="Executor" title="AethiX Digital" accent="por Luiz Messias" />
            <p className="mt-6 text-sm leading-7 text-muted-foreground sm:text-base">
              Desenvolvimento full stack e arquitetura de automacoes para transformar processos
              comerciais e operacionais em sistemas simples de usar. Neste projeto, a entrega
              central e conectar dados, pessoas e comunicacao sem travar a rotina da producao.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-[0.75fr_1fr]">
            <img
              src={luizPhotoUrl}
              alt="Luiz Messias"
              className="aspect-[4/5] w-full rounded-[1.5rem] border border-border/70 object-cover"
            />
            <div className="grid gap-4">
              {deliverables.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-border/70 bg-card/50 p-4"
                >
                  <Check className="h-4 w-4 shrink-0 text-accent" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <SectionHeader
            eyebrow="Cronograma"
            title="Entrega em"
            accent="12 dias corridos"
            subtitle="Prazo contado a partir de contrato, pagamento inicial e liberacao dos acessos necessarios."
          />
          <div className="mt-10 grid gap-4">
            {timeline.map(([number, title, description]) => (
              <article
                key={number}
                className="grid gap-4 rounded-2xl border border-border/70 bg-card/50 p-5 sm:grid-cols-[5rem_1fr] sm:items-center"
              >
                <span className="font-display text-4xl font-semibold text-foreground/25">
                  {number}
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          data-reveal
          className="relative my-6 overflow-hidden rounded-[2rem] border border-accent/35 bg-section px-6 py-16 sm:px-8 lg:px-10"
        >
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="relative grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                Bonus gratuito
              </p>
              <h2 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
                Mini sistema Louloux Flow incluso sem custo.
              </h2>
              <p className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base">
                Alem do Airtable e das automacoes, sera entregue uma camada propria simples, com a
                identidade visual da Louloux, para a fabrica operar leitura, impressao, status,
                pedidos parciais e comunicacoes sem depender de telas complexas.
              </p>
            </div>
            <div className="rounded-[1.6rem] border border-border/70 bg-background/60 p-5 shadow-elev backdrop-blur">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                    Louloux Flow
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-semibold">Painel de fabrica</h3>
                </div>
                <img
                  src={loulouLogoUrl}
                  alt="Loulouxshoes"
                  className="h-14 w-14 rounded-2xl object-cover"
                />
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Leitura por etapa",
                  "Impressao de ficha",
                  "Etiqueta termica",
                  "Pedidos parciais",
                  "NF via Tiny",
                  "WhatsApp/e-mail",
                ].map((feature) => (
                  <div key={feature} className="rounded-2xl border border-border/70 bg-card/60 p-4">
                    <Check className="mb-3 h-4 w-4 text-accent" />
                    <p className="text-sm font-semibold">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="investimento"
          className="relative my-6 overflow-hidden rounded-[2rem] border border-border/70 bg-hero px-6 py-16 shadow-elev sm:px-8 lg:px-10"
        >
          <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_72%)]" />
          <div className="relative grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                <Clock3 className="h-4 w-4" />
                Investimento
              </p>
              <h2 className="font-display text-5xl font-semibold leading-none sm:text-7xl">
                R$ 3.800<span className="text-3xl text-muted-foreground">,00</span>
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
                Inclui estruturacao da base, integracoes, QR/Barcode, automacoes Make, disparos
                Z-API, impressoes, controle de parciais, apoio Tiny/NF, documentacao, treinamento e
                o mini sistema bonus Louloux Flow.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-border/70 bg-background/60 p-6 backdrop-blur">
              <div className="space-y-4">
                <p className="flex items-center gap-3 text-sm">
                  <Check className="h-4 w-4 text-accent" />A vista no Pix:{" "}
                  <strong>R$ 3.800,00</strong>
                </p>
                <p className="flex items-center gap-3 text-sm">
                  <Check className="h-4 w-4 text-accent" />
                  6x sem juros no cartao: <strong>R$ 633,33/mes</strong>
                </p>
                <p className="flex items-center gap-3 text-sm">
                  <Check className="h-4 w-4 text-accent" />
                  Validade comercial: <strong>5 dias corridos</strong>
                </p>
                <p className="flex items-center gap-3 text-sm">
                  <Check className="h-4 w-4 text-accent" />
                  Entrega estimada: <strong>12 dias corridos</strong>
                </p>
              </div>
              <a
                href={whatsapp}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition duration-200 hover:-translate-y-0.5 hover:bg-primary/90"
              >
                Fechar pelo WhatsApp <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="rounded-[2rem] border border-border/70 bg-card/55 p-6 sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
                  Pronto para tirar a producao do manual.
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                  Apos a aprovacao, o proximo passo e liberar os acessos de Airtable, Tiny ERP, Make
                  e Z-API para iniciar o mapeamento final e a construcao.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition duration-200 hover:bg-primary/90"
                >
                  Aprovar proposta
                </a>
                <a
                  href="mailto:contato@aethix.digital"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-border px-6 text-sm font-semibold transition duration-200 hover:bg-background"
                >
                  <Mail className="h-4 w-4" /> contato@aethix.digital
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-10 text-center text-xs text-muted-foreground">
          2026 AethiX Digital. Proposta exclusiva para Loulouxshoes.
        </footer>
      </div>
    </main>
  );
}
