function cardReducer(state, action){
    const {type , payload} = action;
    switch(type){
        case cartAction.add:{
            return""
        }
        case cartAction.delete:{
            return""
        }
        case cartAction.edit:{
            return""
        }
        case cartAction.update:{
            return""
        }
        default:{
            return state;
        }
    }
}

const cartAction={
    add:"CART_ADD_ITEM",
    delete:"CART_DELETE_ITEM",
    edit:"CART_EDIT_ITEM",
    update:"CART_UPDATE_ITEM",
}

export {cartAction,cardReducer};