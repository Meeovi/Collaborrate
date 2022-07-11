import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AudienceCreaterpermInput } from "../inputs/AudienceCreaterpermInput";
import { AudienceCreatewpermInput } from "../inputs/AudienceCreatewpermInput";

@TypeGraphQL.InputType("AudienceCreateManyInput", {
  isAbstract: true
})
export class AudienceCreateManyInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  objectId!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  query?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  lastUsed?: Date | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  timesUsed?: number | undefined;

  @TypeGraphQL.Field(_type => AudienceCreaterpermInput, {
    nullable: true
  })
  rperm?: AudienceCreaterpermInput | undefined;

  @TypeGraphQL.Field(_type => AudienceCreatewpermInput, {
    nullable: true
  })
  wperm?: AudienceCreatewpermInput | undefined;
}
