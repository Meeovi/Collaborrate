"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateContent_type = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Content_typeAvgAggregate_1 = require("../outputs/Content_typeAvgAggregate");
const Content_typeCountAggregate_1 = require("../outputs/Content_typeCountAggregate");
const Content_typeMaxAggregate_1 = require("../outputs/Content_typeMaxAggregate");
const Content_typeMinAggregate_1 = require("../outputs/Content_typeMinAggregate");
const Content_typeSumAggregate_1 = require("../outputs/Content_typeSumAggregate");
let AggregateContent_type = class AggregateContent_type {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Content_typeCountAggregate_1.Content_typeCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Content_typeCountAggregate_1.Content_typeCountAggregate)
], AggregateContent_type.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Content_typeAvgAggregate_1.Content_typeAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Content_typeAvgAggregate_1.Content_typeAvgAggregate)
], AggregateContent_type.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Content_typeSumAggregate_1.Content_typeSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Content_typeSumAggregate_1.Content_typeSumAggregate)
], AggregateContent_type.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Content_typeMinAggregate_1.Content_typeMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Content_typeMinAggregate_1.Content_typeMinAggregate)
], AggregateContent_type.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Content_typeMaxAggregate_1.Content_typeMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Content_typeMaxAggregate_1.Content_typeMaxAggregate)
], AggregateContent_type.prototype, "_max", void 0);
AggregateContent_type = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateContent_type", {
        isAbstract: true
    })
], AggregateContent_type);
exports.AggregateContent_type = AggregateContent_type;
