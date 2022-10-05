const dataTodo = window.localStorage.getItem('dataTodo')

if(!dataTodo) {
    window.localStorage.setItem('dataTodo') = []
}


export const listReducer = function (state = dataTodo , action) {
    switch (action.type) {
        case 'list/create':
            return [...state, action.payload]            
    
        case 'list/update':
            let newData = [...dataTodo]
            newData.map((value, index) => {
                if(value.id == action.payload.id) {
                    value == action.payload.member
                } 
            })
            return newData
        case 'list/delete':
            let dataCoppy = [...dataTodo]
            let ind 
            dataCoppy.map((value,index) => {
                if(value.id == action.payload.id) {
                    ind = index 
                }
            })
            dataCoppy.splice(ind, 1)
            return dataCoppy
        default:
            return state
    }
}