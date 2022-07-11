import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("EndofshiftMinAggregate", {
  isAbstract: true
})
export class EndofshiftMinAggregate {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  id!: bigint | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  content!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  login!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  mcms!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  next_shift!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  projects!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tickets!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  whid!: string | null;
}
