import { GrBusinessService } from 'react-icons/gr'
import { MdOutlineEventSeat } from 'react-icons/md'
import { TbTimelineEvent } from 'react-icons/tb'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'
import { useGetProductsQuery } from '../../../../redux/features/productApi'

const Dashboard = () => {
  const { data } = useGetProductsQuery('')

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

  const RADIAN = Math.PI / 180
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    )
  }

  return (
    <div className="mt-14 w-full">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 md:space-y-0 space-y-5 text-[#ffffff]">
        <div className="bg-[#ff4d6d] md:h-44 h-20 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <h3 className="md:text-2xl font-bold">All Supplies</h3>
            <GrBusinessService className="text-[30px]" />
          </div>
        </div>
        <div className="bg-[#000] md:h-44 h-20 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <h3 className="md:text-2xl font-bold">Product Quantity</h3>
            <TbTimelineEvent className="text-[30px]" />
          </div>
        </div>
        <div className="bg-[#0B63E5] md:h-44 h-20 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <h3 className="md:text-2xl font-bold">Product Category</h3>
            <MdOutlineEventSeat className="text-[30px]" />
          </div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="quantity"
          >
            {data?.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Dashboard
