"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneStatisticsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StatisticsUpdateInput_1 = require("../../../inputs/StatisticsUpdateInput");
const StatisticsWhereUniqueInput_1 = require("../../../inputs/StatisticsWhereUniqueInput");
let UpdateOneStatisticsArgs = class UpdateOneStatisticsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatisticsUpdateInput_1.StatisticsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StatisticsUpdateInput_1.StatisticsUpdateInput)
], UpdateOneStatisticsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatisticsWhereUniqueInput_1.StatisticsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StatisticsWhereUniqueInput_1.StatisticsWhereUniqueInput)
], UpdateOneStatisticsArgs.prototype, "where", void 0);
UpdateOneStatisticsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneStatisticsArgs);
exports.UpdateOneStatisticsArgs = UpdateOneStatisticsArgs;
