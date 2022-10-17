"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneAnalyticsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AnalyticsUpdateInput_1 = require("../../../inputs/AnalyticsUpdateInput");
const AnalyticsWhereUniqueInput_1 = require("../../../inputs/AnalyticsWhereUniqueInput");
let UpdateOneAnalyticsArgs = class UpdateOneAnalyticsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AnalyticsUpdateInput_1.AnalyticsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AnalyticsUpdateInput_1.AnalyticsUpdateInput)
], UpdateOneAnalyticsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AnalyticsWhereUniqueInput_1.AnalyticsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AnalyticsWhereUniqueInput_1.AnalyticsWhereUniqueInput)
], UpdateOneAnalyticsArgs.prototype, "where", void 0);
UpdateOneAnalyticsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneAnalyticsArgs);
exports.UpdateOneAnalyticsArgs = UpdateOneAnalyticsArgs;
