'use strict';
const dc = require('damage-calc');
import crypto from 'crypto';
document.writeln(
  '<p>攻撃力 100, 防御 50, 防御貫通 30 のダメージは、' +
  dc.effectiveDamage(100, 50, 30) + '</p><p>') + 
  crypto.randomBytes(8).toString('hex') + '</p>';
