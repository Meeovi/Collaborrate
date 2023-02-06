"use strict";
var NestedBoolNullableFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedBoolNullableFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let NestedBoolNullableFilter = NestedBoolNullableFilter_1 = class NestedBoolNullableFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], NestedBoolNullableFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedBoolNullableFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedBoolNullableFilter)
], NestedBoolNullableFilter.prototype, "not", void 0);
NestedBoolNullableFilter = NestedBoolNullableFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedBoolNullableFilter", {
        isAbstract: true
    })
], NestedBoolNullableFilter);
exports.NestedBoolNullableFilter = NestedBoolNullableFilter;
