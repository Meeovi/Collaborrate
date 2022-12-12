import { GraphQLResolveInfo } from "graphql";
import { UpdateOneOotoArgs } from "./args/UpdateOneOotoArgs";
import { Ooto } from "../../../models/Ooto";
export declare class UpdateOneOotoResolver {
    updateOneOoto(ctx: any, info: GraphQLResolveInfo, args: UpdateOneOotoArgs): Promise<Ooto | null>;
}
