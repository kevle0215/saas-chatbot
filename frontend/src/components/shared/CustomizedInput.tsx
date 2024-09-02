import TextField from "@mui/material/TextField";

type Props = {
  name: string;
  type: string;
  label: string;
};
export const CustomizedInput = (props: Props) => {
  return (
    <TextField
      sx={{
        "& .MuiInputBase-input": {
          color: "white",
        },
        width: "400px",
        borderRadius: 10,
        fontSize: 20,
        color: "white",
        "& .MuiInputBase-input-root.Mui-focused": {
          "border-color": "white !important",
        },
        "& .MuiOutlinedInput-notchedOutline": {
          "border-color": "white !important",
        },
      }}
      name={props.name}
      label={props.label}
      type={props.type}
    ></TextField>
  );
};
