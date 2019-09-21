import Component from "@ember/component";
import { computed } from "@ember/object";

export default Component.extend({
  tagName: "li",

  activeItem: null,

  isActive: computed("activeItem", function() {
    if (this.activeItem === this) {
      return true;
    }
  }),
  //allow others to pass in
  onMouseEnter() {},

  onMouseLeave() {},

  mouseEnter() {
    this.onMouseEnter(this);
  },

  mouseLeave() {
    this.onMouseLeave(this);
  }
});
