import { GraphQLResolveInfo } from "graphql";
import { UpsertApitokenArgs } from "./args/UpsertApitokenArgs";
import { Apitoken } from "../../../models/Apitoken";
export declare class UpsertApitokenResolver {
    upsertApitoken(ctx: any, info: GraphQLResolveInfo, args: UpsertApitokenArgs): Promise<Apitoken>;
}
