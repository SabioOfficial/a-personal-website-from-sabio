export default function PopHorizontalLine() {
  return (
    <div className="flex flex-row gap-3 items-center [&>hr]:opacity-35 [&>hr]:dark:opacity-80 [&>hr]:dark:border-white">
      <hr className="border-2 rounded-full grow" />
      <img src="pop_greyscale.png" className="opacity-60 dark:opacity-100 h-8" />
      <hr className="border-2 rounded-full grow" />
    </div>
  )
}
