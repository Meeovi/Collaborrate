import { GraphQLResolveInfo } from "graphql";
import { CreateOneApitokenArgs } from "./args/CreateOneApitokenArgs";
import { Apitoken } from "../../../models/Apitoken";
export declare class CreateOneApitokenResolver {
    createOneApitoken(ctx: any, info: GraphQLResolveInfo, args: CreateOneApitokenArgs): Promise<Apitoken>;
}
