import { GraphQLResolveInfo } from "graphql";
import { DeleteOneTargetsArgs } from "./args/DeleteOneTargetsArgs";
import { Targets } from "../../../models/Targets";
export declare class DeleteOneTargetsResolver {
    deleteOneTargets(ctx: any, info: GraphQLResolveInfo, args: DeleteOneTargetsArgs): Promise<Targets | null>;
}
