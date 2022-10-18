import { GraphQLResolveInfo } from "graphql";
import { AggregateSpecial_discountsArgs } from "./args/AggregateSpecial_discountsArgs";
import { CreateManySpecial_discountsArgs } from "./args/CreateManySpecial_discountsArgs";
import { CreateOneSpecial_discountsArgs } from "./args/CreateOneSpecial_discountsArgs";
import { DeleteManySpecial_discountsArgs } from "./args/DeleteManySpecial_discountsArgs";
import { DeleteOneSpecial_discountsArgs } from "./args/DeleteOneSpecial_discountsArgs";
import { FindFirstSpecial_discountsArgs } from "./args/FindFirstSpecial_discountsArgs";
import { FindManySpecial_discountsArgs } from "./args/FindManySpecial_discountsArgs";
import { FindUniqueSpecial_discountsArgs } from "./args/FindUniqueSpecial_discountsArgs";
import { GroupBySpecial_discountsArgs } from "./args/GroupBySpecial_discountsArgs";
import { UpdateManySpecial_discountsArgs } from "./args/UpdateManySpecial_discountsArgs";
import { UpdateOneSpecial_discountsArgs } from "./args/UpdateOneSpecial_discountsArgs";
import { UpsertOneSpecial_discountsArgs } from "./args/UpsertOneSpecial_discountsArgs";
import { Special_discounts } from "../../../models/Special_discounts";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateSpecial_discounts } from "../../outputs/AggregateSpecial_discounts";
import { Special_discountsGroupBy } from "../../outputs/Special_discountsGroupBy";
export declare class Special_discountsCrudResolver {
    aggregateSpecial_discounts(ctx: any, info: GraphQLResolveInfo, args: AggregateSpecial_discountsArgs): Promise<AggregateSpecial_discounts>;
    createManySpecial_discounts(ctx: any, info: GraphQLResolveInfo, args: CreateManySpecial_discountsArgs): Promise<AffectedRowsOutput>;
    createOneSpecial_discounts(ctx: any, info: GraphQLResolveInfo, args: CreateOneSpecial_discountsArgs): Promise<Special_discounts>;
    deleteManySpecial_discounts(ctx: any, info: GraphQLResolveInfo, args: DeleteManySpecial_discountsArgs): Promise<AffectedRowsOutput>;
    deleteOneSpecial_discounts(ctx: any, info: GraphQLResolveInfo, args: DeleteOneSpecial_discountsArgs): Promise<Special_discounts | null>;
    findFirstSpecial_discounts(ctx: any, info: GraphQLResolveInfo, args: FindFirstSpecial_discountsArgs): Promise<Special_discounts | null>;
    findManySpecial_discounts(ctx: any, info: GraphQLResolveInfo, args: FindManySpecial_discountsArgs): Promise<Special_discounts[]>;
    findUniqueSpecial_discounts(ctx: any, info: GraphQLResolveInfo, args: FindUniqueSpecial_discountsArgs): Promise<Special_discounts | null>;
    groupBySpecial_discounts(ctx: any, info: GraphQLResolveInfo, args: GroupBySpecial_discountsArgs): Promise<Special_discountsGroupBy[]>;
    updateManySpecial_discounts(ctx: any, info: GraphQLResolveInfo, args: UpdateManySpecial_discountsArgs): Promise<AffectedRowsOutput>;
    updateOneSpecial_discounts(ctx: any, info: GraphQLResolveInfo, args: UpdateOneSpecial_discountsArgs): Promise<Special_discounts | null>;
    upsertOneSpecial_discounts(ctx: any, info: GraphQLResolveInfo, args: UpsertOneSpecial_discountsArgs): Promise<Special_discounts>;
}