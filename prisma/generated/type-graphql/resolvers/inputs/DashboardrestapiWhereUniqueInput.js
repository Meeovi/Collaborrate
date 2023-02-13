"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardrestapiWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let DashboardrestapiWhereUniqueInput = class DashboardrestapiWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], DashboardrestapiWhereUniqueInput.prototype, "id", void 0);
DashboardrestapiWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DashboardrestapiWhereUniqueInput", {
        isAbstract: true
    })
], DashboardrestapiWhereUniqueInput);
exports.DashboardrestapiWhereUniqueInput = DashboardrestapiWhereUniqueInput;
