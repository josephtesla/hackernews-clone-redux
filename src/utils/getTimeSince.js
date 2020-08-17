function getTimeSince(since){
  since = since/1000;
  var dateIndices = [
      [60 * 60 * 24 * 365, 'year'],
      [60 * 60 * 24 * 30, 'month'],
      [60 * 60 * 24 * 7, 'week'],
      [60 * 60 * 24 , 'day'],
      [60 * 60, 'hour'],
      [60, 'min'],
      [1,'second']
  ];
  
  for (var i = 0,j = dateIndices.length; i < j; i++){
      var seconds = dateIndices[i][0];
      var name = dateIndices[i][1];
      var count = Math.floor(since/seconds);
      if (count  !== 0){
          break;
      }
  }
  var time = [];
  name = (count === 1)?name:`${name}s`;
  time.push(count);
  time.push(name);
  var newTime = `${time[0]} ${time[1]} ago`;
  return newTime;
}


export default getTimeSince;