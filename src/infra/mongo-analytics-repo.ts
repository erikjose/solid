import { ErrorAnalytics } from "../analytics/analytics-error";
import { SuccessAnalytics } from "../analytics/analytics-success";

export class MongoAnalyticsRepo implements ErrorAnalytics, SuccessAnalytics {
  saveError(error: any): void {}

  save(type: string, data: any): void {}
}
