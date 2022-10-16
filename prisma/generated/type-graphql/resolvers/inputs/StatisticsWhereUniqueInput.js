"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatisticsWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let StatisticsWhereUniqueInput = class StatisticsWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], StatisticsWhereUniqueInput.prototype, "id", void 0);
StatisticsWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StatisticsWhereUniqueInput", {
        isAbstract: true
    })
], StatisticsWhereUniqueInput);
exports.StatisticsWhereUniqueInput = StatisticsWhereUniqueInput;
