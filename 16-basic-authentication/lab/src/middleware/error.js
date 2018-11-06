export default  (err,req,res,next) => {
  let error = {
    error:(typeof err==='object' && err.message) || err,
  };
  res.statusCode = (typeof err==='object' && err.status) || 400;
  res.statusMessage = (typeof err==='object' && err.statusMessage) || 'Bad Request';
  res.setHeader('Content-Type', 'application/json');
  res.write( JSON.stringify(error) );
  res.end();
};