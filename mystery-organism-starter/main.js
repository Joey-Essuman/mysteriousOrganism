// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Assigning the mockUp function to a variable
let currentDna = mockUpStrand();
const pAequorFactor = (number, dna) => {
  return {
    specimenNum: number,
    dna: dna,
    mutate() {
      let randomIndex = Math.floor(Math.random() * this.dna.length);
      let newBase = returnRandBase();
      while (this.dna[randomIndex] === newBase) {
        newBase = returnRandBase();
      }
      this.dna[randomIndex] = newBase;
      return this.dna;
    },
    compareDna() {
      let compareOrgOne = this.dna;
      let compareOrgTwo = currentDna;
      let score = 0;
      for (let i = 0; i < compareOrgOne.length; i++) {
        for (let j = 0; j < compareOrgTwo.length; j++) {
          if (i === j && compareOrgOne[i] === compareOrgTwo[j]) {
            score += 1;
          }
        }
      }
      console.log(
        `Specimen 1 and Specimen 2 have ${Math.floor(
          (100 / 15) * score
        )}% DNA in common`
      );
    },
    willLikelySurvive() {
      let dnaScore = 0;
      const survivedSpecimen = [];
      for (let k = 0; k < this.dna.length; k++) {
        if (this.dna[l] === "C" || this.dna[l] === "G") {
          dnaScore += 1;
        }
      }
      if (Math.floor((100 / 15) * dnaScore) > 60) {
        survivedSpecimen.push(this.dna);
      }
      return console.log(survivedSpecimen);
    },
  };
};
