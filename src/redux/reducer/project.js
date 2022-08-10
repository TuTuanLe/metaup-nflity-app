import {createSlice} from '@reduxjs/toolkit';

export const ProjectSlice = createSlice({
  name: 'Projects',
  initialState: {
    projects: [],
    appError: '',
    loading: true,
  },
  reducers: {
    LOAD_DATA: state => {
      state.loading = true;
    },
    FETCH_PROJECTS: state => {
      state.loading = false;
      state.projects = [
        {
          id: '1',
          name: 'CLONE X - X TAKASHI MURAKAMI',
          des: 'RTFKTCLONEXTM',
          count: 'D-19',
          partner: '8.9천',
          total: '176억 원',
          image: require('@assets/images/project1.png'),
        },
        {
          id: '2',
          name: 'Ukraine response',
          des: 'unicef',
          count: 'D-19',
          partner: '124.9만',
          total: '73억 원',
          image: require('@assets/images/project2.png'),
        },
        {
          id: '3',
          name: 'BEANZ Official',
          des: 'beanzofficial',
          count: '19.9천',
          partner: '6.7천',
          total: '25.8억 원',
          image: require('@assets/images/project3.png'),
        },
        {
          id: '4',
          name: 'Murakami.Flowers Seed',
          des: ' MFTMKKUS',
          count: '74',
          partner: '1643',
          total: '8411만 원',
          image: require('@assets/images/project4.png'),
        },
        {
          id: '5',
          name: 'Murakami.Flowers Seed',
          des: ' MFTMKKUS',
          count: '2914',
          partner: '6.4천',
          total: '611만 원',
          image: require('@assets/images/project5.png'),
        },
        {
          id: '6',
          name: 'Murakami.Flowers Seed',
          des: ' MFTMKKUS',
          count: '2914',
          partner: '6.4천',
          total: '611만 원',
          image: require('@assets/images/project2.png'),
        },
      ];
    },
    ON_ERROR: (state, action) => {
      projects: [...state, action.payload];
      state.loading = false;
    },
  },
});

export const {LOAD_DATA, FETCH_PROJECTS, ON_ERROR} = ProjectSlice.actions;

export default ProjectSlice.reducer;
