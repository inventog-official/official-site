// import React, { useEffect, useRef } from "react";
// import Matter, { Engine, World, Bodies } from "matter-js";
// import Two from "two.js";
// import { Group } from "two.js/src/group";

// const FallingTextBlocks: React.FC = () => {
//   const canvasRef = useRef<HTMLDivElement | null>(null);
//   const entities: Matter.Body[] = [];
//   const copy: string[] = ["Idea", "Concept", "BusinessBusiness", "Growth", "Success","Success","Success"];

//   useEffect(() => {
//     if (!canvasRef.current) return;

//     const two = new Two({
//       type: Two.Types.canvas,
//       fullscreen: true,
//       autostart: true,
//     }).appendTo(canvasRef.current);

//     const solver: Engine = Engine.create();
//     solver.world.gravity.y = 1;

//     const bounds = {
//       length: 5000,
//       thickness: 50,
//       properties: { isStatic: true },
//     };

//     const leftBoundary = createBoundary(bounds.thickness, bounds.length);
//     const rightBoundary = createBoundary(bounds.thickness, bounds.length);
//     const bottomBoundary = createBoundary(bounds.length, bounds.thickness);

//     World.add(solver.world, [
//       leftBoundary.entity,
//       rightBoundary.entity,
//       bottomBoundary.entity,
//     ]);

//     const defaultStyles = {
//       size: two.width * 0.08,
//       weight: 800,
//       fill: "#ffffff",
//       leading: two.width * 0.08 * 0.8,
//       family: "Arial, sans-serif",
//       alignment: "center",
//       baseline: "middle",
//       margin: { top: 20, left: 20, right: 20, bottom: 20 },
//     };

//     addSlogan();
//     resize();
//     two.bind("resize", resize).bind("update", update);

  

//     function resize() {
//       const { thickness, } = bounds;

//       Matter.Body.setPosition(leftBoundary.entity, {
//         x: -thickness / 2,
//         y: two.height / 2,
//       });
//       Matter.Body.setPosition(rightBoundary.entity, {
//         x: two.width + thickness / 2,
//         y: two.height / 2,
//       });
//       Matter.Body.setPosition(bottomBoundary.entity, {
//         x: two.width / 2,
//         y: two.height + thickness / 2,
//       });
//     }

//     function addSlogan() {
//       let x = -two.width * 0.5; // Start from the left edge
//       let y = -two.height;

//       for (const word of copy) {
//         const group = new Two.Group();
//         const text = new Two.Text(word, 0, 0, defaultStyles);

//         const rect = text.getBoundingClientRect(true);
//         const ox = x + rect.width / 2;
//         const oy = y + rect.height / 2;

//         const ca = x + rect.width;
//         const cb = two.width;

//         if (ca >= cb) {
//           x = -two.width * 0.5; // Reset to left edge
//           y += defaultStyles.leading + defaultStyles.margin.top + defaultStyles.margin.bottom;
//         }

//         group.translation.set(ox, oy);

//         const rectangle = new Two.RoundedRectangle(0, 0, rect.width + 20, rect.height + 20, 10);
//         rectangle.fill = `rgba(${Math.floor(Math.random() * 255)}, ${
//           100 + Math.floor(Math.random() * 155)
//         }, ${Math.floor(Math.random() * 255)}, 0.85)`;
//         rectangle.stroke = "#000";
//         rectangle.linewidth = 2;
//         //@ts-ignore
//         // rectangle.shadow = new Two.Shadow(2, 2, 5, "rgba(0,0,0,0.5)");

//         const entity = Bodies.rectangle(
//           ox,
//           oy,
//           rect.width + 20,
//           rect.height + 20,
//           { restitution: 0.5 }
//         );
//         (entity as any).object = group;

//         entities.push(entity);

//         x += rect.width + defaultStyles.margin.left + defaultStyles.margin.right;

//         (group as any).text = text;
//         (group as any).rectangle = rectangle;
//         (group as any).entity = entity;

//         group.add(rectangle, text);
//         two.add(group);
//       }

//       World.add(solver.world, entities);
//     }

//     function update() {
//       Engine.update(solver);

//       for (const entity of entities) {
//         const group = (entity as any).object as Group;
//         group.translation.set(entity.position.x, entity.position.y);
//         group.rotation = entity.angle;
//       }
//     }

//     function createBoundary(width: number, height: number) {
//       const rectangle = two.makeRectangle(0, 0, width, height);
//       rectangle.visible = false;

//       const entity = Bodies.rectangle(0, 0, width, height, bounds.properties);
//       return { rectangle, entity };
//     }

//     return () => {
//       World.clear(solver.world, false);
//       Engine.clear(solver);
//       two.clear();
//     };
//   }, []);

//   return <div ref={canvasRef} style={{ width: "100%", height: "100vh", background: "#1a1a1a" }} />;
// };

// export default FallingTextBlocks;
