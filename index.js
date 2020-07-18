'use strict';

class RangeValidator {
  /**
   *
   * @param {number} from
   * @param {number} to
   */
  constructor (from, to) {
    this._from = from;
    this._to = to;
  }

  set from (value) {
    if (typeof value !== 'number') {
      throw new TypeError('NaN');
    }
    if (value > this.to) {
      throw new RangeError('Must be less than "to" value!');
    }

    this._from = value;
  }

  get from () {
    return this._from;
  }

  set to (value) {
    if (typeof value !== 'number') {
      throw new TypeError('NaN');
    }
    if (value < this.from) {
      throw new RangeError('Must be more than "from" value!');
    }

    this._to = value;
  }

  get to () {
    return this._to;
  }

  get range () {
    return [this.from, this.to];
  }

  validate (number) {
    return number >= this.from && number <= this.to;
  }
}