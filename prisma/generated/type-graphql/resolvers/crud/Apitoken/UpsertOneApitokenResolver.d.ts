import { GraphQLResolveInfo } from "graphql";
import { UpsertOneApitokenArgs } from "./args/UpsertOneApitokenArgs";
import { Apitoken } from "../../../models/Apitoken";
export declare class UpsertOneApitokenResolver {
    upsertOneApitoken(ctx: any, info: GraphQLResolveInfo, args: UpsertOneApitokenArgs): Promise<Apitoken>;
}
