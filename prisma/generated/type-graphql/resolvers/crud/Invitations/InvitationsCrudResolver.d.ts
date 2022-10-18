import { GraphQLResolveInfo } from "graphql";
import { AggregateInvitationsArgs } from "./args/AggregateInvitationsArgs";
import { CreateManyInvitationsArgs } from "./args/CreateManyInvitationsArgs";
import { CreateOneInvitationsArgs } from "./args/CreateOneInvitationsArgs";
import { DeleteManyInvitationsArgs } from "./args/DeleteManyInvitationsArgs";
import { DeleteOneInvitationsArgs } from "./args/DeleteOneInvitationsArgs";
import { FindFirstInvitationsArgs } from "./args/FindFirstInvitationsArgs";
import { FindManyInvitationsArgs } from "./args/FindManyInvitationsArgs";
import { FindUniqueInvitationsArgs } from "./args/FindUniqueInvitationsArgs";
import { GroupByInvitationsArgs } from "./args/GroupByInvitationsArgs";
import { UpdateManyInvitationsArgs } from "./args/UpdateManyInvitationsArgs";
import { UpdateOneInvitationsArgs } from "./args/UpdateOneInvitationsArgs";
import { UpsertOneInvitationsArgs } from "./args/UpsertOneInvitationsArgs";
import { Invitations } from "../../../models/Invitations";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateInvitations } from "../../outputs/AggregateInvitations";
import { InvitationsGroupBy } from "../../outputs/InvitationsGroupBy";
export declare class InvitationsCrudResolver {
    aggregateInvitations(ctx: any, info: GraphQLResolveInfo, args: AggregateInvitationsArgs): Promise<AggregateInvitations>;
    createManyInvitations(ctx: any, info: GraphQLResolveInfo, args: CreateManyInvitationsArgs): Promise<AffectedRowsOutput>;
    createOneInvitations(ctx: any, info: GraphQLResolveInfo, args: CreateOneInvitationsArgs): Promise<Invitations>;
    deleteManyInvitations(ctx: any, info: GraphQLResolveInfo, args: DeleteManyInvitationsArgs): Promise<AffectedRowsOutput>;
    deleteOneInvitations(ctx: any, info: GraphQLResolveInfo, args: DeleteOneInvitationsArgs): Promise<Invitations | null>;
    findFirstInvitations(ctx: any, info: GraphQLResolveInfo, args: FindFirstInvitationsArgs): Promise<Invitations | null>;
    findManyInvitations(ctx: any, info: GraphQLResolveInfo, args: FindManyInvitationsArgs): Promise<Invitations[]>;
    findUniqueInvitations(ctx: any, info: GraphQLResolveInfo, args: FindUniqueInvitationsArgs): Promise<Invitations | null>;
    groupByInvitations(ctx: any, info: GraphQLResolveInfo, args: GroupByInvitationsArgs): Promise<InvitationsGroupBy[]>;
    updateManyInvitations(ctx: any, info: GraphQLResolveInfo, args: UpdateManyInvitationsArgs): Promise<AffectedRowsOutput>;
    updateOneInvitations(ctx: any, info: GraphQLResolveInfo, args: UpdateOneInvitationsArgs): Promise<Invitations | null>;
    upsertOneInvitations(ctx: any, info: GraphQLResolveInfo, args: UpsertOneInvitationsArgs): Promise<Invitations>;
}