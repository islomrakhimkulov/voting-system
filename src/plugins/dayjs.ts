import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import 'dayjs/locale/uz-latn';

dayjs.extend(relativeTime);
dayjs.extend(customParseFormat);

export default dayjs;
