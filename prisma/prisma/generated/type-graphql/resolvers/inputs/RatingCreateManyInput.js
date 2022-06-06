"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const client_1 = require("@prisma/client");
const scalars_1 = require("../../scalars");
let RatingCreateManyInput = class RatingCreateManyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], RatingCreateManyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RatingCreateManyInput.prototype, "default_value", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RatingCreateManyInput.prototype, "default_store_view", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RatingCreateManyInput.prototype, "rating_visibility", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], RatingCreateManyInput.prototype, "active", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => scalars_1.DecimalJSScalar, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", client_1.Prisma.Decimal)
], RatingCreateManyInput.prototype, "sort_order", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], RatingCreateManyInput.prototype, "prod_id", void 0);
RatingCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RatingCreateManyInput", {
        isAbstract: true
    })
], RatingCreateManyInput);
exports.RatingCreateManyInput = RatingCreateManyInput;
