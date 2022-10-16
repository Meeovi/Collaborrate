"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneAnalyticsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AnalyticsCreateInput_1 = require("../../../inputs/AnalyticsCreateInput");
const AnalyticsUpdateInput_1 = require("../../../inputs/AnalyticsUpdateInput");
const AnalyticsWhereUniqueInput_1 = require("../../../inputs/AnalyticsWhereUniqueInput");
let UpsertOneAnalyticsArgs = class UpsertOneAnalyticsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AnalyticsWhereUniqueInput_1.AnalyticsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AnalyticsWhereUniqueInput_1.AnalyticsWhereUniqueInput)
], UpsertOneAnalyticsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AnalyticsCreateInput_1.AnalyticsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AnalyticsCreateInput_1.AnalyticsCreateInput)
], UpsertOneAnalyticsArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AnalyticsUpdateInput_1.AnalyticsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AnalyticsUpdateInput_1.AnalyticsUpdateInput)
], UpsertOneAnalyticsArgs.prototype, "update", void 0);
UpsertOneAnalyticsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneAnalyticsArgs);
exports.UpsertOneAnalyticsArgs = UpsertOneAnalyticsArgs;
