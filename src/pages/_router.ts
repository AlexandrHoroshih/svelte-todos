import { createBrowserHistory } from 'history';
import { createRouter } from 'trace-router';

const history = createBrowserHistory();

export const router = createRouter({ history });
