"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueStatisticsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StatisticsWhereUniqueInput_1 = require("../../../inputs/StatisticsWhereUniqueInput");
let FindUniqueStatisticsArgs = class FindUniqueStatisticsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatisticsWhereUniqueInput_1.StatisticsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StatisticsWhereUniqueInput_1.StatisticsWhereUniqueInput)
], FindUniqueStatisticsArgs.prototype, "where", void 0);
FindUniqueStatisticsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueStatisticsArgs);
exports.FindUniqueStatisticsArgs = FindUniqueStatisticsArgs;
