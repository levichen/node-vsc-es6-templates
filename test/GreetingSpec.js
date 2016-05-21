/**
 * vsc-js
 *
 * Copyright © 2016 levichen. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { expect } from 'chai';
import Greeting from '../src/Greeting';

describe('Greeting', () => {

  describe('greeting.hello()', () => {

    it('should return welcome message for a guest user', () => {
      const greeting = new Greeting();
      const message = greeting.hello();
      expect(message).to.be.equal('Welcome, Guest!');
    });

    it('should return welcome message for a named user', () => {
      const greeting = new Greeting('John');
      const message = greeting.hello();
      expect(message).to.be.equal('Welcome, John!');
    });

  });

  describe('greeting.add()', () => {
    it('should return 2', () => {
      const greeting = new Greeting();
      const x = 1;
      const y = 1;
      const expectResult = 2;
      const result = greeting.add(x, y);
      expect(result).to.be.equal(expectResult);
    });
  });
});
