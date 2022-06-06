import Darkmode from "darkmode-js";
import Vue from 'vue'

export default async function(ctx, inject) {
  const moduleOptions = {};
  const darkmode = new Darkmode(moduleOptions)

  if (process.client && !moduleOptions.disableWidget) {
    const addDarkmodeWidget = () => {
      darkmode.showWidget();
    };
    window.addEventListener("load", addDarkmodeWidget);
  }

  Vue.prototype.darkmode = darkmode;
}
