function allTheArgs(func, ...args) {
  // Your code here
  let boundFunc = func.bind(func, ...args);
  return boundFunc;
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = allTheArgs;