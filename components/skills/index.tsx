import SlideIn from '@/components/animations/slideIn';
import BuildEnv from '@/components/skills/buildEnv';
import Collaboration from '@/components/skills/collaboration';
import Frameworks from '@/components/skills/frameworks';
import Languages from '@/components/skills/languages';
import StateRouting from '@/components/skills/stateRouting';
import Styling from '@/components/skills/styling';

export default function Skills() {
  return (
    <section className='flex flex-col items-center gap-6 w-full py-5 md:items-start'>
      <SlideIn>
        <h2 className='text-[40px] font-black uppercase'>skills</h2>
      </SlideIn>
      <SlideIn>
        <Languages />
      </SlideIn>
      <SlideIn>
        <Frameworks />
      </SlideIn>
      <SlideIn>
        <Styling />
      </SlideIn>
      <SlideIn>
        <StateRouting />
      </SlideIn>
      <SlideIn>
        <BuildEnv />
      </SlideIn>
      <SlideIn>
        <Collaboration />
      </SlideIn>
    </section>
  );
}
