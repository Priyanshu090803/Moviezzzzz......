import { createSlice } from "@reduxjs/toolkit";

const movieSlice= createSlice(
    {
        name: "movies",
        initialState:{
            nowPlayingMovies:null,
            trailerVideo:null
        },          // now playing movie dalenge yha
        reducers:{
            addNowPlayingMovies:(state,action)=>{
                state.nowPlayingMovies=action.payload;
            },
            addTrailer:(state,action)=>{
                state.trailerVideo=action.payload;
            }
        }
    }
)

export const {addNowPlayingMovies,addTrailer} = movieSlice.actions
export default movieSlice.reducer  //exporting default , jaha import krenge to wha name change kr skte h