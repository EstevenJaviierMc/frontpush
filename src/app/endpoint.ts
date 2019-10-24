import { HttpHeaders } from "@angular/common/http";

const endpoint = 'http://127.0.0.1:8000/api/v1/';
const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    })
};

export { httpOptions, endpoint }
