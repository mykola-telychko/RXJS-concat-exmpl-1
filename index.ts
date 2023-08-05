import { of, concat } from 'rxjs';

//  sequential execution while waiting for the previous result

concat(
  of('the foundation of the house', 1, 2, 3),

  // subscribed after first completes
  of('the walls of the house', 4, 5, 6),

  // subscribed after second completes
  of('the roof of the house', 7, 8, 9)
)
  // log: 1, 2, 3, 4, 5, 6, 7, 8, 9
  .subscribe(console.log);
