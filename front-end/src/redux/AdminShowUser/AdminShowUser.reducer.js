import {
  ADMIN_DELETE_USER,
  ADMIN_GET_ALL_USER,
  ADMIN_USER_PAGE_DECREMENT,
  ADMIN_USER_PAGE_INCREMANT,
} from "./AdminShowUser.type";

const initialValue = {
  adminAlluser: [],
  page: 1,
};

export const adminShowAllUserReducer = (
  state = initialValue,
  { type, payload }
) => {
  switch (type) {
    case ADMIN_GET_ALL_USER: {
      return {
        ...state,
        adminAlluser: payload,
      };
    }
    case ADMIN_USER_PAGE_INCREMANT:
      return {
        ...state,
        page: state.page + 1,
      };
    case ADMIN_USER_PAGE_DECREMENT:
      return {
        ...state,
        page: state.page - 1,
      };
    case ADMIN_DELETE_USER: {
      return {
        ...state,
        adminAlluser: payload,
      };
    }
    default:
      return state;
  }
};
