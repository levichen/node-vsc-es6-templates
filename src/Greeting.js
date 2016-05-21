/**
 * vsc-js
 *
 * Copyright © 2016 levichen. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

class Greeting {

  constructor(name) {
    this.name = name || 'Guest';
  }

  hello() {
    return `Welcome, ${this.name}!`;
  }

  add(x, y) {
    return x + y;
  }
}

export default Greeting;
