import { GraphQLResolveInfo } from "graphql";
import { CreateManySpecial_discountsArgs } from "./args/CreateManySpecial_discountsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManySpecial_discountsResolver {
    createManySpecial_discounts(ctx: any, info: GraphQLResolveInfo, args: CreateManySpecial_discountsArgs): Promise<AffectedRowsOutput>;
}
