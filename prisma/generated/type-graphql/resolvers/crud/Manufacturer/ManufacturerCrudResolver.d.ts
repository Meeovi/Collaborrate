import type { GraphQLResolveInfo } from "graphql";
import { AggregateManufacturerArgs } from "./args/AggregateManufacturerArgs";
import { CreateOneManufacturerArgs } from "./args/CreateOneManufacturerArgs";
import { DeleteManyManufacturerArgs } from "./args/DeleteManyManufacturerArgs";
import { DeleteOneManufacturerArgs } from "./args/DeleteOneManufacturerArgs";
import { FindFirstManufacturerArgs } from "./args/FindFirstManufacturerArgs";
import { FindFirstManufacturerOrThrowArgs } from "./args/FindFirstManufacturerOrThrowArgs";
import { FindManyManufacturerArgs } from "./args/FindManyManufacturerArgs";
import { FindUniqueManufacturerArgs } from "./args/FindUniqueManufacturerArgs";
import { FindUniqueManufacturerOrThrowArgs } from "./args/FindUniqueManufacturerOrThrowArgs";
import { GroupByManufacturerArgs } from "./args/GroupByManufacturerArgs";
import { UpdateManyManufacturerArgs } from "./args/UpdateManyManufacturerArgs";
import { UpdateOneManufacturerArgs } from "./args/UpdateOneManufacturerArgs";
import { UpsertOneManufacturerArgs } from "./args/UpsertOneManufacturerArgs";
import { Manufacturer } from "../../../models/Manufacturer";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateManufacturer } from "../../outputs/AggregateManufacturer";
import { ManufacturerGroupBy } from "../../outputs/ManufacturerGroupBy";
export declare class ManufacturerCrudResolver {
    aggregateManufacturer(ctx: any, info: GraphQLResolveInfo, args: AggregateManufacturerArgs): Promise<AggregateManufacturer>;
    createOneManufacturer(ctx: any, info: GraphQLResolveInfo, args: CreateOneManufacturerArgs): Promise<Manufacturer>;
    deleteManyManufacturer(ctx: any, info: GraphQLResolveInfo, args: DeleteManyManufacturerArgs): Promise<AffectedRowsOutput>;
    deleteOneManufacturer(ctx: any, info: GraphQLResolveInfo, args: DeleteOneManufacturerArgs): Promise<Manufacturer | null>;
    findFirstManufacturer(ctx: any, info: GraphQLResolveInfo, args: FindFirstManufacturerArgs): Promise<Manufacturer | null>;
    findFirstManufacturerOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstManufacturerOrThrowArgs): Promise<Manufacturer | null>;
    manufacturers(ctx: any, info: GraphQLResolveInfo, args: FindManyManufacturerArgs): Promise<Manufacturer[]>;
    manufacturer(ctx: any, info: GraphQLResolveInfo, args: FindUniqueManufacturerArgs): Promise<Manufacturer | null>;
    getManufacturer(ctx: any, info: GraphQLResolveInfo, args: FindUniqueManufacturerOrThrowArgs): Promise<Manufacturer | null>;
    groupByManufacturer(ctx: any, info: GraphQLResolveInfo, args: GroupByManufacturerArgs): Promise<ManufacturerGroupBy[]>;
    updateManyManufacturer(ctx: any, info: GraphQLResolveInfo, args: UpdateManyManufacturerArgs): Promise<AffectedRowsOutput>;
    updateOneManufacturer(ctx: any, info: GraphQLResolveInfo, args: UpdateOneManufacturerArgs): Promise<Manufacturer | null>;
    upsertOneManufacturer(ctx: any, info: GraphQLResolveInfo, args: UpsertOneManufacturerArgs): Promise<Manufacturer>;
}
