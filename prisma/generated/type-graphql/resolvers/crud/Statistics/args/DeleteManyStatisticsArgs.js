"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyStatisticsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StatisticsWhereInput_1 = require("../../../inputs/StatisticsWhereInput");
let DeleteManyStatisticsArgs = class DeleteManyStatisticsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatisticsWhereInput_1.StatisticsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatisticsWhereInput_1.StatisticsWhereInput)
], DeleteManyStatisticsArgs.prototype, "where", void 0);
DeleteManyStatisticsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyStatisticsArgs);
exports.DeleteManyStatisticsArgs = DeleteManyStatisticsArgs;
