import action from "../utils/action";
import {request} from "../utils/request";

export default {
  namespace: 'common',
  state: {
    list: []
  },
  reducers: {
    save(state, {payload}) {
      return {...state, ...payload};
    },
  },
  effects: {
    * load({payload}, {call, put}) {
      let data = yield call(request,payload);
      yield put(action("save", {list: data}))
    },
  },
};
