const lastGames = (data) => {
    const wins = data.filter((i) => true === i).length;
    const losses = data.length - wins;
    return { wins, losses };
  };
  
const formatHeight = (height) => Number.parseFloat(height / 100).toFixed(2);
const formatWeight = (weight) => Number.parseFloat(weight / 1000).toFixed(0);

export { lastGames, formatHeight, formatWeight };
  