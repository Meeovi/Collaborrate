import type { GraphQLResolveInfo } from "graphql";
import { AggregateCustomersArgs } from "./args/AggregateCustomersArgs";
import { CreateOneCustomersArgs } from "./args/CreateOneCustomersArgs";
import { DeleteManyCustomersArgs } from "./args/DeleteManyCustomersArgs";
import { DeleteOneCustomersArgs } from "./args/DeleteOneCustomersArgs";
import { FindFirstCustomersArgs } from "./args/FindFirstCustomersArgs";
import { FindFirstCustomersOrThrowArgs } from "./args/FindFirstCustomersOrThrowArgs";
import { FindManyCustomersArgs } from "./args/FindManyCustomersArgs";
import { FindUniqueCustomersArgs } from "./args/FindUniqueCustomersArgs";
import { FindUniqueCustomersOrThrowArgs } from "./args/FindUniqueCustomersOrThrowArgs";
import { GroupByCustomersArgs } from "./args/GroupByCustomersArgs";
import { UpdateManyCustomersArgs } from "./args/UpdateManyCustomersArgs";
import { UpdateOneCustomersArgs } from "./args/UpdateOneCustomersArgs";
import { UpsertOneCustomersArgs } from "./args/UpsertOneCustomersArgs";
import { Customers } from "../../../models/Customers";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateCustomers } from "../../outputs/AggregateCustomers";
import { CustomersGroupBy } from "../../outputs/CustomersGroupBy";
export declare class CustomersCrudResolver {
    aggregateCustomers(ctx: any, info: GraphQLResolveInfo, args: AggregateCustomersArgs): Promise<AggregateCustomers>;
    createOneCustomers(ctx: any, info: GraphQLResolveInfo, args: CreateOneCustomersArgs): Promise<Customers>;
    deleteManyCustomers(ctx: any, info: GraphQLResolveInfo, args: DeleteManyCustomersArgs): Promise<AffectedRowsOutput>;
    deleteOneCustomers(ctx: any, info: GraphQLResolveInfo, args: DeleteOneCustomersArgs): Promise<Customers | null>;
    findFirstCustomers(ctx: any, info: GraphQLResolveInfo, args: FindFirstCustomersArgs): Promise<Customers | null>;
    findFirstCustomersOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstCustomersOrThrowArgs): Promise<Customers | null>;
    findManyCustomers(ctx: any, info: GraphQLResolveInfo, args: FindManyCustomersArgs): Promise<Customers[]>;
    findUniqueCustomers(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCustomersArgs): Promise<Customers | null>;
    findUniqueCustomersOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCustomersOrThrowArgs): Promise<Customers | null>;
    groupByCustomers(ctx: any, info: GraphQLResolveInfo, args: GroupByCustomersArgs): Promise<CustomersGroupBy[]>;
    updateManyCustomers(ctx: any, info: GraphQLResolveInfo, args: UpdateManyCustomersArgs): Promise<AffectedRowsOutput>;
    updateOneCustomers(ctx: any, info: GraphQLResolveInfo, args: UpdateOneCustomersArgs): Promise<Customers | null>;
    upsertOneCustomers(ctx: any, info: GraphQLResolveInfo, args: UpsertOneCustomersArgs): Promise<Customers>;
}
