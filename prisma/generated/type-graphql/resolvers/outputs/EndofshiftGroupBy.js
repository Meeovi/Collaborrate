"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EndofshiftGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const EndofshiftAvgAggregate_1 = require("../outputs/EndofshiftAvgAggregate");
const EndofshiftCountAggregate_1 = require("../outputs/EndofshiftCountAggregate");
const EndofshiftMaxAggregate_1 = require("../outputs/EndofshiftMaxAggregate");
const EndofshiftMinAggregate_1 = require("../outputs/EndofshiftMinAggregate");
const EndofshiftSumAggregate_1 = require("../outputs/EndofshiftSumAggregate");
let EndofshiftGroupBy = class EndofshiftGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], EndofshiftGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], EndofshiftGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EndofshiftGroupBy.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EndofshiftGroupBy.prototype, "login", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EndofshiftGroupBy.prototype, "mcms", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EndofshiftGroupBy.prototype, "next_shift", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EndofshiftGroupBy.prototype, "projects", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EndofshiftGroupBy.prototype, "tickets", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EndofshiftGroupBy.prototype, "whid", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EndofshiftCountAggregate_1.EndofshiftCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EndofshiftCountAggregate_1.EndofshiftCountAggregate)
], EndofshiftGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EndofshiftAvgAggregate_1.EndofshiftAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EndofshiftAvgAggregate_1.EndofshiftAvgAggregate)
], EndofshiftGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EndofshiftSumAggregate_1.EndofshiftSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EndofshiftSumAggregate_1.EndofshiftSumAggregate)
], EndofshiftGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EndofshiftMinAggregate_1.EndofshiftMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EndofshiftMinAggregate_1.EndofshiftMinAggregate)
], EndofshiftGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EndofshiftMaxAggregate_1.EndofshiftMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EndofshiftMaxAggregate_1.EndofshiftMaxAggregate)
], EndofshiftGroupBy.prototype, "_max", void 0);
EndofshiftGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("EndofshiftGroupBy", {
        isAbstract: true
    })
], EndofshiftGroupBy);
exports.EndofshiftGroupBy = EndofshiftGroupBy;
