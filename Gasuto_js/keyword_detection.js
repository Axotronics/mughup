const rake = require('node-rake');

const mytext = `These political trends were signs of a new time. It was a time of
profound social and economic changes. It was a time when new cities
came up and new industrialised regions developed, railways expanded
and the Industrial Revolution occurred.
Industrialisation brought men, women and children to factories. Work
hours were often long and wages were poor. Unemployment was
common, particularly during times of low demand for industrial goods.
Housing and sanitation were problems since towns were growing
rapidly. Liberals and radicals searched for solutions to these issues`;

const keywords = rake.generate(mytext);

console.log({ data: keywords });
