

import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const COLORS = ['#FF444A', '#00C49F'];


const renderCustomizedLabel = ({ cx,cy, midAngle,innerRadius,outerRadius,percent, value}) => {

  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
  const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

  return (
    <text className='text-base md:text-xl font-semibold'  x={x}  y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(1)}%`}
    </text>
  );
}




const Chart = ({ totalDonation, yourDonation }) => {


  const data = [
    { name: 'Total Donation', value: totalDonation },
    { name: 'Your Donation', value: yourDonation }
  ];


  return (
   <section className='w-[87%] md:w-[80%] lg:w-[70%] h-[68vh]  mx-auto'>
    <ResponsiveContainer width='100%' height='100%'>
    <PieChart >
      <Pie  data={data} paddingAngle={2} dataKey="value" label={renderCustomizedLabel} >
        
        {data.map((element, index) => (
          <Cell key={index}  fill={COLORS[index]} />
        ))}

      </Pie>
      <Legend />
    </PieChart>
    </ResponsiveContainer>
   </section>
  );
};

export default Chart;
