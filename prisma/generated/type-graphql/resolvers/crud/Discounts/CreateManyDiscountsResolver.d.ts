import { GraphQLResolveInfo } from "graphql";
import { CreateManyDiscountsArgs } from "./args/CreateManyDiscountsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyDiscountsResolver {
    createManyDiscounts(ctx: any, info: GraphQLResolveInfo, args: CreateManyDiscountsArgs): Promise<AffectedRowsOutput>;
}
