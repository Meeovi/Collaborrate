"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportsWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ReportsWhereUniqueInput = class ReportsWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ReportsWhereUniqueInput.prototype, "id", void 0);
ReportsWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReportsWhereUniqueInput", {
        isAbstract: true
    })
], ReportsWhereUniqueInput);
exports.ReportsWhereUniqueInput = ReportsWhereUniqueInput;
