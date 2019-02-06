////////////////////////////////
//***SkillName : VALUE(%)***//
const skillsArray = {
  HTML: 0,
  CSS: 0,
  JavaScript: 0,
 jQuery: 0,
 Bootstrap: 0,
 Sass: 0,
 'React-Redux': 0,
 NodeJS: 0,
 PHP: 0,
 MySQL: 0,
 Python: 0
};
////////////////////////////////

const barsArray = [];

function addSkills(barNumber, skillName) {
  let newSkill = document.createElement('div');
  newSkill.className = "col barDiv";
  newSkill.innerHTML = `<canvas id= ${barNumber} className="skillBar" width="110" height="80"></canvas>
                        <canvas id= ${skillName} width="110" height="80" className="skillName "></canvas>`;
  document.getElementById('skills').appendChild(newSkill);

  barsArray.push(document.getElementById(barNumber).getContext('2d'));
}

for (let i = 0; i < barsArray.length; i++) {
  barsArray[i].lineWidth = 3; //thickness of the line
  barsArray[i].fillStyle = 'rgb(192, 192, 192, 0.3)';
  barsArray[i].strokeStyle = 'rgb(192, 192, 192, 0.3)';
  barsArray[i].beginPath();
  barsArray[i].arc(55, 30, 20, 4.72, 15, false); //.arc(x, y , radius, startAngle, endAngle, anticlockwise)
  barsArray[i].stroke();
}

window.onload = () => {
    let skillName;
    let value;
    let counter = 0;
    for(skill in skillsArray) {
      skillName = skill;
      value = skillsArray[skill];
      ++counter;
      barNumber = 'bar' + counter;
      addSkills(barNumber, skillName)
      loadSkills(skillName, value);
    }
}

function loadSkills(skillName, value) {
  let ctx = document.getElementById(skillName).getContext('2d');
  let al = 0;
  let start = 4.72;
  let cw = ctx.canvas.width;
  let ch = ctx.canvas.height;
  let diff;
  let name = skillName.replace('-', ' / ');

  let progressSim = () => {
    diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2);
    ctx.clearRect(0, 0, cw, ch);
    ctx.lineWidth = 4; //thickness of the line
    ctx.fillStyle = "rgb(192, 192, 192)";
    ctx.strokeStyle = "rgba(25,25,112,1)";
    ctx.textAlign = 'center';
    ctx.font = "20px Merienda";
    ctx.shadowColor = "rgba(25,25,112,1)";
    ctx.shadowOffsetX = 1;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 1;
    ctx.fillText(name, cw * .5 + 1, ch * .5 + 35, cw);
    ctx.font = "10px Merienda";
    ctx.fillText(al + '%', cw * .5 + 1, ch * .5 - 5, cw);
    ctx.beginPath();
    ctx.arc(55, 30, 20, start, diff / 10 + start, false); //.arc(x, y , radius, startAngle, endAngle, anticlockwise)
    ctx.stroke();
    if (al >= value) { // stop the recreation at your desired point, i.e change 100 to 75 if you need just 75%.
      clearTimeout(sim);
      // Add scripting here that will run when progress completes
    }
    al++;
  }

  let sim = setInterval(progressSim, 20); //speed
}
