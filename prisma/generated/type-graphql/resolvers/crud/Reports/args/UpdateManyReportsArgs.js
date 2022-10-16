"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyReportsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReportsUpdateManyMutationInput_1 = require("../../../inputs/ReportsUpdateManyMutationInput");
const ReportsWhereInput_1 = require("../../../inputs/ReportsWhereInput");
let UpdateManyReportsArgs = class UpdateManyReportsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReportsUpdateManyMutationInput_1.ReportsUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReportsUpdateManyMutationInput_1.ReportsUpdateManyMutationInput)
], UpdateManyReportsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReportsWhereInput_1.ReportsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReportsWhereInput_1.ReportsWhereInput)
], UpdateManyReportsArgs.prototype, "where", void 0);
UpdateManyReportsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyReportsArgs);
exports.UpdateManyReportsArgs = UpdateManyReportsArgs;
