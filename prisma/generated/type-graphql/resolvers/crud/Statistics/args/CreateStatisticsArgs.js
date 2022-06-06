"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateStatisticsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StatisticsCreateInput_1 = require("../../../inputs/StatisticsCreateInput");
let CreateStatisticsArgs = class CreateStatisticsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatisticsCreateInput_1.StatisticsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StatisticsCreateInput_1.StatisticsCreateInput)
], CreateStatisticsArgs.prototype, "data", void 0);
CreateStatisticsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateStatisticsArgs);
exports.CreateStatisticsArgs = CreateStatisticsArgs;
