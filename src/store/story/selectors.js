import { createSelector } from 'reselect';

const storyIdsSelector = state => state.stories.storyIds;
const storiesSelector = state => state.stories.stories;

export const hasMoreStoriesSelector = createSelector(
  storyIdsSelector,
  storiesSelector,
  (storyIds, stories) => stories.length < storyIds.length 
);