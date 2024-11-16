interface IconsTypes {
  name: string;
}

function Icons({ name }: IconsTypes) {
  return (
    <span className={`icon ${name}`} aria-hideen="true"></span>
  )
}

export default Icons;