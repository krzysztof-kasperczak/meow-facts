import { MeowFactsComponent } from './meow-facts.component';
import { MeowFactsService } from '../../services/meow-facts.service';

describe('MeowFactsComponent', () => {
    let component: MeowFactsComponent;
    let meowFactsServiceSpy: jasmine.SpyObj<MeowFactsService>;

    beforeEach(() => {
        meowFactsServiceSpy = jasmine.createSpyObj('MeowFactsService', [
            'getFact',
        ]);

        component = new MeowFactsComponent(meowFactsServiceSpy);
    });

    it('should init', () => {
        component.ngOnInit();
        expect(meowFactsServiceSpy.getFact).toHaveBeenCalledTimes(5);
        expect(component.meowFacts.length).toEqual(5);
    });

    it('should getFact onScroll', () => {
        component.onScroll();
        expect(meowFactsServiceSpy.getFact).toHaveBeenCalled();
    });
});
