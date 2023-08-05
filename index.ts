import { of, concat } from 'rxjs';

//  sequential execution while waiting for the previous result
//  https://www.learnrxjs.io/learn-rxjs/operators/combination/concat
//  concat().subscribe(fn)

concat(
  of('the foundation of the house', 1, 2, 3),

  // subscribed after first completes
  of('the walls of the house', 4, 5, 6),

  // subscribed after second completes
  of('the roof of the house', 7, 8, 9)
).subscribe(console.log);
