import { HttpClient } from '@angular/common/http';
import { MeowFactsService } from './meow-facts.service';
import { of } from 'rxjs';

describe('MeowFactsService', () => {
    let service: MeowFactsService;
    let httpClientSpy: jasmine.SpyObj<HttpClient>;

    beforeEach(() => {
        httpClientSpy = jasmine.createSpyObj('HttpClient', [
            'get',
        ]);
        httpClientSpy.get.and.returnValue(of({data: ['test']}));

        service = new MeowFactsService(httpClientSpy);
    });

    it('should getFact', (done) => {
        const result = service.getFact();
        result.subscribe(x => {
            if (x === 'test') {
                expect(httpClientSpy.get).toHaveBeenCalled();
                done();
            }
        })
    });
});
