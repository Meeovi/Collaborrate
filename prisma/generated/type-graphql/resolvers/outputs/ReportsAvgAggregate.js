"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportsAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const client_1 = require("@prisma/client");
const scalars_1 = require("../../scalars");
let ReportsAvgAggregate = class ReportsAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ReportsAvgAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => scalars_1.DecimalJSScalar, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", client_1.Prisma.Decimal)
], ReportsAvgAggregate.prototype, "quantity", void 0);
ReportsAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ReportsAvgAggregate", {
        isAbstract: true
    })
], ReportsAvgAggregate);
exports.ReportsAvgAggregate = ReportsAvgAggregate;
