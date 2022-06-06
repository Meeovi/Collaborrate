"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertReportsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReportsCreateInput_1 = require("../../../inputs/ReportsCreateInput");
const ReportsUpdateInput_1 = require("../../../inputs/ReportsUpdateInput");
const ReportsWhereUniqueInput_1 = require("../../../inputs/ReportsWhereUniqueInput");
let UpsertReportsArgs = class UpsertReportsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReportsWhereUniqueInput_1.ReportsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReportsWhereUniqueInput_1.ReportsWhereUniqueInput)
], UpsertReportsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReportsCreateInput_1.ReportsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReportsCreateInput_1.ReportsCreateInput)
], UpsertReportsArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReportsUpdateInput_1.ReportsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReportsUpdateInput_1.ReportsUpdateInput)
], UpsertReportsArgs.prototype, "update", void 0);
UpsertReportsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertReportsArgs);
exports.UpsertReportsArgs = UpsertReportsArgs;
