/**
 * Created by wenzelmk on 8/9/17.
 */

import { Accounts } from 'meteor/accounts-base';

Accounts.onCreateUser(function onCreateUser(options, user) {
    return user;
});

