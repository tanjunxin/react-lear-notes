import { action, computed, observable } from 'mobx'

// class写法要通过装饰器来生成
// 装饰器的使用需要去配置babel及tsconfig
// @observable可以将任何类型的数据进行修饰, 其读取值(this.xxx)和修改值(this.xxx = xxx)方式等同于原生方式
// @computed get定义计算属性
// @action定义方法
class Store {
    @observable num = 5
    @observable number = 10
    @computed get count() {
        return this.num * this.number
    }
    @action increment = (val) => {
        this.num = this.num + val
    }
    @action decrement = (val) => {
        this.num = this.num + val
    }
}

// 用个变量来接收实例化, 再将变量暴露出去
const clsStore = new Store()

export default clsStore