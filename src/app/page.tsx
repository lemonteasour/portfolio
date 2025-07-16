export default function Home() {
  const content = ["hello!"];

  const map = content.map((paragraph, i) => (
    <p className="text-[16px]" key={i}>
      {paragraph}
    </p>
  ));

  return (
    <div className="text-center pt-12">
      <h1 className="text-3xl font-bold mb-4">greetings!</h1>
      {map}
      <p className="text-[16px]"></p>
    </div>
  );
}
