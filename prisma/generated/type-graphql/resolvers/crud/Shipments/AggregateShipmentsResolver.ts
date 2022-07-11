import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateShipmentsArgs } from "./args/AggregateShipmentsArgs";
import { Shipments } from "../../../models/Shipments";
import { AggregateShipments } from "../../outputs/AggregateShipments";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Shipments)
export class AggregateShipmentsResolver {
  @TypeGraphQL.Query(_returns => AggregateShipments, {
    nullable: false
  })
  async aggregateShipments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateShipmentsArgs): Promise<AggregateShipments> {
    return getPrismaFromContext(ctx).shipments.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
