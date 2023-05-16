const server = require('./api/server.js')

const PORT = process.env.PORT || 9000

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`)
})

/** SQL Notes 
 * 
 * select orderid, orderdate, shippername from orders as o (Selects everything in orders)
 * join shippers as s on o.shipperid = s.shipperid; (Matches shipperids between two tables)
 * 
 * group by s.shipperid; (groups orders together based on shippername)
 * 
 * select count(orderid) as ordercount (will show the amount of orders by each shipper)
 * order by ordercount (organizes them based on ordercount)
 * 
 * ex 1)
 * 
 * select 
 *    o.orderid 
 *    o.orderdate,
 *    (e.firstname || ' ' || e.lastname) as employee
 * 
 * from employees as e
 * left join orders as o                  Left join will allow you to make another table that includes all "employees"
 *    on o.employeeID = e.employeeID      in this case
 * 
 *  group by e.employeeid
 * 
 * 
 * ex 2) 
 * 
 * 
 * 
 * */ 
