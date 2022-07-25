import http from '../http-common';

class UsersDataService {
    getAll() {
        return http.get("users");
    }
    
    get(id: string) {
        return http.get(`users/${id}`);
    }

    create(data: any) {
        return http.post("users", data);
    }

    put(id: string, data: any) {
        return http.put(`users/${id}`, data);
    }

    delete(id: string) {
        return http.delete(`users/${id}`);
    }

    findByTitle(name: string) {
        return http.get(`users?title=${name}`);
    }
}
    
export default new UsersDataService();