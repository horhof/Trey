
import {
  always as K,
  append,
  assoc,
  clone,
  cond,
  equals,
  identity,
  multiply,
  pipe,
  times,
  T as otherwise,
} from 'ramda';

import { definer, Number, Game, Rand, Sector } from './type';
import * as Core from './core';

`use strict`;

export const MAX_SECTORS = 100;

class Sector
{
  public id: number;

  public warps: Sector[];

  public ports: Port[];

  public fighters: number;

  constructor(id: number)
  {
    this.id = id;

    this.warps = [];
    this.ports = [];
    this.fighters = 0;
  }
}
