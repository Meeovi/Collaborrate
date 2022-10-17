"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneReportsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReportsCreateInput_1 = require("../../../inputs/ReportsCreateInput");
const ReportsUpdateInput_1 = require("../../../inputs/ReportsUpdateInput");
const ReportsWhereUniqueInput_1 = require("../../../inputs/ReportsWhereUniqueInput");
let UpsertOneReportsArgs = class UpsertOneReportsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReportsWhereUniqueInput_1.ReportsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReportsWhereUniqueInput_1.ReportsWhereUniqueInput)
], UpsertOneReportsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReportsCreateInput_1.ReportsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReportsCreateInput_1.ReportsCreateInput)
], UpsertOneReportsArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReportsUpdateInput_1.ReportsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReportsUpdateInput_1.ReportsUpdateInput)
], UpsertOneReportsArgs.prototype, "update", void 0);
UpsertOneReportsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneReportsArgs);
exports.UpsertOneReportsArgs = UpsertOneReportsArgs;
