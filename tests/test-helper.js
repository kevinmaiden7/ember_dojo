import Application from 'ember-dojo/app';
import config from 'ember-dojo/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
