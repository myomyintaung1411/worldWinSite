<template>
  <div class="canvas">
    <canvas id="canvas" class="yanzheng1"></canvas>
  </div>
</template>
<script>
export default {
  name: "Identify",
  props: {
    identifyCode: {
      // Default registration code
      type: String,
      default: "1234",
    },
    fontSizeMin: {
      // Font minimum
      type: Number,
      default: 130,
    },
    fontSizeMax: {
      // Font maximum
      type: Number,
      default: 140,
    },
  },
  methods: {
    // Generate a random number
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    // I'm going to generate a random color
    randomColor(min, max) {
      const r = this.randomNum(min, max);
      const g = this.randomNum(min, max);
      const b = this.randomNum(min, max);
      return "rgb(" + r + "," + g + "," + b + ")";
    },
    drawPic() {
      const canvas = document.getElementById("canvas");
      const ctx = canvas.getContext("2d");
      ctx.textBaseline = "bottom";
      // console.log(canvas.width)
      // Draw the background
      ctx.fillStyle = "#e6ecfd";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      // Draw text
      for (let i = 0; i < this.identifyCode.length; i++) {
        this.drawText(ctx, this.identifyCode[i], i);
      }
      this.drawLine(ctx);
      this.drawDot(ctx);
    },
    drawText(ctx, txt, i) {
      const canvas = document.getElementById("canvas");
      ctx.fillStyle = this.randomColor(50, 160); // Randomly generate font colors
      ctx.font =
        this.randomNum(this.fontSizeMin, this.fontSizeMax) + "px SimHei"; // Randomly generate font size
      const x = (i + 0.5) * (canvas.width / (this.identifyCode.length + 1));
      const y = this.randomNum(this.fontSizeMax, canvas.height - 5);
      var deg = this.randomNum(-30, 30);
      // Modify the origin and rotation Angle
      ctx.translate(x, y);
      ctx.rotate((deg * Math.PI) / 180);
      ctx.fillText(txt, 0, 0);
      // Restore the origin of coordinates and rotation Angle
      ctx.rotate((-deg * Math.PI) / 180);
      ctx.translate(-x, -y);
    },
    drawLine(ctx) {
      // Draw interference line
      const canvas = document.getElementById("canvas");
      for (let j = 0; j < 4; j++) {
        ctx.strokeStyle = this.randomColor(100, 200);
        ctx.beginPath();
        ctx.moveTo(
          this.randomNum(0, canvas.width),
          this.randomNum(0, canvas.height)
        );
        ctx.lineTo(
          this.randomNum(0, canvas.width),
          this.randomNum(0, canvas.height)
        );
        ctx.lineWidth = 3;
        ctx.stroke();
      }
    },
    drawDot(ctx) {
      // Plot interference point
      const canvas = document.getElementById("canvas");
      for (let k = 0; k < 30; k++) {
        ctx.fillStyle = this.randomColor(0, 255);
        ctx.beginPath();
        ctx.arc(
          this.randomNum(0, canvas.width),
          this.randomNum(0, canvas.height),
          3,
          0,
          2 * Math.PI
        );
        ctx.fill();
      }
    },
  },
  watch: {
    identifyCode() {
      this.drawPic();
    },
  },
  mounted() {
    this.drawPic();
  },
};
</script>
<style scoped>
.yanzheng1 {
  width: 100px;
  height: 34px;
}
</style>