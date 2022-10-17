"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneReportsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReportsUpdateInput_1 = require("../../../inputs/ReportsUpdateInput");
const ReportsWhereUniqueInput_1 = require("../../../inputs/ReportsWhereUniqueInput");
let UpdateOneReportsArgs = class UpdateOneReportsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReportsUpdateInput_1.ReportsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReportsUpdateInput_1.ReportsUpdateInput)
], UpdateOneReportsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReportsWhereUniqueInput_1.ReportsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReportsWhereUniqueInput_1.ReportsWhereUniqueInput)
], UpdateOneReportsArgs.prototype, "where", void 0);
UpdateOneReportsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneReportsArgs);
exports.UpdateOneReportsArgs = UpdateOneReportsArgs;
