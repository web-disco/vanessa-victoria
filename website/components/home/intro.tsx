interface IntroProps {
  title: string;
  subtitle: string;
  description: string;
}

const Intro = ({ title, subtitle, description }: IntroProps) => {
  console.log(title, subtitle, description);
  return (
    <div>
      <h1>Intro</h1>
    </div>
  );
};

export default Intro;
