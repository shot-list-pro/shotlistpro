import CardList from "./CardList";
import Card from "./Card";

export default function ScenesList({ scenes }) {
  return (
    <CardList>
      {scenes &&
        scenes.map(scene => {
          return (
            <Card
              title={scene.location}
              subtitle={scene.date}
              imgURL={scene.thumbnail}
            />
          );
        })}
    </CardList>
  );
}
