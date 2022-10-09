const ul = document.getElementById('bars')
const days = document.getElementById('days')
const total = document.getElementById('total')

const getData = async () => {
  const request = await fetch('data.json')
  const data = await request.json()


  let max = 0;
  let sum = 0;

  data.map(datum => {
    sum += datum.amount
    if (max < datum.amount) {
      max = datum.amount
    }
  })

  total.innerText = '$' + sum

  console.log(sum)
  data.map(datum => {
    let li = document.createElement('li')
    ul.appendChild(li)
    let i = document.createElement('i')
    li.appendChild(i)
    let span = document.createElement('span')
    li.appendChild(span)
    let p = document.createElement('p')
    li.appendChild(p)
    i.innerText = '$' + datum.amount
    span.style.height = (datum.amount * 2) + 'px'
    p.innerText = datum.day
    if (datum.amount < max) {
      span.style.backgroundColor = 'hsl(10, 79%, 65%)';
    } else {
      span.style.backgroundColor = 'hsl(186, 34%, 60%)';
    }

  })


  
}

getData()














