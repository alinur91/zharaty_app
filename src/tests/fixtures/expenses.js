import moment from 'moment'

export default  [{
 id: '1',
 description: 'gum',
 note: '',
 amount: 165,
 createdAt: 0
},
{
 id: '2',
 description: 'nitrogen',
 note: '',
 amount: 109900,
 createdAt: moment(0).subtract(4,'days').valueOf()
},
{
id: '3',
 description: 'oxygen',
 note: '',
 amount: 10990012,
 createdAt: moment(0).add(4,'days').valueOf()
}
]