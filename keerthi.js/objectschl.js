let rand = Math.random()
rand < 0.5 ? gender = 0 : gender = 1
this.name = `${gender ? '👩‍💼' : '👨‍💼'} ${faker.name.firstName(gender)} ${faker.name.lastName(gender)}