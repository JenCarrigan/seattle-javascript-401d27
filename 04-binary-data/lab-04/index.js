'use strict';

// function Bitmap(filePath) {
//   return this.file = filePath;
// }

exports = module.exports = {
    /**
   * Bitmap -- receives a file name, used in the transformer to note the new buffer
   * @param filePath
   * @constructor
   */


  // /**
  //  * Parser -- accepts a buffer and will parse through it, according to the specification, creating object properties for each segment of the file
  //  * @param buffer
  //  */
  // Bitmap.prototype.parse = function(buffer) {
  //   this.type = buffer.toString('utf-8', 0, 2);
  //   this.size = buffer.readUInt32LE(2);
  //   this.bytesPerPixel = buffer.readInt16LE(28);
  //   this.height = buffer.readInt32LE(22);;
  //   this.width = buffer.readInt32LE(18);
  //   this.pixelArr = buffer.readUInt32LE(10);
  //   this.buffer = buffer;
  // };

  // /**
  //  * Transform a bitmap using some set of rules. The operation points to some function, which will operate on a bitmap instance
  //  * @param operation
  //  */
  // Bitmap.prototype.transform = function(operation) {
  //   // This is really assumptive and unsafe
  //   transforms[operation](this);
  //   this.newFile = this.file.replace(/\.bmp/, `.${operation}.bmp`);
  // };

  // /**
  //  * Sample Transformer (greyscale)
  //  * Would be called by Bitmap.transform('greyscale')
  //  * Pro Tip: Use "pass by reference" to alter the bitmap's buffer in place so you don't have to pass it around ...
  //  * @param bmp
  //  */
  // const transformGreyscale = (bmp) => {

  //   console.log('Transforming bitmap into greyscale', bmp);

  //   //TODO: Figure out a way to validate that the bmp instance is actually valid before trying to transform it

  //   for (let i = 122; i < 1146; i+=4) {
  //     let avg = (bmp.buffer[i] + bmp.buffer[i+1] + bmp.buffer[i+2]) / 3;
  //     bmp.buffer[i] = avg;
  //     bmp.buffer[i+1] = avg;
  //     bmp.buffer[i+2] = avg;
  //   }

  // };

  // const transformInverse = (bmp) => {
  //   console.log('Transforming bitmap into inverse', bmp);

  //   for (let i = 122; i < 1146; i += 4) {
  //     bmp.buffer[i] = 255 - bmp.buffer[i];
  //     bmp.buffer[i+1] = 255 - bmp.buffer[i+1];
  //     bmp.buffer[i+2] = 255 - bmp.buffer[i+2];
  //   }

  // }

  // /**
  //  * A dictionary of transformations
  //  * Each property represents a transformation that someone could enter on the command line and then a function that would be called on the bitmap to do this job
  //  */
  // const transforms = {
  //   greyscale: transformGreyscale,
  //   inverse: transformInverse
  // };

  // // ------------------ GET TO WORK ------------------- //

  // function transformWithCallbacks() {

  //   fs.readFile(file, (err, buffer) => {

  //     if (err) {
  //       throw err;
  //     }
      
  //     bitmap.parse(buffer);
  //     bitmap.transform(operation);

  //     // Note that this has to be nested!
  //     // Also, it uses the bitmap's instance properties for the name and the new buffer
  //     fs.writeFile(bitmap.newFile, bitmap.buffer, (err, out) => {
  //       if (err) {
  //         throw err;
  //       }
  //       console.log(`Bitmap Transformed: ${bitmap.newFile}`);
  //     });

  //   });
  // };

  // let args = process.argv.slice(2);
  // console.log(args);

  // const checkArgs = (args) => {
  //   if (args.length !== 2) {
  //     throw new Error('Need a filepath to bitmap and operation you want to perform');
  //   }

  //   if (args[0] != './assets/baldy.bmp') {
  //     throw new Error('Need a bitmap for your first argument');
  //   }

  //   console.log(args[1]);
  //   if(args[1] === 'greyscale' || args[1] === 'inverse')
  //   {
  //     const [file, operation] = process.argv.slice(2);

  //     let bitmap = new Bitmap(file);
  //     return bitmap.file;
  //   }
  //   else {
  //     throw new Error('Choose greyscale or inverse as your second argument');
  //   }
    
  // };

  // checkArgs(args);
  
  // const [file, operation] = process.argv.slice(2);
  // transformWithCallbacks();
};

module.exports = exports = {

  Bitmap(filePath) {
    this.file = filePath;
  },

  checkArgs(args) {
    if (args.length !== 2) {
      throw new Error('Need a filepath to bitmap and operation you want to perform');
    }

    if (args[0] !== './assets/baldy.bmp') {
      throw new Error('Need a bitmap for your first argument');
    }

    console.log(args[1]);
    if(args[1] === 'greyscale' || args[1] === 'inverse')
    {
      const [file, operation] = process.argv.slice(2);

      console.log(file);
      let bitmap = new Bitmap(file);
      console.log(bitmap.file);
      return bitmap.file;
    }
    else {
      throw new Error('Choose greyscale or inverse as your second argument');
    }
  }
};


