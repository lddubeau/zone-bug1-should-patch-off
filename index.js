require("zone.js");

const { EventEmitter } = require("events");

const ee = new EventEmitter();

const handler = (event) => {
  console.log("handler got", event);
};

// Change patch to true to get the expected results.
const patch = false;
if (patch) {
  EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
}

ee.on("foo", handler);
ee.emit("foo", "prior to off");
ee.off("foo", handler);
ee.emit("foo", "after off");
ee.removeListener("foo", handler);
ee.emit("foo", "after removeListener");
