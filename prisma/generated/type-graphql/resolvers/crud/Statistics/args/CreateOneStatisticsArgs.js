"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneStatisticsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StatisticsCreateInput_1 = require("../../../inputs/StatisticsCreateInput");
let CreateOneStatisticsArgs = class CreateOneStatisticsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatisticsCreateInput_1.StatisticsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StatisticsCreateInput_1.StatisticsCreateInput)
], CreateOneStatisticsArgs.prototype, "data", void 0);
CreateOneStatisticsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneStatisticsArgs);
exports.CreateOneStatisticsArgs = CreateOneStatisticsArgs;
