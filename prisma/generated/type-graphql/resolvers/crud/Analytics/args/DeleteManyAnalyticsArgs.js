"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyAnalyticsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AnalyticsWhereInput_1 = require("../../../inputs/AnalyticsWhereInput");
let DeleteManyAnalyticsArgs = class DeleteManyAnalyticsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AnalyticsWhereInput_1.AnalyticsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AnalyticsWhereInput_1.AnalyticsWhereInput)
], DeleteManyAnalyticsArgs.prototype, "where", void 0);
DeleteManyAnalyticsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyAnalyticsArgs);
exports.DeleteManyAnalyticsArgs = DeleteManyAnalyticsArgs;
