"use strict";
import { Injectable } from '@angular/core';

// 'http://localhost/pronetwork-backend/api/';
// export const url: string = 'http://localhost/pronetwork-backend/api/';
export const url: string = 'https://ipro.esmaar.com/api/';
@Injectable()
export class GlobalService {
    // BASE_API_URL = 'http://explorer-backend.wearecodevision.com';

    // LISTINGS_ENDPOINT = '/api/v1/listings';

    // LISTING_ENDPOINT = '/api/v1/listings';

    BASE_API_URL = 'http://localhost/wasset_back/public/api/';

    LISTINGS_ENDPOINT = 'allOffers';

    LISTING_ENDPOINT = 'detailsOffer';

    LISTINGS_ENDPOINT_REQUEST = 'lists/allUnits';

    LISTING_ENDPOINT_REQUEST = 'ProjectUnit';

    Lang = 'en';
    role: string = 'test';
} 