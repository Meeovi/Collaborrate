"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardjsonWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let DashboardjsonWhereUniqueInput = class DashboardjsonWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], DashboardjsonWhereUniqueInput.prototype, "id", void 0);
DashboardjsonWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DashboardjsonWhereUniqueInput", {
        isAbstract: true
    })
], DashboardjsonWhereUniqueInput);
exports.DashboardjsonWhereUniqueInput = DashboardjsonWhereUniqueInput;
