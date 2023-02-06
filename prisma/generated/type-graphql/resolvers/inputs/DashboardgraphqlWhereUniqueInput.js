"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardgraphqlWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let DashboardgraphqlWhereUniqueInput = class DashboardgraphqlWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], DashboardgraphqlWhereUniqueInput.prototype, "id", void 0);
DashboardgraphqlWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DashboardgraphqlWhereUniqueInput", {
        isAbstract: true
    })
], DashboardgraphqlWhereUniqueInput);
exports.DashboardgraphqlWhereUniqueInput = DashboardgraphqlWhereUniqueInput;
