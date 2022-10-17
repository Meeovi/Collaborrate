import { GraphQLResolveInfo } from "graphql";
import { CreateManyTax_categoryArgs } from "./args/CreateManyTax_categoryArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyTax_categoryResolver {
    createManyTax_category(ctx: any, info: GraphQLResolveInfo, args: CreateManyTax_categoryArgs): Promise<AffectedRowsOutput>;
}
