import { GraphQLResolveInfo } from "graphql";
import { CreateOneBrandsArgs } from "./args/CreateOneBrandsArgs";
import { Brands } from "../../../models/Brands";
export declare class CreateOneBrandsResolver {
    createOneBrands(ctx: any, info: GraphQLResolveInfo, args: CreateOneBrandsArgs): Promise<Brands>;
}
