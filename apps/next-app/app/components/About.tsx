import { About as AboutType } from '../../lib/types';

type AboutProps = {
  about: AboutType;
};

export default function About({ about }: AboutProps) {
  return (
    <section className="mb-20" id="about">
      <h2 className="mb-6 text-2xl">About</h2>
      <div className="max-w-3xl">
        <p>{about?.content || ''}</p>
      </div>
    </section>
  );
}
