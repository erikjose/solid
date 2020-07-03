import { ErrorAnalytics } from "../analytics/analytics-error";

export class LogglyAdapter implements ErrorAnalytics {
  saveError(error: any): void {}
}
