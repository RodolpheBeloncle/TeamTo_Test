import { createSlice } from '@reduxjs/toolkit';

export interface IStarshipFavourite {
  id: string;
  name: string;
}

const starshipSlice = createSlice({
  name: 'starships',
  initialState: <IStarshipFavourite[]>[],
  reducers: {
    setStarshipFavourite: (state, { payload }) => {
      const { name, id } = payload;

      const isFavouriteAlready = state.find(
        (film) => film.id === id && film.name === name,
      );

      if (isFavouriteAlready) {
        return state;
      }
      return [
        ...state,
        {
          name,
          id,
        },
      ];
    },
    removeFavouriteStarship: (state, { payload }) => {
      const { name, id } = payload;

      return state.filter((film) => film.name !== name || film.id !== id);
    },
  },
});

export const { setStarshipFavourite, removeFavouriteStarship } = starshipSlice.actions;

export default starshipSlice.reducer;
