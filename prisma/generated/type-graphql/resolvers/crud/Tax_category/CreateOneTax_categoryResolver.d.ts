import { GraphQLResolveInfo } from "graphql";
import { CreateOneTax_categoryArgs } from "./args/CreateOneTax_categoryArgs";
import { Tax_category } from "../../../models/Tax_category";
export declare class CreateOneTax_categoryResolver {
    createOneTax_category(ctx: any, info: GraphQLResolveInfo, args: CreateOneTax_categoryArgs): Promise<Tax_category>;
}
