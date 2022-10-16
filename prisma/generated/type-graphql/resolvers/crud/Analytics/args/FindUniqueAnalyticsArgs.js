"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueAnalyticsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AnalyticsWhereUniqueInput_1 = require("../../../inputs/AnalyticsWhereUniqueInput");
let FindUniqueAnalyticsArgs = class FindUniqueAnalyticsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AnalyticsWhereUniqueInput_1.AnalyticsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AnalyticsWhereUniqueInput_1.AnalyticsWhereUniqueInput)
], FindUniqueAnalyticsArgs.prototype, "where", void 0);
FindUniqueAnalyticsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueAnalyticsArgs);
exports.FindUniqueAnalyticsArgs = FindUniqueAnalyticsArgs;
