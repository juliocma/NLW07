import { Router } from 'express';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateMessageController } from './controllers/CreateMessageController';
import { GetLastMessagesController } from './controllers/GetLastMessagesController';
import { ProfileUserController } from './controllers/ProfileUserController';
import { ensureAuthenticate } from './middleware/ensureAuthenticate';

const router = Router();
router.post('/authenticate', new AuthenticateUserController().handle);
router.post('/messages', ensureAuthenticate, new CreateMessageController().handle);
router.get('/messages/last', new GetLastMessagesController().handle);
router.get('/profile', ensureAuthenticate, new ProfileUserController().handle);

export { router };
