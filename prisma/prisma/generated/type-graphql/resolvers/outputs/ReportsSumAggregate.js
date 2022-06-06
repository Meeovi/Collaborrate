"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportsSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const client_1 = require("@prisma/client");
const scalars_1 = require("../../scalars");
let ReportsSumAggregate = class ReportsSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ReportsSumAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => scalars_1.DecimalJSScalar, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", client_1.Prisma.Decimal)
], ReportsSumAggregate.prototype, "quantity", void 0);
ReportsSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ReportsSumAggregate", {
        isAbstract: true
    })
], ReportsSumAggregate);
exports.ReportsSumAggregate = ReportsSumAggregate;
