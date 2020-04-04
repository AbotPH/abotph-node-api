import morgan from 'morgan';
import logger from '~logger';

export default morgan(
  ':remote-addr - :method :url :status :response-time ms - :res[content-length]',
  { stream: logger.stream }
);
