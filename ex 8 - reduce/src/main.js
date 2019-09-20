
const skills = [
  {
    name: 'Tom',
    skill: 'CSS',
    yearsExperience: 3,
    category: 'Web Design',
  },
  {
    name: 'Jim',
    skill: 'HTML',
    yearsExperience: 10,
    category: 'Web Design',
  },
  {
    name: 'Sue',
    skill: 'JavaScript',
    yearsExperience: 5,
    category: 'Web Development',
  },
  {
    name: 'Maria',
    skill: 'PHP',
    yearsExperience: 7,
    category: 'Web Development',
  },
  {
    name: 'John',
    skill: 'Photoshop',
    yearsExperience: 1,
    category: 'Web Design',
  },
  {
    name: 'David',
    skill: 'Writing',
    yearsExperience: 12,
    category: 'Content',
  },
  {
    name: 'Ellen',
    skill: 'Editor',
    yearsExperience: 5,
    category: 'Content',
  },
];

const totalexperience = skills.reduce((acc, item) => Number(acc) + Number(item.yearsExperience), 0);
console.log(totalexperience);

const experienceCategory = skills.reduce((acc, item) => {
  if (!acc[item.category]) {
    acc[item.category] = 0;
  }
  acc[item.category] += Number(item.yearsExperience);

  return acc;
}, {});

console.log(experienceCategory);

// 1. Get the total years experience

// 2. Get the experience per category
// { 'Web Design': 14, 'Web Development': 12, Content: 17 }
