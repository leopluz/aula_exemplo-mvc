class Repo {
  constructor(repoUrl) {
    this.repoUrl = repoUrl;
    
    this.repos = "";
  }

  async getRepositories() {
    try {
      const response = await fetch(this.repoUrl);
      this.repos = await response.json();
    } catch (error) {
      console.log(error);
    }
  }
}

export { Repo };
