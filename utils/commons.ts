import { Buffer } from 'buffer';

/**
 * 텍스트 암호화
 * @param msg 암호화할 텍스트
 * @return ciphertext: 암호화 메세지,<br> iv: 추가된 salt key(Random) Base64, <br>
 * originiv: 추가된 salt key(Random) 원데이터,<br> key: 암호화 키(Random)
 */
export const encAES256 = async (msg: any) => {
  const cryptoStore = useCrtStore();
  const encoded = new TextEncoder();
  const encodedText = encoded.encode(msg);

  if (cryptoStore.getIv === '') {
    cryptoStore.setIv(
      Buffer.from(crypto.getRandomValues(new Uint8Array(12))).toString(
        'base64',
      ),
    );
  }
  if (cryptoStore.getKey === '') {
    cryptoStore.setKey(
      Buffer.from(crypto.getRandomValues(new Uint8Array(32))).toString(
        'base64',
      ),
    );
  }

  const secretKey = await crypto.subtle.importKey(
    'raw',
    Buffer.from(cryptoStore.getKey, 'base64'),
    {
      name: 'AES-GCM',
      length: 256,
    },
    true,
    ['encrypt', 'decrypt'],
  );

  const ciphertext = await crypto.subtle.encrypt(
    {
      name: 'AES-GCM',
      iv: Buffer.from(cryptoStore.getIv, 'base64'),
    },
    secretKey,
    encodedText,
  );
  return {
    ciphertext: Buffer.from(ciphertext).toString('base64'),
    iv: Buffer.from(cryptoStore.getIv).toString('base64'),
    originiv: cryptoStore.getIv,
    key: cryptoStore.getKey,
  };
};

export const decAES256 = async (cipherText: string) => {
  const { getIv, getKey } = useCrtStore();

  const secretKey = await crypto.subtle.importKey(
    'raw',
    Buffer.from(getKey, 'base64'),
    {
      name: 'AES-GCM',
      length: 256,
    },
    true,
    ['encrypt', 'decrypt'],
  );
  const decText = await crypto.subtle.decrypt(
    {
      name: 'AES-GCM',
      iv: Buffer.from(getIv, 'base64'),
    },
    secretKey,
    Buffer.from(cipherText, 'base64'),
  );
  return new TextDecoder().decode(decText);
};

export const formatPercent = (number: number, locale: string) => {
  const options: Intl.NumberFormatOptions = {
    style: 'percent',
  };
  return number.toLocaleString(locale, options);
};

export const formatTemperature = (num: number, locale: string) => {
  let unit: string;
  switch (locale) {
    case 'en-US':
      unit = 'fahrenheit';
      break;
    default:
      unit = 'celsius';
      break;
  }
  const options: Intl.NumberFormatOptions = {
    style: 'unit',
    unit,
  };
  return num.toLocaleString(locale, options);
};
