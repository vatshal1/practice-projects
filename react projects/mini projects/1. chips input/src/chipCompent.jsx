function ChipComponent({ chip, setChips, chips, index }) {
  function clickHandler() {
    console.log(chip, index);

    const updatedChip = chips.filter((c, i) => i !== index);
    setChips(updatedChip);
  }

  return (
    <>
      <div className="bg-gray-400 text-lg rounded-xl px-2 mx-2 my-1 inline-block max-w-fit">
        {chip}

        <button className="cursor-pointer" onClick={clickHandler}>
          ❌
        </button>
      </div>
    </>
  );
}

export default ChipComponent;
