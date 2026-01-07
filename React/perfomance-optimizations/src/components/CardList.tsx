import Card from "./Card";

interface CardData {
  title: string;
  description: string;
}

const CardList = () => {
  const cards: CardData[] = Array.from({ length: 10 }, (_, i) => ({
    title: `Card ${i + 1}`,
    description: `This is the content of card number ${
      i + 1
    }. You can copy all this text using the copy button!`,
  }));

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {cards.map((card, idx) => (
        <Card key={idx} title={card.title} description={card.description} />
      ))}
    </div>
  );
};

export default CardList;
