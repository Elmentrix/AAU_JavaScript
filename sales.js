
const prompt = require("prompt-sync")();


/*

Record will look something like this after input

this.records = [
            ['monday', 'breadA', 5, 10],
            ['monday', 'breadB', 5, 10],
            ['tuesday', 'breadA', 5, 10],
            ['tuesday', 'breadB', 5, 10],
            ['tuesday', 'breadA', 5, 10],
            ['wednesday', 'breadB', 5, 10],
            ['thursday', 'breadA', 5, 10],
            ['thursday', 'breadB', 5, 10],
            ['friday', 'breadA', 5, 10],
            ['friday', 'breadB', 5, 10],
            
        ]

*/ 

class Sales{
    constructor(){
        this.records = []
    }

    addSales(){
        let end = 'y'

        while (end == 'y'){
            const day = prompt("Enter day -- ")
            const item = prompt("Enter item -- ")
            const quantity = parseInt(prompt("Enter quantity -- "))
            const price = parseInt(prompt("Enter price -- "))
            end = prompt('Type y to add another record, press any other value to end -- ')

            const record = [day.toLowerCase(), item, quantity, price]

            this.records.push(record)
        }

    }

    showSalesForDay(day) {
        day = day.toLowerCase()
        var dayRecordArr = []
        var daySales = {

        }
        var totalSalesMade = 0
        

        this.records.forEach(record => {
            if (record[0] == day) {
                dayRecordArr.push(record)
                if (daySales.hasOwnProperty(record[1])){
                    daySales[record[1]][0] = daySales[record[1]][0] + record[2]
                    daySales[record[1]][1] = daySales[record[1]][1] + (record[2] * record[3])
                }
                else {
                    daySales[record[1]] = [record[2], record[2] * record[3]]
                }
                totalSalesMade = totalSalesMade + (record[2] * record[3])
            }
        })

        console.log('------------------------------------------------ \n')
        console.log('All sales records for the day \n')
        dayRecordArr.forEach(record => {
            console.log('Day: ', record[0], ' Item: ', record[1], ' Quantity: ', record[2], ' Price: ', record[3],'\n')
        })
        console.log('------------------------------------------------ \n')
        console.log('Total Sales for each item \n')
        for (let sale in daySales){
            console.log('Item: ', sale, ' Quantity: ', daySales[sale][0],' Price: ', daySales[sale][1], '\n')
        }
        console.log('------------------------------------------------ \n')
        console.log('Total Sales for the day: ', totalSalesMade, 'cedis')

    }

    showSalesForWeek() {
        var weekSales = {

        }
        var totalSalesMade = 0
        

        this.records.forEach(record => {
                if (weekSales.hasOwnProperty(record[1])){
                    weekSales[record[1]][0] = weekSales[record[1]][0] + record[2]
                    weekSales[record[1]][1] = weekSales[record[1]][1] + (record[2] * record[3])
                }
                else {
                    weekSales[record[1]] = [record[2], record[2] * record[3]]
                }
                totalSalesMade = totalSalesMade + (record[2] * record[3])
        })

        console.log('------------------------------------------------ \n')
        console.log('All sales records for the week \n')
        this.records.forEach(record => {
            console.log('Day: ', record[0], ' Item: ', record[1], ' Quantity: ', record[2], ' Price: ', record[3],'\n')
        })
        console.log('------------------------------------------------ \n')
        console.log('Total Sales for each item \n')
        for (let sale in weekSales){
            console.log('Item: ', sale, ' Quantity: ', weekSales[sale][0],' Price: ', weekSales[sale][1], '\n')
        }
        console.log('------------------------------------------------ \n')
        console.log('Total Sales for the week: ', totalSalesMade, 'cedis')

    }
}


const sales = new Sales
sales.addSales()
// sales.showSalesForDay('tuesday')
sales.showSalesForWeek()


