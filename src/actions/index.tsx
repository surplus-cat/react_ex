import { INCREMENT, DECREMENT } from 'src/constants';

//  actions/index.tsx 中定义了两个类型，分别负责添加和减少操作的行为。我们还定义了一个类型（ModifyAction），它描述了哪些 action 是可以增加或减少的。 
// 最后，我们定义了两个函数用来创建实际的 actions。

export interface IINCREMENTAction {
  type: INCREMENT;
}

export interface IDECREMENTAction {
  type: DECREMENT
}

// 定义 modifyAction 类型，包含 IINCREMENTAction 和 IDECREMENTAction 接口类型
export type ModifyAction = IINCREMENTAction | IDECREMENTAction;

// 增加 state 次数的方法
export const increment = ():IINCREMENTAction => ({
  type: INCREMENT
})


// 减少 state 次数的方法
export const decrement = ():IDECREMENTAction => ({
  type: DECREMENT
})