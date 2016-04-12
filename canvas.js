
var clockCanvas=document.getElementById("clockCanvas"),
    Canvas=clockCanvas.getContext("2d");

function drawClock(){
  Canvas.clearRect(0,0,1000,1000);
  //实例化一个当前时间对象，通过该对象获取系统当前时间
  var now=new Date();
  // 获取秒
  var sec=now.getSeconds();
  // 获取分
  var mins=now.getMinutes();
  // 获取时
  var hours=now.getHours();

  // 绘制文字显示当前时间
  Canvas.save();
  Canvas.translate(0,0);
  Canvas.fillStyle="#ff0";
  Canvas.lineWidth=3;
  Canvas.strokeStyle="#333";
  Canvas.font="normal 30px 微软雅黑" ;
  Canvas.strokeText("系统当前时间为："+hours+"时"+mins+"分"+sec+"秒", 100, 100);
  Canvas.fillText("系统当前时间为："+hours+"时"+mins+"分"+sec+"秒", 100, 100);
  Canvas.restore();

  //计算：满60分加一小时
  hours = hours + mins/60;
  //计算：将24小时制转化为12小时制
  hours = hours>12?hours-12:hours;

  // 画表盘
  Canvas.beginPath();
  Canvas.lineWidth=3;
  Canvas.strokeStyle="#333";
  Canvas.arc(300,350,200,0,360,false);
  Canvas.stroke();
  Canvas.closePath();

  // 画表盘刻度
  for (var i = 1; i < 13; i++) {
    Canvas.save();
    Canvas.translate(300,350);
    Canvas.lineWidth=2;
    Canvas.strokeStyle="#999";
    Canvas.rotate(i*30*Math.PI/180);

    Canvas.beginPath();   
    Canvas.moveTo(0,-170);
    Canvas.lineTo(0,-190);

    Canvas.font = "normal 30px 宋体";
    Canvas.textAlign="left";
    Canvas.textBaseLine="top";

    Canvas.strokeText(i,i*(-60)*Math.PI/180,-140);
    Canvas.closePath();
    //画刻度线
    Canvas.stroke();
    Canvas.restore();
  };

  // 分度线
  for (var j = 0; j < 60; j++) {
    Canvas.save();
    Canvas.translate(300,350);
    Canvas.strokeStyle="#999";
    Canvas.lineWidth=2;
    Canvas.rotate(j*6*Math.PI/180);
    Canvas.beginPath();
    Canvas.moveTo(0,-180);
    Canvas.lineTo(0,-190);
    Canvas.closePath();
    Canvas.stroke();
    Canvas.restore();
  };

  // 时针
  Canvas.save();
  Canvas.translate(300,350);
  Canvas.lineWidth=6;
  Canvas.strokeStyle="#000";
  Canvas.rotate(hours*30*Math.PI/180);
  Canvas.beginPath();
  Canvas.moveTo(0,0);
  Canvas.lineTo(0,-120);
  Canvas.stroke();
  Canvas.closePath();
  Canvas.restore();

  // 分针
  Canvas.save();
  Canvas.translate(300,350);
  Canvas.lineWidth=4;
  Canvas.strokeStyle="#000";
  Canvas.rotate(mins*6*Math.PI/180);
  Canvas.beginPath();
  Canvas.moveTo(0,10);
  Canvas.lineTo(0,-160);
  Canvas.stroke();
  Canvas.closePath();
  Canvas.restore();

  //秒针
  Canvas.save();
  Canvas.translate(300,350);
  Canvas.lineWidth=2;
  Canvas.strokeStyle="#f00";
  Canvas.rotate(sec*6*Math.PI/180);
  Canvas.beginPath();
  Canvas.moveTo(0,20);
  Canvas.lineTo(0,-170);
  Canvas.stroke();
  Canvas.closePath();

  // 秒针圆心处小圆圈
  Canvas.strokeStyle="#f00";
  Canvas.fillStyle="#999";
  Canvas.beginPath();
  Canvas.arc(0,0,6,0,360,false);
  Canvas.fill();
  Canvas.stroke();
  Canvas.closePath();

  // 秒针顶部小圆圈  
  Canvas.beginPath();
  Canvas.arc(0,-140,6,0,360,false);
  Canvas.fill();
  Canvas.stroke();
  Canvas.closePath();
  Canvas.restore(); 

}
drawClock();
setInterval(drawClock, 1000);  //是表针根据系统当前时间转动起来

