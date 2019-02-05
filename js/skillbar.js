const circlesArray = [
  document.getElementById('circle1').getContext('2d'),
  document.getElementById('circle2').getContext('2d'),
  document.getElementById('circle3').getContext('2d'),
  document.getElementById('circle4').getContext('2d'),
  document.getElementById('circle5').getContext('2d'),
  document.getElementById('circle6').getContext('2d'),
  document.getElementById('circle7').getContext('2d')
];
//***SKILLS(id) : VALUE(%)***//
const skillsArray = {
  html: 80,
  css: 80,
  js: 60,
  bootstrap: 60,
  sass: 30,
  jq: 50,
  react: 40
};
for (let i = 0; i < circlesArray.length; i++) {
  circlesArray[i].lineWidth = 3; //thickness of the line
  circlesArray[i].fillStyle = 'rgb(192, 192, 192, 0.3)';
  circlesArray[i].strokeStyle = "rgb(192, 192, 192, 0.3)";
  circlesArray[i].beginPath();
  circlesArray[i].arc(60, 60, 36, 4.72, 15, false); //.arc(x, y , radius, startAngle, endAngle, anticlockwise)
  circlesArray[i].stroke();
}
window.onload = () => {
    let id;
    let value;
    for(skill in skillsArray) {
      id = skill;
      value = skillsArray[skill];
      loadSkills(id, value);
    }
}

function loadSkills(id, value) {
  let ctx = document.getElementById(id).getContext('2d');
  let al = 0;
  let start = 4.72;
  let cw = ctx.canvas.width;
  let ch = ctx.canvas.height;
  let diff;

  let progressSim = () => {
    diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2); //change the arc by multiplying .. * Math.PI*2* --> 7.5=75, 5=50 etc.
    ctx.clearRect(0, 0, cw, ch);
    ctx.lineWidth = 5; //thickness of the line
    ctx.fillStyle = "rgb(192, 192, 192,0.5)";
    ctx.strokeStyle = "rgba(25,25,112,1)";
    ctx.textAlign = 'center';
    ctx.font = "20px Radley";
    ctx.fillText(al + '%', cw * .5 + 2, ch * .5 + 8, cw);
    ctx.beginPath();
    ctx.arc(60, 60, 36, start, diff / 10 + start, false); //.arc(x, y , radius, startAngle, endAngle, anticlockwise)
    ctx.stroke();
    if (al >= value) { // stop the recreation at your desired point, i.e change 100 to 75 if you need just 75%.
      clearTimeout(sim);
      // Add scripting here that will run when progress completes
    }
    al++;
  }

  let sim = setInterval(progressSim, 20); //speed
}
