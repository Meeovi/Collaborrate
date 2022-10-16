"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyAnalyticsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AnalyticsUpdateManyMutationInput_1 = require("../../../inputs/AnalyticsUpdateManyMutationInput");
const AnalyticsWhereInput_1 = require("../../../inputs/AnalyticsWhereInput");
let UpdateManyAnalyticsArgs = class UpdateManyAnalyticsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AnalyticsUpdateManyMutationInput_1.AnalyticsUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AnalyticsUpdateManyMutationInput_1.AnalyticsUpdateManyMutationInput)
], UpdateManyAnalyticsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AnalyticsWhereInput_1.AnalyticsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AnalyticsWhereInput_1.AnalyticsWhereInput)
], UpdateManyAnalyticsArgs.prototype, "where", void 0);
UpdateManyAnalyticsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyAnalyticsArgs);
exports.UpdateManyAnalyticsArgs = UpdateManyAnalyticsArgs;
