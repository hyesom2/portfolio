interface IconsTypes {
  name: string;
}

function Icons({ name }: IconsTypes) {
  return (
    <span className={`icon ${name}`} aria-hidden="true"></span>
  )
}

export default Icons;