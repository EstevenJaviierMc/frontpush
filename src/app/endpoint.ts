import { HttpHeaders } from "@angular/common/http";
const urlBackend = '162.243.162.72:8000';
const endpoint = "http://" + urlBackend + "/api/v1/";
const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    })
};

export { httpOptions, endpoint, urlBackend }
