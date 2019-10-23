import { HttpHeaders } from "@angular/common/http";

const endpoint = 'http://162.243.162.72:8000/api/v1/';
const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

export { httpOptions, endpoint }
