import { createAction } from "@ngrx/store";

export const increment = createAction(
    "[incremenet]"
)

export const decrement = createAction(
    "[decrement]"
)

export const reset = createAction(
    "[reset]"
)
