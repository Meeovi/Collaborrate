"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyStatisticsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StatisticsCreateManyInput_1 = require("../../../inputs/StatisticsCreateManyInput");
let CreateManyStatisticsArgs = class CreateManyStatisticsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StatisticsCreateManyInput_1.StatisticsCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyStatisticsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyStatisticsArgs.prototype, "skipDuplicates", void 0);
CreateManyStatisticsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyStatisticsArgs);
exports.CreateManyStatisticsArgs = CreateManyStatisticsArgs;
