import type { L } from '../lib/i18n';
import type { Status } from './site';

export type CultureItem = { id: string; title: L; body: L; photo?: string; when?: L; status: Status };

export const CULTURE: CultureItem[] = [
  {
    id: 'theyyam', photo: 'theyyam-night-fire', status: 'context',
    when: { en: 'Thulam – Edavam (≈ Oct – May)', ml: 'തുലാം – ഇടവം' },
    title: { en: 'Theyyam', ml: 'തെയ്യം' },
    body: {
      en: 'The ritual art of North Malabar, in which a performer becomes the deity for the night. Painted faces, towering headdresses, chenda drums and fire torches fill the kavus from Thulam to Edavam. Each shrine has its own Theyyams and its own dates.',
      ml: 'ഒരു രാവിലേക്ക് കോലധാരി ദൈവമാകുന്ന ഉത്തര മലബാറിന്റെ അനുഷ്ഠാനകല. മുഖത്തെഴുത്തും ഉയർന്ന മുടിയും ചെണ്ടമേളവും പന്തങ്ങളും — തുലാം മുതൽ ഇടവം വരെ കാവുകൾ സജീവം. ഓരോ കാവിനും സ്വന്തം തെയ്യങ്ങളും തീയതികളും.',
    },
  },
  {
    id: 'karkidaka', photo: 'karkidaka-theyyam-paddy', status: 'context',
    when: { en: 'Karkidakam (≈ July – August)', ml: 'കർക്കിടകം' },
    title: { en: 'Karkidaka Theyyam', ml: 'കർക്കിടക തെയ്യം' },
    body: {
      en: 'During the hungry monsoon month, small Theyyams such as Aadi and Vedan — often performed by children — walk from house to house with a drummer, believed to drive away illness and misfortune.',
      ml: 'പഞ്ഞമാസമായ കർക്കിടകത്തിൽ ആടി, വേടൻ തുടങ്ങിയ ചെറുതെയ്യങ്ങൾ — പലപ്പോഴും കുട്ടികൾ — ചെണ്ടക്കാരനൊപ്പം വീടുതോറും എത്തുന്നു; രോഗവും ദുരിതവും അകറ്റുമെന്നാണ് വിശ്വാസം.',
    },
  },
  {
    id: 'muthappan', photo: 'temple-festival-umbrellas', status: 'context',
    title: { en: 'Muthappan worship', ml: 'മുത്തപ്പൻ ആരാധന' },
    body: {
      en: 'Sree Muthappan, the people’s deity of North Malabar, is worshipped in madappuras across the region, with offerings of toddy, fish and boiled pulses. Parakkode Sree Muthappan Temple is near Edakkom.',
      ml: 'ഉത്തര മലബാറിന്റെ ജനകീയ ദൈവമായ ശ്രീ മുത്തപ്പനെ മടപ്പുരകളിൽ ആരാധിക്കുന്നു. പാറക്കോട് ശ്രീ മുത്തപ്പൻ ക്ഷേത്രം എടക്കോമിനടുത്താണ്.',
    },
  },
  {
    id: 'onam', photo: 'onam-pookalam-group', status: 'context',
    when: { en: 'Chingam (≈ Aug – Sep)', ml: 'ചിങ്ങം' },
    title: { en: 'Onam and the pookkalam', ml: 'ഓണവും പൂക്കളവും' },
    body: {
      en: 'Flower carpets, the sadya on a banana leaf, new clothes and games. Schools, clubs and families make pookkalams, and many panchayats now grow their own marigolds for the season.',
      ml: 'പൂക്കളം, വാഴയിലയിലെ സദ്യ, ഓണക്കോടി, ഓണക്കളികൾ. സ്കൂളുകളും ക്ലബ്ബുകളും കുടുംബങ്ങളും പൂക്കളമിടുന്നു; പല പഞ്ചായത്തുകളും ഇപ്പോൾ ഓണത്തിനായി സ്വന്തമായി ചെണ്ടുമല്ലി കൃഷി ചെയ്യുന്നു.',
    },
  },
  {
    id: 'church-feasts', photo: 'church-facade-statue', status: 'to-verify',
    title: { en: 'Church feasts (perunnal)', ml: 'പള്ളിപ്പെരുന്നാൾ' },
    body: {
      en: 'Parish feasts bring processions, decorated streets, fireworks and gatherings of families who have moved away. Feast dates for Infant Jesus Church and St. Paul’s Church will be added.',
      ml: 'പ്രദക്ഷിണവും അലങ്കരിച്ച വഴികളും വെടിക്കെട്ടും ദൂരെപ്പോയ കുടുംബങ്ങളുടെ ഒത്തുചേരലും. ഉണ്ണീശോ പള്ളിയിലെയും സെന്റ് പോൾസ് പള്ളിയിലെയും പെരുന്നാൾ തീയതികൾ ചേർക്കും.',
    },
  },
  {
    id: 'mappila', status: 'context',
    title: { en: 'Nercha, Oppana and Mappila songs', ml: 'നേർച്ച, ഒപ്പന, മാപ്പിളപ്പാട്ട്' },
    body: {
      en: 'Uroos and nercha festivals at the makhams, Oppana at weddings, and Mappila songs are part of the shared culture of the area’s Muslim community.',
      ml: 'മഖാമുകളിലെ ഉറൂസും നേർച്ചയും, കല്യാണങ്ങളിലെ ഒപ്പനയും, മാപ്പിളപ്പാട്ടും ഈ നാട്ടിലെ മുസ്‌ലിം സമൂഹത്തിന്റെ പങ്കുവെക്കപ്പെട്ട സംസ്കാരത്തിന്റെ ഭാഗം.',
    },
  },
  {
    id: 'vishu-pooram', status: 'context',
    when: { en: 'Meenam – Medam (≈ Mar – Apr)', ml: 'മീനം – മേടം' },
    title: { en: 'Pooram and Vishu', ml: 'പൂരവും വിഷുവും' },
    body: {
      en: 'In North Malabar, girls make flower offerings to Kamadeva during Pooram, and Pooramkali is danced in temple courtyards. Vishu follows with the kani, kaineettam and firecrackers.',
      ml: 'ഉത്തര മലബാറിൽ പൂരക്കാലത്ത് പെൺകുട്ടികൾ കാമദേവന് പൂവിടുന്നു; ക്ഷേത്രമുറ്റങ്ങളിൽ പൂരക്കളി. തുടർന്ന് കണിയും കൈനീട്ടവും പടക്കവുമായി വിഷു.',
    },
  },
  {
    id: 'food', status: 'context',
    title: { en: 'Food of the land', ml: 'നാടിന്റെ രുചി' },
    body: {
      en: 'Kappa (tapioca) with fish curry, rice and coconut-based curries, pathiri, jackfruit dishes in the monsoon, and Onam and festival sweets. Share your family’s recipes with us.',
      ml: 'കപ്പയും മീൻകറിയും, ചോറും തേങ്ങയരച്ച കറികളും, പത്തിരി, മഴക്കാലത്തെ ചക്ക വിഭവങ്ങൾ, ഉത്സവ മധുരങ്ങൾ. നിങ്ങളുടെ കുടുംബത്തിലെ പാചകക്കുറിപ്പുകൾ പങ്കുവെക്കൂ.',
    },
  },
  {
    id: 'games', status: 'to-verify',
    title: { en: 'Childhood games and village memories', ml: 'കുട്ടിക്കാല കളികളും ഗ്രാമ ഓർമകളും' },
    body: {
      en: 'Kuttiyum kolum, goli, kallukali, swimming in the stream, football in the harvested paddy field. Which games did you play in Edakkom?',
      ml: 'കുട്ടിയും കോലും, ഗോലി, കല്ലുകളി, തോട്ടിലെ നീന്തൽ, കൊയ്ത വയലിലെ ഫുട്ബോൾ. നിങ്ങൾ എടക്കോമിൽ കളിച്ചിരുന്ന കളികൾ ഏതൊക്കെ?',
    },
  },
];

export type Pair = { id: string; title: L; before: string; after: string; beforeLabel: L; afterLabel: L; note: L };

/** Before / after comparisons. Replace with true Edakkom pairs as old photos come in. */
export const PAIRS: Pair[] = [
  {
    id: 'theyyam', before: 'old-theyyam-umbrellas', after: 'theyyam-shrine-day',
    title: { en: 'Theyyam', ml: 'തെയ്യം' },
    beforeLabel: { en: 'c. 1930s', ml: '1930-കൾ' }, afterLabel: { en: 'Today', ml: 'ഇന്ന്' },
    note: { en: 'A century apart, the same devotion — umbrellas, drums and a village gathered close.', ml: 'ഒരു നൂറ്റാണ്ടിന്റെ അകലം, അതേ ഭക്തി — മുത്തുക്കുടകളും ചെണ്ടയും ചുറ്റും കൂടിയ നാടും.' },
  },
  {
    id: 'fields', before: 'old-ploughing-umbrella', after: 'karkidaka-theyyam-paddy',
    title: { en: 'The paddy fields', ml: 'നെൽവയലുകൾ' },
    beforeLabel: { en: 'Ploughing with oxen', ml: 'കാളപൂട്ട്' }, afterLabel: { en: 'Green paddy today', ml: 'ഇന്നത്തെ പച്ചപ്പാടം' },
    note: { en: 'Ox teams gave way to tillers; fewer fields are farmed, but the green of the paddy still marks the season.', ml: 'കാളകൾക്ക് പകരം ടില്ലറുകൾ വന്നു; കൃഷിയിറക്കുന്ന വയലുകൾ കുറഞ്ഞു, എങ്കിലും നെല്ലിന്റെ പച്ച ഇപ്പോഴും കാലത്തെ അടയാളപ്പെടുത്തുന്നു.' },
  },
  {
    id: 'roads', before: 'old-road-roller', after: 'village-bridge-road',
    title: { en: 'The road', ml: 'റോഡ്' },
    beforeLabel: { en: 'Built by hand', ml: 'കൈകൊണ്ട് പണിത വഴി' }, afterLabel: { en: 'Tarred road & bridge', ml: 'ടാർ റോഡും പാലവും' },
    note: { en: 'From mud lanes levelled by hand to tarred roads with bridges and bus routes.', ml: 'കൈകൊണ്ട് നിരപ്പാക്കിയ മൺവഴികളിൽ നിന്ന് പാലങ്ങളും ബസ് റൂട്ടുകളുമുള്ള ടാർ റോഡുകളിലേക്ക്.' },
  },
  {
    id: 'learning', before: 'old-classroom-malayalam', after: 'onam-pookalam-hall',
    title: { en: 'Learning together', ml: 'ഒരുമിച്ചുള്ള പഠനം' },
    beforeLabel: { en: 'Letters on the floor mat', ml: 'പായയിലെ അക്ഷരങ്ങൾ' }, afterLabel: { en: 'Onam at the institute', ml: 'സ്ഥാപനത്തിലെ ഓണം' },
    note: { en: 'Classrooms changed, the language and the festivals stayed.', ml: 'ക്ലാസ്മുറികൾ മാറി; ഭാഷയും ആഘോഷങ്ങളും നിലനിന്നു.' },
  },
];

export type NewsPost = { id: string; date: string; title: L; body: L; tag: L; photo?: string };

export const NEWS: NewsPost[] = [
  {
    id: 'town-directory', date: '2026-11-25', photo: 'health-centre',
    tag: { en: 'New on the site', ml: 'സൈറ്റിൽ പുതിയത്' },
    title: { en: 'Town directory: banks, clinics, shops and libraries of Edakkom', ml: 'ടൗൺ ഡയറക്ടറി: എടക്കോമിലെ ബാങ്കുകൾ, ആശുപത്രികൾ, കടകൾ, വായനശാലകൾ' },
    body: {
      en: 'We mapped what is in Edakkom town today — Federal Bank, KSFE, Souhruda Medical Centre, supermarkets, the Public Library and Mahatma Vayanashala, 24 places of worship and more. Spot something missing? Tell us.',
      ml: 'ഇന്നത്തെ എടക്കോം ടൗണിൽ എന്തൊക്കെയുണ്ടെന്ന് രേഖപ്പെടുത്തി — ഫെഡറൽ ബാങ്ക്, കെ.എസ്.എഫ്.ഇ., സൗഹൃദ മെഡിക്കൽ സെന്റർ, സൂപ്പർമാർക്കറ്റുകൾ, പബ്ലിക് ലൈബ്രറി, മഹാത്മ വായനശാല, 24 ആരാധനാലയങ്ങൾ തുടങ്ങിയവ. എന്തെങ്കിലും വിട്ടുപോയോ? അറിയിക്കൂ.',
    },
  },
  {
    id: 'launch', date: '2026-11-25', photo: 'onam-pookalam-group',
    tag: { en: 'Announcement', ml: 'അറിയിപ്പ്' },
    title: { en: 'edakkom.com is live — help build our village archive', ml: 'edakkom.com ആരംഭിച്ചു — നമ്മുടെ ഗ്രാമത്തിന്റെ ആർക്കൈവ് ഒരുമിച്ച് പണിയാം' },
    body: {
      en: 'The digital home of Edakkom is open. Every section — history, places, people and photographs — grows with your contributions. Start by sharing one old photograph.',
      ml: 'എടക്കോമിന്റെ ഡിജിറ്റൽ വീട് തുറന്നു. ചരിത്രം, സ്ഥലങ്ങൾ, ജനങ്ങൾ, ഫോട്ടോകൾ — ഓരോ വിഭാഗവും നിങ്ങളുടെ സംഭാവനകളിലൂടെ വളരും. ഒരു പഴയ ഫോട്ടോ പങ്കുവെച്ച് തുടങ്ങൂ.',
    },
  },
  {
    id: 'old-photos', date: '2026-11-25', photo: 'old-family-portrait',
    tag: { en: 'Call for photos', ml: 'ഫോട്ടോകൾ ക്ഷണിക്കുന്നു' },
    title: { en: 'Old photographs wanted: homes, schools, weddings, festivals', ml: 'പഴയ ഫോട്ടോകൾ വേണം: വീടുകൾ, സ്കൂളുകൾ, കല്യാണങ്ങൾ, ഉത്സവങ്ങൾ' },
    body: {
      en: 'Photos from before 2000 are the most precious. We credit every contributor, and family photos are published only with your permission.',
      ml: '2000-ത്തിനു മുമ്പുള്ള ഫോട്ടോകളാണ് ഏറ്റവും വിലപ്പെട്ടത്. ഓരോ സംഭാവകന്റെയും പേര് ചേർക്കും; കുടുംബഫോട്ടോകൾ നിങ്ങളുടെ അനുമതിയോടെ മാത്രം പ്രസിദ്ധീകരിക്കും.',
    },
  },
  {
    id: 'elders', date: '2026-11-25', photo: 'old-vellur-vayanasala',
    tag: { en: 'Oral history', ml: 'വാമൊഴി ചരിത്രം' },
    title: { en: 'Record your elders: the Edakkom memory project', ml: 'മുതിർന്നവരുടെ ഓർമകൾ രേഖപ്പെടുത്താം' },
    body: {
      en: 'Sit with a grandparent and ask: What did Edakkom look like when you were young? Where was the first shop, the first bus, the first school? Record it on your phone and send it to us.',
      ml: 'മുത്തശ്ശനോടോ മുത്തശ്ശിയോടോ ചോദിക്കൂ: ചെറുപ്പത്തിൽ എടക്കോം എങ്ങനെയായിരുന്നു? ആദ്യത്തെ കട, ആദ്യത്തെ ബസ്, ആദ്യത്തെ സ്കൂൾ എവിടെയായിരുന്നു? ഫോണിൽ റെക്കോർഡ് ചെയ്ത് ഞങ്ങൾക്ക് അയക്കൂ.',
    },
  },
];

export type Person = { id: string; name: L; role: L; story: L; photo?: string };

/** Community profiles are added only with the person's (or family's) consent. */
export const PEOPLE: Person[] = [];

export const PEOPLE_GROUPS: { title: L; body: L }[] = [
  { title: { en: 'Elders who remember old Edakkom', ml: 'പഴയ എടക്കോം ഓർക്കുന്ന മുതിർന്നവർ' }, body: { en: 'Their memories are our oldest records.', ml: 'അവരുടെ ഓർമകളാണ് നമ്മുടെ ഏറ്റവും പഴയ രേഖകൾ.' } },
  { title: { en: 'Teachers and headmasters', ml: 'അധ്യാപകരും പ്രധാനാധ്യാപകരും' }, body: { en: 'Generations learned their first letters from them.', ml: 'തലമുറകൾ ആദ്യാക്ഷരം കുറിച്ചത് ഇവരിൽ നിന്ന്.' } },
  { title: { en: 'Farmers and traditional workers', ml: 'കർഷകരും പരമ്പരാഗത തൊഴിലാളികളും' }, body: { en: 'The hands that shaped the land.', ml: 'ഈ മണ്ണിനെ രൂപപ്പെടുത്തിയ കൈകൾ.' } },
  { title: { en: 'Theyyam artists and drummers', ml: 'തെയ്യം കലാകാരന്മാരും വാദ്യക്കാരും' }, body: { en: 'Keepers of a living tradition.', ml: 'ജീവിക്കുന്ന പാരമ്പര്യത്തിന്റെ കാവൽക്കാർ.' } },
  { title: { en: 'Community builders', ml: 'സമൂഹ നിർമ്മാതാക്കൾ' }, body: { en: 'Founders of clubs, libraries, co-operatives and parishes.', ml: 'ക്ലബ്ബുകളുടെയും വായനശാലകളുടെയും സഹകരണ സംഘങ്ങളുടെയും ഇടവകകളുടെയും സ്ഥാപകർ.' } },
  { title: { en: 'Sportspeople and artists', ml: 'കായികതാരങ്ങളും കലാകാരന്മാരും' }, body: { en: 'Pride of the village.', ml: 'നാടിന്റെ അഭിമാനം.' } },
  { title: { en: 'Entrepreneurs', ml: 'സംരംഭകർ' }, body: { en: 'Shops, businesses and new ideas.', ml: 'കടകൾ, സ്ഥാപനങ്ങൾ, പുതിയ ആശയങ്ങൾ.' } },
  { title: { en: 'Edakkom abroad', ml: 'പ്രവാസി എടക്കോം' }, body: { en: 'Families in the Gulf, other states and overseas.', ml: 'ഗൾഫിലും മറ്റ് സംസ്ഥാനങ്ങളിലും വിദേശത്തുമുള്ള കുടുംബങ്ങൾ.' } },
];
