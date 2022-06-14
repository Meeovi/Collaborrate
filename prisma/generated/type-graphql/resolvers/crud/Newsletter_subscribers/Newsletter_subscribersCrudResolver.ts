import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateNewsletter_subscribersArgs } from "./args/AggregateNewsletter_subscribersArgs";
import { CreateManyNewsletter_subscribersArgs } from "./args/CreateManyNewsletter_subscribersArgs";
import { CreateNewsletter_subscribersArgs } from "./args/CreateNewsletter_subscribersArgs";
import { DeleteManyNewsletter_subscribersArgs } from "./args/DeleteManyNewsletter_subscribersArgs";
import { DeleteNewsletter_subscribersArgs } from "./args/DeleteNewsletter_subscribersArgs";
import { FindFirstNewsletter_subscribersArgs } from "./args/FindFirstNewsletter_subscribersArgs";
import { FindManyNewsletter_subscribersArgs } from "./args/FindManyNewsletter_subscribersArgs";
import { FindUniqueNewsletter_subscribersArgs } from "./args/FindUniqueNewsletter_subscribersArgs";
import { GroupByNewsletter_subscribersArgs } from "./args/GroupByNewsletter_subscribersArgs";
import { UpdateManyNewsletter_subscribersArgs } from "./args/UpdateManyNewsletter_subscribersArgs";
import { UpdateNewsletter_subscribersArgs } from "./args/UpdateNewsletter_subscribersArgs";
import { UpsertNewsletter_subscribersArgs } from "./args/UpsertNewsletter_subscribersArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Newsletter_subscribers } from "../../../models/Newsletter_subscribers";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateNewsletter_subscribers } from "../../outputs/AggregateNewsletter_subscribers";
import { Newsletter_subscribersGroupBy } from "../../outputs/Newsletter_subscribersGroupBy";

@TypeGraphQL.Resolver(_of => Newsletter_subscribers)
export class Newsletter_subscribersCrudResolver {
  @TypeGraphQL.Query(_returns => Newsletter_subscribers, {
    nullable: true
  })
  async findUniqueNewsletter_subscribers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueNewsletter_subscribersArgs): Promise<Newsletter_subscribers | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).newsletter_subscribers.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Newsletter_subscribers, {
    nullable: true
  })
  async findFirstNewsletter_subscribers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstNewsletter_subscribersArgs): Promise<Newsletter_subscribers | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).newsletter_subscribers.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Newsletter_subscribers], {
    nullable: false
  })
  async findManyNewsletter_subscribers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyNewsletter_subscribersArgs): Promise<Newsletter_subscribers[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).newsletter_subscribers.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Newsletter_subscribers, {
    nullable: false
  })
  async createNewsletter_subscribers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateNewsletter_subscribersArgs): Promise<Newsletter_subscribers> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).newsletter_subscribers.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyNewsletter_subscribers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyNewsletter_subscribersArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).newsletter_subscribers.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Newsletter_subscribers, {
    nullable: true
  })
  async deleteNewsletter_subscribers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteNewsletter_subscribersArgs): Promise<Newsletter_subscribers | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).newsletter_subscribers.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Newsletter_subscribers, {
    nullable: true
  })
  async updateNewsletter_subscribers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateNewsletter_subscribersArgs): Promise<Newsletter_subscribers | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).newsletter_subscribers.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyNewsletter_subscribers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyNewsletter_subscribersArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).newsletter_subscribers.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyNewsletter_subscribers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyNewsletter_subscribersArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).newsletter_subscribers.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Newsletter_subscribers, {
    nullable: false
  })
  async upsertNewsletter_subscribers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertNewsletter_subscribersArgs): Promise<Newsletter_subscribers> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).newsletter_subscribers.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AggregateNewsletter_subscribers, {
    nullable: false
  })
  async aggregateNewsletter_subscribers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateNewsletter_subscribersArgs): Promise<AggregateNewsletter_subscribers> {
    return getPrismaFromContext(ctx).newsletter_subscribers.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [Newsletter_subscribersGroupBy], {
    nullable: false
  })
  async groupByNewsletter_subscribers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByNewsletter_subscribersArgs): Promise<Newsletter_subscribersGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).newsletter_subscribers.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
