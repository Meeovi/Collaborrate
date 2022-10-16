"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyStatisticsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StatisticsUpdateManyMutationInput_1 = require("../../../inputs/StatisticsUpdateManyMutationInput");
const StatisticsWhereInput_1 = require("../../../inputs/StatisticsWhereInput");
let UpdateManyStatisticsArgs = class UpdateManyStatisticsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatisticsUpdateManyMutationInput_1.StatisticsUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StatisticsUpdateManyMutationInput_1.StatisticsUpdateManyMutationInput)
], UpdateManyStatisticsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatisticsWhereInput_1.StatisticsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatisticsWhereInput_1.StatisticsWhereInput)
], UpdateManyStatisticsArgs.prototype, "where", void 0);
UpdateManyStatisticsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyStatisticsArgs);
exports.UpdateManyStatisticsArgs = UpdateManyStatisticsArgs;
