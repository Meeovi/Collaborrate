"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteStatisticsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StatisticsWhereUniqueInput_1 = require("../../../inputs/StatisticsWhereUniqueInput");
let DeleteStatisticsArgs = class DeleteStatisticsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatisticsWhereUniqueInput_1.StatisticsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StatisticsWhereUniqueInput_1.StatisticsWhereUniqueInput)
], DeleteStatisticsArgs.prototype, "where", void 0);
DeleteStatisticsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteStatisticsArgs);
exports.DeleteStatisticsArgs = DeleteStatisticsArgs;
