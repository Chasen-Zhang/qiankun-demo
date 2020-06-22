import service from './axios';

export function requestPost(url, data) {
  return service.post(url, data);
}

export function requestGet(url, data) {
  return service.get(url, {
    params: data,
  });
}
