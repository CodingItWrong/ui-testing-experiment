import Application from 'ember-acceptance-tests/app';
import config from 'ember-acceptance-tests/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
