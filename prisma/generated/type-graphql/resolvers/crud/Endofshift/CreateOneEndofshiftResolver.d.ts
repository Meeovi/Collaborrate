import { GraphQLResolveInfo } from "graphql";
import { CreateOneEndofshiftArgs } from "./args/CreateOneEndofshiftArgs";
import { Endofshift } from "../../../models/Endofshift";
export declare class CreateOneEndofshiftResolver {
    createOneEndofshift(ctx: any, info: GraphQLResolveInfo, args: CreateOneEndofshiftArgs): Promise<Endofshift>;
}
