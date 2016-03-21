/*!
 * This file is part of node-stream-meter(https://gitnub.com/webnium/sokoban/)
 * Copyright (C) 2016 Webnium
 */
'use strict';

import {Transform} from 'stream';

export declare class Meter extends Transform {
 static (maxBytes?: number): Meter;
 constructor(maxBytes?: number);
}
