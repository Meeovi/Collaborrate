import { GraphQLResolveInfo } from "graphql";
import { DeleteOneEndofshiftArgs } from "./args/DeleteOneEndofshiftArgs";
import { Endofshift } from "../../../models/Endofshift";
export declare class DeleteOneEndofshiftResolver {
    deleteOneEndofshift(ctx: any, info: GraphQLResolveInfo, args: DeleteOneEndofshiftArgs): Promise<Endofshift | null>;
}
