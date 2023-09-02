console.clear();
import { fromEvent } from 'rxjs';
import { timeInterval, tap } from 'rxjs/operators';

// https://www.learnrxjs.io/learn-rxjs/operators/utility/timeinterval
// Example 1: Time between mouse clicks

fromEvent(document, 'mousedown')
  .pipe(timeInterval(), tap(console.log))
  .subscribe(
    (i) =>
      (document.body.innerText = `milliseconds since last click: ${i.interval}`)
  );
