"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoolNullableFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedBoolNullableFilter_1 = require("../inputs/NestedBoolNullableFilter");
let BoolNullableFilter = class BoolNullableFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], BoolNullableFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedBoolNullableFilter_1.NestedBoolNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedBoolNullableFilter_1.NestedBoolNullableFilter)
], BoolNullableFilter.prototype, "not", void 0);
BoolNullableFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("BoolNullableFilter", {
        isAbstract: true
    })
], BoolNullableFilter);
exports.BoolNullableFilter = BoolNullableFilter;
