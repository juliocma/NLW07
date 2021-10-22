import { serverHttp, _PORT } from './app';
import colours from './util/consoleColors';

serverHttp.listen(_PORT, () => {
  console.log(`[${colours.fg.green}SERVER${colours.reset}] Server is running on port ${colours.fg.magenta}${_PORT}${colours.reset}`);
});
