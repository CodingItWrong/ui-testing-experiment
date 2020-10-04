import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class Example1Controller extends Controller {
  @tracked isShownInstant = false;
  @tracked isShownDelayed = false;

  @action showInstant() {
    this.isShownInstant = true;
  }

  @action showDelayed() {
    setTimeout(() => {
      this.isShownDelayed = true;
    }, 1000);
  }
}
