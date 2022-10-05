exports.createList = function (member) {
    return {
        type : 'list/create',
        payload: member
    }
} 

exports.updateList = function (member, id) {
    return{
        type: 'list/update',
        payload: {member, id}
    }
}

exports.deleteList = function (id) {
    return {
        type: 'list/delete',
        payload: {id}
    }
}