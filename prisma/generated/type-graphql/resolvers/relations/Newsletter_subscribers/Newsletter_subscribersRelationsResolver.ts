import * as TypeGraphQL from "type-graphql";
import { Customers } from "../../../models/Customers";
import { Newsletter_subscribers } from "../../../models/Newsletter_subscribers";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Newsletter_subscribers)
export class Newsletter_subscribersRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Customers, {
    nullable: false
  })
  async customers(@TypeGraphQL.Root() newsletter_subscribers: Newsletter_subscribers, @TypeGraphQL.Ctx() ctx: any): Promise<Customers> {
    return getPrismaFromContext(ctx).newsletter_subscribers.findUnique({
      where: {
        id: newsletter_subscribers.id,
      },
    }).customers({});
  }
}
