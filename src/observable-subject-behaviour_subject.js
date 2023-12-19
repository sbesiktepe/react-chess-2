import { Observable } from "rxjs";
import { map } from "rxjs/internal/operators/map";
import { Subject } from "rxjs/internal/Subject";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { of } from "rxjs/internal/observable/of";

function App12() {
  // Observables
  // let users = {
  //   data: [
  //     { status: "Active", age: 14 },
  //     { status: "Inactive", age: 15 },
  //     { status: "Active", age: 16 },
  //     { status: "Inactive", age: 12 },
  //     { status: "Active", age: 18 },
  //     { status: "Active", age: 11 },
  //   ],
  // };

  // const observable = new Observable((subscriber1) => {
  //   subscriber1.next(users);
  // }).pipe(
  //   map((value) => {
  //     console.log("Got value from observable" + value);
  //     return value.data;
  //   }),
  //   map((value) => {
  //     console.log("Got value from first operator" + value);
  //     return value.filter((user) => user.status === "Active");
  //   }),
  //   map((value) => {
  //     console.log("Got value from second operator" + value);
  //     return value.reduce((sum, user) => sum + user.age, 0) / value.length;
  //   }),
  //   map((value) => {
  //     console.log("Got value from third operator" + value);
  //     if (value < 12) throw new Error("Average is too young");
  //     else return value;
  //   })
  // );

  // const observer = {
  //   next: (value) => {
  //     console.log("observer got a value of " + value);
  //   },
  //   error: (err) => {
  //     console.log("observer got an error", err);
  //   },
  //   complete: () => {
  //     console.log("observer got a complete notification");
  //   },
  // };

  // const observer1 = {
  //   next: (value) => {
  //     console.log("observer got a value of " + value * 2);
  //   },
  //   error: (err) => {
  //     console.log("observer got an error", err);
  //   },
  //   complete: () => {
  //     console.log("observer got a complete notification");
  //   },
  // };

  // observable.subscribe(observer);
  // observable.subscribe(observer1);

  //Subject

  // let observable = new Observable((observer) => {
  //   observer.next(1);
  //   observer.next(2);
  //   observer.next(3);
  //   observer.complete();
  // });

  // // let observable2 = of(1, 2, 3, 4, 5);

  // const subject1 = new Subject([]);

  // const observer1 = {
  //   next: (value) => {
  //     console.log("observer 1" + value);
  //   },
  //   error: (err) => {
  //     console.log("observer got an error", err);
  //   },
  //   complete: () => {
  //     console.log("observer1 got a complete notification");
  //   },
  // };

  // const observer2 = {
  //   next: (value) => {
  //     console.log("observer 2" + value);
  //   },
  //   error: (err) => {
  //     console.log("observer got an error", err);
  //   },
  //   complete: () => {
  //     console.log("observer2 got a complete notification");
  //   },
  // };

  // // observable.subscribe(observer1);
  // // observable.subscribe(observer2);

  // subject1.subscribe(observer1);
  // subject1.subscribe(observer2);

  // observable.subscribe(subject1);

  // subject1.next(1);
  // subject1.next(2);
  // subject1.next(3);
  // subject1.next(4);
  // subject1.next(5);

  // BehaviorSubject

  // Creating a BehaviorSubject with an initial value
  // const myBehaviorSubject = new BehaviorSubject("Initial Value");

  // // Subscribing to the BehaviorSubject
  // myBehaviorSubject.subscribe((value) => console.log("Subscriber 1:", value));

  // // Emitting values to the BehaviorSubject
  // myBehaviorSubject.next("Hello");

  // // Subscribing another observer
  // myBehaviorSubject.subscribe((value) => console.log("Subscriber 2:", value));

  // // Emitting more values
  // myBehaviorSubject.next("World");

  // myBehaviorSubject.subscribe((value) => console.log("Subscriber 2:", value));

  // const handleClick = () => {
  //   myBehaviorSubject.subscribe((value) => console.log("Subscriber 2:", value));
  // };

  // Create a custom observable
  const customSubject = new BehaviorSubject();

  // Subscribe to the custom observable
  customSubject.subscribe({
    next: (value) => console.log(value),
    error: (error) => console.error(error),
    complete: () => console.log("Observable completed"),
  });

  customSubject.subscribe({
    next: (value) => console.log(value),
    error: (error) => console.error(error),
    complete: () => console.log("Observable completed"),
  });
  customSubject.subscribe({
    next: (value) => console.log(value),
    error: (error) => console.error(error),
    complete: () => console.log("Observable completed"),
  });

  // Manually trigger the observable
  customSubject.next("Value 3");
  customSubject.next("Value 4");
  customSubject.next("Value 5"); // This would not work, as the observable has already completed.

  customSubject.subscribe({
    next: (value) => console.log(value),
    error: (error) => console.error(error),
    complete: () => console.log("Observable completed"),
  });

  return <button>Button</button>;
}

export default App12;
