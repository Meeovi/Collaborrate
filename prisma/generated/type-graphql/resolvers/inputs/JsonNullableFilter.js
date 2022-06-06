"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonNullableFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const client_1 = require("@prisma/client");
let JsonNullableFilter = class JsonNullableFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Object)
], JsonNullableFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Object)
], JsonNullableFilter.prototype, "not", void 0);
JsonNullableFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("JsonNullableFilter", {
        isAbstract: true
    })
], JsonNullableFilter);
exports.JsonNullableFilter = JsonNullableFilter;
