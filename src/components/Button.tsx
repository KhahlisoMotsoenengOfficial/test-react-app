interface Props {
  text: string;
  color?: 'primary' | 'success' | 'danger';
  onClick: () => void;
}

function Next({ text, color = "primary", onClick }: Props) {
  return (
    <div>
      <button type="button" className={"btn btn-" + color} onClick={onClick}>
        {text}
      </button>
    </div>
  );
}

export default Next;
