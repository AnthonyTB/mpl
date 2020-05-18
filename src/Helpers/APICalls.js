import config from '../config';

export const APIcalls = {
  fetchTwitterData() {
    return fetch(`${config.Proxy}${config.TwitterEndpoint}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${config.TwitterToken}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  fetchInstagramData() {
    return fetch(`${config.InstagramEndpoint}`, {
      method: 'GET',
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  fetchTwitchData() {
    return fetch(`${config.TwitchEndpoint}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${config.TwitterToken}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  fetchTwitchStream() {
    return fetch(`${config.TwitchStreamEndpoint}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Client-ID': 'miqpryw3ejg6xvadet2m89ahzucab2',
        Authorization: `Bearer ${config.TwitchToken}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  fetchTwitchVOD() {
    return fetch(`${config.TwitchVodEndpoint}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Client-ID': 'miqpryw3ejg6xvadet2m89ahzucab2',
        Authorization: `Bearer ${config.TwitchToken}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  fetchTwitchFollowers() {
    return fetch(`${config.TwitchFollowersEndpoint}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Client-ID': 'miqpryw3ejg6xvadet2m89ahzucab2',
        Authorization: `Bearer ${config.TwitchToken}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};
