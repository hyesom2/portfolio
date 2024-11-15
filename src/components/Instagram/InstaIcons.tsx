interface IconsTypes {
  name: string;
}

function Icons({ name }: IconsTypes) {
  return (
    <span className={`instagram ${name}`} aria-hidden="true"></span>
  )
}

export default Icons;