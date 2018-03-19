import * as baseService from './base';

function all() {
    return baseService.get('/api/auth/signup');
}

function one(id) {
    return baseService.get(`/api/auth/signup/${id}`);
}

function insert(data) {
    return baseService.post('/api/auth/signup', data);
}

function update(id, data) {
    return baseService.put(`/api/auth/signup/${id}`, data);
}

function destroy(id) {
    return baseService.destroy(`/api/auth/signup/${id}`);
}

export { all, one, insert, update, destroy };