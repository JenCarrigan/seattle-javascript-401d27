'use strict'

const transform = require('./transform.js');

module.exports = (operation, bitmap, buffer) => {
    bitmap.type = buffer.toString('utf-8', 0, 2);
    bitmap.size = buffer.readUInt32LE(2);
    bitmap.bytesPerPixel = buffer.readInt16LE(28);
    bitmap.height = buffer.readInt32LE(22);;
    bitmap.width = buffer.readInt32LE(18);
    bitmap.pixelArr = buffer.readUInt32LE(10);
    bitmap.buffer = buffer;

    transform(operation, bitmap);
};