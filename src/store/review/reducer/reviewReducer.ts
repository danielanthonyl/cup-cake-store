import {Review} from '../../interfaces/interfaces';
import {REVIEW_TYPES} from '../types/reviewTypes';

export interface ReviewsReducer {
  reviews: Review[];
}

const initialState: ReviewsReducer = {
  reviews: [],
};

export const reviewsReducer = ({
  state = initialState,
  action,
}: {
  state: ReviewsReducer;
  action: {type: string; payload: any};
}) => {
  switch (action.type) {
    case REVIEW_TYPES.FETCH_REVIEWS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
