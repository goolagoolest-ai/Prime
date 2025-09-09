/* Data store for PrimeWave Exchange */
const WALLETS = ["Skrill", "PayPal", "Neteller", "Revolut", "Wise", "Bitcoin", "USDT", "BTC", "Bank Transfer", "Mobile Money"];

const COUNTRIES = [
  {
    "country": "Algeria",
    "currency": null,
    "continent": "Africa",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Mobile Money",
        "details": "Provider / Number / Name (update if applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Angola",
    "currency": null,
    "continent": "Africa",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Mobile Money",
        "details": "Provider / Number / Name (update if applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Benin",
    "currency": null,
    "continent": "Africa",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Mobile Money",
        "details": "Provider / Number / Name (update if applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Botswana",
    "currency": null,
    "continent": "Africa",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Mobile Money",
        "details": "Provider / Number / Name (update if applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Burkina Faso",
    "currency": null,
    "continent": "Africa",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Mobile Money",
        "details": "Provider / Number / Name (update if applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Burundi",
    "currency": null,
    "continent": "Africa",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Mobile Money",
        "details": "Provider / Number / Name (update if applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Cabo Verde",
    "currency": null,
    "continent": "Africa",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Mobile Money",
        "details": "Provider / Number / Name (update if applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Cameroon",
    "currency": null,
    "continent": "Africa",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Mobile Money",
        "details": "Provider / Number / Name (update if applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Central African Republic",
    "currency": null,
    "continent": "Africa",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Mobile Money",
        "details": "Provider / Number / Name (update if applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Chad",
    "currency": null,
    "continent": "Africa",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Mobile Money",
        "details": "Provider / Number / Name (update if applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Comoros",
    "currency": null,
    "continent": "Africa",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Mobile Money",
        "details": "Provider / Number / Name (update if applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Congo",
    "currency": null,
    "continent": "Africa",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Mobile Money",
        "details": "Provider / Number / Name (update if applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Democratic Republic of the Congo",
    "currency": null,
    "continent": "Africa",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Mobile Money",
        "details": "Provider / Number / Name (update if applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Djibouti",
    "currency": null,
    "continent": "Africa",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Mobile Money",
        "details": "Provider / Number / Name (update if applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Egypt",
    "currency": null,
    "continent": "Africa",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Mobile Money",
        "details": "Provider / Number / Name (update if applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Equatorial Guinea",
    "currency": null,
    "continent": "Africa",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Mobile Money",
        "details": "Provider / Number / Name (update if applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Eritrea",
    "currency": null,
    "continent": "Africa",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Mobile Money",
        "details": "Provider / Number / Name (update if applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Eswatini",
    "currency": null,
    "continent": "Africa",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Mobile Money",
        "details": "Provider / Number / Name (update if applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Ethiopia",
    "currency": null,
    "continent": "Africa",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Mobile Money",
        "details": "Provider / Number / Name (update if applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Gabon",
    "currency": null,
    "continent": "Africa",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Mobile Money",
        "details": "Provider / Number / Name (update if applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Gambia",
    "currency": null,
    "continent": "Africa",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Mobile Money",
        "details": "Provider / Number / Name (update if applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Ghana",
    "currency": null,
    "continent": "Africa",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Mobile Money",
        "details": "Provider / Number / Name (update if applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Guinea",
    "currency": null,
    "continent": "Africa",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Mobile Money",
        "details": "Provider / Number / Name (update if applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Guinea-Bissau",
    "currency": null,
    "continent": "Africa",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Mobile Money",
        "details": "Provider / Number / Name (update if applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Kenya",
    "currency": null,
    "continent": "Africa",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Mobile Money",
        "details": "Provider / Number / Name (update if applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Lesotho",
    "currency": null,
    "continent": "Africa",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Mobile Money",
        "details": "Provider / Number / Name (update if applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Liberia",
    "currency": null,
    "continent": "Africa",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Mobile Money",
        "details": "Provider / Number / Name (update if applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Libya",
    "currency": null,
    "continent": "Africa",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Mobile Money",
        "details": "Provider / Number / Name (update if applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Madagascar",
    "currency": null,
    "continent": "Africa",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Mobile Money",
        "details": "Provider / Number / Name (update if applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Malawi",
    "currency": null,
    "continent": "Africa",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Mobile Money",
        "details": "Provider / Number / Name (update if applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Mali",
    "currency": null,
    "continent": "Africa",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Mobile Money",
        "details": "Provider / Number / Name (update if applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Mauritania",
    "currency": null,
    "continent": "Africa",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Mobile Money",
        "details": "Provider / Number / Name (update if applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Mauritius",
    "currency": null,
    "continent": "Africa",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Mobile Money",
        "details": "Provider / Number / Name (update if applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Morocco",
    "currency": null,
    "continent": "Africa",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Mobile Money",
        "details": "Provider / Number / Name (update if applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Mozambique",
    "currency": null,
    "continent": "Africa",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Mobile Money",
        "details": "Provider / Number / Name (update if applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Namibia",
    "currency": null,
    "continent": "Africa",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Mobile Money",
        "details": "Provider / Number / Name (update if applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Niger",
    "currency": null,
    "continent": "Africa",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Mobile Money",
        "details": "Provider / Number / Name (update if applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Nigeria",
    "currency": null,
    "continent": "Africa",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Mobile Money",
        "details": "Provider / Number / Name (update if applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Rwanda",
    "currency": null,
    "continent": "Africa",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Mobile Money",
        "details": "Provider / Number / Name (update if applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Sao Tome and Principe",
    "currency": null,
    "continent": "Africa",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Mobile Money",
        "details": "Provider / Number / Name (update if applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Senegal",
    "currency": null,
    "continent": "Africa",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Mobile Money",
        "details": "Provider / Number / Name (update if applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Seychelles",
    "currency": null,
    "continent": "Africa",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Mobile Money",
        "details": "Provider / Number / Name (update if applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Sierra Leone",
    "currency": null,
    "continent": "Africa",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Mobile Money",
        "details": "Provider / Number / Name (update if applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Somalia",
    "currency": null,
    "continent": "Africa",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Mobile Money",
        "details": "Provider / Number / Name (update if applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "South Africa",
    "currency": null,
    "continent": "Africa",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Mobile Money",
        "details": "Provider / Number / Name (update if applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "South Sudan",
    "currency": null,
    "continent": "Africa",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Mobile Money",
        "details": "Provider / Number / Name (update if applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Sudan",
    "currency": null,
    "continent": "Africa",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Mobile Money",
        "details": "Provider / Number / Name (update if applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Tanzania",
    "currency": null,
    "continent": "Africa",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Mobile Money",
        "details": "Provider / Number / Name (update if applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Togo",
    "currency": null,
    "continent": "Africa",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Mobile Money",
        "details": "Provider / Number / Name (update if applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Tunisia",
    "currency": null,
    "continent": "Africa",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Mobile Money",
        "details": "Provider / Number / Name (update if applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Uganda",
    "currency": null,
    "continent": "Africa",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Mobile Money",
        "details": "Provider / Number / Name (update if applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Zambia",
    "currency": null,
    "continent": "Africa",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Mobile Money",
        "details": "Provider / Number / Name (update if applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Zimbabwe",
    "currency": null,
    "continent": "Africa",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Mobile Money",
        "details": "Provider / Number / Name (update if applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "United States",
    "currency": "USD",
    "continent": "North America",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Wallet",
        "details": "PayPal / Skrill / Neteller / Revolut / Wise (as applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Canada",
    "currency": "CAD",
    "continent": "North America",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Wallet",
        "details": "PayPal / Skrill / Neteller / Revolut / Wise (as applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Mexico",
    "currency": "MXN",
    "continent": "North America",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Wallet",
        "details": "PayPal / Skrill / Neteller / Revolut / Wise (as applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Brazil",
    "currency": "BRL",
    "continent": "South America",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Wallet",
        "details": "PayPal / Skrill / Neteller / Revolut / Wise (as applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Argentina",
    "currency": "ARS",
    "continent": "South America",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Wallet",
        "details": "PayPal / Skrill / Neteller / Revolut / Wise (as applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Chile",
    "currency": "CLP",
    "continent": "South America",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Wallet",
        "details": "PayPal / Skrill / Neteller / Revolut / Wise (as applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Colombia",
    "currency": "COP",
    "continent": "South America",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Wallet",
        "details": "PayPal / Skrill / Neteller / Revolut / Wise (as applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Peru",
    "currency": "PEN",
    "continent": "South America",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Wallet",
        "details": "PayPal / Skrill / Neteller / Revolut / Wise (as applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "United Kingdom",
    "currency": "GBP",
    "continent": "Europe",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Wallet",
        "details": "PayPal / Skrill / Neteller / Revolut / Wise (as applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Germany",
    "currency": "EUR",
    "continent": "Europe",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Wallet",
        "details": "PayPal / Skrill / Neteller / Revolut / Wise (as applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "France",
    "currency": "EUR",
    "continent": "Europe",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Wallet",
        "details": "PayPal / Skrill / Neteller / Revolut / Wise (as applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Italy",
    "currency": "EUR",
    "continent": "Europe",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Wallet",
        "details": "PayPal / Skrill / Neteller / Revolut / Wise (as applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Spain",
    "currency": "EUR",
    "continent": "Europe",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Wallet",
        "details": "PayPal / Skrill / Neteller / Revolut / Wise (as applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Netherlands",
    "currency": "EUR",
    "continent": "Europe",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Wallet",
        "details": "PayPal / Skrill / Neteller / Revolut / Wise (as applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Sweden",
    "currency": "SEK",
    "continent": "Europe",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Wallet",
        "details": "PayPal / Skrill / Neteller / Revolut / Wise (as applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Norway",
    "currency": "NOK",
    "continent": "Europe",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Wallet",
        "details": "PayPal / Skrill / Neteller / Revolut / Wise (as applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Denmark",
    "currency": "DKK",
    "continent": "Europe",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Wallet",
        "details": "PayPal / Skrill / Neteller / Revolut / Wise (as applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Poland",
    "currency": "PLN",
    "continent": "Europe",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Wallet",
        "details": "PayPal / Skrill / Neteller / Revolut / Wise (as applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Switzerland",
    "currency": "CHF",
    "continent": "Europe",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Wallet",
        "details": "PayPal / Skrill / Neteller / Revolut / Wise (as applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Turkey",
    "currency": "TRY",
    "continent": "Europe",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Wallet",
        "details": "PayPal / Skrill / Neteller / Revolut / Wise (as applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "United Arab Emirates",
    "currency": "AED",
    "continent": "Asia",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Wallet",
        "details": "PayPal / Skrill / Neteller / Revolut / Wise (as applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Saudi Arabia",
    "currency": "SAR",
    "continent": "Asia",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Wallet",
        "details": "PayPal / Skrill / Neteller / Revolut / Wise (as applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Qatar",
    "currency": "QAR",
    "continent": "Asia",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Wallet",
        "details": "PayPal / Skrill / Neteller / Revolut / Wise (as applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Kuwait",
    "currency": "KWD",
    "continent": "Asia",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Wallet",
        "details": "PayPal / Skrill / Neteller / Revolut / Wise (as applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Bahrain",
    "currency": "BHD",
    "continent": "Asia",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Wallet",
        "details": "PayPal / Skrill / Neteller / Revolut / Wise (as applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Oman",
    "currency": "OMR",
    "continent": "Asia",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Wallet",
        "details": "PayPal / Skrill / Neteller / Revolut / Wise (as applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "India",
    "currency": "INR",
    "continent": "Asia",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Wallet",
        "details": "PayPal / Skrill / Neteller / Revolut / Wise (as applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Pakistan",
    "currency": "PKR",
    "continent": "Asia",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Wallet",
        "details": "PayPal / Skrill / Neteller / Revolut / Wise (as applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Bangladesh",
    "currency": "BDT",
    "continent": "Asia",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Wallet",
        "details": "PayPal / Skrill / Neteller / Revolut / Wise (as applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Sri Lanka",
    "currency": "LKR",
    "continent": "Asia",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Wallet",
        "details": "PayPal / Skrill / Neteller / Revolut / Wise (as applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Nepal",
    "currency": "NPR",
    "continent": "Asia",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Wallet",
        "details": "PayPal / Skrill / Neteller / Revolut / Wise (as applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "China",
    "currency": "CNY",
    "continent": "Asia",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Wallet",
        "details": "PayPal / Skrill / Neteller / Revolut / Wise (as applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Hong Kong",
    "currency": "HKD",
    "continent": "Asia",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Wallet",
        "details": "PayPal / Skrill / Neteller / Revolut / Wise (as applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Singapore",
    "currency": "SGD",
    "continent": "Asia",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Wallet",
        "details": "PayPal / Skrill / Neteller / Revolut / Wise (as applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Malaysia",
    "currency": "MYR",
    "continent": "Asia",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Wallet",
        "details": "PayPal / Skrill / Neteller / Revolut / Wise (as applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Indonesia",
    "currency": "IDR",
    "continent": "Asia",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Wallet",
        "details": "PayPal / Skrill / Neteller / Revolut / Wise (as applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Philippines",
    "currency": "PHP",
    "continent": "Asia",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Wallet",
        "details": "PayPal / Skrill / Neteller / Revolut / Wise (as applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Japan",
    "currency": "JPY",
    "continent": "Asia",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Wallet",
        "details": "PayPal / Skrill / Neteller / Revolut / Wise (as applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "South Korea",
    "currency": "KRW",
    "continent": "Asia",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Wallet",
        "details": "PayPal / Skrill / Neteller / Revolut / Wise (as applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Vietnam",
    "currency": "VND",
    "continent": "Asia",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Wallet",
        "details": "PayPal / Skrill / Neteller / Revolut / Wise (as applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "Australia",
    "currency": "AUD",
    "continent": "Oceania",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Wallet",
        "details": "PayPal / Skrill / Neteller / Revolut / Wise (as applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  },
  {
    "country": "New Zealand",
    "currency": "NZD",
    "continent": "Oceania",
    "methods": [
      {
        "type": "Bank Transfer",
        "details": "Bank Name / Account Name / IBAN or Account No (update)"
      },
      {
        "type": "Wallet",
        "details": "PayPal / Skrill / Neteller / Revolut / Wise (as applicable)"
      }
    ],
    "min": 10,
    "max": 10000
  }
];

const RATES = [
  {
    "src": "Revolut",
    "dst": "TZS",
    "rate": 2590,
    "min": 10,
    "max": 5000,
    "updated": "2025-09-05",
    "continent": "Africa"
  },
  {
    "src": "Skrill",
    "dst": "BDT",
    "rate": 117,
    "min": 10,
    "max": 3000,
    "updated": "2025-09-05",
    "continent": "Asia"
  },
  {
    "src": "PayPal",
    "dst": "UGX",
    "rate": 3650,
    "min": 20,
    "max": 4000,
    "updated": "2025-09-06",
    "continent": "Africa"
  },
  {
    "src": "USDT",
    "dst": "PKR",
    "rate": 279,
    "min": 20,
    "max": 10000,
    "updated": "2025-09-06",
    "continent": "Asia"
  },
  {
    "src": "Neteller",
    "dst": "INR",
    "rate": 82,
    "min": 20,
    "max": 5000,
    "updated": "2025-09-04",
    "continent": "Asia"
  },
  {
    "src": "Wise",
    "dst": "KES",
    "rate": 126,
    "min": 20,
    "max": 5000,
    "updated": "2025-09-04",
    "continent": "Africa"
  },
  {
    "src": "PayPal",
    "dst": "ZAR",
    "rate": 17.5,
    "min": 20,
    "max": 5000,
    "updated": "2025-09-06",
    "continent": "Africa"
  },
  {
    "src": "Skrill",
    "dst": "NGN",
    "rate": 1500,
    "min": 20,
    "max": 5000,
    "updated": "2025-09-06",
    "continent": "Africa"
  },
  {
    "src": "Revolut",
    "dst": "GHS",
    "rate": 15.2,
    "min": 20,
    "max": 3000,
    "updated": "2025-09-06",
    "continent": "Africa"
  },
  {
    "src": "USDT",
    "dst": "MAD",
    "rate": 9.8,
    "min": 20,
    "max": 5000,
    "updated": "2025-09-03",
    "continent": "Africa"
  }
];
