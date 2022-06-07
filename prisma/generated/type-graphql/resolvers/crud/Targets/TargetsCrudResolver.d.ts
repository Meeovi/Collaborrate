import { GraphQLResolveInfo } from "graphql";
import { AggregateTargetsArgs } from "./args/AggregateTargetsArgs";
import { CreateManyTargetsArgs } from "./args/CreateManyTargetsArgs";
import { CreateTargetsArgs } from "./args/CreateTargetsArgs";
import { DeleteManyTargetsArgs } from "./args/DeleteManyTargetsArgs";
import { DeleteTargetsArgs } from "./args/DeleteTargetsArgs";
import { FindFirstTargetsArgs } from "./args/FindFirstTargetsArgs";
import { FindManyTargetsArgs } from "./args/FindManyTargetsArgs";
import { FindUniqueTargetsArgs } from "./args/FindUniqueTargetsArgs";
import { GroupByTargetsArgs } from "./args/GroupByTargetsArgs";
import { UpdateManyTargetsArgs } from "./args/UpdateManyTargetsArgs";
import { UpdateTargetsArgs } from "./args/UpdateTargetsArgs";
import { UpsertTargetsArgs } from "./args/UpsertTargetsArgs";
import { Targets } from "../../../models/Targets";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateTargets } from "../../outputs/AggregateTargets";
import { TargetsGroupBy } from "../../outputs/TargetsGroupBy";
export declare class TargetsCrudResolver {
    findUniqueTargets(ctx: any, info: GraphQLResolveInfo, args: FindUniqueTargetsArgs): Promise<Targets | null>;
    findFirstTargets(ctx: any, info: GraphQLResolveInfo, args: FindFirstTargetsArgs): Promise<Targets | null>;
    findManyTargets(ctx: any, info: GraphQLResolveInfo, args: FindManyTargetsArgs): Promise<Targets[]>;
    createTargets(ctx: any, info: GraphQLResolveInfo, args: CreateTargetsArgs): Promise<Targets>;
    createManyTargets(ctx: any, info: GraphQLResolveInfo, args: CreateManyTargetsArgs): Promise<AffectedRowsOutput>;
    deleteTargets(ctx: any, info: GraphQLResolveInfo, args: DeleteTargetsArgs): Promise<Targets | null>;
    updateTargets(ctx: any, info: GraphQLResolveInfo, args: UpdateTargetsArgs): Promise<Targets | null>;
    deleteManyTargets(ctx: any, info: GraphQLResolveInfo, args: DeleteManyTargetsArgs): Promise<AffectedRowsOutput>;
    updateManyTargets(ctx: any, info: GraphQLResolveInfo, args: UpdateManyTargetsArgs): Promise<AffectedRowsOutput>;
    upsertTargets(ctx: any, info: GraphQLResolveInfo, args: UpsertTargetsArgs): Promise<Targets>;
    aggregateTargets(ctx: any, info: GraphQLResolveInfo, args: AggregateTargetsArgs): Promise<AggregateTargets>;
    groupByTargets(ctx: any, info: GraphQLResolveInfo, args: GroupByTargetsArgs): Promise<TargetsGroupBy[]>;
}