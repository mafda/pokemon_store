import React from 'react';

const Styling = (prop) => {
  const colors = {
    10: {
      title: "#c22520",
      subtitle: "#8c1825",
      text: "#676766  ",
      bgMain: "#f0f0f0",
      bgBox: "#f4f4f4",
      bgHeader: "#c22520",
      bgMenu: "#fff",
      bgBadge: "#f0f0f0",
      bgFooter: "#c2ccd5",
      button: "#e03c31",
      buttonText: "#f4f4f4",
      border: "#ddd",
    },
    11: {
      title: "#1271c2",
      subtitle: "#013a6d",
      text: "#676766  ",
      bgMain: "#f0f0f0",
      bgBox: "#f4f4f4",
      bgHeader: "#1271c2",
      bgMenu: "#fff",
      bgBadge: "#f0f0f0",
      bgFooter: "#c2ccd5",
      button: "#409cc3",
      buttonText: "#f4f4f4",
      border: "#ddd",
    }
  }


  return (
    <div>
      <style>{`
    :root{
      --title: ${colors[prop.pokemonType]['title']};
      --subtitle: ${colors[prop.pokemonType]['subtitle']};
      --text: ${colors[prop.pokemonType]['text']};
      --bg-main: ${colors[prop.pokemonType]['bgMain']};
      --bg-box: ${colors[prop.pokemonType]['bgBox']};
      --bg-header: ${colors[prop.pokemonType]['bgHeader']};
      --bg-menu: ${colors[prop.pokemonType]['bgMenu']};
      --bg-badge: ${colors[prop.pokemonType]['bgBadge']};
      --bg-footer: ${colors[prop.pokemonType]['bgFooter']};
      --button: ${colors[prop.pokemonType]['button']};
      --button-text: ${colors[prop.pokemonType]['buttonText']};
      --border: ${colors[prop.pokemonType]['border']};
    }
    `
      }</style>
    </div>
  )
};


export default Styling;