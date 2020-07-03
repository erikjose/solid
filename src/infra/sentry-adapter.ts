import { ErrorAnalytics } from "../analytics/analytics-error";

export class SentryAdapter implements ErrorAnalytics {
  saveError(error: any): void {}
}
