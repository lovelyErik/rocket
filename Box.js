// Registrar el componente en box-component.js
AFRAME.registerComponent("move-box", {
  schema: {
    moveX: { type: "number", default: 1 },
  },

  tick: function () {
     window.addEventListener("click",()=>{
      this.data.moveX = this.data.moveX + 0.001;

     })

    var pos = this.el.getAttribute("position");

    pos.x = this.data.moveX;

    this.el.setAttribute("position", {x: pos.x, y: pos.y, z: pos.z});
  }
});
