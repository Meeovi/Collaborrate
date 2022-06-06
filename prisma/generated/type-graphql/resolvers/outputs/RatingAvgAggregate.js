"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const client_1 = require("@prisma/client");
const scalars_1 = require("../../scalars");
let RatingAvgAggregate = class RatingAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], RatingAvgAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => scalars_1.DecimalJSScalar, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", client_1.Prisma.Decimal)
], RatingAvgAggregate.prototype, "sort_order", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], RatingAvgAggregate.prototype, "prod_id", void 0);
RatingAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("RatingAvgAggregate", {
        isAbstract: true
    })
], RatingAvgAggregate);
exports.RatingAvgAggregate = RatingAvgAggregate;
