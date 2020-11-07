import { createDomain } from 'effector';
import type { Domain } from 'effector';
import type { History, Action, Location } from 'history';

interface RouterFactoryProps {
  rootDomain?: Domain;
  history: History;
}

interface HistoryStore {
  action: Action;
  location: Location;
}

export const createRouter = ({ rootDomain, history }: RouterFactoryProps) => {
  const routerRoot =
    (rootDomain && rootDomain.createDomain()) || createDomain();

  const historyStore = routerRoot.createStore<
    HistoryStore | Partial<HistoryStore>
  >({});
  const historyUpdated = routerRoot.createEvent();
  const pushFx = routerRoot.createEffect({
    async handler({ url }) {
      await history.push(url);
    },
  });
  const goBackFx = routerRoot.createEffect<any>({
    async hander() {
      await history.back();
    },
  });

  history.listen(historyUpdated);

  historyStore.on(historyUpdated, (_, data) => data);

  const lastAction = historyStore.map((s) => s?.action);
  const locationStore = historyStore.map((s) => s?.location);

  return {
    historyStore,
    locationStore,
    lastAction,
    historyUpdated,
    pushFx,
    goBackFx,
  };
};
