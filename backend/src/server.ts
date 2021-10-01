import app from './app';


const PORT =  process.env.PORT || 5002

const server = app.listen(PORT, () => {
  console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

// handle unhanled promise rejections
process.on('unhandledRejection', (err) => {
  console.log(err);
  // close server

  server.close(() => process.exit(1));
});
