export default function SingleColumn({ children }) {
  return (
    <>
      <div className="max-w-screen-xl mx-auto left-0 top-0 w-full origin-top overflow-hidden px-6 lg:px-[0px]">
        {children}
      </div>
    </>
  );
}
