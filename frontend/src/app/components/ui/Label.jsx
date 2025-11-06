export default function Label(props) {
  return (
    <div
      className={`flex justify-center items-centerpy-1 px-1.5 ${props.bgColor} rounded-sm text-sm`}
    >
      {props.title}
    </div>
  );
}
