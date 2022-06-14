import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("Url_rewritesMinAggregate", {
  isAbstract: true
})
export class Url_rewritesMinAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  request_path!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  redirect_type!: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  target_path!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  store!: string | null;
}
