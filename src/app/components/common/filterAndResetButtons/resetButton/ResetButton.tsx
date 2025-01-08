interface ResetButtonProps {
  setFunction: React.Dispatch<React.SetStateAction<string | null>>;
}

const ResetButton = ({ setFunction }: ResetButtonProps) => {
  return <button onClick={() => setFunction(null)}>リセット</button>;
};

export default ResetButton;
