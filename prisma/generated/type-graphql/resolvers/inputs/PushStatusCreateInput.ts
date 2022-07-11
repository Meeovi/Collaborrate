import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PushStatusCreaterpermInput } from "../inputs/PushStatusCreaterpermInput";
import { PushStatusCreatewpermInput } from "../inputs/PushStatusCreatewpermInput";

@TypeGraphQL.InputType("PushStatusCreateInput", {
  isAbstract: true
})
export class PushStatusCreateInput {
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
  pushTime?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  source?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  query?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  payload?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  title?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  expiry?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  expiration_interval?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  status?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  numSent?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  numFailed?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  pushHash?: string | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  errorMessage?: Prisma.InputJsonValue | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  sentPerType?: Prisma.InputJsonValue | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  failedPerType?: Prisma.InputJsonValue | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  sentPerUTCOffset?: Prisma.InputJsonValue | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  failedPerUTCOffset?: Prisma.InputJsonValue | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  count?: number | undefined;

  @TypeGraphQL.Field(_type => PushStatusCreaterpermInput, {
    nullable: true
  })
  rperm?: PushStatusCreaterpermInput | undefined;

  @TypeGraphQL.Field(_type => PushStatusCreatewpermInput, {
    nullable: true
  })
  wperm?: PushStatusCreatewpermInput | undefined;
}
