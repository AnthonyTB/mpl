import React, { createContext, useReducer, useEffect } from 'react';
import { APIcalls } from '../../Helpers/APICalls';

export const Context = createContext();

export function MyContext(props) {
  const Reducer = (prevState, { type, payload }) => {
    switch (type) {
      case 'twitterData':
        return {
          ...prevState,
          twitterData: payload.twitterData,
        };
      case 'instagramData':
        return {
          ...prevState,
          instagramData: payload.instagramData,
        };
      case 'twitchData':
        return {
          ...prevState,
          twitchData: payload.twitchData,
        };
      case 'twitchStream':
        return {
          ...prevState,
          twitchStream: payload.twitchStream,
        };
      case 'twitchVOD':
        return {
          ...prevState,
          twitchVOD: payload.twitchVOD,
        };
      case 'twitchFollowers':
        return {
          ...prevState,
          twitchFollowers: payload.twitchFollowers,
        };
      default:
        return '';
    }
  };

  const [state, dispatch] = useReducer(Reducer, {
    twitterData: null,
    instagramData: null,
    twitchData: null,
    twitchStream: null,
    twitchVOD: null,
    twitchFollowers: null,
  });

  const dataSetter = (section, data) => {
    dispatch({
      type: `${section}`,
      payload: {
        [section]: data,
      },
    });
  };

  useEffect(() => {
    const fetchTwitterData = async () => {
      const response = await APIcalls.fetchTwitterData();
      dataSetter('twitterData', response);
    };
    const fetchInstagramData = async () => {
      const response = await APIcalls.fetchInstagramData();
      dataSetter('instagramData', response);
    };
    const fetchTwitchData = async () => {
      const response = await APIcalls.fetchTwitchData();
      dataSetter('twitchData', response);
    };
    const fetchTwitchStream = async () => {
      const response = await APIcalls.fetchTwitchStream();
      dataSetter('twitchStream', response);
    };
    const fetchTwitchVOD = async () => {
      const response = await APIcalls.fetchTwitchVOD();
      dataSetter('twitchVOD', response);
    };
    const fetchTwitchFollowers = async () => {
      const response = await APIcalls.fetchTwitchFollowers();
      dataSetter('twitchFollowers', response);
    };
    fetchTwitterData();
    fetchInstagramData();
    fetchTwitchData();
    fetchTwitchStream();
    fetchTwitchVOD();
    fetchTwitchFollowers();
  }, []);

  const value = {
    dispatch,
    twitchStream: state.twitchStream,
    twitchData: state.twitchData,
    twitchVOD: state.twitchVOD,
    twitchFollowers: state.twitchFollowers,
    instagramData: state.instagramData,
    twitterData: state.twitterData,
  };

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
}
