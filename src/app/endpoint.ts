import { HttpHeaders } from "@angular/common/http";
const urlBackend = 'cfcpdf.herokuapp.com';
const endpoint = "https://" + urlBackend + "/api/v1/";
const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    })
};

export { httpOptions, endpoint, urlBackend }
