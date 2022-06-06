"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyReportsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReportsWhereInput_1 = require("../../../inputs/ReportsWhereInput");
let DeleteManyReportsArgs = class DeleteManyReportsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReportsWhereInput_1.ReportsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReportsWhereInput_1.ReportsWhereInput)
], DeleteManyReportsArgs.prototype, "where", void 0);
DeleteManyReportsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyReportsArgs);
exports.DeleteManyReportsArgs = DeleteManyReportsArgs;
