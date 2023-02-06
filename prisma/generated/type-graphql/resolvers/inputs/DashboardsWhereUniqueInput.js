"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardsWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let DashboardsWhereUniqueInput = class DashboardsWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], DashboardsWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardsWhereUniqueInput.prototype, "name", void 0);
DashboardsWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DashboardsWhereUniqueInput", {
        isAbstract: true
    })
], DashboardsWhereUniqueInput);
exports.DashboardsWhereUniqueInput = DashboardsWhereUniqueInput;
