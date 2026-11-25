import type { L } from '../lib/i18n';
import type { Status } from './site';

export type Place = {
  id: string;
  name: L;
  kind: L;
  distance?: string; // approx. distance from Edakkom, from public listings
  note?: L;
  photo?: string;
  status: Status;
  group?: 'church' | 'temple' | 'mosque';
};

const maps = (q: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
export const mapsLink = maps;

/** Centre of Edakkom town (from the KSFE branch map pin). */
export const CENTRE = { lat: 12.1463, lng: 75.4023 };

// ——— Religious places (Google Maps listings + Malayalam Wikipedia) ———
export const RELIGIOUS: Place[] = [
  // Churches
  {
    id: 'infant-jesus', group: 'church', photo: 'church-facade-statue', status: 'to-verify',
    name: { en: 'Infant Jesus Church, Edakkom', ml: 'ഉണ്ണീശോ പള്ളി, എടക്കോം' },
    kind: { en: 'Syro-Malabar Catholic parish · Archdiocese of Tellicherry', ml: 'സീറോ മലബാർ കത്തോലിക്കാ ഇടവക · തലശ്ശേരി അതിരൂപത' },
    note: {
      en: 'The best-known landmark on the Methuramba – Chapparappadava – Kuttoor Road through Edakkom. Listed as established in 1962 (to confirm with parish records); church directories also list the Bishop Valloppilly Memorial Orphanage (1982) with this parish.',
      ml: 'എടക്കോമിലൂടെ കടന്നുപോകുന്ന മേത്തുരമ്പ – ചപ്പാരപ്പടവ് – കുറ്റൂർ റോഡിലെ ഏറ്റവും പ്രശസ്തമായ അടയാളം. 1962-ൽ സ്ഥാപിതമായതായി ലിസ്റ്റിങ് (ഇടവക രേഖകളിൽ നിന്ന് സ്ഥിരീകരിക്കണം); ബിഷപ്പ് വള്ളോപ്പിള്ളി മെമ്മോറിയൽ അനാഥാലയവും (1982) ഈ ഇടവകയോടൊപ്പം ലിസ്റ്റ് ചെയ്തിട്ടുണ്ട്.',
    },
  },
  {
    id: 'st-paul', group: 'church', photo: 'church-white-domes', status: 'directory',
    name: { en: 'St. Paul’s Malankara Catholic Church, Edakkom', ml: 'സെന്റ് പോൾസ് മലങ്കര കത്തോലിക്കാ പള്ളി, എടക്കോം' },
    kind: { en: 'Malankara Catholic church', ml: 'മലങ്കര കത്തോലിക്കാ പള്ളി' },
    note: {
      en: 'Listed as “St. Paul’s Church, Idakkom” among the churches of Chapparappadava panchayat. Year of establishment to be added.',
      ml: 'ചപ്പാരപ്പടവ് പഞ്ചായത്തിലെ പള്ളികളിൽ “സെന്റ് പോൾസ് ചർച്ച്, ഇടക്കോം” എന്ന് ലിസ്റ്റ് ചെയ്തിരിക്കുന്നു. സ്ഥാപിത വർഷം ചേർക്കാനുണ്ട്.',
    },
  },
  { id: 'st-mary-kappela', group: 'church', status: 'directory', name: { en: 'St. Mary’s Chapel (Kappela), Thazhe Edakkom', ml: 'സെന്റ് മേരീസ് കപ്പേള, താഴെ എടക്കോം' }, kind: { en: 'Catholic chapel', ml: 'കത്തോലിക്കാ കപ്പേള' } },
  { id: 'st-thomas-mangara', group: 'church', status: 'directory', name: { en: 'St. Thomas Church, Mangara', ml: 'സെന്റ് തോമസ് പള്ളി, മംഗര' }, kind: { en: 'Catholic church', ml: 'കത്തോലിക്കാ പള്ളി' } },
  { id: 'st-jude-madamthattu', group: 'church', status: 'directory', name: { en: 'St. Jude’s Church, Madamthattu', ml: 'സെന്റ് ജൂഡ്സ് പള്ളി, മടംതട്ട്' }, kind: { en: 'Church', ml: 'പള്ളി' } },
  { id: 'st-mary-vimalassery', group: 'church', status: 'directory', name: { en: 'St. Mary’s Church, Vimalassery', ml: 'സെന്റ് മേരീസ് പള്ളി, വിമലശ്ശേരി' }, kind: { en: 'Catholic church', ml: 'കത്തോലിക്കാ പള്ളി' } },

  // Temples & kavus
  { id: 'puthiya-bhagavathi', group: 'temple', distance: '0.7 km', status: 'directory', name: { en: 'Puthiya Bhagavathi Temple', ml: 'പുതിയ ഭഗവതി ക്ഷേത്രം' }, kind: { en: 'Temple · Theyyam shrine', ml: 'ക്ഷേത്രം · തെയ്യക്കാവ്' } },
  { id: 'pottan-daivam', group: 'temple', distance: '2.1 km', status: 'directory', name: { en: 'Thirumkulam Pottan Daivam Devasthanam', ml: 'തിരുംകുളം പൊട്ടൻ ദൈവം ദേവസ്ഥാനം' }, kind: { en: 'Devasthanam · Pottan Theyyam', ml: 'ദേവസ്ഥാനം · പൊട്ടൻ തെയ്യം' } },
  { id: 'parakkode-muthappan', group: 'temple', distance: '3.1 km', status: 'directory', name: { en: 'Parakkode Sree Muthappan Temple', ml: 'പാറക്കോട് ശ്രീ മുത്തപ്പൻ ക്ഷേത്രം' }, kind: { en: 'Muthappan madappura', ml: 'മുത്തപ്പൻ മടപ്പുര' } },
  { id: 'muchilottu', group: 'temple', distance: '3.3 km', status: 'directory', name: { en: 'Muchilottu Bhagavathi Temple', ml: 'മുച്ചിലോട്ട് ഭഗവതി ക്ഷേത്രം' }, kind: { en: 'Temple · Theyyam shrine', ml: 'ക്ഷേത്രം · തെയ്യക്കാവ്' } },
  { id: 'thalavil-siva', group: 'temple', status: 'directory', name: { en: 'Thalavil Sree Trippannikkunnu Siva Temple', ml: 'തലവിൽ ശ്രീ തൃപ്പന്നിക്കുന്ന് ശിവക്ഷേത്രം' }, kind: { en: 'Siva temple · Thalavil', ml: 'ശിവക്ഷേത്രം · തലവിൽ' } },
  { id: 'thalavil-devasthanam', group: 'temple', status: 'directory', name: { en: 'Thalavil Sree Karinchamundi – Someswari Devasthanam', ml: 'തലവിൽ ശ്രീ കരിഞ്ചാമുണ്ഡി – സോമേശ്വരി ദേവസ്ഥാനം' }, kind: { en: 'Family (tharavad) temple', ml: 'തറവാട് ക്ഷേത്രം' } },
  { id: 'someswari-kooveri', group: 'temple', status: 'directory', name: { en: 'Sree Someswari Temple, Kooveri', ml: 'ശ്രീ സോമേശ്വരി ക്ഷേത്രം, കൂവേരി' }, kind: { en: 'Temple', ml: 'ക്ഷേത്രം' } },
  { id: 'vrindavanam', group: 'temple', status: 'directory', name: { en: 'Vrindavanam Sree Krishna Temple', ml: 'വൃന്ദാവനം ശ്രീകൃഷ്ണ ക്ഷേത്രം' }, kind: { en: 'Krishna temple', ml: 'ശ്രീകൃഷ്ണ ക്ഷേത്രം' } },
  { id: 'vettakkorumakan', group: 'temple', status: 'directory', name: { en: 'Vettakkorumakan Temple', ml: 'വേട്ടക്കൊരുമകൻ ക്ഷേത്രം' }, kind: { en: 'Temple', ml: 'ക്ഷേത്രം' } },
  { id: 'karippal-someswari', group: 'temple', status: 'directory', name: { en: 'Karippal Someswari Temple', ml: 'കരിപ്പാൽ സോമേശ്വരി ക്ഷേത്രം' }, kind: { en: 'Temple · Karippal', ml: 'ക്ഷേത്രം · കരിപ്പാൽ' } },

  // Mosques
  { id: 'ayisha-masjid', group: 'mosque', status: 'directory', name: { en: 'Ayisha Masjid', ml: 'ആയിഷ മസ്ജിദ്' }, kind: { en: 'Mosque', ml: 'മസ്ജിദ്' } },
  { id: 'rifaiyya-masjid', group: 'mosque', distance: '2.5 km', status: 'directory', name: { en: 'Perumalabad Rifa-iyya Juma Masjid', ml: 'പെരുമാളാബാദ് രിഫാഇയ്യ ജുമാ മസ്ജിദ്' }, kind: { en: 'Juma masjid', ml: 'ജുമാ മസ്ജിദ്' } },
  { id: 'makham', group: 'mosque', distance: '2.7 km', status: 'directory', name: { en: 'Chapparappadava Makham Shareef', ml: 'ചപ്പാരപ്പടവ് മഖാം ശരീഫ്' }, kind: { en: 'Makham (shrine)', ml: 'മഖാം' } },
  { id: 'chapparapadavu-juma', group: 'mosque', status: 'directory', name: { en: 'Chapparappadava Juma Masjid', ml: 'ചപ്പാരപ്പടവ് ജുമാ മസ്ജിദ്' }, kind: { en: 'Juma masjid', ml: 'ജുമാ മസ്ജിദ്' } },
  { id: 'peruvana-masjid', group: 'mosque', distance: '3.0 km', status: 'directory', name: { en: 'Peruvana Hasaniyya Juma Masjid', ml: 'പെരുവണ ഹസനിയ്യ ജുമാ മസ്ജിദ്' }, kind: { en: 'Juma masjid', ml: 'ജുമാ മസ്ജിദ്' } },
  { id: 'mangara-badar', group: 'mosque', status: 'directory', name: { en: 'Mangara Badar Juma Masjid', ml: 'മംഗര ബദർ ജുമാ മസ്ജിദ്' }, kind: { en: 'Juma masjid · Chapparappadava – Therthally Road', ml: 'ജുമാ മസ്ജിദ് · ചപ്പാരപ്പടവ് – തേർത്തല്ലി റോഡ്' } },
  { id: 'madamthattu-masjid', group: 'mosque', status: 'directory', name: { en: 'Madamthattu Masjid', ml: 'മടംതട്ട് മസ്ജിദ്' }, kind: { en: 'Mosque', ml: 'മസ്ജിദ്' } },
  { id: 'kannankai-badar', group: 'mosque', status: 'directory', name: { en: 'Kannankai Badar Juma Masjid', ml: 'കണ്ണങ്കൈ ബദർ ജുമാ മസ്ജിദ്' }, kind: { en: 'Juma masjid · Eriam Road', ml: 'ജുമാ മസ്ജിദ് · എരിയം റോഡ്' } },
];

export const RELIGIOUS_GROUPS: { id: 'church' | 'temple' | 'mosque'; label: L }[] = [
  { id: 'church', label: { en: 'Churches', ml: 'ക്രൈസ്തവ ദേവാലയങ്ങൾ' } },
  { id: 'temple', label: { en: 'Temples & kavus', ml: 'ക്ഷേത്രങ്ങളും കാവുകളും' } },
  { id: 'mosque', label: { en: 'Mosques & makhams', ml: 'മസ്ജിദുകളും മഖാമുകളും' } },
];

// ——— Education ———
export const SCHOOLS: Place[] = [
  {
    id: 'christ-nagar-lp', distance: '0.6 km', status: 'directory', photo: 'old-classroom-malayalam',
    name: { en: 'Christ Nagar LP School', ml: 'ക്രൈസ്റ്റ് നഗർ എൽ.പി. സ്കൂൾ' },
    kind: { en: 'Lower Primary · the local polling station', ml: 'ലോവർ പ്രൈമറി · പ്രാദേശിക പോളിങ് സ്റ്റേഷൻ' },
  },
  {
    id: 'sv-up-muthathy', status: 'directory', photo: 'old-school-assembly',
    name: { en: 'SV UP School, Muthathy', ml: 'എസ്.വി. യു.പി. സ്കൂൾ, മുത്തത്തി' },
    kind: { en: 'Upper Primary · on the Methuramba – Chapparappadava – Kuttoor Road', ml: 'അപ്പർ പ്രൈമറി · മേത്തുരമ്പ – ചപ്പാരപ്പടവ് – കുറ്റൂർ റോഡ്' },
  },
  { id: 'kanaramvayal-anganwadi', status: 'directory', name: { en: 'Kanaramvayal Anganwadi', ml: 'കണാരംവയൽ അങ്കണവാടി' }, kind: { en: 'Pre-school', ml: 'പ്രീ-സ്കൂൾ' } },
  { id: 'misbahul-uloom', distance: '3.0 km', status: 'directory', name: { en: 'Misbahul Uloom Madrasa', ml: 'മിസ്ബാഹുൽ ഉലൂം മദ്രസ' }, kind: { en: 'Madrasa', ml: 'മദ്രസ' } },
  { id: 'irfaniyya', distance: '3.2 km', status: 'directory', name: { en: 'Irfaniyya Arabic College', ml: 'ഇർഫാനിയ്യ അറബിക് കോളേജ്' }, kind: { en: 'College', ml: 'കോളേജ്' } },
  { id: 'chapparapadavu-lp', distance: '3.3 km', status: 'directory', name: { en: 'Chapparappadava LP School', ml: 'ചപ്പാരപ്പടവ് എൽ.പി. സ്കൂൾ' }, kind: { en: 'Lower Primary', ml: 'ലോവർ പ്രൈമറി' } },
  { id: 'chapparapadavu-hss', distance: '3.5 km', status: 'directory', name: { en: 'Chapparappadava Higher Secondary School', ml: 'ചപ്പാരപ്പടവ് ഹയർ സെക്കൻഡറി സ്കൂൾ' }, kind: { en: 'Higher Secondary · near the panchayat office', ml: 'ഹയർ സെക്കൻഡറി · പഞ്ചായത്ത് ഓഫീസിനടുത്ത്' } },
  { id: 'kottakkanam-aup', distance: '3.8 km', status: 'directory', name: { en: 'Kottakkanam AUP School', ml: 'കോട്ടക്കാനം എ.യു.പി. സ്കൂൾ' }, kind: { en: 'Aided Upper Primary', ml: 'എയ്ഡഡ് അപ്പർ പ്രൈമറി' } },
  { id: 'karippal-svup', status: 'directory', name: { en: 'Karippal SV UP School', ml: 'കരിപ്പാൽ എസ്.വി. യു.പി. സ്കൂൾ' }, kind: { en: 'Upper Primary · Karippal', ml: 'അപ്പർ പ്രൈമറി · കരിപ്പാൽ' } },
  { id: 'bvjm-hss', status: 'directory', name: { en: 'BVJM HSS Perumpadavu', ml: 'ബി.വി.ജെ.എം. എച്ച്.എസ്.എസ്., പെരുമ്പടവ്' }, kind: { en: 'Higher Secondary · Perumpadavu', ml: 'ഹയർ സെക്കൻഡറി · പെരുമ്പടവ്' } },
  { id: 'oxford-english', status: 'directory', name: { en: 'Oxford English School', ml: 'ഓക്സ്ഫോർഡ് ഇംഗ്ലീഷ് സ്കൂൾ' }, kind: { en: 'CBSE school', ml: 'സി.ബി.എസ്.ഇ. സ്കൂൾ' } },
];

/** Libraries & reading rooms — the vayanasala culture of North Malabar. */
export const LIBRARIES: Place[] = [
  { id: 'edakkom-public-library', status: 'directory', name: { en: 'Public Library, Edakkom', ml: 'പബ്ലിക് ലൈബ്രറി, എടക്കോം' }, kind: { en: 'Library · Edakkom town', ml: 'ലൈബ്രറി · എടക്കോം ടൗൺ' } },
  { id: 'mahatma-vayanashala', status: 'directory', name: { en: 'Mahatma Vayanashala, Edakkom', ml: 'മഹാത്മ വായനശാല, എടക്കോം' }, kind: { en: 'Reading room · Edakkom town', ml: 'വായനശാല · എടക്കോം ടൗൺ' } },
  { id: 'kanaramvayal-vanitha', status: 'directory', name: { en: 'Kanaramvayal Vanitha Library', ml: 'കണാരംവയൽ വനിതാ ലൈബ്രറി' }, kind: { en: 'Women’s library', ml: 'വനിതാ ലൈബ്രറി' } },
  { id: 'thalavil-deshiya', status: 'directory', name: { en: 'Thalavil Deshiya Vayanashala', ml: 'തലവിൽ ദേശീയ വായനശാല' }, kind: { en: 'Reading room · Thalavil', ml: 'വായനശാല · തലവിൽ' } },
  { id: 'koovery-vayanashala', status: 'directory', name: { en: 'Koovery Vayanashala', ml: 'കൂവേരി വായനശാല' }, kind: { en: 'Reading room · Poovam–Kooveri–Chapparappadava Road', ml: 'വായനശാല · പൂവം–കൂവേരി–ചപ്പാരപ്പടവ് റോഡ്' } },
  { id: 'kilikki-library', status: 'directory', name: { en: 'Kilikki Public Library', ml: 'കിളിക്കി പബ്ലിക് ലൈബ്രറി' }, kind: { en: 'Library · Thadikkadavu – Manikkal – Therthally Road', ml: 'ലൈബ്രറി · തടിക്കടവ് – മണിക്കൽ – തേർത്തല്ലി റോഡ്' } },
];

/** What every school profile should eventually hold. */
export const SCHOOL_PROFILE_FIELDS: L[] = [
  { en: 'Year established', ml: 'സ്ഥാപിത വർഷം' },
  { en: 'Old and current photographs', ml: 'പഴയതും പുതിയതുമായ ഫോട്ടോകൾ' },
  { en: 'Management (Government / Aided / Unaided)', ml: 'മാനേജ്മെന്റ് (സർക്കാർ / എയ്ഡഡ് / അൺഎയ്ഡഡ്)' },
  { en: 'Classes and courses', ml: 'ക്ലാസുകളും കോഴ്സുകളും' },
  { en: 'Former headmasters and teachers', ml: 'മുൻ പ്രധാനാധ്യാപകരും അധ്യാപകരും' },
  { en: 'Achievements', ml: 'നേട്ടങ്ങൾ' },
  { en: 'Alumni memories', ml: 'പൂർവവിദ്യാർത്ഥികളുടെ ഓർമകൾ' },
];

// ——— Tourism ———
export const TOURISM: Place[] = [
  {
    id: 'theyyam-season', status: 'context', photo: 'theyyam-night-fire',
    name: { en: 'Theyyam season in the local kavus', ml: 'നാട്ടിലെ കാവുകളിലെ തെയ്യക്കാലം' },
    kind: { en: 'Culture · roughly October to May', ml: 'സംസ്കാരം · ഏകദേശം ഒക്ടോബർ മുതൽ മേയ് വരെ' },
    note: { en: 'The best reason to visit North Malabar. Ask locally for kaliyattam dates at nearby temples and kavus.', ml: 'ഉത്തര മലബാർ സന്ദർശിക്കാനുള്ള ഏറ്റവും നല്ല കാരണം. അടുത്തുള്ള കാവുകളിലെ കളിയാട്ട തീയതികൾ നാട്ടുകാരോട് ചോദിച്ചറിയാം.' },
  },
  {
    id: 'panthrandam-chaal', status: 'directory', photo: 'nature-forest-stream',
    name: { en: 'Panthrandam Chaal bird sanctuary', ml: 'പന്ത്രണ്ടാം ചാൽ പക്ഷിസങ്കേതം' },
    kind: { en: 'Nature · Manikkal, on the Thadikkadavu river (Kuppam river)', ml: 'പ്രകൃതി · മണിക്കൽ, തടിക്കടവ് പുഴ (കുപ്പം പുഴ)' },
    note: { en: 'A biodiversity project of Chapparappadava panchayat, started decades ago; recent reports say it needs care and attention.', ml: 'പതിറ്റാണ്ടുകൾക്ക് മുമ്പ് തുടങ്ങിയ ചപ്പാരപ്പടവ് പഞ്ചായത്തിന്റെ ജൈവവൈവിധ്യ പദ്ധതി; ശ്രദ്ധയും സംരക്ഷണവും ആവശ്യമാണെന്ന് സമീപകാല റിപ്പോർട്ടുകൾ.' },
  },
  { id: 'kooveri-bridge', status: 'directory', name: { en: 'Kooveri Kadavu suspension bridge', ml: 'കൂവേരിക്കടവ് തൂക്കുപാലം' }, kind: { en: 'Landmark · Chapparappadava panchayat', ml: 'ലാൻഡ്മാർക്ക് · ചപ്പാരപ്പടവ് പഞ്ചായത്ത്' } },
  { id: 'moovandikkunnu', status: 'to-verify', name: { en: 'Moovandikkunnu waterfalls', ml: 'മൂവാണ്ടിക്കുന്ന് വെള്ളച്ചാട്ടം' }, kind: { en: 'Nature · shown on the map near Edakkom — best after the monsoon', ml: 'പ്രകൃതി · മാപ്പിൽ എടക്കോമിനടുത്ത് — മഴക്കാലത്തിനു ശേഷം' } },
  { id: 'vannathi-puzha', distance: '≈ 4.5 km', status: 'directory', name: { en: 'Vannathi Puzha', ml: 'വണ്ണാത്തി പുഴ' }, kind: { en: 'River', ml: 'പുഴ' } },
  { id: 'thalavil-hill', status: 'directory', name: { en: 'Thalavil and the hills of the panchayat', ml: 'തലവിലും പഞ്ചായത്തിലെ കുന്നുകളും' }, kind: { en: 'Thalavil · Nadukani · Theyyathamkallu · Paloli hill', ml: 'തലവിൽ · നാടുകാണി · തെയ്യത്താംകല്ല് · പാലോലിമല' } },
  { id: 'kuppam-river', distance: '≈ 12 km', status: 'directory', name: { en: 'Kuppam River', ml: 'കുപ്പം പുഴ' }, kind: { en: 'River · flows through the middle of the panchayat', ml: 'പുഴ · പഞ്ചായത്തിന്റെ നടുവിലൂടെ ഒഴുകുന്നു' } },
  { id: 'palakkayam-thattu', status: 'context', name: { en: 'Palakkayam Thattu', ml: 'പാലക്കയം തട്ട്' }, kind: { en: 'Hilltop viewpoint · Taliparamba area', ml: 'മലമുകളിലെ വ്യൂപോയിന്റ് · തളിപ്പറമ്പ് മേഖല' } },
  { id: 'paithalmala', status: 'context', name: { en: 'Paithalmala', ml: 'പൈതൽമല' }, kind: { en: 'Hill station · trekking', ml: 'ഹിൽ സ്റ്റേഷൻ · ട്രെക്കിങ്' } },
  { id: 'parassinikkadavu', status: 'context', name: { en: 'Parassinikkadavu Sree Muthappan Temple', ml: 'പറശ്ശിനിക്കടവ് ശ്രീ മുത്തപ്പൻ ക്ഷേത്രം' }, kind: { en: 'Temple · daily Muthappan Theyyam', ml: 'ക്ഷേത്രം · ദിവസേന മുത്തപ്പൻ തെയ്യം' } },
  { id: 'taliparamba', distance: '≈ 14 km', status: 'directory', name: { en: 'Taliparamba town', ml: 'തളിപ്പറമ്പ് പട്ടണം' }, kind: { en: 'Taluk town · Rajarajeshwara Temple', ml: 'താലൂക്ക് പട്ടണം · രാജരാജേശ്വര ക്ഷേത്രം' } },
  { id: 'muzhappilangad', distance: '≈ 42 km', status: 'directory', name: { en: 'Muzhappilangad Drive-in Beach', ml: 'മുഴപ്പിലങ്ങാട് ഡ്രൈവ്-ഇൻ ബീച്ച്' }, kind: { en: 'Beach', ml: 'കടൽത്തീരം' } },
];

// ——— Geography ———
export const NEARBY: { name: L; distance: string; kind: L }[] = [
  { name: { en: 'Chapparappadava', ml: 'ചപ്പാരപ്പടവ്' }, distance: '2–3.5 km', kind: { en: 'Panchayat headquarters', ml: 'പഞ്ചായത്ത് ആസ്ഥാനം' } },
  { name: { en: 'Kooveri', ml: 'കൂവേരി' }, distance: '≈ 3–4 km', kind: { en: 'Revenue village · village office', ml: 'റവന്യൂ വില്ലേജ് · വില്ലേജ് ഓഫീസ്' } },
  { name: { en: 'Mathamangalam', ml: 'മാതമംഗലം' }, distance: '≈ 6.5 km', kind: { en: 'Town', ml: 'പട്ടണം' } },
  { name: { en: 'Eramam–Kuttoor', ml: 'എരമം–കുറ്റൂർ' }, distance: '≈ 9 km', kind: { en: 'Neighbouring panchayat', ml: 'അയൽ പഞ്ചായത്ത്' } },
  { name: { en: 'Alakode', ml: 'ആലക്കോട്' }, distance: '≈ 10 km', kind: { en: 'Hill town', ml: 'മലയോര പട്ടണം' } },
  { name: { en: 'Kadannappalli–Panappuzha', ml: 'കടന്നപ്പള്ളി–പാണപ്പുഴ' }, distance: '≈ 13 km', kind: { en: 'Neighbouring panchayat', ml: 'അയൽ പഞ്ചായത്ത്' } },
  { name: { en: 'Taliparamba', ml: 'തളിപ്പറമ്പ്' }, distance: '≈ 14 km', kind: { en: 'Taluk town', ml: 'താലൂക്ക് പട്ടണം' } },
  { name: { en: 'Payyanur', ml: 'പയ്യന്നൂർ' }, distance: '≈ 17–24 km', kind: { en: 'Town · railway station', ml: 'പട്ടണം · റെയിൽവേ സ്റ്റേഷൻ' } },
  { name: { en: 'Kannur', ml: 'കണ്ണൂർ' }, distance: '≈ 35 km', kind: { en: 'District headquarters', ml: 'ജില്ലാ ആസ്ഥാനം' } },
];

/** Neighbourhoods and localities in and around Edakkom (from maps and panchayat ward names). */
export const LOCALITIES: L[] = [
  { en: 'Thazhe Edakkom', ml: 'താഴെ എടക്കോം' },
  { en: 'Eriam', ml: 'എരിയം' },
  { en: 'Kanaramvayal', ml: 'കണാരംവയൽ' },
  { en: 'Methuramba', ml: 'മേത്തുരമ്പ' },
  { en: 'Muthathy', ml: 'മുത്തത്തി' },
  { en: 'Mangara', ml: 'മംഗര' },
  { en: 'Madamthattu', ml: 'മടംതട്ട്' },
  { en: 'Peruvana', ml: 'പെരുവണ' },
  { en: 'Perumalabad', ml: 'പെരുമാളാബാദ്' },
  { en: 'Vimalassery', ml: 'വിമലശ്ശേരി' },
  { en: 'Thalavil', ml: 'തലവിൽ' },
  { en: 'Kottakkanam', ml: 'കോട്ടക്കാനം' },
  { en: 'Karippal', ml: 'കരിപ്പാൽ' },
  { en: 'Perumpadavu', ml: 'പെരുമ്പടവ്' },
  { en: 'Padappengad', ml: 'പടപ്പേങ്ങാട്' },
  { en: 'Thadikkadavu', ml: 'തടിക്കടവ്' },
];

export const ROADS: L[] = [
  { en: 'Methuramba – Chapparappadava – Kuttoor Road (main road)', ml: 'മേത്തുരമ്പ – ചപ്പാരപ്പടവ് – കുറ്റൂർ റോഡ് (പ്രധാന റോഡ്)' },
  { en: 'Edakkom – Thazhe Edakkom Road', ml: 'എടക്കോം – താഴെ എടക്കോം റോഡ്' },
  { en: 'Eriam Road', ml: 'എരിയം റോഡ്' },
  { en: 'Chapparappadava – Mangara – Chanakundu Road', ml: 'ചപ്പാരപ്പടവ് – മംഗര – ചാണക്കുണ്ട് റോഡ്' },
  { en: 'Chapparappadava – Therthally Road', ml: 'ചപ്പാരപ്പടവ് – തേർത്തല്ലി റോഡ്' },
  { en: 'Poovam – Kooveri – Chapparappadava Road', ml: 'പൂവം – കൂവേരി – ചപ്പാരപ്പടവ് റോഡ്' },
];

export const WATER: { name: L; distance: string }[] = [
  { name: { en: 'Vannathi Puzha', ml: 'വണ്ണാത്തി പുഴ' }, distance: '≈ 4.5 km' },
  { name: { en: 'Kariyangode river', ml: 'കാര്യങ്കോട് പുഴ' }, distance: '≈ 11.7 km' },
  { name: { en: 'Kuppam River (Thadikkadavu river)', ml: 'കുപ്പം പുഴ (തടിക്കടവ് പുഴ)' }, distance: '≈ 12 km' },
];

export const HILLS: L[] = [
  { en: 'Thalavil', ml: 'തലവിൽ' },
  { en: 'Nadukani', ml: 'നാടുകാണി' },
  { en: 'Theyyathamkallu', ml: 'തെയ്യത്താംകല്ല്' },
  { en: 'Paloli hill', ml: 'പാലോലിമല' },
];

/** 2011 Census figures for the surrounding areas (Edakkom ward itself is not a census unit). */
export const CENSUS = [
  {
    area: { en: 'Chapparappadava Grama Panchayat', ml: 'ചപ്പാരപ്പടവ് ഗ്രാമപഞ്ചായത്ത്' },
    population: '31,622', literacy: '92.8%', areaKm: '69.99 km²',
    note: { en: 'Revenue villages Kooveri, Thimiri and Vellad · 452 people per km² · about 70% farmers (panchayat profile)', ml: 'റവന്യൂ വില്ലേജുകൾ കൂവേരി, തിമിരി, വെള്ളാട് · ച.കി.മീ.ക്ക് 452 പേർ · ഏകദേശം 70% കർഷകർ' },
  },
  {
    area: { en: 'Eramam village (Eramam-Kuttoor panchayat)', ml: 'എരമം വില്ലേജ് (എരമം-കുറ്റൂർ പഞ്ചായത്ത്)' },
    population: '9,448', literacy: '—', areaKm: '—',
    note: { en: 'Eramam-Kuttoor panchayat covers Eramam, Kuttoor and Vellora villages (Payyannur block)', ml: 'എരമം-കുറ്റൂർ പഞ്ചായത്തിൽ എരമം, കുറ്റൂർ, വെള്ളോറ വില്ലേജുകൾ (പയ്യന്നൂർ ബ്ലോക്ക്)' },
  },
];

// ——— Directory ———
export type DirectoryEntry = { name: L; group: L; distance?: string; status: Status; note?: L; phone?: string };

const G = {
  post: { en: 'Post', ml: 'തപാൽ' },
  bank: { en: 'Banks & finance', ml: 'ബാങ്കുകൾ, ധനകാര്യം' },
  health: { en: 'Health', ml: 'ആരോഗ്യം' },
  shops: { en: 'Shops & supermarkets', ml: 'കടകളും സൂപ്പർമാർക്കറ്റുകളും' },
  food: { en: 'Food', ml: 'ഭക്ഷണം' },
  library: { en: 'Libraries & reading rooms', ml: 'ലൈബ്രറികളും വായനശാലകളും' },
  gov: { en: 'Government offices', ml: 'സർക്കാർ ഓഫീസുകൾ' },
  transport: { en: 'Transport', ml: 'ഗതാഗതം' },
};

export const DIRECTORY: DirectoryEntry[] = [
  { group: G.post, status: 'directory', name: { en: 'Edakkom Branch Post Office — PIN 670581', ml: 'എടക്കോം ബ്രാഞ്ച് പോസ്റ്റ് ഓഫീസ് — 670581' }, note: { en: 'On the Edakkom – Thazhe Edakkom Road', ml: 'എടക്കോം – താഴെ എടക്കോം റോഡിൽ' } },
  { group: G.post, status: 'directory', name: { en: 'Chepparapadava Sub Post Office', ml: 'ചപ്പാരപ്പടവ് സബ് പോസ്റ്റ് ഓഫീസ്' } },

  { group: G.bank, status: 'directory', name: { en: 'Federal Bank — Eriam branch', ml: 'ഫെഡറൽ ബാങ്ക് — എരിയം ശാഖ' }, note: { en: 'Ground floor, Vadayattuthara Building', ml: 'ഗ്രൗണ്ട് ഫ്ലോർ, വടയാട്ടുതറ ബിൽഡിങ്' }, phone: '1800 425 1199' },
  { group: G.bank, status: 'directory', name: { en: 'Federal Bank ATM, Edakkom', ml: 'ഫെഡറൽ ബാങ്ക് എ.ടി.എം., എടക്കോം' }, note: { en: 'Edakkom – Thazhe Edakkom Road, near the Post Office · 24 hours', ml: 'എടക്കോം – താഴെ എടക്കോം റോഡ്, പോസ്റ്റ് ഓഫീസിനടുത്ത് · 24 മണിക്കൂർ' } },
  { group: G.bank, status: 'directory', name: { en: 'KSFE — Edakom branch', ml: 'കെ.എസ്.എഫ്.ഇ. — എടക്കോം ശാഖ' }, note: { en: '1st floor, Kumbalamthanam Building, Edakkom P.O.', ml: 'ഒന്നാം നില, കുമ്പളംതാനം ബിൽഡിങ്, എടക്കോം പി.ഒ.' }, phone: '0460 227 0009' },
  { group: G.bank, status: 'directory', name: { en: 'State Bank ATM, Chapparappadava', ml: 'സ്റ്റേറ്റ് ബാങ്ക് എ.ടി.എം., ചപ്പാരപ്പടവ്' }, distance: '3.1 km' },
  { group: G.bank, status: 'directory', name: { en: 'Kerala Gramin Bank ATM, Chapparappadava', ml: 'കേരള ഗ്രാമീൺ ബാങ്ക് എ.ടി.എം., ചപ്പാരപ്പടവ്' }, distance: '3.2 km' },
  { group: G.bank, status: 'directory', name: { en: 'Kooveri Service Co-operative Bank', ml: 'കൂവേരി സർവീസ് സഹകരണ ബാങ്ക്' } },

  { group: G.health, status: 'directory', name: { en: 'Souhruda Medical Centre, Edakkom', ml: 'സൗഹൃദ മെഡിക്കൽ സെന്റർ, എടക്കോം' }, note: { en: 'Open 24 hours', ml: '24 മണിക്കൂർ' } },
  { group: G.health, status: 'directory', name: { en: 'Tooth Care Dental Speciality Clinic, Edakkom', ml: 'ടൂത്ത് കെയർ ഡെന്റൽ ക്ലിനിക്, എടക്കോം' }, note: { en: 'Eriam Road', ml: 'എരിയം റോഡ്' } },
  { group: G.health, status: 'directory', name: { en: 'Ayush PHC (Kadannappalli–Panappuzha)', ml: 'ആയുഷ് പി.എച്ച്.സി. (കടന്നപ്പള്ളി–പാണപ്പുഴ)' }, distance: '0.4 km' },
  { group: G.health, status: 'directory', name: { en: 'Primary Health Centre, Chapparappadava', ml: 'പ്രാഥമികാരോഗ്യ കേന്ദ്രം, ചപ്പാരപ്പടവ്' }, distance: '2.8 km', phone: '0460 227 1101' },
  { group: G.health, status: 'directory', name: { en: 'Government Hospital, Chapparappadava', ml: 'സർക്കാർ ആശുപത്രി, ചപ്പാരപ്പടവ്' }, distance: '2.8 km' },
  { group: G.health, status: 'directory', name: { en: 'M.A.H Hospital & Dental Clinic', ml: 'എം.എ.എച്ച്. ആശുപത്രി & ഡെന്റൽ ക്ലിനിക്' }, note: { en: 'Chapparappadava – Mangara – Chanakundu Road · 24 hours', ml: 'ചപ്പാരപ്പടവ് – മംഗര – ചാണക്കുണ്ട് റോഡ് · 24 മണിക്കൂർ' } },
  { group: G.health, status: 'directory', name: { en: 'Community Health Centre, Oduvallithattu', ml: 'സാമൂഹികാരോഗ്യ കേന്ദ്രം, ഓടുവള്ളിത്തട്ട്' }, note: { en: 'Open 24 hours', ml: '24 മണിക്കൂർ' } },
  { group: G.health, status: 'directory', name: { en: 'Government Ayurvedic Hospital', ml: 'സർക്കാർ ആയുർവേദ ആശുപത്രി' } },

  { group: G.shops, status: 'directory', name: { en: 'Ethakkattu Store', ml: 'ഏതക്കാട്ട് സ്റ്റോർ' }, note: { en: 'Supermarket', ml: 'സൂപ്പർമാർക്കറ്റ്' } },
  { group: G.shops, status: 'directory', name: { en: 'Kappadan’s Aura Supermarket', ml: 'കപ്പാടൻസ് ഓറ സൂപ്പർമാർക്കറ്റ്' }, note: { en: 'Supermarket · home delivery', ml: 'സൂപ്പർമാർക്കറ്റ് · ഹോം ഡെലിവറി' } },
  { group: G.shops, status: 'directory', name: { en: 'MVS Complex, Edakkom', ml: 'എം.വി.എസ്. കോംപ്ലക്സ്, എടക്കോം' }, note: { en: 'Hardware & building materials · Eriam Road, Kanaramvayal', ml: 'ഹാർഡ്‌വെയർ, നിർമ്മാണ സാമഗ്രികൾ · എരിയം റോഡ്, കണാരംവയൽ' } },
  { group: G.shops, status: 'directory', name: { en: 'Prijith Traders', ml: 'പ്രിജിത്ത് ട്രേഡേഴ്സ്' }, note: { en: 'Home goods · Eriam Road', ml: 'ഗൃഹോപകരണങ്ങൾ · എരിയം റോഡ്' } },
  { group: G.shops, status: 'directory', name: { en: 'John’s Furniture', ml: 'ജോൺസ് ഫർണിച്ചർ' }, note: { en: 'Furniture', ml: 'ഫർണിച്ചർ' } },

  { group: G.food, status: 'directory', name: { en: 'Food Makkani', ml: 'ഫുഡ് മക്കാനി' }, note: { en: 'Restaurant · Edakkom town · dine-in & takeaway', ml: 'റെസ്റ്റോറന്റ് · എടക്കോം ടൗൺ' } },
  { group: G.food, status: 'directory', name: { en: 'Hotel Perumal', ml: 'ഹോട്ടൽ പെരുമാൾ' }, note: { en: 'Restaurant', ml: 'റെസ്റ്റോറന്റ്' } },
  { group: G.food, status: 'directory', name: { en: 'Craveco', ml: 'ക്രേവ്കോ' }, note: { en: 'Bakery & cakes', ml: 'ബേക്കറി, കേക്കുകൾ' } },

  ...LIBRARIES.map((l) => ({ group: G.library, status: l.status, name: l.name, note: l.kind })),

  { group: G.gov, status: 'directory', name: { en: 'Chapparappadava Grama Panchayat Office', ml: 'ചപ്പാരപ്പടവ് ഗ്രാമപഞ്ചായത്ത് ഓഫീസ്' }, distance: '3.5 km', phone: '0460 227 0221' },
  { group: G.gov, status: 'directory', name: { en: 'Village Office, Kooveri', ml: 'വില്ലേജ് ഓഫീസ്, കൂവേരി' }, distance: '3.1 km' },

  ...ROADS.slice(0, 1).map((r) => ({ group: G.transport, status: 'directory' as Status, name: r, note: { en: 'Buses through Edakkom town', ml: 'എടക്കോം ടൗണിലൂടെ ബസുകൾ' } })),
  { group: G.transport, status: 'directory', name: { en: 'Bus stops on the Poovam – Kooveri – Chapparappadava Road', ml: 'പൂവം – കൂവേരി – ചപ്പാരപ്പടവ് റോഡിലെ ബസ് സ്റ്റോപ്പുകൾ' }, distance: '4–6 km' },
  { group: G.transport, status: 'directory', name: { en: 'Payyanur Railway Station', ml: 'പയ്യന്നൂർ റെയിൽവേ സ്റ്റേഷൻ' }, distance: '≈ 17 km' },
  { group: G.transport, status: 'verified', name: { en: 'Kannur International Airport', ml: 'കണ്ണൂർ അന്താരാഷ്ട്ര വിമാനത്താവളം' } },
];

export const EMERGENCY: { name: L; number: string }[] = [
  { name: { en: 'All emergencies', ml: 'എല്ലാ അടിയന്തര സാഹചര്യങ്ങളും' }, number: '112' },
  { name: { en: 'Ambulance', ml: 'ആംബുലൻസ്' }, number: '108' },
  { name: { en: 'Fire & Rescue', ml: 'അഗ്നിരക്ഷാ സേന' }, number: '101' },
  { name: { en: 'Police', ml: 'പോലീസ്' }, number: '100' },
  { name: { en: 'Women helpline', ml: 'വനിതാ ഹെൽപ്‌ലൈൻ' }, number: '181' },
  { name: { en: 'Child helpline', ml: 'ചൈൽഡ് ഹെൽപ്‌ലൈൻ' }, number: '1098' },
];
