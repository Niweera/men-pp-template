const AsyncWrapper = fn => {
  return (req, res, next) => {
    return fn(req, res).catch(next);
  };
};

module.exports.AsyncWrapper = AsyncWrapper;
