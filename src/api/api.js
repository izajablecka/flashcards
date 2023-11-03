export async function getDecks(signal) {
  const response = await fetch("http://localhost:3000/api/v1/decks", {
    signal,
  });
  return response.json();
}
