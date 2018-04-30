import set from 'lodash/set';

const CHANGE_FIELD = 'CHANGE_FIELD';

const DEFAULT_STATE = {};

const DEFAULT_CONFIG = {
  dataCount: 0,
  loopCount: 0,
  create: {
    allow: true,
  },
  read: {
    allow: true,
    byId: true,
    field: '',
  },
  update: {
    allow: true,
    byId: true,
    field: '',
  },
  delete: {
    allow: true,
    byId: true,
    field: '',
  },
};

export const changeField = (data) => ({
  type: CHANGE_FIELD,
  ...data,
})

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case CHANGE_FIELD:
      const {projectId, schemeId, path, value} = action;
      const configs = state[projectId] || {};
      const config = configs[schemeId] || DEFAULT_CONFIG;
      set(config, path, value);
      return {
        ...state,
        [projectId]: {...state[projectId], [schemeId]: config}
      };
    default:
      return state;
  }
};