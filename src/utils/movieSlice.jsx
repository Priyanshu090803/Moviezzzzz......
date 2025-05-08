import { createSlice } from "@reduxjs/toolkit";

const movieSlice= createSlice(
    {
        name: "movies",
        initialState:{
            nowPlayingMovies:null,
            trailerVideo:null,
            popularMovies:null,
            topRated:null,
            upcoming:null,
        },          // now playing movie dalenge yha
        reducers:{
            addNowPlayingMovies:(state,action)=>{
                state.nowPlayingMovies=action.payload;
            },
            addpopularMovies:(state,action)=>{
                state.popularMovies=action.payload;
            },
            addTopRated:(state,action)=>{
                state.topRated=action.payload;
            },
            addUpcoming:(state,action)=>{
                state.upcoming=action.payload;
            },
            addTrailer:(state,action)=>{
                state.trailerVideo=action.payload;
            }
        }
    }
)

export const {addNowPlayingMovies,addTrailer,addpopularMovies,addTopRated,addUpcoming} = movieSlice.actions
export default movieSlice.reducer  //exporting default , jaha import krenge to wha name change kr skte h