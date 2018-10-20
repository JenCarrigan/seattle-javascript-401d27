'use strict'

module.exports = (Bitmap, buffer) => {
    Bitmap.type = buffer.toString('utf-8', 0, 2);
    Bitmap.size = buffer.readUInt32LE(2);
    Bitmap.bytesPerPixel = buffer.readInt16LE(28);
    Bitmap.height = buffer.readInt32LE(22);;
    Bitmap.width = buffer.readInt32LE(18);
    Bitmap.pixelArr = buffer.readUInt32LE(10);
    Bitmap.buffer = buffer;
};