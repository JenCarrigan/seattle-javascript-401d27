export default (req,res,next) => {
  let error = { error: 'Bad Request' };
  res.statusCode = 400;
  res.statusMessage = 'Bad Request';
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify(error));
  res.end();
};