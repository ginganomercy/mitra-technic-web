export type Product = {
  name: string;
  image: string;
};

export type ProductsData = {
  [categorySlug: string]: Product[];
};

function formatName(filename: string): string {
  return filename
    .replace('.jpg', '')
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

const rawData = {
  'alat-listrik': ['BOX-MCB.jpg', 'MCB.jpg', 'SAKLAR-ENGKEL-TEMPEL.jpg', 'SAKLAR-POWER.jpg', 'SOLASI-LISTRIK-1.jpg', 'STAKER-ARDE-BULAT.jpg', 'STAKER-GEPENG.jpg', 'STOP-KONTAK-TANAM.jpg', 'TERMINAL-STOP-KONTAK.jpg'],
  'lampu': ['BOHLAM-JANTUNG.jpg', 'DOWNLED-PLAFON.jpg', 'FITTING-LAMPU-GANTUNG.jpg', 'LAMPU-HIAS-TUMBLR.jpg', 'LAMPU-LED-BULB.jpg', 'LAMPU-LED-SPECTRUM.jpg', 'LAMPU-SELANG-LED-STRIP.jpg', 'LAMPU-SOROT-LED.jpg', 'LAMPU-TL-D.jpg'],
  'kabel': ['KABEL-AC-BUNTUNG.jpg', 'KABEL-AC-DELAPAN.jpg', 'KABEL-AC-POWER.jpg', 'KABEL-ANTENA-TV.jpg', 'KABEL-AUDIO-RCA.jpg', 'KABEL-BODY-NYAF.jpg', 'KABEL-HDMI.jpg', 'KABEL-HEAD-STEREO.jpg', 'KABEL-LISTRIK-NYA.jpg', 'KABEL-MICROPHONE.jpg'],
  'sparepart-mesin': ['DINAMO-SPIN.jpg', 'DINAMO-WASH.jpg', 'GEARBOX-MESIN-CUCI.jpg', 'KNOP-MESIN-CUCI.jpg', 'MOTOR-DRAIN-MESIN-CUCI.jpg', 'PULSATOR.jpg', 'SEAL-BUANG.jpg', 'SEAL-SPIN.jpg', 'TIMER-MESIN-CUCI.jpg', 'WATER-INLET.jpg', 'WATER-LEVEL.jpg'],
  'sparepart-kulkas': ['DEFROST-BIMETAL.jpg', 'FAN-KULKAS.jpg', 'FILTER-ISI.jpg', 'OVERLOAD-KULKAS.jpg', 'RELAY-KULKAS.jpg', 'THERMOSTAT-KULKAS.jpg', 'TIMER-KULKAS.jpg'],
  'sparepart-ac': ['DUCT-TAPE-AC.jpg', 'FREON-KALENG.jpg', 'FREON-KENT.jpg', 'KAPASITOR-AC.jpg', 'MANIFOLD-AC.jpg', 'METIL-CAIRAN.jpg', 'MODUL-AC.jpg', 'MOTOR-SWING-AC.jpg', 'NEPEL-AC.jpg', 'OLI-KOMPRESOR-1.jpg', 'OLI-KOMPRESOR.jpg', 'PENTIL-PENGISIAN-FREON.jpg', 'PIPA-AC.jpg', 'SELANG-MANIFOLD.jpg'],
  'sparepart-rumah-tangga': ['BOSS-KIPAS-2.jpg', 'BURNER-KOMPOR-2.jpg', 'DINAMO-BLENDER-2.jpg', 'DINAMO-KIPAS-2.jpg', 'DINAMO-SINKRON-KIPAS-2.jpg', 'ELEMEN-DISPENSER-2.jpg', 'ELEMEN-MAGICOM-2.jpg', 'GIGI-BLENDER-2.jpg', 'KAPASITOR-KIPAS-2.jpg', 'KONEKTOR-BLENDER-2.jpg', 'PEMANTIK-KOMPOR-1.jpg', 'SAKLAR-KIPAS-1.jpg'],
  'aksesoris-teknik': ['ATRAKTOR.jpg', 'BORAKS-CAIR.jpg', 'HEATSINK.jpg', 'KAWAT-LAS-PERAK.jpg', 'MULTITESTER-ANALOG.jpg', 'MULTITESTER-DIGITAL.jpg', 'OBENG.jpg', 'SOLDER.jpg', 'TANG-AMPER-1.jpg', 'TANG-AMPER.jpg', 'TANG.jpg'],
  'aksesoris-audio': ['GACUN-TV-2.jpg', 'KIPAS-DC.jpg', 'KIT.jpg', 'LIST-ALUMUNIUM-HARDCASE.jpg', 'MICROPHONE.jpg', 'MIXER-AUDIO.jpg', 'MP3-BLUETOOTH.jpg', 'SIKU-POJOK-HARDCASE.jpg', 'SOCKET-AUDIO.jpg', 'SPEAKER.jpg', 'TWEETER.jpg']
};

export const products: ProductsData = Object.entries(rawData).reduce((acc, [category, files]) => {
  acc[category] = files.map(file => ({
    name: formatName(file),
    image: file
  }));
  return acc;
}, {} as ProductsData);
