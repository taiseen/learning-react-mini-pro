export const accordionData = [
  {
    id: 1,
    label: "What is React?",
    renderContent: () => {
      return (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
          nam nisi laborum alias amet deleniti sequi est vero ad aperiam
          blanditiis reprehenderit iure suscipit! Consequuntur eveniet molestias
          quam velit voluptate?
        </p>
      );
    },
  },
  {
    id: 2,
    label: "Some points of using React",
    renderContent: () => {
      return (
        <ul>
          <li>Testing 1</li>
          <li>Testing 2</li>
          <li>Testing 3</li>
          <li>Testing 4</li>
        </ul>
      );
    },
  },
  {
    id: 3,
    label: "Render Button",
    renderContent: () => <button>Click for download 🙂</button>,
  },
];
