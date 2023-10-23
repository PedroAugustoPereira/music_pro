const PreviousIcon = ({ onClick }) => {
  return (
    <>
      <svg
        onClick={onClick}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.5 12.6309V21.5C6.5 21.7739 6.27386 22 6 22H3C2.72614 22 2.5 21.7739 2.5 21.5V2.5C2.5 2.22614 2.72614 2 3 2H6C6.27386 2 6.5 2.22614 6.5 2.5V11.3191V11.3228V12.6272V12.6309ZM7.37252 12.2937L7.0872 11.975L7.37252 11.6563C7.40126 11.6242 7.43591 11.5936 7.47725 11.5661L7.47727 11.5661L7.48201 11.5629L20.732 2.51288L20.7437 2.50492L20.7549 2.49631C21.0401 2.2769 21.5 2.4688 21.5 2.9V21.1C21.5 21.5312 21.0401 21.7231 20.7549 21.5037L20.7442 21.4955L20.7331 21.4878L7.48307 12.3878L7.48309 12.3878L7.47725 12.3839C7.43591 12.3564 7.40126 12.3258 7.37252 12.2937Z"
          fill="#FCFCFC"
          stroke="#FCFCFC"
        />
      </svg>
    </>
  );
};

export default PreviousIcon;