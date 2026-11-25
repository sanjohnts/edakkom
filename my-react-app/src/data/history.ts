import type { L } from '../lib/i18n';
import type { Status } from './site';

export type TimelineEvent = {
  id: string;
  when: string;
  title: L;
  body: L;
  status: Status;
  photo?: string;
  /** true = a gap in the record we are asking the community to help fill */
  research?: boolean;
};

export const TIMELINE: TimelineEvent[] = [
  {
    id: 'kolathunadu', when: 'Before 1700s', status: 'context', photo: 'old-temple-mandapams',
    title: { en: 'Land of Kolathunadu', ml: 'കോലത്തുനാടിന്റെ ഭാഗം' },
    body: {
      en: 'North Malabar is ruled by the Kolathiri kings of Kolathunadu. Village life is organised around tharavadus, paddy fields, sacred groves (kavus) and the annual Theyyam season.',
      ml: 'ഉത്തര മലബാർ കോലത്തിരി രാജാക്കന്മാരുടെ കോലത്തുനാടിന്റെ ഭാഗം. തറവാടുകൾ, നെൽവയലുകൾ, കാവുകൾ, തെയ്യക്കാലം എന്നിവയ്ക്കു ചുറ്റുമായിരുന്നു ഗ്രാമജീവിതം.',
    },
  },
  {
    id: 'before-1900', when: 'Before 1900', status: 'to-verify', research: true, photo: 'old-paddy-field-hut',
    title: { en: 'Early village history of Edakkom', ml: 'എടക്കോമിന്റെ ആദ്യകാല ചരിത്രം' },
    body: {
      en: 'How old is the settlement? Which families first farmed here, and where does the name “Edakkom” come from? These questions are still open — elders’ memories and family documents can answer them.',
      ml: 'ഈ ജനവാസത്തിന് എത്ര പഴക്കമുണ്ട്? ആദ്യം ഇവിടെ കൃഷി ചെയ്ത കുടുംബങ്ങൾ ഏതൊക്കെ? “എടക്കോം” എന്ന പേര് എങ്ങനെ വന്നു? മുതിർന്നവരുടെ ഓർമകളും കുടുംബരേഖകളുമാണ് ഇതിന് ഉത്തരം നൽകേണ്ടത്.',
    },
  },
  {
    id: 'mysore', when: '1766 – 1792', status: 'context',
    title: { en: 'Mysore rule in Malabar', ml: 'മലബാറിൽ മൈസൂർ ഭരണം' },
    body: {
      en: 'Hyder Ali and later Tipu Sultan of Mysore take control of Malabar. Many local chieftains are displaced and land arrangements change.',
      ml: 'മൈസൂരിലെ ഹൈദരലിയും പിന്നീട് ടിപ്പു സുൽത്താനും മലബാർ കീഴടക്കുന്നു. പല നാടുവാഴികളും സ്ഥാനഭ്രഷ്ടരാകുന്നു; ഭൂബന്ധങ്ങൾ മാറുന്നു.',
    },
  },
  {
    id: 'british', when: '1792', status: 'context', photo: 'old-bungalow',
    title: { en: 'Malabar comes under British rule', ml: 'മലബാർ ബ്രിട്ടീഷ് ഭരണത്തിൽ' },
    body: {
      en: 'After the Treaty of Seringapatam, Malabar passes to the British East India Company and later becomes Malabar District of the Madras Presidency.',
      ml: 'ശ്രീരംഗപട്ടണം ഉടമ്പടിയോടെ മലബാർ ബ്രിട്ടീഷ് ഈസ്റ്റ് ഇന്ത്യാ കമ്പനിയുടെ കീഴിലാകുന്നു; പിന്നീട് മദ്രാസ് പ്രസിഡൻസിയിലെ മലബാർ ജില്ലയാകുന്നു.',
    },
  },
  {
    id: 'pre-independence', when: '1900 – 1947', status: 'to-verify', research: true, photo: 'old-classroom-malayalam',
    title: { en: 'Life before Independence', ml: 'സ്വാതന്ത്ര്യത്തിനു മുമ്പുള്ള ജീവിതം' },
    body: {
      en: 'Schools, reading rooms, roads and farming in the British period. We are collecting oral histories about education, transport, occupations and daily life in Edakkom during these years.',
      ml: 'ബ്രിട്ടീഷ് കാലത്തെ സ്കൂളുകൾ, വായനശാലകൾ, റോഡുകൾ, കൃഷി. ഈ കാലഘട്ടത്തിലെ എടക്കോമിലെ വിദ്യാഭ്യാസം, യാത്ര, തൊഴിൽ, ദൈനംദിന ജീവിതം എന്നിവയെക്കുറിച്ചുള്ള ഓർമകൾ ഞങ്ങൾ ശേഖരിക്കുന്നു.',
    },
  },
  {
    id: 'kudiyettam', when: '1920s – 1970s', status: 'context', photo: 'old-ploughing-umbrella',
    title: { en: 'The migration years (Kudiyettam)', ml: 'കുടിയേറ്റ കാലം' },
    body: {
      en: 'Farming families from Travancore migrate to the hill country of Malabar, clearing land and founding new settlements, churches and schools across eastern Kannur. Edakkom’s own migration story is still to be documented.',
      ml: 'തിരുവിതാംകൂറിൽ നിന്നുള്ള കർഷക കുടുംബങ്ങൾ മലബാറിലെ മലയോരങ്ങളിലേക്ക് കുടിയേറുന്നു; കിഴക്കൻ കണ്ണൂരിൽ പുതിയ ജനവാസങ്ങളും പള്ളികളും സ്കൂളുകളും ഉയരുന്നു. എടക്കോമിന്റെ സ്വന്തം കുടിയേറ്റ കഥ ഇനിയും രേഖപ്പെടുത്താനുണ്ട്.',
    },
  },
  {
    id: 'freedom-struggle', when: '1940 – 1946', status: 'directory',
    title: { en: 'Freedom fighters of the Chapparappadava area', ml: 'ചപ്പാരപ്പടവ് മേഖലയിലെ സ്വാതന്ത്ര്യസമര സേനാനികൾ' },
    body: {
      en: 'The panchayat’s history remembers Machathi Kunjikannan (the Morazha incident of 15 September 1940), N.C.K. Nambiar, who served in the INA under Captain Lakshmi, and M.O. Keshavan Nambiar (the 1946 MSP revolt).',
      ml: 'മാച്ചാത്തി കുഞ്ഞിക്കണ്ണൻ (1940 സെപ്റ്റംബർ 15-ലെ മൊറാഴ സംഭവം), ക്യാപ്റ്റൻ ലക്ഷ്മിയുടെ കീഴിൽ ഐ.എൻ.എ.യിൽ പ്രവർത്തിച്ച എൻ.സി.കെ. നമ്പ്യാർ, എം.ഒ. കേശവൻ നമ്പ്യാർ (1946-ലെ എം.എസ്.പി. കലാപം) എന്നിവരെ പഞ്ചായത്ത് ചരിത്രം ഓർക്കുന്നു.',
    },
  },
  {
    id: 'migration-1942', when: '1942', status: 'directory', photo: 'old-ploughing-umbrella',
    title: { en: 'Settlers from Travancore arrive', ml: 'തിരുവിതാംകൂറിൽ നിന്ന് കുടിയേറ്റം' },
    body: {
      en: 'Christian farming families from Travancore begin settling in the Chapparappadava area in 1942; the migration grows from the mid-1950s. Edakkom’s churches — the Infant Jesus parish, St. Paul’s Malankara church and St. Mary’s chapel at Thazhe Edakkom — grew from this community.',
      ml: '1942-ൽ തിരുവിതാംകൂറിൽ നിന്നുള്ള ക്രൈസ്തവ കർഷക കുടുംബങ്ങൾ ചപ്പാരപ്പടവ് മേഖലയിൽ താമസമാക്കിത്തുടങ്ങുന്നു; 1950-കളുടെ മധ്യത്തോടെ കുടിയേറ്റം വർധിക്കുന്നു. എടക്കോമിലെ ഉണ്ണീശോ ഇടവകയും സെന്റ് പോൾസ് മലങ്കര പള്ളിയും താഴെ എടക്കോമിലെ സെന്റ് മേരീസ് കപ്പേളയും ഈ സമൂഹത്തിൽ നിന്ന് വളർന്നു.',
    },
  },
  {
    id: 'thadikkadavu-panchayat', when: 'Late 1940s', status: 'directory',
    title: { en: 'Thadikkadavu panchayat is formed', ml: 'തടിക്കടവ് പഞ്ചായത്ത് രൂപീകരിക്കുന്നു' },
    body: {
      en: 'The old Kooveri and Thadikkadavu panchayats merge into one Thadikkadavu panchayat, with P. Ramavarma Raja of Alakode as its president.',
      ml: 'പഴയ കൂവേരി, തടിക്കടവ് പഞ്ചായത്തുകൾ ചേർന്ന് തടിക്കടവ് പഞ്ചായത്താകുന്നു; ആലക്കോട് രാജ പി. രാമവർമ്മ രാജ പ്രസിഡന്റ്.',
    },
  },
  {
    id: 'independence', when: '15 Aug 1947', status: 'context',
    title: { en: 'Independence', ml: 'സ്വാതന്ത്ര്യം' },
    body: { en: 'India becomes independent. Malabar remains part of Madras State.', ml: 'ഇന്ത്യ സ്വതന്ത്രമാകുന്നു. മലബാർ മദ്രാസ് സംസ്ഥാനത്തിന്റെ ഭാഗമായി തുടരുന്നു.' },
  },
  {
    id: 'tellicherry-diocese', when: '1953', status: 'context',
    title: { en: 'Diocese of Tellicherry founded', ml: 'തലശ്ശേരി രൂപത സ്ഥാപിതമാകുന്നു' },
    body: {
      en: 'The Syro-Malabar Diocese of Tellicherry (Thalassery) is established for the growing migrant communities of North Malabar. The Infant Jesus parish at Edakkom is part of this archdiocese today.',
      ml: 'ഉത്തര മലബാറിലെ വളരുന്ന കുടിയേറ്റ സമൂഹങ്ങൾക്കായി സീറോ മലബാർ തലശ്ശേരി രൂപത സ്ഥാപിക്കപ്പെടുന്നു. എടക്കോം ഉണ്ണീശോ ഇടവക ഇന്ന് ഈ അതിരൂപതയുടെ ഭാഗമാണ്.',
    },
  },
  {
    id: 'kerala', when: '1 Nov 1956', status: 'context',
    title: { en: 'Kerala state is formed', ml: 'കേരള സംസ്ഥാനം രൂപീകൃതമാകുന്നു' },
    body: { en: 'Malabar joins Travancore–Cochin to form the state of Kerala.', ml: 'മലബാർ തിരുവിതാംകൂർ–കൊച്ചിയുമായി ചേർന്ന് കേരള സംസ്ഥാനം രൂപം കൊള്ളുന്നു.' },
  },
  {
    id: 'kannur-district', when: '1 Jan 1957', status: 'context',
    title: { en: 'Kannur district is created', ml: 'കണ്ണൂർ ജില്ല രൂപീകരിക്കുന്നു' },
    body: { en: 'The new district of Kannur (then Cannanore) is formed from the old Malabar district.', ml: 'പഴയ മലബാർ ജില്ലയിൽ നിന്ന് കണ്ണൂർ (അന്ന് കാനനൂർ) ജില്ല രൂപീകരിക്കുന്നു.' },
  },
  {
    id: 'infant-jesus-church', when: '1962', status: 'to-verify', photo: 'church-facade-statue',
    title: { en: 'Infant Jesus Church, Edakkom', ml: 'എടക്കോം ഉണ്ണീശോ പള്ളി' },
    body: {
      en: 'The local Syro-Malabar parish is listed as established in 1962. We will confirm this date with the parish records.',
      ml: 'പ്രാദേശിക സീറോ മലബാർ ഇടവക 1962-ൽ സ്ഥാപിതമായതായി ലിസ്റ്റിങ്ങുകളിൽ കാണുന്നു. ഇടവക രേഖകളിൽ നിന്ന് ഈ തീയതി സ്ഥിരീകരിക്കും.',
    },
  },
  {
    id: 'chapparapadavu-gp', when: '20 Jul 1968', status: 'directory',
    title: { en: 'Chapparappadava Grama Panchayat is born', ml: 'ചപ്പാരപ്പടവ് ഗ്രാമപഞ്ചായത്ത് പിറക്കുന്നു' },
    body: {
      en: 'Thadikkadavu panchayat is divided into Chapparappadava and Alakode panchayats. Edakkom becomes one of the wards of the new Chapparappadava panchayat (69.99 km², with Kooveri, Thimiri and Vellad villages).',
      ml: 'തടിക്കടവ് പഞ്ചായത്ത് ചപ്പാരപ്പടവ്, ആലക്കോട് പഞ്ചായത്തുകളായി വിഭജിക്കപ്പെടുന്നു. പുതിയ ചപ്പാരപ്പടവ് പഞ്ചായത്തിന്റെ (69.99 ച.കി.മീ.; കൂവേരി, തിമിരി, വെള്ളാട് വില്ലേജുകൾ) ഒരു വാർഡായി എടക്കോം.',
    },
  },
  {
    id: 'land-reforms', when: '1 Jan 1970', status: 'context', photo: 'old-women-farmers',
    title: { en: 'Land reforms take effect', ml: 'ഭൂപരിഷ്കരണം പ്രാബല്യത്തിൽ' },
    body: {
      en: 'Kerala’s land reform laws end the old landlord–tenant system and give ownership to many cultivating families.',
      ml: 'കേരളത്തിലെ ഭൂപരിഷ്കരണ നിയമം പഴയ ജന്മി–കുടിയാൻ സമ്പ്രദായം അവസാനിപ്പിച്ച് പല കർഷക കുടുംബങ്ങൾക്കും ഭൂമിയുടെ ഉടമസ്ഥാവകാശം നൽകുന്നു.',
    },
  },
  {
    id: 'community-1970-90', when: '1970 – 1990', status: 'to-verify', research: true, photo: 'old-vellur-vayanasala',
    title: { en: 'Community building', ml: 'സമൂഹ നിർമ്മാണം' },
    body: {
      en: 'Schools, clubs, reading rooms, road improvements and local organisations. Do you have photographs or records from these years? Help us add them.',
      ml: 'സ്കൂളുകൾ, ക്ലബ്ബുകൾ, വായനശാലകൾ, റോഡ് വികസനം, പ്രാദേശിക സംഘടനകൾ. ഈ വർഷങ്ങളിലെ ഫോട്ടോകളോ രേഖകളോ നിങ്ങളുടെ കയ്യിലുണ്ടോ? ഞങ്ങളെ അറിയിക്കൂ.',
    },
  },
  {
    id: 'orphanage', when: '1982', status: 'directory',
    title: { en: 'Bishop Valloppilly Memorial Orphanage', ml: 'ബിഷപ്പ് വള്ളോപ്പിള്ളി മെമ്മോറിയൽ അനാഥാലയം' },
    body: {
      en: 'A church directory lists this orphanage with the Infant Jesus parish, Edakkom, with 1982 as its founding year.',
      ml: 'എടക്കോം ഉണ്ണീശോ ഇടവകയോടൊപ്പം ഈ അനാഥാലയം 1982-ൽ സ്ഥാപിതമായതായി ഒരു സഭാ ഡയറക്ടറിയിൽ കാണുന്നു.',
    },
  },
  {
    id: 'bridge-1985', when: '1985', status: 'directory', photo: 'village-bridge-road',
    title: { en: 'A bridge at Chapparappadava', ml: 'ചപ്പാരപ്പടവിൽ പാലം' },
    body: {
      en: 'A bridge replaces the old river crossing. The place had taken its name from a large chappara tree at that crossing (kadavu): Chapparakkadavu, later Chapparappadava. Edakkom’s road link to the panchayat centre and Taliparamba becomes all-weather.',
      ml: 'പഴയ കടവിന് പകരം പാലം വരുന്നു. ആ കടവിലെ വലിയ ചപ്പാര മരത്തിൽ നിന്നാണ് ചപ്പാരക്കടവ് — പിന്നീട് ചപ്പാരപ്പടവ് — എന്ന പേര്. എടക്കോമിൽ നിന്ന് പഞ്ചായത്ത് കേന്ദ്രത്തിലേക്കും തളിപ്പറമ്പിലേക്കും എല്ലാ കാലത്തും യാത്രാസൗകര്യം.',
    },
  },
  {
    id: 'peoples-plan', when: '1996', status: 'context', photo: 'marigold-farming',
    title: { en: 'People’s Plan — power to the panchayats', ml: 'ജനകീയാസൂത്രണം' },
    body: {
      en: 'Kerala’s People’s Plan Campaign gives grama panchayats a large share of the state’s development funds, and village roads, water supply and housing are planned locally.',
      ml: 'ജനകീയാസൂത്രണ പ്രസ്ഥാനത്തിലൂടെ വികസന ഫണ്ടിന്റെ വലിയ പങ്ക് ഗ്രാമപഞ്ചായത്തുകൾക്ക് ലഭിക്കുന്നു; റോഡുകളും കുടിവെള്ളവും ഭവനങ്ങളും പ്രാദേശികമായി ആസൂത്രണം ചെയ്യപ്പെടുന്നു.',
    },
  },
  {
    id: 'modernisation', when: '1990 – 2010', status: 'to-verify', research: true, photo: 'village-bridge-road',
    title: { en: 'Modernisation', ml: 'ആധുനികവൽക്കരണം' },
    body: {
      en: 'Concrete houses, tarred roads, buses, phones and Gulf migration change everyday life. Send us before-and-after photos of your home, road or junction.',
      ml: 'കോൺക്രീറ്റ് വീടുകൾ, ടാർ റോഡുകൾ, ബസുകൾ, ഫോണുകൾ, ഗൾഫ് പ്രവാസം — ദൈനംദിന ജീവിതം മാറുന്നു. നിങ്ങളുടെ വീടിന്റെയോ റോഡിന്റെയോ കവലയുടെയോ പഴയതും പുതിയതുമായ ഫോട്ടോകൾ അയക്കൂ.',
    },
  },
  {
    id: 'kannur-airport', when: '9 Dec 2018', status: 'context',
    title: { en: 'Kannur International Airport opens', ml: 'കണ്ണൂർ അന്താരാഷ്ട്ര വിമാനത്താവളം' },
    body: {
      en: 'The district gets its own international airport — a closer link for the many families with members working in the Gulf.',
      ml: 'ജില്ലയ്ക്ക് സ്വന്തം അന്താരാഷ്ട്ര വിമാനത്താവളം — ഗൾഫിൽ ജോലി ചെയ്യുന്നവരുള്ള അനേകം കുടുംബങ്ങൾക്ക് അടുത്തൊരു ആകാശവഴി.',
    },
  },
  {
    id: 'hill-cutting-2022', when: 'May 2022', status: 'directory',
    title: { en: 'Residents raise hill-cutting concerns', ml: 'കുന്നിടിക്കലിനെതിരെ നാട്ടുകാർ' },
    body: {
      en: 'News reports describe soil being removed from hills at Edakkom, Mangara, Shanthigiri, Kottakkanam and other parts of the panchayat for highway works; the panchayat takes the issue to the Taliparamba taluk development committee.',
      ml: 'ദേശീയപാത പണിക്കായി എടക്കോം, മംഗര, ശാന്തിഗിരി, കോട്ടക്കാനം തുടങ്ങിയ പ്രദേശങ്ങളിൽ കുന്നിടിച്ച് മണ്ണെടുക്കുന്നതായി വാർത്ത; പഞ്ചായത്ത് വിഷയം തളിപ്പറമ്പ് താലൂക്ക് വികസന സമിതിയിൽ ഉന്നയിക്കുന്നു.',
    },
  },
  {
    id: 'ward-2025', when: 'Dec 2025', status: 'directory',
    title: { en: 'Edakkom ward votes', ml: 'എടക്കോം വാർഡ് തിരഞ്ഞെടുപ്പ്' },
    body: {
      en: 'In the 2025 local body election, Edakkom is ward 19 of Chapparappadava Grama Panchayat (reserved for women). Alfiya Salam is elected ward member.',
      ml: '2025 തദ്ദേശ തിരഞ്ഞെടുപ്പിൽ എടക്കോം ചപ്പാരപ്പടവ് ഗ്രാമപഞ്ചായത്തിലെ 19-ാം വാർഡ് (വനിതാ സംവരണം). അൽഫിയ സലാം വാർഡ് മെമ്പറായി തിരഞ്ഞെടുക്കപ്പെട്ടു.',
    },
  },
  {
    id: 'digital', when: '2026', status: 'verified', photo: 'onam-pookalam-group',
    title: { en: 'edakkom.com — a digital memory', ml: 'edakkom.com — ഡിജിറ്റൽ ഓർമ്മ' },
    body: {
      en: 'The digital archive of Edakkom begins: a home for photographs, stories, records and the voices of the people who made this place.',
      ml: 'എടക്കോമിന്റെ ഡിജിറ്റൽ ആർക്കൈവ് ആരംഭിക്കുന്നു: ഫോട്ടോകൾക്കും കഥകൾക്കും രേഖകൾക്കും ഈ നാടിനെ രൂപപ്പെടുത്തിയവരുടെ ശബ്ദങ്ങൾക്കും ഒരിടം.',
    },
  },
];

export type Chapter = { id: string; no: string; title: L; photo?: string; body: L[]; status: Status };

export const CHAPTERS: Chapter[] = [
  {
    id: 'name', no: '01', status: 'to-verify', photo: 'old-paddy-field-hut',
    title: { en: 'The name and the earliest settlement', ml: 'പേരും ആദ്യ ജനവാസവും' },
    body: [
      {
        en: 'Edakkom (എടക്കോം) — also written Idakkom (ഇടക്കോം) — is a town in Taliparamba taluk of Kannur district, a short distance from Chapparappadava. The wider Edakkom area spans two panchayats, Chapparappadava and Eramam-Kuttoor, and within Chapparappadava it is a ward of its own. It stands on laterite land in the eastern midlands, on the Methuramba – Chapparappadava – Kuttoor Road.',
        ml: 'കണ്ണൂർ ജില്ലയിലെ തളിപ്പറമ്പ് താലൂക്കിൽ, ചപ്പാരപ്പടവിനടുത്തുള്ള പട്ടണമാണ് എടക്കോം (ഇടക്കോം). ചപ്പാരപ്പടവ്, എരമം-കുറ്റൂർ എന്നീ രണ്ട് പഞ്ചായത്തുകളിലായി എടക്കോം പ്രദേശം വ്യാപിച്ചുകിടക്കുന്നു; ചപ്പാരപ്പടവ് പഞ്ചായത്തിൽ ഇതൊരു വാർഡ് കൂടിയാണ്. കിഴക്കൻ ഇടനാട്ടിലെ ചെങ്കൽ മണ്ണിൽ, മേത്തുരമ്പ – ചപ്പാരപ്പടവ് – കുറ്റൂർ റോഡിലാണ് എടക്കോം.',
      },
      {
        en: 'No published account yet explains the origin of the name or the year the place was first settled.',
        ml: 'പേരിന്റെ ഉത്ഭവമോ ആദ്യമായി ജനവാസം തുടങ്ങിയ കാലമോ വിശദീകരിക്കുന്ന പ്രസിദ്ധീകൃത രേഖകളൊന്നും ഇതുവരെ ലഭ്യമല്ല.',
      },
      {
        en: 'That is exactly why this archive exists. Old land documents, temple and church records, and the memories of the oldest residents are the real sources of Edakkom’s early history — and we invite every family to share what they know.',
        ml: 'അതുകൊണ്ടാണ് ഈ ആർക്കൈവ്. പഴയ ആധാരങ്ങൾ, ക്ഷേത്ര–പള്ളി രേഖകൾ, ഏറ്റവും മുതിർന്ന നാട്ടുകാരുടെ ഓർമകൾ — ഇവയാണ് എടക്കോമിന്റെ ആദ്യകാല ചരിത്രത്തിന്റെ യഥാർത്ഥ സ്രോതസ്സുകൾ. അറിയാവുന്നത് പങ്കുവെക്കാൻ എല്ലാ കുടുംബങ്ങളെയും ക്ഷണിക്കുന്നു.',
      },
    ],
  },
  {
    id: 'kolathunadu', no: '02', status: 'context', photo: 'old-temple-mandapams',
    title: { en: 'In the land of Kolathunadu', ml: 'കോലത്തുനാടിന്റെ മണ്ണിൽ' },
    body: [
      {
        en: 'For centuries, North Malabar formed the kingdom of Kolathunadu under the Kolathiri rajas. Villages here grew around tharavadu households, paddy fields in the valleys, coconut and areca gardens on the slopes, and sacred groves — the kavus — where Theyyam is performed every season.',
        ml: 'നൂറ്റാണ്ടുകളോളം ഉത്തര മലബാർ കോലത്തിരി രാജാക്കന്മാരുടെ കോലത്തുനാടായിരുന്നു. താഴ്വരകളിലെ നെൽവയലുകളും ചരിവുകളിലെ തെങ്ങിൻ–കവുങ്ങിൻ തോട്ടങ്ങളും തറവാടുകളും എല്ലാ സീസണിലും തെയ്യം കെട്ടിയാടുന്ന കാവുകളുമായിരുന്നു ഇവിടുത്തെ ഗ്രാമങ്ങളുടെ അടിസ്ഥാനം.',
      },
    ],
  },
  {
    id: 'colonial', no: '03', status: 'context', photo: 'old-road-roller',
    title: { en: 'Mysore and British Malabar', ml: 'മൈസൂർ, ബ്രിട്ടീഷ് മലബാർ' },
    body: [
      {
        en: 'Mysore rule (1766–1792) was followed by the British, who made Malabar a district of the Madras Presidency. Revenue surveys, taluk offices, roads and the first government schools reached the countryside in this period.',
        ml: 'മൈസൂർ ഭരണത്തിനു (1766–1792) ശേഷം ബ്രിട്ടീഷുകാർ മലബാറിനെ മദ്രാസ് പ്രസിഡൻസിയിലെ ഒരു ജില്ലയാക്കി. റവന്യൂ സർവേകളും താലൂക്ക് ഓഫീസുകളും റോഡുകളും ആദ്യത്തെ സർക്കാർ സ്കൂളുകളും ഈ കാലത്താണ് ഗ്രാമങ്ങളിലെത്തിയത്.',
      },
    ],
  },
  {
    id: 'panchayat', no: '04', status: 'directory', photo: 'old-road-roller',
    title: { en: 'Freedom fighters and a new panchayat', ml: 'സ്വാതന്ത്ര്യസമരവും പുതിയ പഞ്ചായത്തും' },
    body: [
      {
        en: 'The Chapparappadava area sent its own people into the freedom movement: Machathi Kunjikannan took part in the Morazha incident of 15 September 1940, N.C.K. Nambiar served in the INA under Captain Lakshmi, and M.O. Keshavan Nambiar joined the 1946 MSP revolt.',
        ml: 'ചപ്പാരപ്പടവ് മേഖലയിൽ നിന്നും സ്വാതന്ത്ര്യസമരത്തിൽ പങ്കെടുത്തവരുണ്ട്: 1940 സെപ്റ്റംബർ 15-ലെ മൊറാഴ സംഭവത്തിൽ മാച്ചാത്തി കുഞ്ഞിക്കണ്ണൻ, ക്യാപ്റ്റൻ ലക്ഷ്മിയുടെ കീഴിൽ ഐ.എൻ.എ.യിൽ എൻ.സി.കെ. നമ്പ്യാർ, 1946-ലെ എം.എസ്.പി. കലാപത്തിൽ എം.ഒ. കേശവൻ നമ്പ്യാർ.',
      },
      {
        en: 'After Independence, the Kooveri and Thadikkadavu panchayats were joined into Thadikkadavu panchayat under P. Ramavarma Raja of Alakode. On 20 July 1968 it was split, and Chapparappadava Grama Panchayat was formed — with Edakkom as one of its wards. In 1985 a bridge replaced the old ferry crossing at Chapparappadava.',
        ml: 'സ്വാതന്ത്ര്യാനന്തരം കൂവേരി, തടിക്കടവ് പഞ്ചായത്തുകൾ ചേർന്ന് ആലക്കോട് രാജ പി. രാമവർമ്മ രാജയുടെ നേതൃത്വത്തിൽ തടിക്കടവ് പഞ്ചായത്തായി. 1968 ജൂലൈ 20-ന് അത് വിഭജിച്ച് ചപ്പാരപ്പടവ് ഗ്രാമപഞ്ചായത്ത് രൂപീകരിച്ചു — എടക്കോം അതിന്റെ ഒരു വാർഡായി. 1985-ൽ ചപ്പാരപ്പടവിലെ പഴയ കടത്തിന് പകരം പാലം വന്നു.',
      },
    ],
  },
  {
    id: 'kudiyettam', no: '05', status: 'to-verify', photo: 'old-ploughing-umbrella',
    title: { en: 'Kudiyettam — the migration years', ml: 'കുടിയേറ്റത്തിന്റെ വർഷങ്ങൾ' },
    body: [
      {
        en: 'From the 1920s to the 1970s, thousands of farming families from Travancore moved north into the hill country of Malabar. They cleared forest land, planted rubber, pepper, cashew and coconut, and built churches and schools that became the centres of new villages.',
        ml: '1920-കൾ മുതൽ 1970-കൾ വരെ തിരുവിതാംകൂറിൽ നിന്ന് ആയിരക്കണക്കിന് കർഷക കുടുംബങ്ങൾ മലബാറിലെ മലയോരങ്ങളിലേക്ക് കുടിയേറി. കാടുവെട്ടിത്തെളിച്ച് റബ്ബറും കുരുമുളകും കശുമാവും തെങ്ങും നട്ടു; പുതിയ ഗ്രാമങ്ങളുടെ കേന്ദ്രങ്ങളായി പള്ളികളും സ്കൂളുകളും പണിതു.',
      },
      {
        en: 'In the Chapparappadava area this migration began in 1942 and grew from the mid-1950s. Edakkom has a Syro-Malabar parish (Infant Jesus Church, listed as established in 1962), a Malankara Catholic church (St. Paul’s) and St. Mary’s chapel at Thazhe Edakkom — signs of how much the settlers shaped the town. Which families came, when, and from where is still to be recorded.',
        ml: 'ചപ്പാരപ്പടവ് മേഖലയിൽ ഈ കുടിയേറ്റം 1942-ൽ തുടങ്ങി, 1950-കളുടെ മധ്യത്തോടെ വർധിച്ചു. എടക്കോമിൽ ഒരു സീറോ മലബാർ ഇടവകയും (ഉണ്ണീശോ പള്ളി, 1962-ൽ സ്ഥാപിതമായതായി ലിസ്റ്റിങ്), മലങ്കര കത്തോലിക്കാ പള്ളിയും (സെന്റ് പോൾസ്), താഴെ എടക്കോമിൽ സെന്റ് മേരീസ് കപ്പേളയും ഉണ്ട് — കുടിയേറ്റക്കാർ ഈ പട്ടണത്തെ എത്രമാത്രം രൂപപ്പെടുത്തി എന്നതിന്റെ അടയാളങ്ങൾ. ഏതൊക്കെ കുടുംബങ്ങൾ, എപ്പോൾ, എവിടെ നിന്ന് വന്നു എന്നത് ഇനിയും രേഖപ്പെടുത്താനുണ്ട്.',
      },
    ],
  },
  {
    id: 'village-life', no: '06', status: 'context', photo: 'old-winnowing',
    title: { en: 'Village life and work', ml: 'ഗ്രാമജീവിതവും തൊഴിലും' },
    body: [
      {
        en: 'Paddy in the valleys, coconut and areca around the homes, and cash crops such as rubber, cashew and pepper on the higher land — this is the farming pattern of eastern Kannur. Ploughing with oxen, transplanting, harvest and winnowing set the rhythm of the year, alongside Theyyam, Onam, Vishu and church and mosque feasts.',
        ml: 'താഴ്വരകളിൽ നെല്ല്, വീടുകൾക്ക് ചുറ്റും തെങ്ങും കവുങ്ങും, ഉയർന്ന പ്രദേശങ്ങളിൽ റബ്ബർ, കശുമാവ്, കുരുമുളക് — ഇതാണ് കിഴക്കൻ കണ്ണൂരിന്റെ കൃഷിരീതി. കാളപൂട്ടും ഞാറുനടലും കൊയ്ത്തും നെല്ലുപാറ്റലും തെയ്യവും ഓണവും വിഷുവും പള്ളി–പള്ളിപ്പെരുന്നാളുകളും ചേർന്നതായിരുന്നു ഒരു വർഷത്തിന്റെ താളം.',
      },
    ],
  },
  {
    id: 'schools', no: '07', status: 'directory', photo: 'old-school-assembly',
    title: { en: 'Schools and reading rooms', ml: 'സ്കൂളുകളും വായനശാലകളും' },
    body: [
      {
        en: 'North Malabar’s village reading rooms (vayanasalas) and aided schools did more than teach letters — they were where newspapers were read aloud, plays rehearsed and public life began. Christ Nagar LP School, about 0.6 km from Edakkom, is the nearest school in public listings and also serves as the local polling station.',
        ml: 'ഉത്തര മലബാറിലെ ഗ്രാമീണ വായനശാലകളും എയ്ഡഡ് സ്കൂളുകളും അക്ഷരം പഠിപ്പിക്കുക മാത്രമല്ല ചെയ്തത് — പത്രം ഉറക്കെ വായിച്ചതും നാടകം പരിശീലിച്ചതും പൊതുജീവിതം തുടങ്ങിയതും അവിടെയാണ്. എടക്കോമിൽ നിന്ന് ഏകദേശം 0.6 കി.മീ. അകലെയുള്ള ക്രൈസ്റ്റ് നഗർ എൽ.പി. സ്കൂളാണ് ലിസ്റ്റിങ്ങുകളിലെ ഏറ്റവും അടുത്ത സ്കൂൾ; പ്രാദേശിക പോളിങ് സ്റ്റേഷനും ഇതുതന്നെ.',
      },
    ],
  },
  {
    id: 'modern', no: '08', status: 'context', photo: 'village-bridge-road',
    title: { en: 'Edakkom town today', ml: 'എടക്കോം പട്ടണം ഇന്ന്' },
    body: [
      {
        en: 'Today Edakkom is a small, busy town on the Methuramba – Chapparappadava – Kuttoor Road. Around its junction are a branch post office, a Federal Bank branch and ATM, a KSFE branch, a 24-hour medical centre and a dental clinic, supermarkets, a hardware complex, restaurants, a public library and the Mahatma Vayanashala — with churches, temples and mosques close by.',
        ml: 'ഇന്ന് എടക്കോം മേത്തുരമ്പ – ചപ്പാരപ്പടവ് – കുറ്റൂർ റോഡിലെ ചെറുതെങ്കിലും സജീവമായ ഒരു പട്ടണമാണ്. കവലയ്ക്ക് ചുറ്റും ബ്രാഞ്ച് പോസ്റ്റ് ഓഫീസ്, ഫെഡറൽ ബാങ്ക് ശാഖയും എ.ടി.എമ്മും, കെ.എസ്.എഫ്.ഇ. ശാഖ, 24 മണിക്കൂർ മെഡിക്കൽ സെന്റർ, ഡെന്റൽ ക്ലിനിക്, സൂപ്പർമാർക്കറ്റുകൾ, ഹാർഡ്‌വെയർ കോംപ്ലക്സ്, ഹോട്ടലുകൾ, പബ്ലിക് ലൈബ്രറി, മഹാത്മ വായനശാല — തൊട്ടടുത്ത് പള്ളികളും ക്ഷേത്രങ്ങളും മസ്ജിദുകളും.',
      },
      {
        en: 'Like much of Kannur, many Edakkom families have members working in the Gulf, other Indian cities and abroad — and they remain part of the town’s story. New pressures have come too: in 2022 residents raised concerns about hills being cut for soil in Edakkom and nearby areas.',
        ml: 'കണ്ണൂരിലെ മറ്റിടങ്ങളിലെന്ന പോലെ പല എടക്കോം കുടുംബങ്ങളിലെയും അംഗങ്ങൾ ഗൾഫിലും മറ്റ് നഗരങ്ങളിലും വിദേശത്തും ജോലി ചെയ്യുന്നു — അവരും ഈ പട്ടണത്തിന്റെ കഥയുടെ ഭാഗമാണ്. പുതിയ വെല്ലുവിളികളുമുണ്ട്: 2022-ൽ എടക്കോമിലും പരിസരങ്ങളിലും കുന്നിടിച്ച് മണ്ണെടുക്കുന്നതിനെതിരെ നാട്ടുകാർ ആശങ്ക ഉന്നയിച്ചു.',
      },
    ],
  },
];
