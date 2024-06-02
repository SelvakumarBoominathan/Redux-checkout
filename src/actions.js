//Redux Store

// action to handle the total cost value based on cart items
export const Update_totalCost = "Update_totalCost";

export const updateTotalCost = (newTotalCost) => ({
  type: Update_totalCost,
  payload: newTotalCost,
});

// Action to render the updated Data after deletion
export const DELETE_PRODUCT = "DELETE_PRODUCT";

export const deleteProduct = (prodID) => ({
  type: DELETE_PRODUCT,
  payload: prodID,
});
