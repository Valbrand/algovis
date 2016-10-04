import List from '../dataStructures/List';
import Context from '../utils/Context';

window.List = List;

const context = Context();

console.log(context);

eval("context.l1 = new List(1, 2);");

console.log(context);