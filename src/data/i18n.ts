import { services as englishServices, siteConfig } from "@/data/site";

export const locales = ["en", "bg"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localizeHref(locale: Locale, href: string) {
  if (!href.startsWith("/")) {
    return `/${locale}/${href}`;
  }

  if (href === "/") {
    return `/${locale}`;
  }

  return `/${locale}${href}`;
}

export const localeLabels: Record<Locale, string> = {
  en: "English",
  bg: "Български",
};

type Article = {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  content: string[];
};

const bgServices = [
  {
    slug: "web-application-development",
    title: "Уеб разработка",
    eyebrow: "Персонализирани уеб приложения",
    summary:
      "Проектиране и изграждане на бързи и поддържаеми уеб приложения за бизнес процеси, клиентски портали, табла и вътрешни инструменти.",
    audience:
      "Компании, които вече са надраснали електронни таблици, готови SaaS решения или нестабилни стари процеси.",
    outcomes: [
      "Готово за продукция Next.js приложение с ясна архитектура",
      "Адаптивен интерфейс, който работи добре на реални устройства",
      "Чиста документация и възможност за бъдещи backend функционалности",
    ],
    deliverables: [
      "Откриване на нуждите и технически обхват",
      "Планиране на продуктови потоци и модел на данни",
      "Frontend и backend имплементация",
      "Деплоймънт, аналитика и подкрепа при пускане",
    ],
    proof:
      "Подходящо, когато ви трябва фокусиран партньор, който може да мине от бизнес проблема до продукционен код.",
  },
  {
    slug: "business-automation",
    title: "Бизнес автоматизация",
    eyebrow: "Намаляване на ръчната работа",
    summary:
      "Превръщане на повтарящи се оперативни стъпки в надеждни автоматизации между форми, имейли, документи, CRM системи, вътрешни инструменти и отчети.",
    audience:
      "Екипи, които губят твърде много време в копиране на данни, сверяване на файлове, ръчни обновявания и разпилени инструменти.",
    outcomes: [
      "По-малко ръчни прехвърляния и по-ясна оперативна видимост",
      "Автоматизирани известия, отчети и структурирани потоци от данни",
      "По-сигурни процеси с проследимост и ясна отговорност",
    ],
    deliverables: [
      "Одит на текущия процес",
      "Карта на автоматизациите",
      "Интеграции и скриптове",
      "Наблюдение, резервни сценарии и документация",
    ],
    proof:
      "Полезно, когато бизнес проблемът е ясен, но текущият процес е твърде бавен или твърде рисков.",
  },
  {
    slug: "technical-consulting",
    title: "Техническо консултиране",
    eyebrow: "Старши техническа преценка",
    summary:
      "Практическа помощ за архитектура, избор на технологии, планиране на изпълнение, оценка на доставчици и намаляване на продуктови рискове.",
    audience:
      "Основатели, мениджъри и екипи, които имат нужда от технически партньор преди сериозна инвестиция в изграждане.",
    outcomes: [
      "Ясна техническа посока преди да започне имплементацията",
      "Осъзнати компромиси за стек, хостинг, данни и доставка",
      "По-малък риск от неясен обхват, слаба архитектура или прибързани доставчици",
    ],
    deliverables: [
      "Технически discovery сесии",
      "Архитектурни бележки",
      "Пътна карта за изпълнение",
      "Преглед на доставчик или кодова база",
    ],
    proof:
      "Силен избор, когато имате нужда от яснота преди наемане на екип, избор на платформа или преработка на система.",
  },
  {
    slug: "internal-tools-dashboards",
    title: "Вътрешни инструменти и dashboards",
    eyebrow: "Оперативна яснота",
    summary:
      "Изграждане на вътрешни инструменти, които помагат на екипите да следят работа, да управляват данни, да одобряват заявки и да разбират какво се случва в бизнеса.",
    audience:
      "Операции, продажби, логистика, финанси, поддръжка и мениджмънт, които имат нужда от по-добра видимост и контрол.",
    outcomes: [
      "Dashboards и работни потоци според ролите",
      "По-чисти отчети от разпръснати източници на данни",
      "По-малка зависимост от ръчна поддръжка на таблици",
    ],
    deliverables: [
      "Планиране на роли и достъп",
      "Дизайн на dashboard",
      "Свързване и трансформация на данни",
      "Административни потоци и деплоймънт",
    ],
    proof:
      "Идеално, когато бизнесът разчита на информация, но тази информация е трудна за доверие или действие.",
  },
  {
    slug: "mvp-prototype-development",
    title: "MVP и прототипи",
    eyebrow: "Валидирайте преди мащабиране",
    summary:
      "Прототипиране на бизнес идеи, вътрешни инструменти или дигитални услуги достатъчно бързо за учене, но с достатъчно чиста основа за продължение.",
    audience:
      "Компании, които тестват работен процес, нова услуга или вътрешен инструмент преди по-голяма инвестиция.",
    outcomes: [
      "Фокусиран първи вариант с правилен обхват",
      "Технически избори, които не заключват продукта по-късно",
      "Ясен път от прототип към продукция",
    ],
    deliverables: [
      "Определяне на MVP обхват",
      "Кликаем или кодиран прототип",
      "Препоръки за production readiness",
      "План за пускане и итерация",
    ],
    proof:
      "Полезно, когато ви трябва инерция, но и основа, която уважава бъдещия растеж.",
  },
];

type SharedService = (typeof englishServices)[number];

export function getServices(locale: Locale): SharedService[] {
  if (locale === "bg") {
    return englishServices.map((service, index) => ({
      ...service,
      ...bgServices[index],
    }));
  }

  return englishServices;
}

export function getServiceBySlug(locale: Locale, slug: string) {
  return getServices(locale).find((service) => service.slug === slug);
}

export type SiteDictionary = {
  locale: Locale;
  lang: string;
  siteName: string;
  meta: {
    defaultTitle: string;
    defaultDescription: string;
    keywords: string[];
  };
  nav: Array<{ label: string; href: string }>;
  languageSwitchLabel: string;
  founderRole: string;
  ctaLabel: string;
  footer: {
    description: string;
    explore: string;
    services: string;
    company: string;
    legal: string;
    privacy: string;
    cookies: string;
    contact: string;
    discussProject: string;
    rights: string;
  };
  home: {
    badge: string;
    intro: string;
    primaryCta: string;
    secondaryCta: string;
    bullets: string[];
    sections: {
      services: { eyebrow: string; title: string; description: string };
      scale: { eyebrow: string; title: string; description: string };
      work: { eyebrow: string; title: string; description: string; cta: string };
      process: { eyebrow: string; title: string; description: string };
      insights: { eyebrow: string; title: string; description: string; cta: string };
      email: { title: string; description: string };
    };
  };
  stats: Array<{ value: string; label: string }>;
  servicesPage: {
    title: string;
    description: string;
    fitEyebrow: string;
    fitTitle: string;
    fitDescription: string;
    fitCardTitle: string;
    fitSignals: string[];
    bottomText: string;
    bottomCta: string;
  };
  serviceDetail: {
    whoIsItFor: string;
    expectedOutcomes: string;
    typicalDeliverables: string;
    engagementEyebrow: string;
    engagementTitle: string;
    engagementDescription: string;
    discussCta: string;
    backCta: string;
  };
  about: {
    title: string;
    description: string;
    positioning: { eyebrow: string; title: string; description: string };
    body: string[];
    principles: { eyebrow: string; title: string; description: string };
    capabilities: { eyebrow: string; title: string; description: string };
  };
  work: {
    title: string;
    description: string;
    format: { eyebrow: string; title: string; description: string; cta: string };
  };
  process: {
    title: string;
    description: string;
    firstStep: { eyebrow: string; title: string; description: string; cta: string };
    stepLabel: string;
  };
  insightsPage: {
    title: string;
    description: string;
    readArticle: string;
  };
  contact: {
    title: string;
    description: string;
    emailTitle: string;
    emailDescription: string;
    locationTitle: string;
    locationDescription: string;
    detailsTitle: string;
    detailsList: string[];
    formTitle: string;
    labels: {
      name: string;
      email: string;
      company: string;
      message: string;
      submit: string;
    };
    messagePlaceholder: string;
  };
  legal: {
    privacy: {
      title: string;
      description: string;
      sections: Array<{ title: string; body: string }>;
    };
    cookies: {
      title: string;
      description: string;
      sections: Array<{ title: string; body: string }>;
    };
    legal: {
      title: string;
      description: string;
      rows: Array<{ label: string; value: string }>;
      note: string;
    };
  };
  serviceUi: {
    viewService: string;
  };
  cta: {
    eyebrow: string;
    title: string;
    description: string;
    primary: string;
    secondary: string;
  };
  processSteps: Array<{ title: string; text: string }>;
  principles: Array<{ title: string; text: string }>;
  capabilityAreas: Array<{ label: string; value: string }>;
  workItems: Array<{
    title: string;
    industry: string;
    result: string;
    details: string;
    tags: string[];
  }>;
  insights: Array<Omit<Article, "content">>;
  articles: Article[];
  pageHeaders: {
    services: string;
    about: string;
    work: string;
    process: string;
    insights: string;
    contact: string;
    privacy: string;
    cookies: string;
    legal: string;
  };
};

const enArticles: Article[] = [
  {
    slug: "when-to-build-custom-software",
    title: "When should a business build custom software?",
    description:
      "A practical decision framework for choosing custom software over SaaS tools, spreadsheets, and manual work.",
    category: "Strategy",
    readTime: "5 min read",
    content: [
      "Custom software is rarely the first answer. A good SaaS tool, a spreadsheet, or a lighter automation can be the better business decision when the workflow is simple and the cost of change is low.",
      "The case for custom software becomes stronger when the current process is important, repeated, hard to control, and connected to revenue, delivery quality, compliance, or customer experience.",
      "Useful signals include repeated manual copying between systems, reports that nobody fully trusts, fragile workarounds that only a couple of people understand, and a process that actually differentiates the business.",
      "The safest first step is not a giant platform. It is usually a focused internal tool, dashboard, workflow, or integration that removes one painful bottleneck and proves the direction.",
    ],
  },
  {
    slug: "business-automation-first-steps",
    title: "Business automation first steps",
    description:
      "How to identify automation candidates without creating a fragile pile of scripts.",
    category: "Automation",
    readTime: "4 min read",
    content: [
      "Automation works best when it starts with the process, not the tool. The goal is to remove avoidable manual work while keeping the business understandable.",
      "Map the workflow first: the trigger, the people involved, the systems touched, the data moved, and the points where mistakes happen.",
      "Pick a narrow first candidate. Good starting automations are frequent, predictable, and easy to verify, such as document generation, notifications, reporting, or lead routing.",
      "Every useful automation needs monitoring and a fallback path. A clear log, an alert, and a manual backup are often enough for phase 1.",
    ],
  },
  {
    slug: "hiring-a-technical-consultant",
    title: "What to prepare before hiring a technical consultant",
    description:
      "The inputs that make consulting sessions sharper, faster, and more useful.",
    category: "Consulting",
    readTime: "4 min read",
    content: [
      "A technical consultant can help much faster when the business context is clear. You do not need a perfect specification, but you do need concrete inputs.",
      "Bring the business goal, the current workflow, the systems involved, the constraints, and the decision you need help making.",
      "Screenshots, sample documents, anonymized data, and a short process description are often more useful than a long wishlist.",
      "The best early outcome is a decision: build or buy, automate or simplify, prototype or wait, and what the next milestone should be.",
    ],
  },
];

const bgArticles: Article[] = [
  {
    slug: "when-to-build-custom-software",
    title: "Кога един бизнес трябва да изгради собствен софтуер?",
    description:
      "Практическа рамка за избор между custom софтуер, SaaS инструменти, таблици и ръчна работа.",
    category: "Стратегия",
    readTime: "5 мин четене",
    content: [
      "Собственият софтуер рядко е първият отговор. Често добър SaaS инструмент, таблица или по-лека автоматизация са по-доброто бизнес решение, когато процесът е прост и цената на промяната е ниска.",
      "Случаят за custom софтуер става по-силен, когато текущият процес е важен, повтарящ се, труден за контрол и пряко свързан с приходи, качество на доставка, съответствие или клиентско изживяване.",
      "Добри сигнали са ръчно прехвърляне между системи, отчети, на които никой не вярва напълно, и workaround-и, които се разбират само от един-двама души.",
      "Най-сигурната първа стъпка не е голяма платформа. Обикновено това е фокусиран вътрешен инструмент, dashboard, workflow или integration, които махат един ясен bottleneck.",
    ],
  },
  {
    slug: "business-automation-first-steps",
    title: "Първи стъпки в бизнес автоматизацията",
    description:
      "Как да изберете добри кандидати за автоматизация, без да създадете крехка купчина от скриптове.",
    category: "Автоматизация",
    readTime: "4 мин четене",
    content: [
      "Автоматизацията работи най-добре, когато започва от процеса, а не от инструмента. Целта е да премахне излишната ръчна работа, без да прави бизнеса неразбираем.",
      "Първо картографирайте процеса: какъв е trigger-ът, кои хора участват, кои системи се пипат, какви данни се местят и къде възникват грешки.",
      "Изберете тесен първи сценарий. Добри начални автоматизации са чести, предвидими и лесни за проверка, например известия, документи, отчети или разпределяне на leads.",
      "Всяка полезна автоматизация има нужда от мониторинг и резервен път. Ясен лог, alert и ръчен backup често са достатъчни за първата фаза.",
    ],
  },
  {
    slug: "hiring-a-technical-consultant",
    title: "Какво да подготвите преди да наемете технически консултант",
    description:
      "Информацията, която прави консултантските сесии по-точни, по-бързи и по-полезни.",
    category: "Консултиране",
    readTime: "4 мин четене",
    content: [
      "Техническият консултант може да помогне много по-бързо, когато бизнес контекстът е ясен. Не ви трябва перфектна спецификация, но ви трябват конкретни входни данни.",
      "Носете бизнес целта, текущия процес, използваните системи, ограниченията и решението, за което търсите помощ.",
      "Скрийншоти, примерни документи, анонимизирани данни и кратко описание на процеса често са по-полезни от дълъг списък с желания.",
      "Най-добрият ранен резултат е решение: build или buy, automate или simplify, prototype или wait, и каква е следващата разумна стъпка.",
    ],
  },
];

const dictionaries: Record<Locale, SiteDictionary> = {
  en: {
    locale: "en",
    lang: "en",
    siteName: siteConfig.name,
    meta: {
      defaultTitle: `${siteConfig.name} | B2B Software Consulting in Bulgaria`,
      defaultDescription:
        "Bulgaria-based software consulting for companies that need reliable web applications, business automation, internal tools, and practical technical leadership.",
      keywords: siteConfig.keywords,
    },
    nav: [
      { label: "Services", href: "/services" },
      { label: "Work", href: "/work" },
      { label: "Process", href: "/process" },
      { label: "About", href: "/about" },
      { label: "Insights", href: "/insights" },
      { label: "Contact", href: "/contact" },
    ],
    languageSwitchLabel: "Language",
    founderRole: "Software consulting",
    ctaLabel: "Start a project",
    footer: {
      description:
        "B2B software consulting from Bulgaria for companies that need reliable web applications, automation, internal tools, and practical technical direction.",
      explore: "Explore",
      services: "Services",
      company: "Company",
      legal: "Legal notice",
      privacy: "Privacy policy",
      cookies: "Cookie policy",
      contact: "Contact",
      discussProject: "Discuss a project",
      rights: "All rights reserved.",
    },
    home: {
      badge: "B2B software consulting from Bulgaria",
      intro:
        "I help companies design, build, and improve reliable web applications, business automations, internal tools, and practical technical systems.",
      primaryCta: "Start a project",
      secondaryCta: "Explore services",
      bullets: [
        "Full-stack solutions",
        "Remote collaboration across the EU",
        "Clear scope, delivery, and handover",
      ],
      sections: {
        services: {
          eyebrow: "Services",
          title: "Focused help for companies that need dependable software outcomes.",
          description:
            "Start with a practical first version, then scale into backend functionality, automation, data, and client-facing systems when the business case is real.",
        },
        scale: {
          eyebrow: "How it scales",
          title: "A lean website now. A serious business platform later.",
          description:
            "The phase-1 site is built to rank, explain, and convert. The same stack can later support forms, dashboards, databases, portals, email workflows, and private client areas.",
        },
        work: {
          eyebrow: "Work",
          title: "Proof should be concrete, even when client details stay private.",
          description:
            "The case-study structure is ready for real client stories, anonymized examples, measurable outcomes, and technical notes.",
          cta: "View work",
        },
        process: {
          eyebrow: "Process",
          title: "A clear path from vague idea to useful release.",
          description:
            "The work is structured so business decisions and technical decisions stay connected.",
        },
        insights: {
          eyebrow: "Insights",
          title: "Useful thinking for companies deciding what to build.",
          description:
            "Content should attract the right clients by answering real business and technical questions.",
          cta: "Read insights",
        },
        email: {
          title: "Prefer a direct email first?",
          description:
            "Send a short description of the business problem, current tools, target users, timeline, and what success should look like.",
        },
      },
    },
    stats: [
      { value: "B2B", label: "software, automation, and internal systems" },
      { value: "EU", label: "remote-first delivery from Bulgaria" },
      { value: "Lean", label: "senior execution without agency overhead" },
    ],
    servicesPage: {
      title: "Software consulting services for practical B2B outcomes.",
      description:
        "Choose focused help for a specific problem, or combine services into a roadmap that starts small and scales when the business is ready.",
      fitEyebrow: "Good fit",
      fitTitle: "The strongest projects start with a clear business pressure.",
      fitDescription:
        "The first conversation is not about filling a feature wishlist. It is about understanding what is slowing the company down and which technical move creates the most leverage.",
      fitCardTitle: "Common reasons companies reach out",
      fitSignals: [
        "You have a business process that is too manual or too fragile.",
        "You need a practical senior engineer without hiring a full team.",
        "You want a first version that can later grow into a proper backend system.",
        "You need someone who can translate business needs into technical scope.",
      ],
      bottomText:
        "Not sure which service fits? Start with technical consulting and turn the discussion into a clear build or automation plan.",
      bottomCta: "Discuss your situation",
    },
    serviceDetail: {
      whoIsItFor: "Who this is for",
      expectedOutcomes: "Expected outcomes",
      typicalDeliverables: "Typical deliverables",
      engagementEyebrow: "Engagement",
      engagementTitle: "Start with the smallest useful milestone.",
      engagementDescription:
        "The goal is to reduce uncertainty quickly, then decide whether the next step is a build, automation sprint, architecture review, or deeper product work.",
      discussCta: "Discuss this service",
      backCta: "Back to services",
    },
    about: {
      title: `Meet ${siteConfig.founder}.`,
      description:
        "The company is intentionally personal at phase 1: senior technical judgment, direct communication, and a practical delivery style without the overhead of a large agency.",
      positioning: {
        eyebrow: "Positioning",
        title: "A technical partner for companies that need clarity and execution.",
        description:
          "I work with businesses that need software to support operations, reporting, automation, customer workflows, or internal decision-making.",
      },
      body: [
        "The website is built around a simple promise: help companies understand what should be built, build the first useful version well, and leave a system that can be maintained and extended.",
        "That means technology choices are made with the business context in mind: who uses the system, what data matters, what risks exist, how the team will operate it, and what needs to remain flexible.",
        `Based in ${siteConfig.location}, the company can serve Bulgarian and EU clients through remote-first collaboration, clear written scope, and regular working demos.`,
      ],
      principles: {
        eyebrow: "Principles",
        title: "How the work should feel.",
        description:
          "Good consulting is not only about writing code. It is about helping the client make better decisions with less confusion.",
      },
      capabilities: {
        eyebrow: "Capabilities",
        title: "A stack that supports a company website today and real backend features later.",
        description:
          "The site starts as a fast marketing and trust-building surface, but the architecture leaves space for forms, databases, portals, and automation.",
      },
    },
    work: {
      title: "Selected examples of the business problems this site is built to win.",
      description:
        "Use this section for real case studies as soon as client work can be shared. Anonymized examples are still valuable when they show the problem, approach, and result.",
      format: {
        eyebrow: "Case-study format",
        title: "What each future case study should include.",
        description:
          "For SEO and client trust, every case study should explain the business context, the constraint, the technical approach, and the measurable result.",
        cta: "Share a project brief",
      },
    },
    process: {
      title: "A calm delivery process for business-critical software work.",
      description:
        "The process is designed to reduce ambiguity before writing too much code, then create useful progress through small working milestones.",
      firstStep: {
        eyebrow: "First step",
        title: "Start with a discovery conversation.",
        description:
          "The first useful output is often not code. It is a clearer picture of the business goal, risks, constraints, and sensible next milestone.",
        cta: "Start discovery",
      },
      stepLabel: "Step",
    },
    insightsPage: {
      title: "Useful thinking for companies deciding what to build next.",
      description:
        "These articles are written for business owners, managers, and teams who need practical software decisions, not vague technology noise.",
      readArticle: "Read article",
    },
    contact: {
      title: "Share the business problem you want to solve.",
      description:
        "A good first message does not need to be long. Include the current workflow, what is not working, who uses it, and what a successful outcome would look like.",
      emailTitle: "Email",
      emailDescription:
        "Best for project briefs, consulting questions, and collaboration requests.",
      locationTitle: "Location",
      locationDescription:
        `${siteConfig.location}. Available for remote collaboration with Bulgarian and EU companies.`,
      detailsTitle: "Useful details to include",
      detailsList: [
        "Current tools or workflow",
        "Business goal and timeline",
        "Users, data, and integrations involved",
        "Budget range or decision process if available",
      ],
      formTitle: "Project inquiry",
      labels: {
        name: "Name",
        email: "Email",
        company: "Company",
        message: "What do you need help with?",
        submit: "Send inquiry",
      },
      messagePlaceholder:
        "Briefly describe the workflow, tool, automation, or technical decision you want to improve.",
    },
    legal: {
      privacy: {
        title: "Privacy Policy",
        description:
          "This page explains what personal information may be collected through the website and how it is handled.",
        sections: [
          {
            title: "Controller",
            body: `${siteConfig.legalName}, based in ${siteConfig.location}, is responsible for personal data submitted through this website. Final registration, address, and VAT details should be updated after incorporation.`,
          },
          {
            title: "Data collected",
            body: "The website may collect information you choose to send by email or contact form, such as name, email address, company name, and project details.",
          },
          {
            title: "Purpose",
            body: "Submitted information is used to respond to inquiries, evaluate project fit, prepare proposals, and manage business communication.",
          },
          {
            title: "Retention",
            body: "Inquiry data should be kept only as long as needed for communication, legal obligations, or legitimate business records.",
          },
          {
            title: "Contact",
            body: `For privacy questions, email ${siteConfig.email}.`,
          },
        ],
      },
      cookies: {
        title: "Cookie Policy",
        description:
          "This page describes how cookies and similar technologies may be used on the website.",
        sections: [
          {
            title: "Current use",
            body: "The phase-1 website is designed to work without advertising cookies or tracking-heavy scripts. If analytics are added, use a privacy-conscious setup such as Plausible or a carefully configured Google Analytics property.",
          },
          {
            title: "Essential cookies",
            body: "Essential cookies may be used if future features require security, session management, preferences, or protected client areas.",
          },
          {
            title: "Updates",
            body: "This policy should be updated before adding analytics, chat widgets, embedded media, marketing pixels, or client login functionality.",
          },
          {
            title: "Contact",
            body: `Questions can be sent to ${siteConfig.email}.`,
          },
        ],
      },
      legal: {
        title: "Legal Notice",
        description: "Company identity and contact information for the website.",
        rows: [
          { label: "Website owner", value: siteConfig.legalName },
          { label: "Founder", value: siteConfig.founder },
          { label: "Location", value: siteConfig.location },
          { label: "Email", value: siteConfig.email },
          {
            label: "Registration",
            value: "Add company registration number after incorporation",
          },
          { label: "VAT", value: "Add VAT number if applicable" },
        ],
        note:
          "This page should be reviewed and completed after the Bulgarian company is registered. Add the official legal form, registered address, company identifier, VAT number if applicable, and any required professional or regulatory information.",
      },
    },
    serviceUi: {
      viewService: "View service",
    },
    cta: {
      eyebrow: "Start focused",
      title: "Bring the business problem. Leave with a practical technical path.",
      description:
        "Share the workflow, tool, or technical decision you are considering. The first conversation is about fit, clarity, and the fastest useful next step.",
      primary: "Start a project",
      secondary: "Email directly",
    },
    processSteps: [
      { title: "Discovery", text: "Clarify the business goal, users, workflows, constraints, and the real reason the work matters." },
      { title: "Scope", text: "Turn the problem into a practical plan with deliverables, assumptions, risks, and a clean first milestone." },
      { title: "Build", text: "Design and implement in focused cycles with regular checkpoints, working demos, and clear technical notes." },
      { title: "Launch", text: "Deploy, measure, polish performance, and make sure the handover is understandable after the first release." },
      { title: "Improve", text: "Use real feedback to decide what to automate, expand, simplify, or leave alone." },
    ],
    principles: [
      { title: "Business-first engineering", text: "Technology choices should serve the business model, team habits, budget, and maintenance reality." },
      { title: "Simple systems that can grow", text: "Start lean, but avoid shortcuts that make future backend features, data, or integrations painful." },
      { title: "Clear communication", text: "Clients should understand what is being built, why it matters, and what tradeoffs are being made." },
      { title: "Operational reliability", text: "The final result should be stable, observable, documented, and calm to operate." },
    ],
    capabilityAreas: [
      { label: "Frontend", value: "Next.js, React, TypeScript, Blazor, Responsive UI" },
      { label: "Backend", value: ".Net, Node.js, APIs, Databases" },
      { label: "Automation", value: "Email, documents, reporting, workflow integrations" },
      { label: "Data", value: "Dashboards, operational reporting, internal visibility" },
      { label: "Delivery", value: "Scoping, architecture, deployment, handover" },
      { label: "SEO & Analytics", value: "SEO foundations, analytics, content systems" },
    ],
    workItems: [
      {
        title: "Internal Operations Portal",
        industry: "Logistics",
        result: "Replaced scattered spreadsheets with a single role-aware workflow.",
        details:
          "Designed a practical dashboard for daily operations, status tracking, and exception handling.",
        tags: ["Internal tools", "Dashboards", "Workflow design"],
      },
      {
        title: "Sales Reporting Dashboard",
        industry: "B2B Services",
        result: "Made pipeline and revenue data easier to review without manual report assembly.",
        details:
          "Connected data sources into a simple reporting surface with executive-friendly summaries.",
        tags: ["Reporting", "Data visibility", "Automation"],
      },
      {
        title: "Automation Readiness Sprint",
        industry: "Professional Services",
        result: "Identified high-value manual tasks and prioritized the first automation roadmap.",
        details:
          "Mapped the current process, removed unnecessary steps, and defined implementation-ready automation tickets.",
        tags: ["Consulting", "Process mapping", "Roadmap"],
      },
    ],
    insights: enArticles.map((article) => ({
      slug: article.slug,
      title: article.title,
      description: article.description,
      category: article.category,
      readTime: article.readTime,
    })),
    articles: enArticles,
    pageHeaders: {
      services: "Services",
      about: "About",
      work: "Work",
      process: "Process",
      insights: "Insights",
      contact: "Contact",
      privacy: "Privacy",
      cookies: "Cookies",
      legal: "Legal",
    },
  },
  bg: {
    locale: "bg",
    lang: "bg",
    siteName: siteConfig.name,
    meta: {
      defaultTitle: `${siteConfig.name} | B2B софтуерно консултиране в България`,
      defaultDescription:
        "Софтуерно консултиране от България за компании, които имат нужда от надеждни уеб приложения, автоматизация, вътрешни инструменти и практическо техническо лидерство.",
      keywords: [
        "софтуерен консултант България",
        "уеб разработка",
        "бизнес автоматизация",
        "техническо консултиране",
        "вътрешни инструменти",
        "B2B софтуерна разработка",
      ],
    },
    nav: [
      { label: "Услуги", href: "/services" },
      { label: "Проекти", href: "/work" },
      { label: "Процес", href: "/process" },
      { label: "За мен", href: "/about" },
      { label: "Статии", href: "/insights" },
      { label: "Контакт", href: "/contact" },
    ],
    languageSwitchLabel: "Език",
    founderRole: "Софтуерно консултиране",
    ctaLabel: "Започнете проект",
    footer: {
      description:
        "B2B софтуерно консултиране от България за компании, които имат нужда от надеждни уеб приложения, автоматизация, вътрешни инструменти и практическа техническа посока.",
      explore: "Разгледайте",
      services: "Услуги",
      company: "Компания",
      legal: "Правна информация",
      privacy: "Политика за поверителност",
      cookies: "Политика за бисквитки",
      contact: "Контакт",
      discussProject: "Обсъдете проект",
      rights: "Всички права запазени.",
    },
    home: {
      badge: "B2B софтуерно консултиране от България",
      intro:
        "Помагам на компании да проектират, изграждат и подобряват надеждни уеб приложения, бизнес автоматизации, вътрешни инструменти и практични технически системи.",
      primaryCta: "Започнете проект",
      secondaryCta: "Разгледайте услугите",
      bullets: [
        "Full-stack решения",
        "Дистанционно сътрудничество в целия ЕС",
        "Ясен обхват, доставка и предаване",
      ],
      sections: {
        services: {
          eyebrow: "Услуги",
          title: "Фокусирана помощ за компании, които имат нужда от надеждни софтуерни резултати.",
          description:
            "Започнете с практична първа версия, а после надграждайте с backend функционалности, автоматизация, данни и клиентски системи, когато има реален бизнес смисъл.",
        },
        scale: {
          eyebrow: "Как се разраства",
          title: "Стегнат уебсайт сега. Сериозна бизнес платформа по-късно.",
          description:
            "Първата фаза фокусирана върху изграждането на имидж. Същият стек по-късно може да поддържа форми, диаграми, бази данни, портали, имейл потоци и страници за частни клиенти.",
        },
        work: {
          eyebrow: "Проекти",
          title: "Доверието идва от конкретни примери, дори когато клиентските детайли остават поверителни.",
          description:
            "Структурата за case studies е готова за реални клиентски истории, анонимизирани примери, измерими резултати и технически бележки.",
          cta: "Вижте проекти",
        },
        process: {
          eyebrow: "Процес",
          title: "Ясен път от неясна идея до полезен release.",
          description:
            "Работата е структурирана така, че бизнес решенията и техническите решения да останат свързани.",
        },
        insights: {
          eyebrow: "Статии",
          title: "Полезно мислене за компании, които решават какво да изградят.",
          description:
            "Съдържанието трябва да привлича правилните клиенти, като отговаря на реални бизнес и технически въпроси.",
          cta: "Прочетете статиите",
        },
        email: {
          title: "Предпочитате директен имейл?",
          description:
            "Изпратете кратко описание на бизнес проблема, текущите инструменти, целевите потребители, сроковете и как изглежда успехът.",
        },
      },
    },
    stats: [
      { value: "B2B", label: "софтуер, автоматизация и вътрешни системи" },
      { value: "ЕС", label: "remote-first работа от България" },
      { value: "Lean", label: "старши изпълнение без излишен agency overhead" },
    ],
    servicesPage: {
      title: "Софтуерни услуги за практични B2B резултати.",
      description:
        "Изберете фокусирана помощ за конкретен проблем или комбинирайте услуги в пътна карта, която започва малко и се разраства, когато бизнесът е готов.",
      fitEyebrow: "Подходящо за",
      fitTitle: "Най-силните проекти започват с ясен бизнес натиск.",
      fitDescription:
        "Първият разговор не е за списък с функции. Той е за това какво забавя компанията и кой технически ход създава най-много стойност.",
      fitCardTitle: "Чести причини компаниите да се свържат",
      fitSignals: [
        "Имате процес, който е твърде ръчен или твърде крехък.",
        "Имате нужда от практичен senior инженер без да наемате цял екип.",
        "Искате първа версия, която после да може да се развие в реална backend система.",
        "Имате нужда от човек, който превежда бизнес нуждите в технически обхват.",
      ],
      bottomText:
        "Не сте сигурни коя услуга е най-подходяща? Започнете с техническо консултиране и превърнете разговора в ясен build или automation план.",
      bottomCta: "Обсъдете ситуацията си",
    },
    serviceDetail: {
      whoIsItFor: "За кого е това",
      expectedOutcomes: "Очаквани резултати",
      typicalDeliverables: "Типични deliverables",
      engagementEyebrow: "Работен формат",
      engagementTitle: "Започнете с най-малкия полезен milestone.",
      engagementDescription:
        "Целта е бързо да се намали несигурността, а после да се реши дали следващата стъпка е build, automation sprint, архитектурен преглед или по-дълбока продуктова работа.",
      discussCta: "Обсъдете услугата",
      backCta: "Назад към услугите",
    },
    about: {
      title: `Запознайте се с ${siteConfig.founder}.`,
      description:
        "Компанията е умишлено лична в първата фаза: старши техническа преценка, директна комуникация и практичен стил на доставка без излишния шум на голяма агенция.",
      positioning: {
        eyebrow: "Позициониране",
        title: "Технически партньор за компании, които имат нужда от яснота и изпълнение.",
        description:
          "Работя с бизнеси, които имат нужда от софтуер за операции, отчети, автоматизация, клиентски процеси или вътрешно вземане на решения.",
      },
      body: [
        "Сайтът е изграден около едно просто обещание: да помогне на компаниите да разберат какво трябва да се изгради, да изгради добре първата полезна версия и да остави система, която може да се поддържа и развива.",
        "Това означава, че технологичните избори се правят с мисъл за бизнес контекста: кой използва системата, кои данни са важни, какви рискове има, как екипът ще я управлява и какво трябва да остане гъвкаво.",
        `Базирана в ${siteConfig.location}, компанията може да обслужва български и европейски клиенти чрез remote-first сътрудничество, ясен писмен обхват и редовни работещи демота.`,
      ],
      principles: {
        eyebrow: "Принципи",
        title: "Как трябва да се усеща работата.",
        description:
          "Доброто консултиране не е само писане на код. То е и помагане на клиента да взема по-добри решения с по-малко объркване.",
      },
      capabilities: {
        eyebrow: "Възможности",
        title: "Стек, който поддържа фирмен сайт днес и реални backend функции утре.",
        description:
          "Сайтът започва като бърза маркетингова и trust-building повърхност, но архитектурата оставя място за форми, бази данни, портали и автоматизация.",
      },
    },
    work: {
      title: "Подбрани примери за бизнес проблемите, които този сайт е създаден да печели.",
      description:
        "Използвайте тази секция за реални case studies веднага щом клиентската работа може да бъде споделяна. Анонимизираните примери също са ценни, когато показват проблема, подхода и резултата.",
      format: {
        eyebrow: "Формат на case study",
        title: "Какво трябва да съдържа всеки бъдещ case study.",
        description:
          "За SEO и доверие всеки case study трябва да обяснява бизнес контекста, ограничението, техническия подход и измеримия резултат.",
        cta: "Изпратете проектен бриф",
      },
    },
    process: {
      title: "Спокоен процес на доставка за бизнес-критична софтуерна работа.",
      description:
        "Процесът е създаден да намалява неяснотата преди да се напише твърде много код, а после да създава полезен напредък чрез малки работещи milestones.",
      firstStep: {
        eyebrow: "Първа стъпка",
        title: "Започнете с discovery разговор.",
        description:
          "Първият полезен резултат често не е код. Той е по-ясна картина на бизнес целта, рисковете, ограниченията и разумния следващ milestone.",
        cta: "Започнете discovery",
      },
      stepLabel: "Стъпка",
    },
    insightsPage: {
      title: "Полезно мислене за компании, които решават какво да изградят следващо.",
      description:
        "Тези статии са написани за собственици, мениджъри и екипи, които имат нужда от практични софтуерни решения, а не от шумни технологични обещания.",
      readArticle: "Прочетете статията",
    },
    contact: {
      title: "Споделете бизнес проблема, който искате да решите.",
      description:
        "Доброто първо съобщение не трябва да е дълго. Включете текущия процес, какво не работи, кой го използва и как изглежда успешният резултат.",
      emailTitle: "Имейл",
      emailDescription:
        "Най-подходящо за проектни брифове, консултантски въпроси и заявки за сътрудничество.",
      locationTitle: "Локация",
      locationDescription:
        `${siteConfig.location}. Достъпно за дистанционно сътрудничество с български и европейски компании.`,
      detailsTitle: "Полезни детайли за включване",
      detailsList: [
        "Текущи инструменти или процес",
        "Бизнес цел и срок",
        "Потребители, данни и интеграции",
        "Бюджетен диапазон или процес на вземане на решение, ако е наличен",
      ],
      formTitle: "Проектно запитване",
      labels: {
        name: "Име",
        email: "Имейл",
        company: "Компания",
        message: "С какво имате нужда от помощ?",
        submit: "Изпратете запитване",
      },
      messagePlaceholder:
        "Опишете накратко процеса, инструмента, автоматизацията или техническото решение, което искате да подобрите.",
    },
    legal: {
      privacy: {
        title: "Политика за поверителност",
        description:
          "Тази страница обяснява каква лична информация може да бъде събирана чрез сайта и как се обработва.",
        sections: [
          {
            title: "Администратор",
            body: `${siteConfig.legalName}, базирана в ${siteConfig.location}, отговаря за личните данни, изпратени чрез този уебсайт. Окончателните регистрационни данни, адрес и ДДС информация трябва да бъдат добавени след учредяване.`,
          },
          {
            title: "Събирани данни",
            body: "Сайтът може да събира информация, която доброволно изпращате по имейл или чрез контактна форма, като име, имейл адрес, име на компания и проектни детайли.",
          },
          {
            title: "Цел",
            body: "Изпратената информация се използва за отговор на запитвания, оценка на проектна съвместимост, подготовка на оферти и бизнес комуникация.",
          },
          {
            title: "Съхранение",
            body: "Данните от запитвания трябва да се пазят само толкова дълго, колкото е необходимо за комуникация, правни задължения или легитимни бизнес записи.",
          },
          {
            title: "Контакт",
            body: `За въпроси, свързани с поверителността, пишете на ${siteConfig.email}.`,
          },
        ],
      },
      cookies: {
        title: "Политика за бисквитки",
        description:
          "Тази страница описва как бисквитки и подобни технологии могат да бъдат използвани на сайта.",
        sections: [
          {
            title: "Текуща употреба",
            body: "Първата фаза на сайта е проектирана да работи без рекламни бисквитки и тежки tracking скриптове. Ако се добави analytics, използвайте privacy-conscious setup като Plausible или внимателно конфигуриран Google Analytics.",
          },
          {
            title: "Съществени бисквитки",
            body: "Съществени бисквитки може да се използват, ако бъдещи функции изискват сигурност, управление на сесии, предпочитания или защитени клиентски зони.",
          },
          {
            title: "Актуализации",
            body: "Тази политика трябва да бъде обновена преди добавяне на analytics, chat widgets, embedded media, marketing pixels или client login функционалност.",
          },
          {
            title: "Контакт",
            body: `Въпроси могат да бъдат изпращани на ${siteConfig.email}.`,
          },
        ],
      },
      legal: {
        title: "Правна информация",
        description: "Идентичност на компанията и данни за контакт на сайта.",
        rows: [
          { label: "Собственик на сайта", value: siteConfig.legalName },
          { label: "Основател", value: siteConfig.founder },
          { label: "Локация", value: siteConfig.location },
          { label: "Имейл", value: siteConfig.email },
          {
            label: "Регистрация",
            value: "Добавете фирмен регистрационен номер след учредяване",
          },
          { label: "ДДС", value: "Добавете ДДС номер при необходимост" },
        ],
        note:
          "Тази страница трябва да бъде прегледана и допълнена след регистрация на българската компания. Добавете официалната правна форма, регистриран адрес, фирмен идентификатор, ДДС номер при необходимост и всяка изискуема професионална или регулаторна информация.",
      },
    },
    serviceUi: {
      viewService: "Вижте услугата",
    },
    cta: {
      eyebrow: "Започнете фокусирано",
      title: "Донесете бизнес проблема. Тръгнете си с практичен технически път.",
      description:
        "Споделете процеса, инструмента или техническото решение, което обмисляте. Първият разговор е за съвместимост, яснота и най-бързата полезна следваща стъпка.",
      primary: "Започнете проект",
      secondary: "Пишете директно",
    },
    processSteps: [
      { title: "Откриване", text: "Изясняване на бизнес целта, потребителите, процесите, ограниченията и истинската причина защо работата е важна." },
      { title: "Обхват", text: "Превръщане на проблема в практичен план с deliverables, предположения, рискове и чист първи milestone." },
      { title: "Изграждане", text: "Дизайн и имплементация във фокусирани цикли с редовни checkpoints, работещи демота и ясни технически бележки." },
      { title: "Пускане", text: "Деплоймънт, измерване, полиране на performance и ясно предаване след първия release." },
      { title: "Подобрение", text: "Използване на реална обратна връзка, за да се реши какво да се автоматизира, разшири, опрости или остави така." },
    ],
    principles: [
      { title: "Бизнес първо", text: "Технологичните избори трябва да служат на бизнес модела, навиците на екипа, бюджета и реалността на поддръжката." },
      { title: "Прости системи, които могат да растат", text: "Започнете lean, но избягвайте shortcuts, които правят бъдещи backend функции, данни или интеграции болезнени." },
      { title: "Ясна комуникация", text: "Клиентите трябва да разбират какво се изгражда, защо е важно и какви компромиси се правят." },
      { title: "Оперативна надеждност", text: "Крайният резултат трябва да е стабилен, наблюдаем, документиран и спокоен за опериране." },
    ],
    capabilityAreas: [
      { label: "Frontend", value: "Next.js, React, TypeScript, Blazor, Responsive UI" },
      { label: "Backend", value: "Server Actions, route handlers, API-та, бази данни" },
      { label: "Автоматизация", value: "Имейли, документи, отчети, workflow интеграции" },
      { label: "Данни", value: "Dashboards, оперативни отчети, вътрешна видимост" },
      { label: "Delivery", value: "Scoping, архитектура, деплоймънт, предаване" },
      { label: "Растеж", value: "SEO основи, аналитика, content системи" },
    ],
    workItems: [
      {
        title: "Вътрешен оперативен портал",
        industry: "Логистика",
        result: "Замени разпилени таблици с единен workflow според ролите.",
        details:
          "Проектиран практичен dashboard за ежедневни операции, следене на статус и управление на изключения.",
        tags: ["Вътрешни инструменти", "Dashboards", "Workflow дизайн"],
      },
      {
        title: "Dashboard за sales reporting",
        industry: "B2B услуги",
        result: "Направи pipeline и revenue данните по-лесни за преглед без ръчно сглобяване на отчети.",
        details:
          "Свързани източници на данни в прост reporting интерфейс с summary изглед за мениджмънта.",
        tags: ["Отчети", "Видимост на данни", "Автоматизация"],
      },
      {
        title: "Sprint за automation readiness",
        industry: "Професионални услуги",
        result: "Идентифицира high-value ръчни задачи и приоритизира първата automation roadmap.",
        details:
          "Картографира текущия процес, премахна ненужни стъпки и определи implementation-ready automation задачи.",
        tags: ["Консултиране", "Process mapping", "Roadmap"],
      },
    ],
    insights: bgArticles.map((article) => ({
      slug: article.slug,
      title: article.title,
      description: article.description,
      category: article.category,
      readTime: article.readTime,
    })),
    articles: bgArticles,
    pageHeaders: {
      services: "Услуги",
      about: "За мен",
      work: "Проекти",
      process: "Процес",
      insights: "Статии",
      contact: "Контакт",
      privacy: "Поверителност",
      cookies: "Бисквитки",
      legal: "Правна информация",
    },
  },
};

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}

export function getArticleBySlug(locale: Locale, slug: string) {
  return getDictionary(locale).articles.find((article) => article.slug === slug);
}

export function getLocalizedInsights(locale: Locale) {
  return getDictionary(locale).insights.map((insight) => ({
    ...insight,
    href: localizeHref(locale, `/insights/${insight.slug}`),
  }));
}

export function getStructuredData(locale: Locale) {
  const dictionary = getDictionary(locale);

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: `${siteConfig.url}/${locale}`,
    email: siteConfig.email,
    areaServed: ["Bulgaria", "European Union", "Remote"],
    founder: {
      "@type": "Person",
      name: siteConfig.founder,
      jobTitle: locale === "bg" ? "Софтуерен консултант" : "Software Consultant",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sofia",
      addressCountry: "BG",
    },
    description: dictionary.meta.defaultDescription,
    knowsAbout: dictionary.meta.keywords,
    inLanguage: dictionary.lang,
  };
}

export function getAlternates(locale: Locale, path: string) {
  const current = localizeHref(locale, path);

  return {
    canonical: current,
    languages: {
      "en-US": localizeHref("en", path),
      "bg-BG": localizeHref("bg", path),
      "x-default": localizeHref("en", path),
    },
  };
}
