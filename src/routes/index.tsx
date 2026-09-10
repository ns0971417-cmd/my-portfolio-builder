import { createFileRoute } from "@tanstack/react-router";
import {
  Cpu,
  CircuitBoard,
  Mail,
  Phone,
  GraduationCap,
  Briefcase,
  Languages,
  Users,
  ArrowUpRight,
} from "lucide-react";
import heroChip from "@/assets/hero-chip.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sai Sandeep — VLSI & FPGA Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Neelisetty Sai Sandeep, ECE diploma graduate focused on VLSI, FPGA and RTL design with Xilinx Vivado and Verilog.",
      },
      { property: "og:title", content: "Sai Sandeep — VLSI & FPGA Portfolio" },
      {
        property: "og:description",
        content:
          "ECE diploma graduate seeking a VLSI/FPGA internship. Digital electronics, RTL concepts, Vivado, E-CAD and Multisim.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const skillGroups = [
  {
    icon: CircuitBoard,
    title: "HDL & Digital Design",
    items: ["Digital electronics fundamentals", "RTL concepts", "Verilog / SystemVerilog (learning)"],
  },
  {
    icon: Cpu,
    title: "FPGA & EDA Tools",
    items: ["Xilinx Vivado", "E-CAD", "Multisim"],
  },
  {
    icon: Users,
    title: "Core ECE & Programming",
    items: ["Microcontrollers", "Electronic circuits", "Communication basics", "C (basic)"],
  },
];

const professional = [
  "Communication",
  "Teamwork & collaboration",
  "Adaptability",
  "Leadership",
  "Problem solving",
  "Attention to detail",
];

function Section({
  id,
  label,
  title,
  children,
}: {
  id: string;
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto w-full max-w-5xl px-6 py-16 md:py-24">
      <p className="label-mono">{label}</p>
      <h2 className="mt-3 text-2xl font-semibold md:text-4xl">{title}</h2>
      <div className="mt-8">{children}</div>
    </section>
  );
}

function Portfolio() {
  return (
    <main className="min-h-screen bg-background">
      <header className="relative overflow-hidden">
        <img
          src={heroChip}
          alt="Macro view of a silicon wafer with glowing circuit traces"
          width={1600}
          height={1008}
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 grid-backdrop opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background" />

        <div className="relative mx-auto flex max-w-5xl flex-col justify-center px-6 py-28 md:py-40">
          <p className="label-mono">Electronics &amp; Communication Engineering</p>
          <h1 className="mt-5 text-4xl leading-[1.05] font-bold md:text-6xl">
            Neelisetty <span className="text-gradient-signal">Sai Sandeep</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
            Diploma graduate in Electronics and Communication Engineering, seeking a VLSI/FPGA
            internship to apply digital electronics, circuit design and hardware development
            knowledge — while growing in Verilog/SystemVerilog, RTL design and verification.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="mailto:Sandeepslot38@gmail.com"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Mail className="size-4" /> Sandeepslot38@gmail.com
            </a>
            <a
              href="tel:+919550726234"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:bg-secondary"
            >
              <Phone className="size-4" /> 95507 26234
            </a>
          </div>
        </div>
      </header>

      <Section id="skills" label="Technical" title="VLSI & engineering skills">
        <div className="grid gap-5 md:grid-cols-3">
          {skillGroups.map((group) => (
            <article key={group.title} className="surface-card p-6">
              <group.icon className="size-6 text-primary" />
              <h3 className="mt-4 text-lg font-semibold">{group.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section id="experience" label="Experience" title="Where I have worked">
        <div className="surface-card p-6 md:p-8">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold">
                <Briefcase className="size-5 text-primary" /> Quality Inspector
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">Aaviza Electronics Pvt. Ltd.</p>
            </div>
            <span className="label-mono">May 2025 — Nov 2025</span>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Worked in an electronics manufacturing environment, gaining hands-on exposure to quality
            inspection, process discipline and teamwork on the production floor.
          </p>
        </div>
      </Section>

      <Section id="education" label="Education" title="Academic background">
        <div className="grid gap-5 md:grid-cols-2">
          <article className="surface-card p-6">
            <GraduationCap className="size-6 text-primary" />
            <h3 className="mt-4 text-lg font-semibold">
              Diploma in Electronics &amp; Communication Engineering
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Dr YC James Yen Government Polytechnic, Kuppam, Andhra Pradesh
            </p>
          </article>
          <article className="surface-card p-6">
            <GraduationCap className="size-6 text-primary" />
            <h3 className="mt-4 text-lg font-semibold">SSC</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              ZPHS Madamanuru, Andhra Pradesh — 540 marks (2023)
            </p>
          </article>
        </div>
      </Section>

      <Section id="strengths" label="Professional" title="Strengths & languages">
        <div className="grid gap-5 md:grid-cols-[1.4fr_1fr]">
          <div className="surface-card p-6">
            <p className="label-mono">Professional skills</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {professional.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-border bg-secondary px-3 py-1.5 text-sm text-secondary-foreground"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div className="surface-card p-6">
            <Languages className="size-6 text-primary" />
            <p className="mt-4 label-mono">Languages</p>
            <p className="mt-3 text-sm text-muted-foreground">Telugu · English</p>
          </div>
        </div>
      </Section>

      <section id="contact" className="border-t border-border">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center">
          <p className="label-mono">Contact</p>
          <h2 className="mt-3 text-2xl font-semibold md:text-4xl">
            Open to VLSI &amp; FPGA internships
          </h2>
          <a
            href="mailto:Sandeepslot38@gmail.com"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Get in touch <ArrowUpRight className="size-4" />
          </a>
          <p className="mt-10 text-xs text-muted-foreground">
            © {new Date().getFullYear()} Neelisetty Sai Sandeep
          </p>
        </div>
      </section>
    </main>
  );
}
