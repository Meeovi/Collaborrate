import { GraphQLResolveInfo } from "graphql";
import { AggregateLogInArgs } from "./args/AggregateLogInArgs";
import { CreateManyLogInArgs } from "./args/CreateManyLogInArgs";
import { CreateOneLogInArgs } from "./args/CreateOneLogInArgs";
import { DeleteManyLogInArgs } from "./args/DeleteManyLogInArgs";
import { DeleteOneLogInArgs } from "./args/DeleteOneLogInArgs";
import { FindFirstLogInArgs } from "./args/FindFirstLogInArgs";
import { FindManyLogInArgs } from "./args/FindManyLogInArgs";
import { FindUniqueLogInArgs } from "./args/FindUniqueLogInArgs";
import { GroupByLogInArgs } from "./args/GroupByLogInArgs";
import { UpdateManyLogInArgs } from "./args/UpdateManyLogInArgs";
import { UpdateOneLogInArgs } from "./args/UpdateOneLogInArgs";
import { UpsertOneLogInArgs } from "./args/UpsertOneLogInArgs";
import { LogIn } from "../../../models/LogIn";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateLogIn } from "../../outputs/AggregateLogIn";
import { LogInGroupBy } from "../../outputs/LogInGroupBy";
export declare class LogInCrudResolver {
    aggregateLogIn(ctx: any, info: GraphQLResolveInfo, args: AggregateLogInArgs): Promise<AggregateLogIn>;
    createManyLogIn(ctx: any, info: GraphQLResolveInfo, args: CreateManyLogInArgs): Promise<AffectedRowsOutput>;
    createOneLogIn(ctx: any, info: GraphQLResolveInfo, args: CreateOneLogInArgs): Promise<LogIn>;
    deleteManyLogIn(ctx: any, info: GraphQLResolveInfo, args: DeleteManyLogInArgs): Promise<AffectedRowsOutput>;
    deleteOneLogIn(ctx: any, info: GraphQLResolveInfo, args: DeleteOneLogInArgs): Promise<LogIn | null>;
    findFirstLogIn(ctx: any, info: GraphQLResolveInfo, args: FindFirstLogInArgs): Promise<LogIn | null>;
    logIns(ctx: any, info: GraphQLResolveInfo, args: FindManyLogInArgs): Promise<LogIn[]>;
    logIn(ctx: any, info: GraphQLResolveInfo, args: FindUniqueLogInArgs): Promise<LogIn | null>;
    groupByLogIn(ctx: any, info: GraphQLResolveInfo, args: GroupByLogInArgs): Promise<LogInGroupBy[]>;
    updateManyLogIn(ctx: any, info: GraphQLResolveInfo, args: UpdateManyLogInArgs): Promise<AffectedRowsOutput>;
    updateOneLogIn(ctx: any, info: GraphQLResolveInfo, args: UpdateOneLogInArgs): Promise<LogIn | null>;
    upsertOneLogIn(ctx: any, info: GraphQLResolveInfo, args: UpsertOneLogInArgs): Promise<LogIn>;
}