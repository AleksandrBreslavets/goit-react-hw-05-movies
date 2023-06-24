import { MoonLoader } from "react-spinners";

const override= {
  display: "block",
  margin: "auto",
  marginTop:'40px',
  borderColor: "red",
};

export const Loader = () => (
<MoonLoader
  color="#ff0000"
  size={100}
  speedMultiplier={0.5}
  cssOverride={override}
/>
)