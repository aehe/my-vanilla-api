module.exports = async function (context, req) {
    context.res = {
      body: {
        text: "Hello from the API 5/13/2021"
      }
    };
  };