import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateSCHEMAArgs } from "./args/AggregateSCHEMAArgs";
import { CreateManySCHEMAArgs } from "./args/CreateManySCHEMAArgs";
import { CreateOneSCHEMAArgs } from "./args/CreateOneSCHEMAArgs";
import { DeleteManySCHEMAArgs } from "./args/DeleteManySCHEMAArgs";
import { DeleteOneSCHEMAArgs } from "./args/DeleteOneSCHEMAArgs";
import { FindFirstSCHEMAArgs } from "./args/FindFirstSCHEMAArgs";
import { FindManySCHEMAArgs } from "./args/FindManySCHEMAArgs";
import { FindUniqueSCHEMAArgs } from "./args/FindUniqueSCHEMAArgs";
import { GroupBySCHEMAArgs } from "./args/GroupBySCHEMAArgs";
import { UpdateManySCHEMAArgs } from "./args/UpdateManySCHEMAArgs";
import { UpdateOneSCHEMAArgs } from "./args/UpdateOneSCHEMAArgs";
import { UpsertOneSCHEMAArgs } from "./args/UpsertOneSCHEMAArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { SCHEMA } from "../../../models/SCHEMA";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateSCHEMA } from "../../outputs/AggregateSCHEMA";
import { SCHEMAGroupBy } from "../../outputs/SCHEMAGroupBy";

@TypeGraphQL.Resolver(_of => SCHEMA)
export class SCHEMACrudResolver {
  @TypeGraphQL.Query(_returns => AggregateSCHEMA, {
    nullable: false
  })
  async aggregateSCHEMA(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSCHEMAArgs): Promise<AggregateSCHEMA> {
    return getPrismaFromContext(ctx).sCHEMA.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManySCHEMA(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManySCHEMAArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).sCHEMA.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => SCHEMA, {
    nullable: false
  })
  async createOneSCHEMA(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneSCHEMAArgs): Promise<SCHEMA> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).sCHEMA.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManySCHEMA(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManySCHEMAArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).sCHEMA.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => SCHEMA, {
    nullable: true
  })
  async deleteOneSCHEMA(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneSCHEMAArgs): Promise<SCHEMA | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).sCHEMA.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => SCHEMA, {
    nullable: true
  })
  async findFirstSCHEMA(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstSCHEMAArgs): Promise<SCHEMA | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).sCHEMA.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [SCHEMA], {
    nullable: false
  })
  async schemata(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManySCHEMAArgs): Promise<SCHEMA[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).sCHEMA.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => SCHEMA, {
    nullable: true
  })
  async sCHEMA(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueSCHEMAArgs): Promise<SCHEMA | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).sCHEMA.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [SCHEMAGroupBy], {
    nullable: false
  })
  async groupBySCHEMA(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupBySCHEMAArgs): Promise<SCHEMAGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).sCHEMA.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManySCHEMA(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManySCHEMAArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).sCHEMA.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => SCHEMA, {
    nullable: true
  })
  async updateOneSCHEMA(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneSCHEMAArgs): Promise<SCHEMA | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).sCHEMA.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => SCHEMA, {
    nullable: false
  })
  async upsertOneSCHEMA(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneSCHEMAArgs): Promise<SCHEMA> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).sCHEMA.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
