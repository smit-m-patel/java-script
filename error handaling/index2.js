// function f() {
//     try {
//       console.log(0);
//       throw "bogus";
//     } catch (e) {
//       console.log(1);
//       // This return statement is suspended
//       // until finally block has completed
//       return true;
//       console.log(2); // not reachable
//     } finally {
//       console.log(3);
//       return false; // overwrites the previous "return"
//       console.log(4); // not reachable
//     }
//     // "return false" is executed now
//     console.log(5); // not reachable
//   }
//   console.log(f()); // 0, 1, 3, false

function f() {
    try {
      throw "bogus";
    } catch (e) {
      console.log("hello");
      // This throw statement is suspended until
      // finally block has completed
      throw e;
    } finally {
      return false; // overwrites the previous "throw"
    }
    // "return false" is executed now
  }
  
  try {
    console.log(f());
  } catch (e) {
    // this is never reached!
    // while f() executes, the `finally` block returns false,
    // which overwrites the `throw` inside the above `catch`
    console.log('caught outer "bogus"');
  }
  
  // Logs:
  // caught inner "bogus"
  // false