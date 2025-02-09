import { useState } from "react";
import "./App.css";

import Dropdown from "yob-dropdown-react";
import "yob-dropdown-react/dist/yob-dropdown-react.css";
import { OptionType } from "yob-dropdown-react/dist/src/Dropdown";

function App() {
  const [selectedOption, setSelectedOption] = useState<any>(null);

  const options = [
    { label: "Option 1", value: "Option 1" },
    { label: "Option with icon", value: "Option with icon" },
    { label: "Long long Option 3", value: "Long long Option 3" },
    {
      label: "Long long long long Option 5",
      value: "Long long long long Option 5",
    },
    {
      label: "Long long long long long Option 6",
      value: "Long long long long long Option 6",
    },
  ] as OptionType[];

  return (
    <div style={{ maxWidth: 600, margin: "50px auto" }}>
      <Dropdown
        options={options}
        value={selectedOption}
        onChange={(val) => {
          setSelectedOption(val);
        }}
        portal={false}
        multiple={false}
        withSearch={true}
        outlined={true}
      />
    </div>
  );
}

export default App;
