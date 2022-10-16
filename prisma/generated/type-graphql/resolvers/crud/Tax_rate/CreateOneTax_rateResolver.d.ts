import { GraphQLResolveInfo } from "graphql";
import { CreateOneTax_rateArgs } from "./args/CreateOneTax_rateArgs";
import { Tax_rate } from "../../../models/Tax_rate";
export declare class CreateOneTax_rateResolver {
    createOneTax_rate(ctx: any, info: GraphQLResolveInfo, args: CreateOneTax_rateArgs): Promise<Tax_rate>;
}
