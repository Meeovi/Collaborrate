"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedJsonNullableFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const client_1 = require("@prisma/client");
let NestedJsonNullableFilter = class NestedJsonNullableFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Object)
], NestedJsonNullableFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Object)
], NestedJsonNullableFilter.prototype, "not", void 0);
NestedJsonNullableFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedJsonNullableFilter", {
        isAbstract: true
    })
], NestedJsonNullableFilter);
exports.NestedJsonNullableFilter = NestedJsonNullableFilter;
