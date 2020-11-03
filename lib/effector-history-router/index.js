import {createDomain} from 'effector';

export const createRouter = ({rootDomain, history}) => {
    const routerRoot = (rootDomain && rootDomain.createDomain()) || createDomain();

    const historyState = routerRoot.createStore({});
    const historyUpdated = routerRoot.createEvent();
    const pushFx = routerRoot.createEffect({
        async handler({url}) {
            await history.push(url);
        }
    });
    const goBackFx = routerRoot.createEffect({
        async hander() {
            await history.goBack();
        }
    })

    history.listen(historyUpdated);

    historyState.on(historyUpdated, (_, data) => data);


    return {
        state: historyState,
        historyUpdated,
        pushFx,
        goBackFx
    }
};
