class SwapiImg {
  _apiB = "https://starwars-visualguide.com/assets/img";
  getImg = async url => {
    const res = await fetch(`${this._apiB}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }
    const body = await res;
    return body.url;
  };

  getPlanetImg = id => {
    return this.getImg(`/planets/${id}.jpg`);
  };
  getCharactersImg = id => {
    return this.getImg(`/characters/${id}.jpg`);
  };
  getVihiclesImg = id => {
    return this.getImg(`/starships/${id}.jpg`);
  };
}
export default SwapiImg;
