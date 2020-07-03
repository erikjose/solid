import { ErrorLog } from "../analytics/error-log";
import { LogStrategy } from "../analytics/log-strategy";
import { ScreenLog } from "../analytics/screen-log";
import { ActionLog } from "../analytics/action-log";
import { LoginView } from "../presentation/login-view";
import { SentryAdapter } from "../infra/sentry-adapter";
import { GoogleAdapter } from "../infra/google-adapter";

export const makeLoginView = (): LoginView => {
  const sentryAdapter = new SentryAdapter();
  const googleAdapter = new GoogleAdapter();

  const errorLog = new ErrorLog(sentryAdapter);
  const screenLog = new ScreenLog(googleAdapter);
  const actionLog = new ActionLog(googleAdapter);

  const logStrategy = new LogStrategy(errorLog, actionLog, screenLog);
  return new LoginView(logStrategy);
};
