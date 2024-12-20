export const PAYMENT_METHODS = {
  KKIAPAY: "KkiaPay",
  CASH: "Espèces",
} as const;

export const PAYMENT_STATUS = {
  SUCCESS: "success",
  PENDING: "pending",
  FAILED: "failed",
} as const;

export const PAYMENT_FREQUENCIES = {
  DAILY: "daily",
  WEEKLY: "weekly",
  MONTHLY: "monthly",
} as const;