"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Special_discountsAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const client_1 = require("@prisma/client");
const scalars_1 = require("../../scalars");
let Special_discountsAvgAggregate = class Special_discountsAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Special_discountsAvgAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => scalars_1.DecimalJSScalar, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", client_1.Prisma.Decimal)
], Special_discountsAvgAggregate.prototype, "discount", void 0);
Special_discountsAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Special_discountsAvgAggregate", {
        isAbstract: true
    })
], Special_discountsAvgAggregate);
exports.Special_discountsAvgAggregate = Special_discountsAvgAggregate;
