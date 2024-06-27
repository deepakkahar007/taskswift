export default function Loader() {
  return (
    <div className="flex items-center justify-center">
      <div
        className="flex size-36 animate-spin items-center justify-center rounded-full border-4 border-solid border-current border-l-transparent border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      />
    </div>
  );
}
