import React, { useState } from "react";
import { Button, Rows, Text } from "@canva/app-ui-kit";
import { addNativeElement } from "@canva/design";
import styles from "styles/components.css";

export const App = () => {
  const [description, setDescription] = useState("");
  const [highlightedArea, setHighlightedArea] = useState<null | any[]>(null);

  const onGenerateTransitions = () => {
    const transitions = generateTransitions(description, highlightedArea);
    transitions.forEach((transition) => {
      addNativeElement({
        type: "IMAGE",
        dataUrl: transition.src,
        width: transition.width,
        height: transition.height,
        left: transition.left,
        top: transition.top,
      });
    });
  };

  const handleHighlightArea = () => {
    // Logic to capture the highlighted area on the grid
    const selectedElements = []; // Replace with actual logic
    setHighlightedArea(selectedElements);
  };

  return (
    <div className={styles.scrollContainer}>
      <Rows spacing="2u">
        <textarea
          placeholder="Describe your transition (e.g., a red train crossing the screen)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ width: "100%", padding: "8px", fontSize: "16px" }}
        />
        <Button variant="secondary" onClick={handleHighlightArea} stretch>
          Highlight Transition Area
        </Button>
        <Button variant="primary" onClick={onGenerateTransitions} stretch>
          Generate Transitions
        </Button>
      </Rows>
    </div>
  );
};

// Placeholder function to simulate transition generation
const generateTransitions = (description, area) => {
  // Implement the logic to generate transitions based on description and area
  return [
    { src: "transition1.png", width: 100, height: 100, left: 50, top: 50 },
    { src: "transition2.png", width: 100, height: 100, left: 150, top: 150 },
  ];
};



// import { Button, Rows, Text } from "@canva/app-ui-kit";
// import { addNativeElement } from "@canva/design";
// import styles from "styles/components.css";

// export const App = () => {
//   const onClick = () => {
//     addNativeElement({
//       type: "TEXT",
//       children: ["Hello world!"],
//     });
//   };

//   return (
//     <div className={styles.scrollContainer}>
//       <Rows spacing="2u">
//         <Text>
//           To make changes to this app, edit the <code>src/app.tsx</code> file,
//           then close and reopen the app in the editor to preview the changes.
//         </Text>
//         <Button variant="primary" onClick={onClick} stretch>
//           Do something cool
//         </Button>
//       </Rows>
//     </div>
//   );
// };