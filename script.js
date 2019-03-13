new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    log: [],
    isStarted: false
  },
  computed: {
    monsterHP() {
      return {
        width: this.monsterHealth + '%'
      };
    },
    playerHP() {
      return {
        width: this.playerHealth + '%'
      };
    }
  },
  methods: {
    start() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.log = [];
      this.isStarted = true;
    },
    monsterAttack() {
      const value = Math.floor(Math.random() * 5) + 7;
      const temp = this.playerHealth - value;
      if (temp > 0) {
        this.playerHealth = temp;
        this.log.push(`Monster hits player for ${value}`);
      } else {
        this.playerHealth = 0;
        this.log.push(`Monster kills player`);
        this.isStarted = false;
      }
    },
    attack() {
      const value = Math.floor(Math.random() * 5) + 5;
      const temp = this.monsterHealth - value;
      if (temp > 0) {
        this.monsterHealth = temp;
        this.log.push(`Player hits monster for ${value}`);
        this.monsterAttack();
      } else {
        this.monsterHealth = 0;
        this.log.push(`Player kills monster`);
        this.isStarted = false;
      }
    },
    SPattack() {
      const value = Math.floor(Math.random() * 5) + 15;
      const temp = this.monsterHealth - value;
      if (temp > 0) {
        this.monsterHealth = temp;
        this.log.push(`Player hits monster for ${value}`);
        this.monsterAttack();
      } else {
        this.monsterHealth = 0;
        this.log.push(`Player kills monster`);
        this.isStarted = false;
      }
    },
    heal() {
      const value = Math.floor(Math.random() * 5) + 7;
      const temp = this.playerHealth + value;

      if (temp < 100) {
        this.playerHealth = temp;
        this.log.push(`Player heals for ${value}`);
      } else {
        this.log.push(`Player heals for ${100 - this.playerHealth}`);
        this.playerHealth = 100;
      }
      this.monsterAttack();
    },
    giveUp() {
      this.isStarted = false;
    }
  }
});