"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoolNullableWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedBoolNullableFilter_1 = require("../inputs/NestedBoolNullableFilter");
const NestedBoolNullableWithAggregatesFilter_1 = require("../inputs/NestedBoolNullableWithAggregatesFilter");
const NestedIntNullableFilter_1 = require("../inputs/NestedIntNullableFilter");
let BoolNullableWithAggregatesFilter = class BoolNullableWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], BoolNullableWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedBoolNullableWithAggregatesFilter_1.NestedBoolNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedBoolNullableWithAggregatesFilter_1.NestedBoolNullableWithAggregatesFilter)
], BoolNullableWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntNullableFilter_1.NestedIntNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntNullableFilter_1.NestedIntNullableFilter)
], BoolNullableWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedBoolNullableFilter_1.NestedBoolNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedBoolNullableFilter_1.NestedBoolNullableFilter)
], BoolNullableWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedBoolNullableFilter_1.NestedBoolNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedBoolNullableFilter_1.NestedBoolNullableFilter)
], BoolNullableWithAggregatesFilter.prototype, "_max", void 0);
BoolNullableWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("BoolNullableWithAggregatesFilter", {
        isAbstract: true
    })
], BoolNullableWithAggregatesFilter);
exports.BoolNullableWithAggregatesFilter = BoolNullableWithAggregatesFilter;
