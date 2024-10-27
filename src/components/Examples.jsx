import { useState } from "react";
import TabButton from "./TabButton.jsx";
import { EXAMPLES } from "../data.js";
import Tabs from "./Tabs.jsx";
import Section from "./Section.jsx";

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState();
    
    function clickHandler(key) {
        setSelectedTopic(key);
    }
    
    let tabContent = <p>Please select a topic.</p>;

    if (selectedTopic) {
        tabContent = (
          <div id="tab-content">
                  <h3>{EXAMPLES[selectedTopic].title}</h3>
                  <p>{EXAMPLES[selectedTopic].description}</p>
                  <pre>
                    <code>
                      {EXAMPLES[selectedTopic].code}
                    </code>
                  </pre>
                  </div>
        );
      }

    return(
        <Section id='examples' title = "Examples">
            <Tabs buttons={<>
                <TabButton isSelected = { selectedTopic === 'components' } onClick = {() => clickHandler("components")} label = 'Components' />
                <TabButton isSelected = { selectedTopic === 'jsx' } onClick = {() => clickHandler("jsx")} label = 'JSX'/>
                <TabButton isSelected = { selectedTopic === 'props' } onClick = {() => clickHandler("props")} label = 'Props'/>
                <TabButton isSelected = { selectedTopic === 'state' } onClick = {() => clickHandler("state")} label = 'State'/>
                </>}>
                {tabContent}
            </Tabs>
        </Section>
    )
} 