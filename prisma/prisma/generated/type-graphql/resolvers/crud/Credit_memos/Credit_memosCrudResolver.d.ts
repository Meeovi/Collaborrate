import { GraphQLResolveInfo } from "graphql";
import { AggregateCredit_memosArgs } from "./args/AggregateCredit_memosArgs";
import { CreateCredit_memosArgs } from "./args/CreateCredit_memosArgs";
import { CreateManyCredit_memosArgs } from "./args/CreateManyCredit_memosArgs";
import { DeleteCredit_memosArgs } from "./args/DeleteCredit_memosArgs";
import { DeleteManyCredit_memosArgs } from "./args/DeleteManyCredit_memosArgs";
import { FindFirstCredit_memosArgs } from "./args/FindFirstCredit_memosArgs";
import { FindManyCredit_memosArgs } from "./args/FindManyCredit_memosArgs";
import { FindUniqueCredit_memosArgs } from "./args/FindUniqueCredit_memosArgs";
import { GroupByCredit_memosArgs } from "./args/GroupByCredit_memosArgs";
import { UpdateCredit_memosArgs } from "./args/UpdateCredit_memosArgs";
import { UpdateManyCredit_memosArgs } from "./args/UpdateManyCredit_memosArgs";
import { UpsertCredit_memosArgs } from "./args/UpsertCredit_memosArgs";
import { Credit_memos } from "../../../models/Credit_memos";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateCredit_memos } from "../../outputs/AggregateCredit_memos";
import { Credit_memosGroupBy } from "../../outputs/Credit_memosGroupBy";
export declare class Credit_memosCrudResolver {
    findUniqueCredit_memos(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCredit_memosArgs): Promise<Credit_memos | null>;
    findFirstCredit_memos(ctx: any, info: GraphQLResolveInfo, args: FindFirstCredit_memosArgs): Promise<Credit_memos | null>;
    findManyCredit_memos(ctx: any, info: GraphQLResolveInfo, args: FindManyCredit_memosArgs): Promise<Credit_memos[]>;
    createCredit_memos(ctx: any, info: GraphQLResolveInfo, args: CreateCredit_memosArgs): Promise<Credit_memos>;
    createManyCredit_memos(ctx: any, info: GraphQLResolveInfo, args: CreateManyCredit_memosArgs): Promise<AffectedRowsOutput>;
    deleteCredit_memos(ctx: any, info: GraphQLResolveInfo, args: DeleteCredit_memosArgs): Promise<Credit_memos | null>;
    updateCredit_memos(ctx: any, info: GraphQLResolveInfo, args: UpdateCredit_memosArgs): Promise<Credit_memos | null>;
    deleteManyCredit_memos(ctx: any, info: GraphQLResolveInfo, args: DeleteManyCredit_memosArgs): Promise<AffectedRowsOutput>;
    updateManyCredit_memos(ctx: any, info: GraphQLResolveInfo, args: UpdateManyCredit_memosArgs): Promise<AffectedRowsOutput>;
    upsertCredit_memos(ctx: any, info: GraphQLResolveInfo, args: UpsertCredit_memosArgs): Promise<Credit_memos>;
    aggregateCredit_memos(ctx: any, info: GraphQLResolveInfo, args: AggregateCredit_memosArgs): Promise<AggregateCredit_memos>;
    groupByCredit_memos(ctx: any, info: GraphQLResolveInfo, args: GroupByCredit_memosArgs): Promise<Credit_memosGroupBy[]>;
}