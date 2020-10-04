import { module, test } from 'qunit';
import { visit, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | example1', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /example1', async function(assert) {
    await visit('/example1');

    await click('[data-test-show-instant]');

    assert.dom('[data-test-message-instant]').exists();

    await click('[data-test-show-delayed]');

    assert.dom('[data-test-message-delayed]').exists();
  });
});
