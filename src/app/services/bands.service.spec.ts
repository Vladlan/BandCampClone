import {TestBed, inject, flush} from '@angular/core/testing';

import {BandsService} from './bands.service';
import {HttpClient} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('UsersDataService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let bandsService: BandsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BandsService]
    });
    // Inject the http, test controller, and service-under-test
    // as they will be referenced by each test.
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    bandsService = TestBed.get(BandsService);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it('should be created', inject([BandsService],
    (service: BandsService) => {
      expect(service).toBeTruthy();
    }));

  it('should return expected error message (HttpClient called once)', () => {

    const url = 'http://emptiness';
    const expectedError = `Http failure response for ${url}: 404 Not Found`;

    bandsService.getBands(url)
      .subscribe(
        data => data,
        error => {
          return expect(error.message).toEqual(expectedError);
        });

    // bandsService should have made one request to GET bands from expected URL
    const req = httpTestingController.expectOne(url);
    expect(req.request.method).toEqual('GET');
    expect(req.flush('404', {
      status: 404,
      statusText: 'Not Found'
    }));
  });

  it('should return array with expected length (HttpClient called once)', () => {
    const url = 'http://localhost:3000/bands';
    const expectedArray = Array(10).fill(1);

    bandsService.getBands().subscribe(
      data => {
        return expect(data.length).toEqual(expectedArray.length);
      },
      error => error
    );

    const req = httpTestingController.expectOne(url);
    // Respond with expectedArray
    req.flush(expectedArray);

  });
});
