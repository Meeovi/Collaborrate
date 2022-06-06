import { GraphQLResolveInfo } from "graphql";
import { DeleteTargetsArgs } from "./args/DeleteTargetsArgs";
import { Targets } from "../../../models/Targets";
export declare class DeleteTargetsResolver {
    deleteTargets(ctx: any, info: GraphQLResolveInfo, args: DeleteTargetsArgs): Promise<Targets | null>;
}
