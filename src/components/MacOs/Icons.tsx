interface IconsTypes {
  name: string;
}

function Icons({ name }: IconsTypes) {
  return (
    <span className={`icon ${name}`}></span>
  )
}

export default Icons;