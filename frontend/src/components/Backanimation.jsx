import React, { useEffect } from "react";
import { gsap } from "gsap";

const Backanimation = () => {
  useEffect(() => {
    let width, height, canvas, ctx, points, target;
    let animateHeader = true;

    function initHeader() {
      width = window.innerWidth;
      height = window.innerHeight;
      target = { x: width / 2, y: height / 2 };

      const largeHeader = document.getElementById("container");
      if (largeHeader) {
        largeHeader.style.height = `${height}px`;
      }

      canvas = document.getElementById("demo-canvas");
      if (!canvas) return;

      canvas.width = width;
      canvas.height = height;
      ctx = canvas.getContext("2d");

      points = [];
      for (let x = 0; x < width; x += width / 20) {
        for (let y = 0; y < height; y += height / 20) {
          const px = x + Math.random() * (width / 20);
          const py = y + Math.random() * (height / 20);
          const p = { x: px, originX: px, y: py, originY: py };
          points.push(p);
        }
      }

      for (let i = 0; i < points.length; i++) {
        const closest = [];
        const p1 = points[i];

        for (let j = 0; j < points.length; j++) {
          const p2 = points[j];
          if (p1 !== p2) {
            let placed = false;
            for (let k = 0; k < 5; k++) {
              if (!placed) {
                if (!closest[k]) {
                  closest[k] = p2;
                  placed = true;
                }
              }
            }

            for (let k = 0; k < 5; k++) {
              if (!placed) {
                if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                  closest[k] = p2;
                  placed = true;
                }
              }
            }
          }
        }
        p1.closest = closest;
      }

      for (let i in points) {
        const c = new Circle(
          points[i],
          3 + Math.random() * 3,
          "rgba(100,149,237,0.3)"
        );
        points[i].circle = c;
      }
    }

    function addListeners() {
      window.addEventListener("mousemove", mouseMove);
      window.addEventListener("scroll", scrollCheck);
      window.addEventListener("resize", resize);
    }

    function removeListeners() {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("scroll", scrollCheck);
      window.removeEventListener("resize", resize);
    }

    function mouseMove(e) {
      const posx =
        e.pageX ||
        e.clientX +
          document.body.scrollLeft +
          document.documentElement.scrollLeft;
      const posy =
        e.pageY ||
        e.clientY +
          document.body.scrollTop +
          document.documentElement.scrollTop;
      target.x = posx;
      target.y = posy;
    }

    function scrollCheck() {
      animateHeader = document.body.scrollTop <= height;
    }

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }

    function initAnimation() {
      animate();
      for (let i in points) {
        shiftPoint(points[i]);
      }
    }

    function animate() {
      if (animateHeader) {
        ctx.clearRect(0, 0, width, height);
        for (let i in points) {
          if (Math.abs(getDistance(target, points[i])) < 6000) {
            points[i].active = 0.5;
            points[i].circle.active = 1;
          } else if (Math.abs(getDistance(target, points[i])) < 20000) {
            points[i].active = 0.1;
            points[i].circle.active = 0.3;
          } else if (Math.abs(getDistance(target, points[i])) < 40000) {
            points[i].active = 0.02;
            points[i].circle.active = 0.1;
          } else {
            points[i].active = 0;
            points[i].circle.active = 0;
          }

          drawLines(points[i]);
          points[i].circle.draw();
        }
      }
      requestAnimationFrame(animate);
    }

    function shiftPoint(p) {
      gsap.to(p, {
        duration: 2 + Math.random(),
        x: p.originX - 40 + Math.random() * 80,
        y: p.originY - 40 + Math.random() * 80,
        ease: "sine.inOut",
        onComplete: () => shiftPoint(p),
      });
    }

    function drawLines(p) {
      if (!p.active) return;
      for (let i in p.closest) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.closest[i].x, p.closest[i].y);
        ctx.strokeStyle = `rgba(100,149,237,${p.active})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }
    }

    function Circle(pos, rad, color) {
      this.pos = pos || null;
      this.radius = rad || null;
      this.color = color || null;

      this.draw = function () {
        if (!this.active) return;
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = `rgba(156,217,249,${this.active})`;
        ctx.fill();
      };
    }

    function getDistance(p1, p2) {
      return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
    }

    initHeader();
    addListeners();
    initAnimation();

    return () => {
      removeListeners();
    };
  }, []);

  return (
    <div
      id="container"
      className="relative w-full max-h-screen flex justify-center items-center overflow-hidden"
    >
      <canvas
        id="demo-canvas"
        className="absolute top-0 left-0 w-screen z-10 overflow-hidden"
      ></canvas>
      <h1 className="absolute top-1/2 left-1/2 text-[#00A6F5] text-center transform -translate-x-1/2 -translate-y-1/2 text-4xl md:text-5xl tracking-widest m-0 p-0">
        Biosetup Lifesciences
      </h1>
    </div>
  );
};

export default Backanimation;
