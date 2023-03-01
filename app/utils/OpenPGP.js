import { createMessage, encrypt, readKey } from "openpgp";
import { CIRCLE_AUTH } from "@env";
import { decode, encode } from "base-64";
import "react-native-get-random-values";
import uuidAPIKey from "uuid-apikey";
import { v4 as uuidv4 } from "uuid";
if (!global.btoa) {
  global.btoa = encode;
}
if (!global.atob) {
  global.atob = decode;
}
const fetch = require("node-fetch");

const getPCIPublicKey = async () => {
  const url = "https://api-sandbox.circle.com/v1/encryption/public";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      authorization: CIRCLE_AUTH,
    },
  };

  return fetch(url, options)
    .then((res) => res.json())
    .then((json) => json)
    .catch((err) => console.error("error:" + err));
};

/**
 * Encrypt card data function
 */
const encryptCard = async (dataToEncrypt) => {
  const pciEncryptionKey = await getPCIPublicKey();
  const decodedPublicKey = await readKey({
    armoredKey: atob(pciEncryptionKey),
  });
  const message = await createMessage({ text: JSON.stringify(dataToEncrypt) });
  return encrypt({
    message,
    encryptionKeys: decodedPublicKey,
  }).then((ciphertext) => {
    return {
      encryptedMessage: btoa(ciphertext),
      keyId,
    };
  });
};

const storeCard = async () => {
  const url = "https://api-sandbox.circle.com/v1/cards";
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      authorization: CIRCLE_AUTH,
    },
    body: JSON.stringify({
      idempotencyKey: uuidv4(),
      keyId: "key1",
      encryptedData:
        "LS0tLS1CRUdJTiBQR1AgTUVTU0FHRS0tLS0tCgp3Y0JNQTBYV1NGbEZScFZoQVFmL2J2bVVkNG5LZ3dkbExKVTlEdEFEK0p5c0VOTUxuOUlRUWVGWnZJUWEKMGgzQklpRFNRU0RMZmI0NEs2SXZMeTZRbm54bmFLcWx0MjNUSmtPd2hGWFIrdnNSMU5IbnVHN0lUNWJECmZzeVdleXlNK1JLNUVHV0thZ3NmQ2tWamh2NGloY29xUnlTTGtJbWVmRzVaR0tMRkJTTTBsTFNPWFRURQpiMy91eU1zMVJNb3ZiclNvbXkxa3BybzUveWxabWVtV2ZsU1pWQlhNcTc1dGc1YjVSRVIraXM5ckc0cS8KMXl0M0FOYXA3UDhKekFhZVlyTnVNZGhGZFhvK0NFMC9CQnN3L0NIZXdhTDk4SmRVUEV0NjA5WFRHTG9kCjZtamY0YUtMQ01xd0RFMkNVb3dPdE8vMzVIMitnVDZKS3FoMmtjQUQyaXFlb3luNWcralRHaFNyd3NKWgpIdEphQWVZZXpGQUVOaFo3Q01IOGNsdnhZVWNORnJuNXlMRXVGTkwwZkczZy95S3loclhxQ0o3UFo5b3UKMFVxQjkzQURKWDlJZjRBeVQ2bU9MZm9wUytpT2lLall4bG1NLzhlVWc3OGp1OVJ5T1BXelhyTzdLWTNHClFSWm8KPXc1dEYKLS0tLS1FTkQgUEdQIE1FU1NBR0UtLS0tLQo",
      billingDetails: {
        name: "Satoshi Nakamoto",
        city: "Boston",
        country: "US",
        line1: "100 Money Street",
        line2: "Suite 1",
        district: "MA",
        postalCode: "01234",
      },
      expMonth: 1,
      expYear: 2020,
      metadata: {
        email: "satoshi@circle.com",
        phoneNumber: "+14155555555",
        sessionId: "DE6FA86F60BB47B379307F851E238617",
        ipAddress: "244.28.239.130",
      },
    }),
  };

  return fetch(url, options)
    .then((res) => res.json())
    .then((json) => {
      return json;
    })
    .catch((err) => console.error("error:" + err));
};

const createPayment = async (amount) => {
  const url = "https://api-sandbox.circle.com/v1/payments";
  const { uuid, apiKey } = uuidAPIKey.create();

  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      authorization: CIRCLE_AUTH,
    },
    body: JSON.stringify({
      idempotencyKey: uuid,
      keyId: apiKey,
      metadata: {
        email: "satoshi@circle.com",
        phoneNumber: "+14155555555",
        sessionId: "DE6FA86F60BB47B379307F851E238617",
        ipAddress: "244.28.239.130",
      },
      amount: { amount: amount, currency: "USD" },
      autoCapture: true,
      verification: "none",
      verificationSuccessUrl:
        "https://www.example.com/3ds/verificationsuccessful",
      verificationFailureUrl: "https://www.example.com/3ds/verificationfailure",
      source: { id: "b8627ae8-732b-4d25-b947-1df8f4007a29", type: "card" },
      description: "Payment",
      encryptedData: "UHVibGljS2V5QmFzZTY0RW5jb2RlZA==",
      channel: "ba943ff1-ca16-49b2-ba55-1057e70ca5c7",
    }),
  };

  return fetch(url, options)
    .then((res) => res.json())
    .then((json) => {
      console.log("json: ", json);
      return json;
    })
    .catch((err) => console.error("error:" + err));
};

const createCircleWallet = async () => {
  const { uuid, apiKey } = uuidAPIKey.create();

  const url = "https://api-sandbox.circle.com/v1/wallets";
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      authorization: CIRCLE_AUTH,
    },
    body: JSON.stringify({
      idempotencyKey: uuid,
      description: `User Wallet-${apiKey}`,
    }),
  };

  return fetch(url, options)
    .then((res) => res.json())
    .then((json) => {
      return json;
    })
    .catch((err) => console.error("error:" + err));
};

const createFlowWallet = async (walletAddress) => {
  const { uuid } = uuidAPIKey.create();
  const url = `https://api-sandbox.circle.com/v1/wallets/${walletAddress}/addresses`;
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      authorization: CIRCLE_AUTH,
    },
    body: JSON.stringify({
      idempotencyKey: uuid,
      chain: "FLOW",
      currency: "USD",
    }),
  };

  return fetch(url, options)
    .then((res) => res.json())
    .then((json) => {
      return json;
    })
    .catch((err) => console.error("error:" + err));
};
export { storeCard, createPayment, createCircleWallet, createFlowWallet };
