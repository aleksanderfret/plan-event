import { Router } from 'express';

import { applyRoutes, Crud } from '../../utils/helpers';
import { getEvents } from './controllers';

export default applyRoutes(Router())('/api/event')([
  { method: Crud.get, path: '/get', handlers: [getEvents] }
]);