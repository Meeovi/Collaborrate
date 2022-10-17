"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneStatisticsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StatisticsWhereUniqueInput_1 = require("../../../inputs/StatisticsWhereUniqueInput");
let DeleteOneStatisticsArgs = class DeleteOneStatisticsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatisticsWhereUniqueInput_1.StatisticsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StatisticsWhereUniqueInput_1.StatisticsWhereUniqueInput)
], DeleteOneStatisticsArgs.prototype, "where", void 0);
DeleteOneStatisticsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneStatisticsArgs);
exports.DeleteOneStatisticsArgs = DeleteOneStatisticsArgs;
