import { GraphQLResolveInfo } from "graphql";
import { CreateOneTaxesArgs } from "./args/CreateOneTaxesArgs";
import { Taxes } from "../../../models/Taxes";
export declare class CreateOneTaxesResolver {
    createOneTaxes(ctx: any, info: GraphQLResolveInfo, args: CreateOneTaxesArgs): Promise<Taxes>;
}
