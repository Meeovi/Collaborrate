import { GraphQLResolveInfo } from "graphql";
import { UpdateOneEndofshiftArgs } from "./args/UpdateOneEndofshiftArgs";
import { Endofshift } from "../../../models/Endofshift";
export declare class UpdateOneEndofshiftResolver {
    updateOneEndofshift(ctx: any, info: GraphQLResolveInfo, args: UpdateOneEndofshiftArgs): Promise<Endofshift | null>;
}
