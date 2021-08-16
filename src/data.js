import { v4 as uuidv4 } from "uuid";

const data = [
  {
    id: uuidv4(),
    question: "The kind of triangle which has two equal sides is ?",
    answer: "isosceles triangle",
    options: [
      "exterior angle",
      "equilateral triangle",
      "isosceles triangle",
      "scalene triangle",
    ],
  },
  {
    id: uuidv4(),
    question:
      "A plane which is formed by three straight edges as its sides is called ?",

    answer: "triangle",
    options: ["triangle", "quadrilateral", "pentagon", "hexagon"],
  },
  {
    id: uuidv4(),
    question: "The right-angled triangle must have?",
    answer: "one right angle",
    options: [
      "four right angles",
      "three right angles",
      "one right angle",
      "two right angles",
    ],
  },
  {
    id: uuidv4(),
    question: "The triangles can be classified on the basis of ?",
    answer: "both a and b",
    options: [
      "the number of equal sides",
      "the types of angles",
      "length of line segments",
      "both a and b",
    ],
  },
  {
    id: uuidv4(),
    question: "The obtuse-angled triangle must have ?",
    answer: "one obtuse angle",
    options: [
      "four obtuse angles",
      "three obtuse angles",
      "two obtuse angles",
      "one obtuse angle",
    ],
  },
  {
    id: uuidv4(),
    question:
      "In ∆XYZ, M and N are points on XZ and YZ respectively such that MN is the perpendicular bisector of YZ. If XM = XY and ∠XYZ = 90, what is ∠XZY?",
    answer: "30 degree",
    options: ["30 degree", "120 degree", "60 degree", "175 degree"],
  },
  {
    id: uuidv4(),
    question:
      "What is the third angle for the triangle where angle1 = 45° and angle2 = 45°?",
    answer: "90 degree",
    options: ["95 degree", "120 degree", "90 degree", "60 degree"],
  },
  {
    id: uuidv4(),
    question: "A triangle can have ?",
    answer: "one right angle",
    options: [
      "one right angle",
      "two right angle",
      "three right angle",
      "four right angle",
    ],
  },
  {
    id: uuidv4(),
    question: "Which of the following triangles are always similar?",
    answer: "equilateral triangle",
    options: [
      "equilateral triangle",
      "isoceles triangle",
      "right angled triangle",
      "none",
    ],
  },
  {
    id: uuidv4(),
    question:
      "There is a right triangle PQR where: angle Q = 90°; angle P = angle R. What is the measure of angles P and R?",
    answer: "45 degree",
    options: ["60 degree", "120 degree", "67 degree", "45 degree"],
  },
];

export default data;
