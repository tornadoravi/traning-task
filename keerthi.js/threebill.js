bill_List = [hotel_Bill = { Ravi: 2000, Gokul: 200, Naveen: 1000 },
dinner_Bill = { Ravi: 1500, Gokul: 0, Naveen: 0, Mani: 1300 }
]
function Average(obj) {
    total = []
    sum = 0
    avg = 0
    for (j in obj) {
        total.push(obj[j])
        sum = sum + obj[j]
        len = total.length
        avg = sum / len
    } return avg
}
for (i in bill_List) {
    lis = avg_Each(bill_List[i])
    Average(lis)
    // console.log("avg_Amount:", total)
    // console.log("no of Person:", len)
}

// Average for each ******************************************************************************************************************************************
function avg_Each(obj) {
    avg = Average(obj)
    for (i in obj) {
        obj[i] = obj[i] - avg
    }
    return obj
}
for (i in bill_List) {
    bill_List[i] = avg_Each(bill_List[i])
} split_pos_n_neg = {}
for (i = 0; i < bill_List.length; i++) {
    for (k in bill_List[i]) {
        if (k in split_pos_n_neg) {
            split_pos_n_neg[k] = split_pos_n_neg[k] + bill_List[i][k]
        }
        else {
            split_pos_n_neg[k] = bill_List[i][k]
        }
    }
}
// console.log("avarg_each:", split_pos_n_neg)
get = {}
give = {}
for (i in split_pos_n_neg) {
    if (split_pos_n_neg[i] == 0) {
        console.log("no need to pay any one ")
    } else if (split_pos_n_neg[i] > 0) {
        get[i] = split_pos_n_neg[i]
    }
    else if (split_pos_n_neg[i] < 0) {
        give[i] = split_pos_n_neg[i]
    }
}

//shoted function deccending order****************************************************************************************************************************
const sort1 = (Object) => {
    list = []
    for (i in Object) {
        list.push(Object[i])
    } function sort(a, b) {
        return a - b
    }
    list.sort(sort)
    list.reverse()
    positive = {}
    for (e of list) {
        for (i in Object) {
            if (Object[i] == e) {
                positive[i] = e
            }
        }
    } return (positive)
}

// shoted function  Ascending order***************************************************************************************************************
const sort2 = (Object) => {
    list2 = []
    for (i in Object) {
        list2.push(Object[i])
    }
    function sort(a, b) {
        return a - b
    }
    list2.sort(sort)
    negative = {}
    for (e of list2) {
        for (i in Object) {
            if (Object[i] == e) {
                negative[i] = e
            }
        }
    }
    return (negative)
}
Average
Ascending= sort1(get)
Descending = sort2(give)
// console.log("Name & Get Amount:",Ascending)
// console.log("Name & Pay Amount:", Descending)
// console.log("summary for Settlement (Person & Amount:)")
// summary*****************************************************************************************************************************
for (k in Ascending) {
    for (m in Descending) {
        if (Ascending[k] != 0 && Descending[m] != 0) {
            if (Ascending[k] > Math.abs(Descending[m])) {
                console.log(m, "has pay Amount:", Math.abs(Descending[m]).toFixed(2), "Rs/- to", k)
               Ascending[k] =Ascending[k] - Math.abs(Descending[m])
                Descending[m] = 0
            }
            else if (Ascending[k] < Math.abs(Descending[m])) {
                console.log(m, "has pay Amount",Ascending[k].toFixed(2), "Rs/- to", k)
                Descending[m] =Ascending[k] - Math.abs(Descending[m])
               Ascending[k] = 0
            }
            else if (Ascending[k] == Math.abs(Descending[m])) {
                console.log(m, "has pay mount", Math.abs(Descending[m]).toFixed(2), "Rs/- to", k)
                Descending[m] = 0
               Ascending[k] = 0
            }
        }
    }
}
