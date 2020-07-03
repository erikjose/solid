import { Log } from "../presentation/log";
import { SuccessAnalytics } from "./analytics-success";

export class ActionLog implements Log {
  constructor(private readonly successAnalytics: SuccessAnalytics) {}

  event(type: Log.Type, data: Log.Data): void {
    this.successAnalytics.save(type, data.name);
  }
}
