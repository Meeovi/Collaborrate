"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateReportsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReportsUpdateInput_1 = require("../../../inputs/ReportsUpdateInput");
const ReportsWhereUniqueInput_1 = require("../../../inputs/ReportsWhereUniqueInput");
let UpdateReportsArgs = class UpdateReportsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReportsUpdateInput_1.ReportsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReportsUpdateInput_1.ReportsUpdateInput)
], UpdateReportsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReportsWhereUniqueInput_1.ReportsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReportsWhereUniqueInput_1.ReportsWhereUniqueInput)
], UpdateReportsArgs.prototype, "where", void 0);
UpdateReportsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateReportsArgs);
exports.UpdateReportsArgs = UpdateReportsArgs;
