"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneStatisticsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StatisticsCreateInput_1 = require("../../../inputs/StatisticsCreateInput");
const StatisticsUpdateInput_1 = require("../../../inputs/StatisticsUpdateInput");
const StatisticsWhereUniqueInput_1 = require("../../../inputs/StatisticsWhereUniqueInput");
let UpsertOneStatisticsArgs = class UpsertOneStatisticsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatisticsWhereUniqueInput_1.StatisticsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StatisticsWhereUniqueInput_1.StatisticsWhereUniqueInput)
], UpsertOneStatisticsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatisticsCreateInput_1.StatisticsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StatisticsCreateInput_1.StatisticsCreateInput)
], UpsertOneStatisticsArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatisticsUpdateInput_1.StatisticsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StatisticsUpdateInput_1.StatisticsUpdateInput)
], UpsertOneStatisticsArgs.prototype, "update", void 0);
UpsertOneStatisticsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneStatisticsArgs);
exports.UpsertOneStatisticsArgs = UpsertOneStatisticsArgs;
