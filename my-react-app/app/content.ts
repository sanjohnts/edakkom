// All page text, in Malayalam (default, at /) and English (at /en).
// Facts here must match the project spec: anything not yet confirmed
// carries a verification level, and nothing is invented.

export type Lang = "ml" | "en";
export type Level = "verified" | "supported" | "oral" | "needs" | "disputed";
export type IconName =
  | "history"
  | "photo"
  | "pin"
  | "people"
  | "lamp"
  | "school"
  | "family"
  | "paddy"
  | "road"
  | "story"
  | "document"
  | "clock"
  | "search"
  | "share";

export const SITE_URL = "https://www.edakkom.com";

export const levelLabels: Record<Lang, Record<Level, string>> = {
  ml: {
    verified: "സ്ഥിരീകരിച്ചത്",
    supported: "ഭാഗികമായി സ്ഥിരീകരിച്ചത്",
    oral: "വാമൊഴി",
    needs: "പരിശോധിക്കേണ്ടത്",
    disputed: "തർക്കമുള്ളത്",
  },
  en: {
    verified: "Verified",
    supported: "Supported",
    oral: "Oral tradition",
    needs: "Needs verification",
    disputed: "Disputed",
  },
};

type Copy = {
  meta: { title: string; description: string; locale: string };
  nav: {
    history: string;
    archive: string;
    places: string;
    contribute: string;
    switchLabel: string;
    switchHref: string;
    menu: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    altTitle: string;
    tagline: string;
    lead: string;
    primary: string;
    secondary: string;
    artNote: string;
  };
  facts: { items: { label: string; value: string }[]; cta: string };
  welcome: {
    kicker: string;
    heading: string;
    paragraphs: string[];
    legendTitle: string;
    legend: Record<Level, string>;
    legendNote: string;
  };
  discover: {
    kicker: string;
    heading: string;
    lead: string;
    cards: { icon: IconName; title: string; text: string; status: string }[];
  };
  timeline: {
    kicker: string;
    heading: string;
    lead: string;
    items: { period: string; title: string; text: string; level: Level }[];
    note: string;
    cta: string;
  };
  archive: {
    kicker: string;
    heading: string;
    lead: string;
    placeholder: string;
    frames: { icon: IconName; label: string; tall?: boolean }[];
    cta: string;
  };
  places: {
    kicker: string;
    heading: string;
    lead: string;
    items: { name: string; kind: string; text: string; level: Level }[];
    note: string;
    cta: string;
  };
  contribute: {
    kicker: string;
    heading: string;
    lead: string;
    types: { icon: IconName; title: string; text: string }[];
    stepsTitle: string;
    steps: { title: string; text: string }[];
    button: string;
    buttonNote: string;
  };
  footer: {
    mission: string;
    promise: string;
    sectionsTitle: string;
    languageTitle: string;
    rights: string;
    top: string;
  };
};

export const copy: Record<Lang, Copy> = {
  ml: {
    meta: {
      title: "എടക്കോം, കണ്ണൂർ | ചരിത്രം, സംസ്കാരം, പഴയ ചിത്രങ്ങൾ",
      description:
        "കണ്ണൂർ ജില്ലയിലെ എടക്കോം ഗ്രാമത്തിന്റെ ചരിത്രം, പഴയ ചിത്രങ്ങൾ, സംസ്കാരം, സ്ഥലങ്ങൾ, വിദ്യാലയങ്ങൾ, നാടിന്റെ വികസനം.",
      locale: "ml_IN",
    },
    nav: {
      history: "ചരിത്രം",
      archive: "ചിത്രശേഖരം",
      places: "സ്ഥലങ്ങൾ",
      contribute: "പങ്കുവെക്കൂ",
      switchLabel: "English",
      switchHref: "/en",
      menu: "മെനു",
    },
    hero: {
      eyebrow: "കണ്ണൂർ · കേരളം",
      title: "എടക്കോം",
      altTitle: "EDAKKOM",
      tagline: "നമ്മുടെ നാട്, നമ്മുടെ ചരിത്രം, നമ്മുടെ ഓർമ്മകൾ.",
      lead: "എടക്കോമിന്റെ ചരിത്രവും പഴയ ചിത്രങ്ങളും നാട്ടുകാരുടെ ഓർമ്മകളും വരുംതലമുറകൾക്കായി സൂക്ഷിക്കുന്ന ഒരു ജനകീയ ഡിജിറ്റൽ ശേഖരം.",
      primary: "ശേഖരം കാണാം",
      secondary: "പഴയ ചിത്രം പങ്കുവെക്കൂ",
      artNote: "ചിത്രീകരണം · എടക്കോമിന്റെ യഥാർത്ഥ ചിത്രങ്ങൾ ശേഖരിച്ചുകൊണ്ടിരിക്കുന്നു",
    },
    facts: {
      items: [
        { label: "ജില്ല", value: "കണ്ണൂർ" },
        { label: "പ്രദേശം", value: "ഉത്തര മലബാർ" },
        { label: "അടുത്തുള്ള പട്ടണം", value: "ചപ്പാരപ്പടവ് · ഏകദേശം 2 കി.മീ." },
        { label: "ശേഖരം", value: "ഇപ്പോൾ ശേഖരിക്കുന്നു" },
      ],
      cta: "പങ്കുചേരാം",
    },
    welcome: {
      kicker: "സ്വാഗതം",
      heading: "എടക്കോം – നമ്മുടെ നാട്, നമ്മുടെ ചരിത്രം",
      paragraphs: [
        "കണ്ണൂർ ജില്ലയിലെ പ്രകൃതിഭംഗിയും ഗ്രാമീണ ജീവിതത്തിന്റെ സവിശേഷതകളും ചരിത്രസ്മരണകളും ഒത്തുചേരുന്ന നമ്മുടെ നാടാണ് എടക്കോം.",
        "തലമുറകളിലൂടെ കൈമാറിവന്ന ഓർമ്മകൾ, പഴയകാല ജീവിതരീതികൾ, കൃഷി, സംസ്കാരം, വിദ്യാഭ്യാസം, ആരാധനാലയങ്ങൾ, സാമൂഹിക വളർച്ച, നാട്ടുകാരുടെ ജീവിതാനുഭവങ്ങൾ എന്നിവയെല്ലാം ഒരിടത്ത് സംരക്ഷിക്കുകയാണ് EDAKKOM.COM എന്ന ഈ ഡിജിറ്റൽ സംരംഭത്തിന്റെ ലക്ഷ്യം.",
        "പഴയ ചിത്രങ്ങളിൽ നിന്ന് പുതിയ തലമുറയുടെ കഥകളിലേക്ക്, നമ്മുടെ നാടിന്റെ ഇന്നലെയും ഇന്നും നാളെയും ഇവിടെ രേഖപ്പെടുത്തപ്പെടുന്നു.",
        "എടക്കോം നമ്മുടെ ഓർമ്മകളിൽ മാത്രം ഒതുങ്ങാതെ, വരുംതലമുറകൾക്കായി ഡിജിറ്റലായും നിലനിൽക്കട്ടെ.",
      ],
      legendTitle: "ഓരോ വിവരവും ഞങ്ങൾ അടയാളപ്പെടുത്തുന്ന വിധം",
      legend: {
        verified: "രേഖ, രജിസ്റ്റർ, തീയതിയുള്ള ചിത്രം പോലുള്ള തെളിവുണ്ട്",
        supported: "രണ്ട് സ്വതന്ത്ര വിവരണങ്ങൾ യോജിക്കുന്നു, അല്ലെങ്കിൽ ഒരു ശക്തമായ ഉറവിടം",
        oral: "ഒരാളുടെ ഓർമ്മ, അവരുടെ വിവരണമായി നൽകുന്നു",
        needs: "ഇപ്പോഴും ഗവേഷണത്തിലുള്ള സൂചന",
        disputed: "ഉറവിടങ്ങൾ വിയോജിക്കുന്നു; രണ്ടു പതിപ്പുകളും കാണിക്കും",
      },
      legendNote: "ഉറവിടമില്ലാത്ത ഒന്നും ചരിത്രമായി പ്രസിദ്ധീകരിക്കില്ല.",
    },
    discover: {
      kicker: "കണ്ടെത്താം",
      heading: "എടക്കോമിനെ അറിയാൻ",
      lead: "ഓരോ വിഭാഗവും നാട്ടുകാരുടെ സഹായത്തോടെ രൂപപ്പെട്ടുകൊണ്ടിരിക്കുന്നു.",
      cards: [
        {
          icon: "history",
          title: "ചരിത്രം",
          text: "പേരിന്റെ ഉത്ഭവം, ആദ്യകാല ജനവാസം, മലബാർ കുടിയേറ്റം, കാർഷിക ചരിത്രം.",
          status: "ഗവേഷണത്തിൽ",
        },
        {
          icon: "photo",
          title: "ചിത്രശേഖരം",
          text: "പഴയ കുടുംബചിത്രങ്ങൾ, വിദ്യാലയങ്ങൾ, ആഘോഷങ്ങൾ, പഴയതും പുതിയതുമായ എടക്കോം.",
          status: "ശേഖരിക്കുന്നു",
        },
        {
          icon: "pin",
          title: "സ്ഥലങ്ങൾ",
          text: "ആരാധനാലയങ്ങൾ, പ്രധാന കവലകൾ, പുഴകൾ, പ്രകൃതി.",
          status: "ഗവേഷണത്തിൽ",
        },
        {
          icon: "people",
          title: "വ്യക്തികൾ",
          text: "മുതിർന്നവരുടെ ഓർമ്മകൾ, അധ്യാപകർ, കർഷകർ, കലാകാരന്മാർ.",
          status: "അഭിമുഖങ്ങൾ ഉടൻ",
        },
        {
          icon: "lamp",
          title: "സംസ്കാരം",
          text: "പെരുന്നാളുകൾ, ഉത്സവങ്ങൾ, ഭക്ഷണം, ആചാരങ്ങൾ, പഴയ കളികൾ.",
          status: "ശേഖരിക്കുന്നു",
        },
        {
          icon: "school",
          title: "വിദ്യാഭ്യാസം",
          text: "ഓരോ വിദ്യാലയത്തിന്റെയും ചരിത്രം, പൂർവ വിദ്യാർത്ഥികളുടെ ഓർമ്മകൾ.",
          status: "ഗവേഷണത്തിൽ",
        },
      ],
    },
    timeline: {
      kicker: "നാൾവഴി",
      heading: "എടക്കോമിന്റെ നാൾവഴി",
      lead: "ഓരോ തീയതിക്കും ഉറവിടം വേണം. ഇപ്പോൾ ഇവ ഗവേഷണ വിഷയങ്ങളാണ്; തെളിവുകൾ ലഭിക്കുന്നതനുസരിച്ച് പുതുക്കും.",
      items: [
        {
          period: "1900-ന് മുമ്പ്",
          title: "പേരിന്റെ ഉത്ഭവവും ആദ്യകാല ജനവാസവും",
          text: "‘എടക്കോം’ എന്ന പേര് എങ്ങനെ വന്നു? ആദ്യകാല കുടുംബങ്ങളും കൃഷിയും.",
          level: "needs",
        },
        {
          period: "1900–1940",
          title: "ബ്രിട്ടീഷ് മലബാർ കാലത്തെ ഗ്രാമജീവിതം",
          text: "ഭൂമി, കൃഷി, തൊഴിൽ, യാത്ര — മുതിർന്നവരുടെ ഓർമ്മകളിലൂടെ.",
          level: "needs",
        },
        {
          period: "1940–1960",
          title: "മലബാർ കുടിയേറ്റം",
          text: "മധ്യതിരുവിതാംകൂറിൽ നിന്നുള്ള കർഷക കുടുംബങ്ങൾ ചപ്പാരപ്പടവ് പ്രദേശത്തെത്തുന്നു.",
          level: "needs",
        },
        {
          period: "1962",
          title: "ഇൻഫന്റ് ജീസസ് ദേവാലയം, ക്രൈസ്റ്റ് നഗർ",
          text: "ലഭ്യമായ വിവരങ്ങൾ പ്രകാരം 1962-ൽ സ്ഥാപിതം. ഇടവക രേഖകളിൽ നിന്ന് ഉറപ്പാക്കണം.",
          level: "supported",
        },
        {
          period: "1960–1980",
          title: "കൃഷി, ആരാധനാലയങ്ങൾ, വിദ്യാലയങ്ങൾ",
          text: "റബ്ബർ, കുരുമുളക്, കശുമാവ്, തെങ്ങ് — കൃഷിയിലെ മാറ്റങ്ങളും ആദ്യ സ്ഥാപനങ്ങളും.",
          level: "needs",
        },
        {
          period: "1980–2000",
          title: "റോഡുകൾ, ബസ്സുകൾ, വൈദ്യുതി",
          text: "ഗ്രാമത്തെ പുറംലോകവുമായി ബന്ധിപ്പിച്ച വികസനം.",
          level: "needs",
        },
        {
          period: "2000–2020",
          title: "പ്രവാസവും പുതിയ തലമുറയും",
          text: "ഗൾഫ് പ്രവാസം, മൊബൈൽ, ഇന്റർനെറ്റ്, പുതിയ സ്ഥാപനങ്ങൾ.",
          level: "needs",
        },
        {
          period: "2026",
          title: "edakkom.com ആരംഭിക്കുന്നു",
          text: "എടക്കോമിന്റെ ജനകീയ ഡിജിറ്റൽ ശേഖരം ഓൺലൈനിൽ.",
          level: "verified",
        },
      ],
      note: "ഏതെങ്കിലും കാലഘട്ടത്തെക്കുറിച്ച് രേഖയോ ചിത്രമോ ഓർമ്മയോ ഉണ്ടോ?",
      cta: "വിവരം പങ്കുവെക്കൂ",
    },
    archive: {
      kicker: "ചിത്രശേഖരം",
      heading: "പഴയ എടക്കോം, കണ്ടെത്താൻ കാത്തിരിക്കുന്നു",
      lead: "ഈ ചട്ടക്കൂടുകൾ ഒഴിഞ്ഞുകിടക്കുന്നത് മനഃപൂർവ്വമാണ്. എടക്കോമിൽ നിന്നുള്ളതാണെന്ന് ഉറപ്പുള്ള ചിത്രങ്ങൾ മാത്രമേ ഇവിടെ വരൂ.",
      placeholder: "നിങ്ങളുടെ ചിത്രം ഇവിടെ",
      frames: [
        { icon: "photo", label: "പഴയ എടക്കോം", tall: true },
        { icon: "family", label: "കുടുംബ ഓർമ്മകൾ" },
        { icon: "school", label: "വിദ്യാലയങ്ങൾ" },
        { icon: "paddy", label: "കൃഷി", tall: true },
        { icon: "lamp", label: "ആഘോഷങ്ങൾ" },
        { icon: "road", label: "റോഡുകളും യാത്രയും" },
      ],
      cta: "പഴയ ചിത്രം പങ്കുവെക്കൂ",
    },
    places: {
      kicker: "സ്ഥലങ്ങൾ",
      heading: "എടക്കോമിലെ ഇടങ്ങൾ",
      lead: "ആദ്യ പട്ടിക. ഓരോ സ്ഥലത്തിന്റെയും വിവരങ്ങൾ ഉറപ്പാക്കിക്കൊണ്ടിരിക്കുന്നു.",
      items: [
        {
          name: "ഇൻഫന്റ് ജീസസ് ദേവാലയം",
          kind: "ക്രൈസ്റ്റ് നഗർ · സീറോ മലബാർ ഇടവക",
          text: "ലഭ്യമായ വിവരങ്ങൾ പ്രകാരം 1962-ൽ സ്ഥാപിതം.",
          level: "supported",
        },
        {
          name: "സെന്റ് പോൾസ് ദേവാലയം",
          kind: "മലങ്കര കത്തോലിക്കാ ദേവാലയം",
          text: "ചരിത്രവും ചിത്രങ്ങളും ശേഖരിക്കുന്നു.",
          level: "needs",
        },
        {
          name: "സൗഹൃദ മെഡിക്കൽ സെന്റർ",
          kind: "ആരോഗ്യ കേന്ദ്രം",
          text: "എടക്കോമിലെ ആരോഗ്യ സേവനം.",
          level: "needs",
        },
        {
          name: "ചപ്പാരപ്പടവ്",
          kind: "അടുത്തുള്ള പട്ടണം",
          text: "എടക്കോമിൽ നിന്ന് ഏകദേശം 2 കി.മീ.",
          level: "supported",
        },
      ],
      note: "ആരാധനാലയങ്ങൾ, വിദ്യാലയങ്ങൾ, വായനശാലകൾ, പുഴകൾ, കവലകൾ — കൂടുതൽ ഇടങ്ങൾ ചേർത്തുകൊണ്ടിരിക്കുന്നു.",
      cta: "ഒരു സ്ഥലം നിർദ്ദേശിക്കൂ",
    },
    contribute: {
      kicker: "പങ്കുചേരാം",
      heading: "നമ്മുടെ നാടിന്റെ പഴയ ഓർമ്മകൾ പങ്കുവെക്കൂ",
      lead: "എടക്കോമിലുള്ളവർക്കും കേരളത്തിന് പുറത്തും വിദേശത്തുമുള്ളവർക്കും — എല്ലാവർക്കും ഈ ശേഖരത്തിന്റെ ഭാഗമാകാം.",
      types: [
        {
          icon: "photo",
          title: "പഴയ ചിത്രങ്ങൾ",
          text: "കുടുംബ ആൽബങ്ങൾ, വിദ്യാലയ ചിത്രങ്ങൾ, ആഘോഷങ്ങൾ, പഴയ വീടുകളും റോഡുകളും.",
        },
        {
          icon: "story",
          title: "ഓർമ്മകളും കഥകളും",
          text: "നിങ്ങളുടെയോ മുതിർന്നവരുടെയോ അനുഭവങ്ങൾ, എഴുത്തായോ ശബ്ദമായോ.",
        },
        {
          icon: "clock",
          title: "ചരിത്ര വിവരങ്ങൾ",
          text: "ഒരു തീയതി, ഒരു സംഭവം, ഒരു സ്ഥാപനത്തിന്റെ തുടക്കം.",
        },
        {
          icon: "document",
          title: "രേഖകൾ",
          text: "കത്തുകൾ, സർട്ടിഫിക്കറ്റുകൾ, പഴയ പത്ര കട്ടിംഗുകൾ.",
        },
      ],
      stepsTitle: "എങ്ങനെ?",
      steps: [
        { title: "കണ്ടെത്തുക", text: "വീട്ടിലെ പഴയ ആൽബങ്ങളും പെട്ടികളും ഒന്നു നോക്കൂ." },
        { title: "ഓർത്തെടുക്കുക", text: "വർഷം, സ്ഥലം, ചിത്രത്തിലുള്ളവർ — അറിയാവുന്നത്ര." },
        { title: "പങ്കുവെക്കുക", text: "ഞങ്ങൾ സ്കാൻ ചെയ്ത് യഥാർത്ഥ ചിത്രം അന്നുതന്നെ തിരികെ നൽകും." },
      ],
      button: "ഓൺലൈൻ ഫോം ഉടൻ വരുന്നു",
      buttonNote:
        "സ്കാനിംഗ് ദിനങ്ങളുടെ തീയതികൾ ഇവിടെ അറിയിക്കും. നിങ്ങളുടെ സമ്മതമില്ലാതെ ഒന്നും പ്രസിദ്ധീകരിക്കില്ല.",
    },
    footer: {
      mission: "എടക്കോമിന്റെ ചരിത്രവും ഓർമ്മകളും വരുംതലമുറകൾക്കായി സൂക്ഷിക്കുന്ന ജനകീയ ഡിജിറ്റൽ ശേഖരം.",
      promise:
        "സ്ഥലം ഉറപ്പാക്കാത്ത ഒരു ചിത്രവും എടക്കോമിന്റേതായി അടയാളപ്പെടുത്തില്ല. ഓരോ ചരിത്രവിവരത്തിനൊപ്പവും അതിന്റെ ഉറവിടം കാണിക്കും.",
      sectionsTitle: "വിഭാഗങ്ങൾ",
      languageTitle: "ഭാഷ",
      rights: "© 2026 edakkom.com",
      top: "മുകളിലേക്ക്",
    },
  },

  en: {
    meta: {
      title: "Edakkom, Kannur, Kerala | History, Culture, Photos & Local Information",
      description:
        "Discover Edakkom, Kannur, Kerala. Explore its history, culture, historical photographs, landmarks, educational institutions, local people and community development.",
      locale: "en_IN",
    },
    nav: {
      history: "History",
      archive: "Photo Archive",
      places: "Places",
      contribute: "Contribute",
      switchLabel: "മലയാളം",
      switchHref: "/",
      menu: "Menu",
    },
    hero: {
      eyebrow: "Kannur · Kerala",
      title: "Edakkom",
      altTitle: "എടക്കോം",
      tagline: "Our Land. Our History. Our Identity.",
      lead: "A community-built digital archive keeping the history, old photographs and memories of Edakkom for the generations to come.",
      primary: "Explore the archive",
      secondary: "Share an old photo",
      artNote: "Illustration · real Edakkom photographs are being collected",
    },
    facts: {
      items: [
        { label: "District", value: "Kannur" },
        { label: "Region", value: "North Malabar" },
        { label: "Nearest town", value: "Chapparappadavu · about 2 km" },
        { label: "Archive", value: "Now collecting" },
      ],
      cta: "Take part",
    },
    welcome: {
      kicker: "Welcome",
      heading: "Edakkom – Our Land, Our History",
      paragraphs: [
        "Edakkom is a place shaped by its people, its landscape, its traditions and generations of memories.",
        "EDAKKOM.COM is a community-driven digital archive. It documents and preserves the history, heritage, photographs, culture, landmarks and development of our land.",
        "From forgotten photographs to modern village life, it brings the past and present together for future generations.",
        "Our land. Our stories. Our memories. Our future.",
      ],
      legendTitle: "How we mark what we know",
      legend: {
        verified: "A record, register or dated photograph supports it",
        supported: "Two independent accounts agree, or one strong source",
        oral: "One person's memory, shown as their account",
        needs: "A lead that is still being researched",
        disputed: "Sources disagree; both versions are shown",
      },
      legendNote: "Nothing is published as history without a source.",
    },
    discover: {
      kicker: "Discover",
      heading: "Getting to know Edakkom",
      lead: "Each section is taking shape with the help of the people of Edakkom.",
      cards: [
        {
          icon: "history",
          title: "History",
          text: "The origin of the name, early settlement, the Malabar migration, farming history.",
          status: "Being researched",
        },
        {
          icon: "photo",
          title: "Photo Archive",
          text: "Old family photos, schools, celebrations, and Edakkom then and now.",
          status: "Collecting",
        },
        {
          icon: "pin",
          title: "Places",
          text: "Places of worship, main junctions, rivers and nature.",
          status: "Being researched",
        },
        {
          icon: "people",
          title: "People",
          text: "Elders' memories, teachers, farmers and artists.",
          status: "Interviews soon",
        },
        {
          icon: "lamp",
          title: "Culture",
          text: "Church feasts, temple festivals, food, customs and childhood games.",
          status: "Collecting",
        },
        {
          icon: "school",
          title: "Education",
          text: "The story of every school, and memories from former students.",
          status: "Being researched",
        },
      ],
    },
    timeline: {
      kicker: "Timeline",
      heading: "The story of Edakkom, period by period",
      lead: "Every date needs a source. For now these are research topics, updated as evidence comes in.",
      items: [
        {
          period: "Before 1900",
          title: "The name and the first settlements",
          text: "Where does the name “Edakkom” come from? The first families and their farming.",
          level: "needs",
        },
        {
          period: "1900–1940",
          title: "Village life in British Malabar",
          text: "Land, crops, work and travel, through the memories of elders.",
          level: "needs",
        },
        {
          period: "1940–1960",
          title: "The Malabar migration",
          text: "Farming families from Central Travancore arrive in the Chapparappadavu area.",
          level: "needs",
        },
        {
          period: "1962",
          title: "Infant Jesus Church, Christ Nagar",
          text: "Listed as established in 1962. To be confirmed from the parish records.",
          level: "supported",
        },
        {
          period: "1960–1980",
          title: "Farms, places of worship, schools",
          text: "Rubber, pepper, cashew and coconut: changing crops and the first institutions.",
          level: "needs",
        },
        {
          period: "1980–2000",
          title: "Roads, buses and electricity",
          text: "The development that connected the village to the wider world.",
          level: "needs",
        },
        {
          period: "2000–2020",
          title: "Migration and a new generation",
          text: "Work in the Gulf, mobile phones, the internet and new institutions.",
          level: "needs",
        },
        {
          period: "2026",
          title: "edakkom.com begins",
          text: "The community digital archive of Edakkom goes online.",
          level: "verified",
        },
      ],
      note: "Do you have a record, a photo or a memory from any of these periods?",
      cta: "Share what you know",
    },
    archive: {
      kicker: "Photo Archive",
      heading: "Old Edakkom, waiting to be found",
      lead: "These frames are empty on purpose. Only photographs confirmed to be from Edakkom will appear here.",
      placeholder: "Your photo could be here",
      frames: [
        { icon: "photo", label: "Old Edakkom", tall: true },
        { icon: "family", label: "Family memories" },
        { icon: "school", label: "Schools" },
        { icon: "paddy", label: "Farming", tall: true },
        { icon: "lamp", label: "Celebrations" },
        { icon: "road", label: "Roads and travel" },
      ],
      cta: "Share an old photo",
    },
    places: {
      kicker: "Places",
      heading: "Places in Edakkom",
      lead: "A first list. Details for each place are being confirmed.",
      items: [
        {
          name: "Infant Jesus Church",
          kind: "Christ Nagar · Syro-Malabar parish",
          text: "Listed as established in 1962.",
          level: "supported",
        },
        {
          name: "St. Paul Church",
          kind: "Malankara Catholic church",
          text: "History and photographs being collected.",
          level: "needs",
        },
        {
          name: "Souhruda Medical Centre",
          kind: "Healthcare",
          text: "Local healthcare in Edakkom.",
          level: "needs",
        },
        {
          name: "Chapparappadavu",
          kind: "Nearest town",
          text: "About 2 km from Edakkom.",
          level: "supported",
        },
      ],
      note: "More places of worship, schools, libraries, rivers and junctions are being added.",
      cta: "Suggest a place",
    },
    contribute: {
      kicker: "Take part",
      heading: "Share the old memories of our land",
      lead: "Whether you live in Edakkom, elsewhere in India or abroad, you can be part of this archive.",
      types: [
        {
          icon: "photo",
          title: "Old photographs",
          text: "Family albums, school photos, celebrations, old houses and roads.",
        },
        {
          icon: "story",
          title: "Memories and stories",
          text: "Your experiences or your elders', written down or recorded.",
        },
        {
          icon: "clock",
          title: "Historical information",
          text: "A date, an event, the founding of an institution.",
        },
        {
          icon: "document",
          title: "Documents",
          text: "Letters, certificates, old newspaper cuttings.",
        },
      ],
      stepsTitle: "How it works",
      steps: [
        { title: "Look", text: "Open the old albums and boxes at home." },
        { title: "Remember", text: "The year, the place, the people in the photo: whatever you know." },
        { title: "Share", text: "We scan it and return the original the same day." },
      ],
      button: "Online form coming soon",
      buttonNote:
        "Scanning-day dates will be announced here. Nothing is published without your consent.",
    },
    footer: {
      mission: "A community digital archive keeping the history and memories of Edakkom for the generations to come.",
      promise:
        "No photograph is labelled as Edakkom unless its place is confirmed. Every historical claim shows its source.",
      sectionsTitle: "Sections",
      languageTitle: "Language",
      rights: "© 2026 edakkom.com",
      top: "Back to top",
    },
  },
};
