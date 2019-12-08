import '@babel/polyfill';
import 'dotenv/config';

import app from './server';

/* parametrizar a porta de escuta */
const port = process.env.PORT || 3000;
app.listen(`${port}`, () => console.log(`Server is running on port: ${port}`));
