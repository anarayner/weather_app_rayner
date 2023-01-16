import {makeAutoObservable} from 'mobx';

class ValueStore {

    _degree = 'F'

    constructor() {
        makeAutoObservable(this)
    }


    setDegree(degree: string){
        this._degree = degree
    }

    get degree(){
        return this._degree
    }


    changeDegree(degree: string){
        try{
            if(degree == 'F') this.setDegree('C')
            if(degree == 'C') this.setDegree('F')
        }catch (e) {
            console.log(e)
        }
    }
}

export default ValueStore;