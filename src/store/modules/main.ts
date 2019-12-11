import {
    Module,
    VuexModule,
    Mutation,
    Action,
    getModule
} from "vuex-module-decorators";

import store from "@/store";

@Module({ name: "Main", store, dynamic: true })
class Main extends VuexModule {
    count = 0;
    sum = 0;

    @Mutation
    increment(delta: number) {
        this.count += delta;
    }
    @Mutation
    decrement(delta: number) {
        this.count -= delta;
    }

    // action 'incr' commits mutation 'increment' when done with return value as payload
    @Action({ commit: "increment" })
    incr() {
        return 5;
    }
    // action 'decr' commits mutation 'decrement' when done with return value as payload
    @Action({ commit: "decrement" })
    decr() {
        return 5;
    }
}

export const MainModule = getModule(Main);
