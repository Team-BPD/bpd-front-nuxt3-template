import { Buffer } from 'buffer';
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
  console.log(ciphertext);
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
