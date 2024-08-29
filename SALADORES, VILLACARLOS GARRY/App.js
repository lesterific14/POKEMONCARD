import { Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet } from 'react-native';
import { PokemonCards } from './components/PokemonCards';

export default function App() {

  const arcanineData = {
    name: "Arcanine",
    image: require("./assets/arcanine.png"),
    type: "Fire",
    hp: 95,
    moves: ["Flame Wheel", "Flair Blitz", "Helping Hand"],
    weaknesses: ["Rock", "Ground", "Water"],
  }

  const bulbasaurData = {
    name: "Bulbasaur",
    image: require("./assets/bulbasaur.png"),
    type: "Grass",
    hp: 45,
    moves: ["Tackle", "Vin Whip", "Growth", "Leech Seed"],
    weaknesses: ["Psychic", "Ice", "Flying", "Fire"],
  }
  const pikachuData = {
    name: "Pikachu",
    image: require("./assets/pikachu.png"),
    type: "Electric",
    hp: 35,
    moves: ["Lightning Rod", "Static"],
    weaknesses: ["Ground", "Evolution"],
  };

  const ninetalesData = {
    name: "Ninetales",
    image: require("./assets/ninetales.png"),
    type: "Fire",
    hp: 73,
    moves: ["Evolution Chain", "Manipulate Fire"],
    weaknesses: ["Rock", "Ground", "Water"],
  };

const beedrillData = {
    name: "Beedrill",
    image: require("./assets/beedrill.png"),
    type: "Grass",
    hp: 65,
    moves: ["Swarm", "Sniper"],
    weaknesses: ["Psychic", "Flying", "Rock", "Fire"],
  };

  const squirtleData = {
    name: "Squiretle",
    image: require("./assets/squirtle.png"),
    type: "Water",
    hp: 44,
    moves: ["Spikes", "Stealth Rock"],
    weaknesses: ["Electric", "Grass"],
  };

const metapodData = {
    name: "Metapod",
    image: require("./assets/metapod.png"),
    type: "Grass",
    hp: 50,
    moves: ["Evolution Chain", "Location"],
    weaknesses: ["Rock", "Flying", "Fire"],
  };

const weedleData = {
    name: "Weedle",
    image: require("./assets/weedle.png"),
    type: "Grass",
    hp: 40,
    moves: ["Poison String", "String Shot", "Bug Bite"],
    weaknesses: ["Psychic", "Flying", "Fire", "Rock"],
  };

const ekansData = {
    name: "Ekans",
    image: require("./assets/ekans.png"),
    type: "Fire",
    hp: 35,
    moves: ["Swallow", "Acid Spray", "Sludge Bomb", "Gastro Acid"],
    weaknesses: ["Psychic", "Ground"],
  };

  const jigglypuffData = {
    name: "Jigglypuff",
    image: require("./assets/jigglypuff.png"),
    type: "Grass",
    hp: 115,
    moves: ["Pound", "Dazzling Gleam"],
    weaknesses: ["Poison", "Steel"],
  };

  return (
    
    <SafeAreaView style={styles.container}>


      <ScrollView >
        <PokemonCards {...arcanineData} />
        <PokemonCards {...bulbasaurData} />
        <PokemonCards {...pikachuData} />
        <PokemonCards {...ninetalesData} />
        <PokemonCards {...beedrillData} />
        <PokemonCards {...squirtleData} />
        <PokemonCards {...metapodData} />
        <PokemonCards {...weedleData} />
        <PokemonCards {...ekansData} />
        <PokemonCards {...jigglypuffData} />


      </ScrollView>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    marginTop:StatusBar.currentHeight,
    alignItems: "center"
  },



  text: {
    backgroundColor: Platform.OS === "ios" ? "red" : "lightpink"
  }
});