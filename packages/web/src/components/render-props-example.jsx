export default function CardList({
  children,
  list = [],
  renderItem = () => {},
}) {
  return (
    <>
      <h2 className="text-lg pb-2 border border-white w-full">{children}</h2>
      <ul>
        {list.map(item => (
          <li>
            <Card>{renderItem(item)}</Card>
          </li>
        ))}
      </ul>
    </>
  );
}

<CardList
  list={locations}
  renderBody={scene => {
    const { img, location, timestamp } = scene;
    return (
      <div>
        <img src={img} />
        <h4>{location}</h4>
        <p>{timestamp}</p>
      </div>
    );
  }}
>
  These are the awesome scenes
</CardList>;
