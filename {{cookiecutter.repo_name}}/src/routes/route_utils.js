export function request (routerFunc, path) {
  return function (descriptor) {
    const func = descriptor.descriptor.value;
    descriptor.value = async function (...args) {
      let [req, res] = args;
      try {
        const response = await func.apply (this, args);
        res.json (response);
      } catch (err) {
        res.json ({
          error: {
            msg: err,
          },
        });
      }
    };
    routerFunc (path, descriptor.value);
    return descriptor;
  };
}
