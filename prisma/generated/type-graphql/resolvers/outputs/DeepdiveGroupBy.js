"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeepdiveGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const DeepdiveAvgAggregate_1 = require("../outputs/DeepdiveAvgAggregate");
const DeepdiveCountAggregate_1 = require("../outputs/DeepdiveCountAggregate");
const DeepdiveMaxAggregate_1 = require("../outputs/DeepdiveMaxAggregate");
const DeepdiveMinAggregate_1 = require("../outputs/DeepdiveMinAggregate");
const DeepdiveSumAggregate_1 = require("../outputs/DeepdiveSumAggregate");
let DeepdiveGroupBy = class DeepdiveGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], DeepdiveGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], DeepdiveGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DeepdiveGroupBy.prototype, "end_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DeepdiveGroupBy.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DeepdiveGroupBy.prototype, "attendees", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DeepdiveGroupBy.prototype, "login", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DeepdiveGroupBy.prototype, "start_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DeepdiveGroupBy.prototype, "whid", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DeepdiveCountAggregate_1.DeepdiveCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DeepdiveCountAggregate_1.DeepdiveCountAggregate)
], DeepdiveGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DeepdiveAvgAggregate_1.DeepdiveAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DeepdiveAvgAggregate_1.DeepdiveAvgAggregate)
], DeepdiveGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DeepdiveSumAggregate_1.DeepdiveSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DeepdiveSumAggregate_1.DeepdiveSumAggregate)
], DeepdiveGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DeepdiveMinAggregate_1.DeepdiveMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DeepdiveMinAggregate_1.DeepdiveMinAggregate)
], DeepdiveGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DeepdiveMaxAggregate_1.DeepdiveMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DeepdiveMaxAggregate_1.DeepdiveMaxAggregate)
], DeepdiveGroupBy.prototype, "_max", void 0);
DeepdiveGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("DeepdiveGroupBy", {
        isAbstract: true
    })
], DeepdiveGroupBy);
exports.DeepdiveGroupBy = DeepdiveGroupBy;
