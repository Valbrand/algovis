import List from '../dataStructures/List';
import log from '../utils/log';

window.List = List;

const context = {};

Object.observe(context, () => {
  console.log(arguments);
});

eval("context.l1 = new List(1, 2);");
